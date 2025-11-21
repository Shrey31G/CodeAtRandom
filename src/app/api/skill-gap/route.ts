// src/app/api/skill-gap/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { ROLE_SKILLS } from '@/lib/constants';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { targetRole, currentSkills } = await request.json();

        if (!ROLE_SKILLS[targetRole]) {
            return NextResponse.json(
                { error: 'Invalid role' },
                { status: 400 }
            );
        }

        const requiredSkills = ROLE_SKILLS[targetRole];
        const userSkills = currentSkills.map((s: string) => s.trim());

        const matchedSkills = userSkills.filter((s: string) =>
            requiredSkills.includes(s)
        );

        const missingSkills = requiredSkills.filter((req: string) =>
            !userSkills.includes(req)
        );

        try {
            await prisma.analysis.create({
                data: {
                    targetRole,
                    currentSkills: userSkills,
                    matchedSkills,
                    missingSkills
                }
            });
        } catch (error) {
            console.log(error)
            return NextResponse.json({
                error: "Db error",
                status: 400
            })
        }

        return NextResponse.json({
            matchedSkills,
            missingSkills,
            recommendations: `Focus on: ${missingSkills.join(', ')}`,
            suggestedLearningOrder: missingSkills
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        );
    }
}