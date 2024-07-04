type Award = {
    year: number,
    title: string
    organization: string
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
    projectButton: {
        link: string,
        caption: string
    }
    accentColor: string,
    pageSections: {
        screenshots: string[],
        history: {
            year: string,
            events: string[]
        }[],
        awards: Award[],
        technologiesUsed: {
            icon: string,
            technology: string
        }[],
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

type Education = {
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