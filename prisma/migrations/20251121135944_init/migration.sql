-- CreateTable
CREATE TABLE "Analysis" (
    "id" TEXT NOT NULL,
    "targetRole" TEXT NOT NULL,
    "currentSkills" TEXT[],
    "matchedSkills" TEXT[],
    "missingSkills" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);
