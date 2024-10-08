type AwardEntry = {
    year: number,
    title: string,
    organization: string
}

type PatentEntry = {
    id: string,
    year: number,
    link: string,
    title: string,
    abstract: string
}

type TechnologyEntry = {
    icon: string,
    technology: string
}

type HistoryEntry = {
    year: string,
    events: string[]
}

type Project = {
    title: string,
    description: string,
    pageLink: string,
    highlights: {
        icon: string,
        caption: string
    }[],
    projectLogo: string,
    projectButtons: {
        link: string,
        caption: string,
        disabled: boolean
    }[]
    accentColor: string,
    pageSections: {
        screenshots: string[],
        history: HistoryEntry[],
        awards: AwardEntry[],
        technologiesUsed: TechnologyEntry[],
    }
};

type WorkExperience = {
    title: string,
    logo: string,
    organization: string,
    startingDate: string,
    endingDate: string,
    description: string
}

type EducationEntry = {
    startingDate: string,
    endingDate: string,
    achievements: string[]
}

type OnLoadData = {
    menuItems: MenuItem[], 
    accentColor?: string,
    hasError: boolean
}

type MenuItem = {
    label: string,
    link: string
}