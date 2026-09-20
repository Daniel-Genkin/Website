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

type PublicationEntry = {
    year: number,
    location: string,
    link: string,
    title: string,
    abstract: string,
    type: 'article' | 'paper'
}

type HistoryEntry = {
    year: string,
    events: string[]
}

type Project = {
    title: string,
    spotlightTitle?: string,
    description: string,
    features?: string,
    pageLink: string,
    highlights: {
        caption: string,
        shortCaption?: string
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
        technologiesUsed: string[],
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

type SiteSection = {
    id: string,
    title: string,
    icon: string
}

type RichTextPart = {
    text: string,
    href?: string
}

type RichTextBlock = {
    type: 'paragraph' | 'list',
    parts?: RichTextPart[],
    items?: string[]
}

type AchievementDisplay = {
    year: number,
    title: string,
    source: string,
    link?: string,
    icon: string
}

type ProjectDetailsContent = {
    label: string,
    close: string,
    closeSymbol: string,
    technology: string,
    platform: string,
    status: string,
    features: string,
    inProduction: string,
    inDevelopment: string,
    fallbackPlatform: string,
    fallbackStatus: string,
    screenshotLabel: string,
    previousScreenshot: string,
    nextScreenshot: string,
    galleryArrow: string,
    technologiesUsed: string,
    history: string,
    awards: string,
    notFound: string,
    returnHome: string
}