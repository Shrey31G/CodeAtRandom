export interface SkillGapRequest {
    targetRole: string;
    currentSkills: string[];
}

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

export interface RoadmapRequest {
    targetRole: string;
}

export interface RoadmapResponse {
    roadmap: RoadmapPhase[];
}
export interface HackerNewsStory {
    id: number;
    title: string;
    url?: string;
    score: number;
    time: number;
    type: string;
    by: string;
    descendants?: number;
    kids?: number[];
    text?: string;
}

export interface CareerAnalysisFormData {
    targetRole: string;
    currentSkills: string[];
}

export interface ApiErrorResponse {
    error: string;
    message?: string;
}