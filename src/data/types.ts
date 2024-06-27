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
    pageDetails: {
        projectLogo: string,
        projectLink: string,
        accentColor: string,
        screenshots: string[],
        technologiesUsed: {
            icon: string,
            technology: string
        }[],
        history: {
            year: string,
            events: string[]
        }[],
        awards: Award[]
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