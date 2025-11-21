import { ROADMAPS } from "@/lib/constants";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { targetRole } = await request.json();

    const roadmap = ROADMAPS[targetRole] || [];

    return NextResponse.json({ roadmap });
}