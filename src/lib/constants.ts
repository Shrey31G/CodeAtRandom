
export const ROLE_SKILLS: Record<string, string[]> = {
    "Frontend Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "TypeScript",
        "Responsive Design"
    ],
    "Backend Developer": [
        "Java",
        "Spring Boot",
        "SQL",
        "APIs",
        "Git",
        "System Design Basics"
    ],
    "Data Analyst": [
        "Excel",
        "SQL",
        "Python",
        "Dashboards",
        "Statistics",
        "Data Cleaning",
        "Visualization"
    ]
};


export const ROADMAPS: Record<
    string,
    { phase: string; topics: string[] }[]
> = {
    "Frontend Developer": [
        {
            phase: "Phase 1 (1–2 months): Fundamentals",
            topics: ["HTML", "CSS", "JavaScript basics", "Git basics"]
        },
        {
            phase: "Phase 2 (2 months): Frameworks & Projects",
            topics: [
                "React fundamentals",
                "Hooks",
                "State management",
                "APIs & Fetch",
                "Responsive Design",
                "Building 2 mini-projects"
            ]
        },
        {
            phase: "Phase 3 (1–2 months): Advanced Skills",
            topics: [
                "TypeScript",
                "Next.js basics",
                "Performance optimization",
                "Deployment (Vercel)",
                "Portfolio project"
            ]
        }
    ],

    "Backend Developer": [
        {
            phase: "Phase 1 (1–2 months): Core Foundation",
            topics: ["Java basics", "OOP", "Git", "Data structures basics"]
        },
        {
            phase: "Phase 2 (2 months): Backend & Databases",
            topics: [
                "Spring Boot",
                "SQL",
                "REST APIs",
                "Authentication basics",
                "Testing basics"
            ]
        },
        {
            phase: "Phase 3 (1–2 months): Production Skills",
            topics: [
                "Deployment",
                "Docker basics",
                "System design basics",
                "Building 1 full backend project"
            ]
        }
    ],

    "Data Analyst": [
        {
            phase: "Phase 1 (1–2 months): Essentials",
            topics: [
                "Excel",
                "Python basics",
                "Data Cleaning",
                "Basic SQL queries"
            ]
        },
        {
            phase: "Phase 2 (2 months): Analysis & Visualization",
            topics: [
                "Intermediate SQL",
                "Pandas/Numpy",
                "Matplotlib/Seaborn",
                "Dashboard tools (Tableau/PowerBI)"
            ]
        },
        {
            phase: "Phase 3 (1–2 months): Real-World Skills",
            topics: [
                "Statistics",
                "Hypothesis testing",
                "Business analytics",
                "Case studies",
                "Portfolio projects"
            ]
        }
    ]
};
