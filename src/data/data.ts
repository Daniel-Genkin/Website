import portraitUrl from '@/assets/me.png';
import { PROJECT_DETAILS_CONTENT } from './projectDetails';

export var ALL_PROJECTS: Project[] = [
    {
        title: "GreenAR",
        spotlightTitle: "GreenAR",
        description: "An Augmented Reality platform for Android, iOS and Web built with Java, XML, Swift, C#, Objective C, VueJS (JavaScript), OpenCV, Unity3D. The platform consists of a frontend, which use AR to superimpose videos, images, websites, and other digital media on top of physical print media, and a backend which allowed content owners to setup the AR experiences. I pitched this to educators and businesses as a means for adding interactivity and boosting engagement with educational and promotional materials. For example, bring equations or other mathematical problems to life with a live and interactive graphical representation to help students understand math. In the context of business, an example would be adding actionable buttons (such as buy now) to business cards or adding 3d models to magazines so potential customers can better visualize products.",
        pageLink: "/greenar",
        highlights: [
            {
                caption: "Connect Conference award winner"
            },
            {
                caption: "All-in-one augmented reality platform"
            },
            {
                caption: "Open Source (eventually when the MVP is ready)",
                shortCaption: "Open Source"
            }
        ],
        projectLogo: "projects/greenar/logo.png",
        projectButtons: [
            {
                link: "TODO",
                caption: "View on Github (coming soon)",
                disabled: true
            }
        ],
        accentColor: "var(--color-project-greenar)",
        pageSections: {
            screenshots: [
                "projects/greenar/promo.mp4",
                "projects/greenar/0.png",
                "projects/greenar/1.png",
                "projects/greenar/2.png",
                "projects/greenar/3.png",
                "projects/greenar/4.png",
                "projects/greenar/5.png"
            ],
            history: [
                {
                    year: "2015",
                    events: [
                        "Project founded. It was initially developed for the Unity3D Engine and used the Vuforia Augmented reality framework. The first prototype was completed in 1 month and only supported showing videos on locally stored target images."
                    ]
                },
                {
                    year: "2016",
                    events: [
                        "Switched to using the EasyAR augmented reality framework and developing the app natively for Android for maximum control and to minimize app download size. The Android app was built using Java. EasyAR has several benefits including adding support for displaying images and 3D models on-top of the tracked targets."
                    ]
                },
                {
                    year: "2017",
                    events: [
                        "Launched the native iOS app also using EasyAR augmented reality framework. The app was built independently from Android using Swift. "
                    ]
                },
                {
                    year: "2018",
                    events: [
                        "Launched the in-app content management platform that allowed content owners to dynamically manage their targets and displayed content in real-time without my interaction.",
                        "Most Promising Startup award at the CONNECT educational technology conference."
                    ]
                },
                {
                    year: "2019",
                    events: [
                        "Started developing my own Augmented Reality framework to avoid the limitations of EasyAR. Namely, to gain the ability to convert the mobile app-based platform to a progressive web app as user feedback indicated that users did not want to download an app.",
                        "Most Promising Startup award and People's Choice Award at the CONNECT educational technology conference"
                    ]
                },
                {
                    year: "2021",
                    events: [
                        "Sold the LifeAR brand to TeamViewer and re-branded the app as GreenAR."
                    ]
                },
                {
                    year: "Present",
                    events: [
                        "Working on implementing the custom augmented reality framework which will be released as open source when completed. This custom framework will use OpenCV to recognize targets and and ThreeJS to display content."
                    ]
                }
            ],
            awards: [
                {
                    year: 2019,
                    title: "Most Promising Start-up Award",
                    organization: "CONNECT Educational Technology Conference"
                },
                {
                    year: 2018,
                    title: "People's Choice Award",
                    organization: "CONNECT Educational Technology Conference"
                },
                {
                    year: 2018,
                    title: "Most Promising Start-up Award",
                    organization: "CONNECT Educational Technology Conference"
                }
            ],
            technologiesUsed: ["OpenCV", "Three.js", "Java", "NodeJS & NPM", "TypeScript & JavaScript", "Unity3D", "Git", "Azure", "AWS", "Swift", "VS Code", "Android Studio", "XCode", "VueJS", "Stripe"],
        }
    },
    {
        title: "Project Gameplan",
        spotlightTitle: "Project Gameplan",
        description: "A project management platform that uses gamification techniques to boost employee motivation for task completion. Built using frontend (primarily VueJS) and backend Web (primarily Azure) technologies.",
        pageLink: "/project-gameplan",
        highlights: [
            {
                caption: "Patented US-20240296410-A1"
            },
            {
                caption: "Gamification of ticketing systems"
            }
        ],
        projectLogo: "projects/project-gameplan/logo.png",
        projectButtons: [
            {
                link: "TODO",
                caption: "View on Github (after patent granted)",
                disabled: true
            },
            {
                link: "TODO",
                caption: "Online Demo (after patent granted)",
                disabled: true
            }
        ],
        accentColor: "var(--color-project-gameplan)",
        pageSections: {
            screenshots: [
            ],
            history: [],
            awards: [],
            technologiesUsed: ["TypeScript & JavaScript", "Git", "Azure", "VS Code", "VueJS"],
        }
    },
    {
        title: "Slappy Sandwich",
        spotlightTitle: "Slappy Sandwich",
        description: "Start tapping, slapping and having fun! Slap your way to collect all the doohickeys and various slappers. How far can you get? Download and find out, then challenge your friends!",
        features: "Rookie and Pro modes; cool doohickeys and slappers to collect; simple rules and controls; realistic physics; minimalistic presentation; fun sound effects; score sharing; fun for all ages.",
        pageLink: "/slappy-sandwich",
        highlights: [
            {
                caption: "Multi-platform"
            },
            {
                caption: "Built in Unity3D with C#"
            },
            {
                caption: "Open Source (eventually)",
                shortCaption: "Open Source"
            }
        ],
        projectLogo: "projects/slappy-sandwich/logo.png",
        projectButtons: [
            {
                link: "https://play.google.com/store/apps/details?id=apps.daniel.com.slappysandwich",
                caption: "View on Google Play",
                disabled: false
            },
            {
                link: "TODO",
                caption: "Github (eventually)",
                disabled: true
            }
        ],
        accentColor: "var(--color-project-slappy)",
        pageSections: {
            screenshots: [
                "projects/slappy-sandwich/0.jpg",
                "projects/slappy-sandwich/1.jpg",
                "projects/slappy-sandwich/2.jpg",
            ],
            history: [],
            awards: [],
            technologiesUsed: ["Unity3D", "C#", "Git", "Visual Studio"],
        }
    },
    {
        title: "3D Spaceship Simulator",
        spotlightTitle: "Spaceship Simulator",
        description: "A 3D procedurally generated space environment that the player flies through with their spaceship to reach destination planets to complete quests. This game was built without a game engine using pure C++ and OpenGL. I worked in a team of three as the lead developer.",
        pageLink: "/spaceship-simulator",
        highlights: [
            {
                caption: "Built in C++ and OpenGL"
            },
            {
                caption: "Open Source"
            }
        ],
        projectLogo: "projects/spaceship-sim/0.png",
        projectButtons: [
            {
                link: "https://github.com/Daniel-Genkin/Spaceship-Simulator",
                caption: "View on Github",
                disabled: false
            }
        ],
        accentColor: "var(--color-project-spaceship)",
        pageSections: {
            screenshots: [
                "projects/spaceship-sim/0.png",
                "projects/spaceship-sim/1.png",
                "projects/spaceship-sim/2.png",
            ],
            history: [],
            awards: [],
            technologiesUsed: ["OpenGL", "C++", "Git", "VS Code"]
        }
    }
];

// TODO PULL FROM LINKEDIN
export var WORK_EXPERIENCE: WorkExperience[] = [
    {
        title: "Software Engineer",
        logo: "company-logos/microsoft.png",
        organization: "Microsoft Corp.",
        startingDate: "November 2024",
        endingDate: "Ongoing",
        description: "Full-time position working on the OpenAI Billing team. On this team I am the primary developer/owner of the billing pipeline service health monitoring and alerting. I also created a system that uses AI to summarize service incidents and create reports and guides for on-call engineers to prevent and resolve such incidents in the future. <a href=\"https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/the-future-of-ai-autonomous-agents-for-identifying-the-root-cause-of-cloud-servi/4412494\">Project blog</a>."
    },
    {
        title: "Software Engineer",
        logo: "company-logos/microsoft.png",
        organization: "Microsoft Corp.",
        startingDate: "September 2023",
        endingDate: "November 2024",
        description: "Full-time position working on the Azure Core Files team using C/C++, XML, JSON. My team is responsible for geo-redundancy and replication for business recovery and data restoration. My work affects all layers of the tech stack, ranging from the SMB, NFS, and REST APIs down to the data storage layer."
    },
    {
        title: "Software Engineer Intern",
        logo: "company-logos/amazon.png",
        organization: "Amazon Inc.",
        startingDate: "September 2022",
        endingDate: "December 2022",
        description: "12-week internship. My project improved advertisement second-price auction latency on the Amazon.com Ads team by > 25% and resulted in estimated savings of ~14 million dollars per year in compute resources. This team primarily used Java."
    },
    {
        title: "2x Software Engineer Intern",
        logo: "company-logos/microsoft.png",
        organization: "Microsoft Corp.",
        startingDate: "May 2021 & 2022",
        endingDate:"August 2021 & 2022",
        description: "Two 12-week internships. The first was working on adding NodeJS support to the C# Mono WebAssembly project (WASM). The second was adding WebTransport support to the ASP.NET Kestrel webserver. Both projects are open source and were motivated by community requests. These internships used a combination of C#, TypeScript (TS), XML, and other languages. <a href=\"https://devblogs.microsoft.com/dotnet/experimental-webtransport-over-http-3-support-in-kestrel/\">Project blog</a>."
    },
    {
        title: "Software Engineer Intern",
        logo: "company-logos/teamviewer.png",
        organization: "TeamViewer Ambgh.",
        startingDate: "August 2021",
        endingDate: "February 2022",
        description: "Part-time internship following a sale of the LifeAR brand. I worked on integrating the ASSIMP open-source library in the lifeAR and assistAR products to enable greater 3D model rendering support. This project acted as a bridge between the ASSIMP C++ source code and the assistAR Kotlin source code. I implemented all the components necessary to load and display the models and ultimately greatly improved both the fidelity and performance of the models that assistAR was able to load and display."
    },
    {
        title: "Explore Intern",
        logo: "company-logos/microsoft.png",
        organization: "Microsoft Corp.",
        startingDate: "May 2020",
        endingDate: "August 2020",
        description: "12-week internship. Working on researching and implementing a new UI for Visual Studio. This internship involved project management (PM), software development (SWE) and testing. The software development was implemented in the C#, C++, XML languages."
    },
    {
        title: "Research Assistant/Developer",
        logo: "company-logos/fyelabs.png",
        organization: "Fyelabs",
        startingDate: "March 2020",
        endingDate: "August 2022",
        description: "Completed several frontend and backend projects using several languages, frameworks, and tools including Python, C++, JavaScript, TypeScript, HTML, CSS, SCSS, VueJS, React, React Native, and Docker."
    },
    {
        title: "Founder, Developer, and Designer",
        logo: "company-logos/dgapps.png",
        organization: "DGApps",
        startingDate: "September 2015",
        endingDate: "September 2023",
        description: "My personal projects are grouped under this brand. Throughout high school (2015 - 2019), I worked as a freelancer for implementing various web and mobile applications. Throughout university (2019 - 2023), I worked on the GreenAR and Project GamePlan projects."
    },
];

export var EDUCATION: EducationEntry[] = [
    {
        startingDate: "2015",
        endingDate: "2019",
        achievements: [
            "Sir Winston Churchill Secondary School",
            "Brock University Undergraduate AP Courses"
        ]
    },
    {
        startingDate: "2019",
        endingDate: "2023",
        achievements: [
            "McMaster University Bachelors of Applied Science an Computer Science CO-OP Honours program",
            "McMaster University Business minor"
        ]
    },
    {
        startingDate: "2026",
        endingDate: "Ongoing",
        achievements: [
            "University of Washington Masters of Computer Science and Engineering (PMP)"
        ]
    }
]

export var AWARDS: AwardEntry[] = [
    {
        year: 2023,
        title: "Graduation with Honours and Distinction",
        organization: "McMaster University"
    },
    {
        year: 2019,
        title: "McMaster Big Ideas Entrance Scholarship",
        organization: "McMaster University"
    },
    {
        year: 2019,
        title: "Gene Luczkiw Spirit of Enterprise Scholarship",
        organization: "Niagara Entrepreneur of the Year Awards"
    }
];

export var PATENTS: PatentEntry[] = [
    {
        id: "US 20240296410 A1",
        link: "https://ppubs.uspto.gov/pubwebapp/external.html?q=(US-20240296410-A1).did.&db=US-PGPUB",
        title: "Boosting User Productivity Of Productivity Platforms By Leveraging Gamification",
        year: 2023,
        abstract: "This patent describes a productivity software solution that boosts user engagement and motivation by associating the value of tasks/jobs assigned to users with rewards. Users of the solution can complete tasks to earn points, then redeem the points for physical (e.g., merchandise) or virtual rewards. Virtual rewards can be used to customize components of user profiles (e.g., mascots or profile images) to allow the user to personalize their experience. Simultaneously, the productivity software solution keeps track of the completed tasks and assigns users a level/rank which they can use to compete against other users on leaderboards. Overall, this results in a gamified experience for the software users that provides instant rewards and boosts motivation for task completion, increases engagement of users with their tasks/jobs and yields a more enjoyable and productive experience."
    }
]

export var PUBLICATIONS: PublicationEntry[] = [
    {
        link: "https://dl.acm.org/doi/10.1145/3803437.3805239",
        location: "Association for Computing Machinery (ACM)",
        title: "TSGen: Automated Troubleshooting Guide Generation",
        year: 2026,
        type: "paper",
        abstract: "Maintaining up-to-date troubleshooting guides (TSGs) is critical for the reliability of cloud systems, yet manual maintenance often leads to inefficiencies and outdated documentation. This paper proposes TSGen, an automated pipeline for generating high-quality, structured TSGs from historical incident reports using large language models (LLMs). Our approach consists of three stages: (1) filtering and classifying incident data into diagnostically relevant categories, (2) distilling core incidents to ensure diversity and generalizability, and (3) organizing the distilled knowledge into a directed acyclic graph (DAG) that captures root causes and resolutions in a structured manner. By leveraging real-world incident discussions, TSGen produces dynamic and reusable guides tailored for live troubleshooting. Experiments on real-world incidents from Microsoft demonstrate that TSGen achieves 54.8% incident coverage and approximately 3× higher retrieval accuracy compared to baselines. Furthermore, the system supports iterative updates, allowing guides to evolve alongside dynamic cloud environments. Human evaluation shows that on-call engineers rate these generated TSGs significantly higher than human-crafted ones."
    },
    {
        link: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-tsgen-automated-tsg-generation--scale-%E2%80%93-built-by-ai/4508191",
        location: "Microsoft Foundry Blog",
        title: "Introducing TSGen: Automated TSG Generation @ Scale – Built by AI",
        year: 2026,
        type: "article",
        abstract: "Transforming Cloud Incident Management Through Intelligent Automation"
    },
    {
        link: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/the-future-of-ai-autonomous-agents-for-identifying-the-root-cause-of-cloud-servi/4412494",
        location: "Microsoft Foundry Blog",
        title: "The Future of AI: Autonomous Agents for Identifying the Root Cause of Cloud Service Incidents",
        year: 2025,
        type: "article",
        abstract: "The Future of AI blog series is an evolving collection of posts from the AI Futures team in collaboration with subject matter experts across Microsoft. In this series, we explore tools and technologies that will drive the next generation of AI. Explore more at: https://aka.ms/the-future-of-ai "
    },
    {
        link: "https://devblogs.microsoft.com/dotnet/experimental-webtransport-over-http-3-support-in-kestrel/",
        location: "Microsoft Dev Blogs",
        title: "Experimental WebTransport over HTTP/3 support in Kestrel",
        year: 2022,
        type: "article",
        abstract: "Chris R. writes about my internship project to implement WebTransport over HTTP/3 in .NET 7 under his mentorship"
    },
]

export const SITE_CONTENT = {
    name: {
        first: "Daniel",
        last: "Genkin",
        full: "Daniel Genkin"
    },
    hero: {
        portrait: portraitUrl,
        portraitAlt: "Daniel Genkin",
        introduction: "I am passionate about Software Development & Computer Design. My passion started at a young age when my father introduced me to coding. Since that moment, I have founded and participated in several startups, worked in a range of companies from medium sized to some of the largest tech companies, met some extremely talented and interesting people, and helped to develop, improve, and maintain important and influential software products. I am always open to learning new things and having new experiences."
    },
    socialLinks: [
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/daniel-genkin-dgapps/",
            icon: "/figma/linkedin.svg"
        },
        {
            label: "GitHub",
            href: "https://github.com/Daniel-Genkin",
            icon: "/figma/github.svg"
        }
    ],
    controls: {
        loadMore: "Show more",
        showLess: "Show less",
        loadMoreIcon: "/figma/plus.svg?v=1",
        showLessIcon: "/figma/minus.svg?v=1",
        scrollToTop: "Back to top",
        scrollToTopSymbol: "↑",
        projectArrow: "↗",
        projectActionArrow: "→",
        logoSuffix: "logo",
        previewSuffix: "preview"
    },
    projectDetails: PROJECT_DETAILS_CONTENT
} as const;

export const HOME_SECTIONS: Record<string, SiteSection> = {
    projects: { id: "projects", title: "Project Spotlight", icon: "/figma/section-projects.png" },
    work: { id: "workExperience", title: "Work Experience", icon: "/figma/section-work.png" },
    achievements: { id: "achievements", title: "Achievements and Publications", icon: "/figma/section-achievements.png" },
    education: { id: "education", title: "Education", icon: "/figma/section-education.png" },
    entrepreneurship: { id: "entrepreneurship", title: "Entrepreneurship", icon: "/figma/section-entrepreneurship.png" }
};

export const PROJECT_ORDER = ["Slappy Sandwich", "GreenAR", "Project Gameplan", "3D Spaceship Simulator"];

export const ACHIEVEMENTS: AchievementDisplay[] = [
    ...PATENTS.map((item) => ({
        year: item.year,
        title: item.title,
        source: `US Patent ${item.id}`,
        link: item.link,
        icon: "/figma/patent.svg"
    })),
    ...PUBLICATIONS.map((item) => ({
        year: item.year,
        title: item.title,
        source: item.location,
        link: item.link,
        icon: item.type === "paper" ? "/figma/patent.svg" : "/figma/article.svg"
    })),
    ...AWARDS.map((item) => ({
        year: item.year,
        title: item.title,
        source: item.organization,
        icon: "/figma/award.svg"
    }))
].sort((first, second) => second.year - first.year);

export const ENTREPRENEURSHIP_CONTENT: RichTextBlock[] = [
    {
        type: "paragraph",
        parts: [{ text: "Between 2015 and 2023, I founded and participated in several start-up ventures centered around using technology to solve every-day problems. The most notable of these ventures, DGApps, was founded in 2015 as a portfolio to publish all my projects. Some of these projects included:" }]
    },
    {
        type: "list",
        items: [
            "LifeAR (rebranded as GreenAR) - A universal augmented reality mobile application that allows for embedding digital content on physical real-world objects to improve engagement and communication effectiveness. For example, using LifeAR, content owners would be able to link a standard small business card to display a video when the app is used to scan the card. The platform included a mobile viewer and a content-management backend that allowed paying users to update content in real time.",
            "HandTrack - A mobile application that used built-in accelerometer sensors or a virtual joystick to move the mouse pointer on one or more connected computers over Wi-Fi or Bluetooth, enabling a more natural three-dimensional input method.",
            "Several utility applications and games, including theft detection, in-pocket detection, and Slappy Sandwich."
        ]
    },
    {
        type: "paragraph",
        parts: [
            { text: "Most of the projects are no longer maintained due to time constraints. More information is available on the archived " },
            { text: "DGApps website", href: "https://daniel-genkin.github.io/" },
            { text: " (formerly dgapps.ca)." }
        ]
    },
    {
        type: "paragraph",
        parts: [
            { text: "DGApps also provided freelance services and built the " },
            { text: "Science Education and Local Communities website", href: "https://selc.ed.brocku.ca/" },
            { text: " and a " },
            { text: "personal website for Dolana Mogadime", href: "https://secure3.ed.brocku.ca/dolanamogadime/" },
            { text: "." }
        ]
    },
    {
        type: "paragraph",
        parts: [{ text: "Aside from DGApps, I participated in several business incubator programs and joined or assisted startups in augmented and virtual reality, social media and matchmaking, fitness, and education. Most are no longer operating, but each provided valuable opportunities to learn, grow, and develop my skills." }]
    }
];