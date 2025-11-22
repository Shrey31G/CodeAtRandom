export const ROLE_SKILLS: Record<string, string[]> = {
    "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
    "Backend Developer": ["Java", "Spring Boot", "SQL", "APIs", "Git"],
    "Data Analyst": ["Excel", "SQL", "Python", "Dashboards", "Statistics"]
};

export interface RoadmapPhase {
    phase: string;
    topics: string[];
}

export const ROADMAPS: Record<string, RoadmapPhase[]> = {
    "Frontend Developer": [
        {
            phase: "Phase 1 (1-2 months)",
            topics: [
                "HTML fundamentals and semantic markup",
                "CSS basics, Flexbox, and Grid",
                "JavaScript fundamentals (ES6+)",
                "Git and version control basics"
            ]
        },
        {
            phase: "Phase 2 (2 months)",
            topics: [
                "React fundamentals and component lifecycle",
                "State management with hooks",
                "Responsive design and mobile-first approach",
                "API integration with fetch/axios"
            ]
        },
        {
            phase: "Phase 3 (1-2 months)",
            topics: [
                "Advanced React patterns and performance optimization",
                "Testing with Jest and React Testing Library",
                "Build and deploy projects to production",
                "Portfolio development and best practices"
            ]
        }
    ],
    "Backend Developer": [
        {
            phase: "Phase 1 (1-2 months)",
            topics: [
                "Java basics and object-oriented programming",
                "Core Java concepts (collections, exceptions, I/O)",
                "Git version control and collaboration",
                "Basic SQL and database concepts"
            ]
        },
        {
            phase: "Phase 2 (2 months)",
            topics: [
                "Spring Boot framework fundamentals",
                "RESTful API design and implementation",
                "Database design and advanced SQL queries",
                "Authentication and authorization basics"
            ]
        },
        {
            phase: "Phase 3 (1-2 months)",
            topics: [
                "Microservices architecture patterns",
                "Cloud deployment (AWS/Azure/GCP basics)",
                "System design fundamentals",
                "Build and deploy production-grade projects"
            ]
        }
    ],
    "Data Analyst": [
        {
            phase: "Phase 1 (1-2 months)",
            topics: [
                "Excel mastery (pivot tables, VLOOKUP, formulas)",
                "SQL fundamentals and query writing",
                "Basic statistics concepts",
                "Data cleaning and preparation techniques"
            ]
        },
        {
            phase: "Phase 2 (2 months)",
            topics: [
                "Python for data analysis (Pandas, NumPy)",
                "Data visualization with Matplotlib/Seaborn",
                "Advanced SQL (joins, subqueries, window functions)",
                "Dashboard creation with Tableau/Power BI"
            ]
        },
        {
            phase: "Phase 3 (1-2 months)",
            topics: [
                "Statistical analysis and hypothesis testing",
                "Predictive modeling basics",
                "Business intelligence and reporting",
                "Real-world projects and case studies"
            ]
        }
    ]
};

export const getAvailableRoles = (): string[] => {
    return Object.keys(ROLE_SKILLS);
};

export const isValidRole = (role: string): boolean => {
    return role in ROLE_SKILLS;
};