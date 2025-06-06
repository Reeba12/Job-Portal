export interface Job {
    id: number;
    title: string;
    company: string;
    logo?: string;
    location: string;
    salaryMin?: number;
    salaryMax?: number;
    applicants?: number;
    bookmarked?: boolean;
    time?: string;
    promoted?: boolean;
}

export interface JobSectionProps {
    title: string;
    jobs: Job[];
    viewAllLink: string;
}
export interface JobCardProps {
    job: Job;
    onApply: (jobId: string) => void;
    onBookmark: (jobId: string) => void;
}

export interface UserProfileProps {
    user: {
        name: string;
        title: string;
        company: string;
        location: string;
        profileViews: number;
        resumeViews: number;
        applications: number;
        profileImage: string;
    };
}
