export var ALL_PROJECTS: Project[] = [
    {
        title: "GreenAR",
        description: "An Augmented Reality platform for Android, iOS and Web built with Java, XML, Swift, C#, Objective C, VueJS (JavaScript), OpenCV, Unity3D. The platform consists of a frontend, which use AR to superimpose videos, images, websites, and other digital media on top of physical print media, and a backend which allowed content owners to setup the AR experiences. I pitched this to educators and businesses as a means for adding interactivity and boosting engagement with educational and promotional materials. For example, bring equations or other mathematical problems to life with a live and interactive graphical representation to help students understand math. In the context of business, an example would be adding actionable buttons (such as buy now) to business cards or adding 3d models to magazines so potential customers can better visualize products.",
        pageLink: "/greenar",
        highlights: [
            {
                icon: "award",
                caption: "Connect Conference award winner"
            },
            {
                icon: "3d",
                caption: "All-in-one augmented reality platform"
            },
            {
                icon: "github",
                caption: "Open Source (eventually when the MVP is ready)"
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
        accentColor: "#059B14",
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
            technologiesUsed: [
                {
                    icon: "thumbnails/opencv.png",
                    technology: "OpenCV"
                },
                {
                    icon: "thumbnails/threejs.png",
                    technology: "Three.js"
                },
                {
                    icon: "thumbnails/java.png",
                    technology: "Java"
                },
                {
                    icon: "thumbnails/nodejs.png",
                    technology: "NodeJS & NPM"
                },
                {
                    icon: "thumbnails/typescript.jpeg",
                    technology: "TypeScript & JavaScript"
                },
                {
                    icon: "thumbnails/unity3d.png",
                    technology: "Unity3D"
                },
                {
                    icon: "thumbnails/git.png",
                    technology: "Git"
                },
                {
                    icon: "thumbnails/azure.png",
                    technology: "Azure"
                },
                {
                    icon: "thumbnails/aws.png",
                    technology: "AWS"
                },
                {
                    icon: "thumbnails/swift.png",
                    technology: "Swift"
                },
                {
                    icon: "thumbnails/vscode.png",
                    technology: "VS Code"
                },
                {
                    icon: "thumbnails/androidstudio.png",
                    technology: "Android Studio"
                },
                {
                    icon: "thumbnails/xcode.png",
                    technology: "XCode"
                },
                {
                    icon: "thumbnails/vuejs.png",
                    technology: "VueJS"
                },
                {
                    icon: "thumbnails/stripe.png",
                    technology: "Stripe"
                }
            ],
        }
    },
    {
        title: "Project Gameplan",
        description: "A project management platform that uses gamification techniques to boost employee motivation for task completion. Built using frontend (primarily VueJS) and backend Web (primarily Azure) technologies.",
        pageLink: "/project-gameplan",
        highlights: [
            {
                icon: "patent",
                caption: "Patented US-20240296410-A1"
            },
            {
                icon: "task",
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
        accentColor: "#FEDF14",
        pageSections: {
            screenshots: [
            ],
            history: [],
            awards: [],
            technologiesUsed: [
                {
                    icon: "thumbnails/typescript.jpeg",
                    technology: "TypeScript & JavaScript"
                },
                {
                    icon: "thumbnails/git.png",
                    technology: "Git"
                },
                {
                    icon: "thumbnails/azure.png",
                    technology: "Azure"
                },
                {
                    icon: "thumbnails/vscode.png",
                    technology: "VS Code"
                },
                {
                    icon: "thumbnails/vuejs.png",
                    technology: "VueJS"
                },
            ],
        }
    },
    {
        title: "Slappy Sandwich",
        description: "Start tapping, slapping and having fun! Slap your way to collect all the doohickeys and various slappers.How far can you get? Download and find out! Then challenge your friends! Game features: ♦ Rookie and Pro modes ♦ Cool doohickeys and slappers to collect ♦ Simple rules/controls ♦ Realistic physics ♦ Minimalistic ♦ Fun sound effects ♦ Share score with your friends. Have fun slapping! Fun for all ages!",
        pageLink: "/slappy-sandwich",
        highlights: [
            {
                icon: "multi-platform",
                caption: "Multi-platform"
            },
            {
                icon: "3d_alt",
                caption: "Built in Unity3D with C#"
            },
            {
                icon: "github",
                caption: "Open Source (eventually)"
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
        accentColor: "#D8621A",
        pageSections: {
            screenshots: [
                "projects/slappy-sandwich/0.jpg",
                "projects/slappy-sandwich/1.jpg",
                "projects/slappy-sandwich/2.jpg",
            ],
            history: [],
            awards: [],
            technologiesUsed: [
                {
                    icon: "thumbnails/unity3d.png",
                    technology: "Unity3D"
                },
                {
                    icon: "thumbnails/csharp.png",
                    technology: "C#"
                },
                {
                    icon: "thumbnails/git.png",
                    technology: "Git"
                },
                {
                    icon: "thumbnails/vs.png",
                    technology: "Visual Studio"
                }
            ],
        }
    },
    {
        title: "3D Spaceship Simulator",
        description: "A 3D procedurally generated space environment that the player flies through with their spaceship to reach destination planets to complete quests. This game was built without a game engine using pure C++ and OpenGL. I worked in a team of three as the lead developer.",
        pageLink: "/spaceship-simulator",
        highlights: [
            {
                icon: "cpp",
                caption: "Built in C++ and OpenGL"
            },
            {
                icon: "github",
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
        accentColor: "#AEFFFF",
        pageSections: {
            screenshots: [
                "projects/spaceship-sim/0.png",
                "projects/spaceship-sim/1.png",
                "projects/spaceship-sim/2.png",
            ],
            history: [],
            awards: [],
            technologiesUsed: [
                {
                    icon: "thumbnails/opengl.png",
                    technology: "OpenGL"
                },
                {
                    icon: "thumbnails/c++.png",
                    technology: "C++"
                },
                {
                    icon: "thumbnails/git.png",
                    technology: "Git"
                },
                {
                    icon: "thumbnails/vscode.png",
                    technology: "VS Code"
                }
            ]
        }
    }
];

// TODO PULL FROM LINKEDIN
export var WORK_EXPERIENCE: WorkExperience[] = [
    {
        title: "Software Engineer",
        logo: "company-logos/microsoft.png",
        organization: "Microsoft Corp.",
        startingDate: "September 2023",
        endingDate: "Ongoing",
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
        description: "Two 12-week internships. The first was working on adding NodeJS support to the C# Mono WebAssembly project (WASM). The second was adding WebTransport support to the ASP.NET Kestrel webserver. Both projects are open source and were motivated by community requests. These internships used a combination of C#, TypeScript (TS), XML, and other languages."
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