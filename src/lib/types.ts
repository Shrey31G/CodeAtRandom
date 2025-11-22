
export interface SkillGapResponse {
    matchedSkills: string[];
    missingSkills: string[];
    recommendations: string;
    suggestedLearningOrder: string[];
}

export interface RoadmapPhase {
    phase: string;
    topics: string[];
}

export interface HackerNewsStory {
    title: string;
    url: string;
    score: number;
    time: number;
    type: string;
    by: string;
}