window.portfolioData = {
    hero: {
        tag: " Creative Technologist",
        title: "Zheng<br>Jinfang.",
        bioDropCap: "M",
        bioText: "Sc in Computer Science at HKU. Specializing in building sophisticated AI solutions, from large language models and RAG to high-performance web applications. My focus is on creating elegant, scalable, and user-centric digital experiences that bridge cutting-edge research with real-world impact.",
        tags: ["#AI_ENGINEERING", "#DATA_INTELLIGENCE", "#FULL_STACK"],
        socialLinks: [
            { label: "EMAIL", url: "mailto:2473706282@qq.com" },
            { label: "GITHUB", url: "https://github.com/DoremiFlorence" },
            { label: "LINKEDIN", url: "https://www.linkedin.com/in/jinfang-zheng-0b590b336/" }
        ]
    },
    education: {
        degrees: [
            {
                date: "SEP 2024 - NOV 2025",
                gpa: "GPA: 3.63 • Rank Top 10%",
                title: "The University of Hong Kong ",
                subtitle: "Master of Science in Computer Science• Faculty of Engineering"
            },
            {
                date: "SEP 2020 - JUN 2024",
                gpa: "GPA: 3.91/4.0 • Rank 1/78",
                title: "Shenzhen MSU-BIT University",
                subtitle: "B.S. in Electrical & Computer Engineering • Dept of Engineering"
            },
            {
                date: "SEP 2021 - JUN 2022",
                gpa: "GPA: 3.89/4.0 • Rank 2/78",
                title: "Beijing Institute of Technology",
                subtitle: "Electrical & Computer Engineering (Exchange Program)"
            }
        ],
        honors: [
            {
                number: "I.",
                title: "Honor & Award",
                description: " National Scholarship; HKU Outstanding Graduate; Major award of SMBU."
            },
            {
                number: "II.",
                title: "Top Competition",
                description: "Gold Prize in BIT\"Challenge Cup\"; Provincial 2nd Prizes in Math Modeling & Blue Bridge Cup."
            },
            {
                number: "III.",
                title: "Campus Leadership",
                description: "Deputy Minister at SMBU Student Union; Core Member at SMBU New Media Center & BIT News Agency."
            }
        ]
    },
    experience: [
        {
            company: "TENCENT YUANBAO AI",
            date: "JUN-OCT 2025",
            title: "AI Programming Feature Engineer",
            images: [
                "assets/tencent2.png",
                "assets/tencent1.png"
            ],
            contentHtml: `
                <p>Orchestrated the design and deployment of advanced AI programming features, conducting comprehensive user research and competitive analysis.</p>
                <p>Architected full-stack workflows and deployed a secure sandbox runtime environment.</p>
                <p><strong>Code Interpreter:</strong> Utilized LLM Function Calling to securely invoke external APIs, mitigating hallucination and driving 90% accuracy.</p>
            `
        },
        {
            company: "LALAMOVE",
            date: "JAN-APR 2024",
            title: "AI Software Engineer",
            image: "assets/lalamove.png",
            contentHtml: `
                <ul class="clean-list">
                    <li>Spearheaded "IT Intelligent Assistant" (Langchain + ChatGLM) — 50% interception rate.</li>
                    <li>Optimized enterprise knowledge retrieval with bge-embedding & Faiss.</li>
                    <li>Elevated QA via LoRA fine-tuning & prototyped GPT-SoVITS voice cloning.</li>
                </ul>
            `
        }
    ],
    projects: [
        {
            tags: ["LLM", "<span class=\"mono-tag accent-red\">WEBPAGE</span>"],
            title: "FactChecker: LLM-Based Fact-Checking Tool",
            url: "https://factchecker-mxoi.onrender.com/",
            image: "assets/source.png",
            leadText: "",
            detailsHtml: `
                <p>To combat AI "hallucinations" and unverified online information, I developed an automated LLM-based fact-checking tool. Users simply paste text, and the system retrieves authoritative sources to provide an authenticity judgment and full source traceability.</p>
                <p>Under the hood, it utilizes a rigorous RAG pipeline: LLM 1 extracts core claims and generates search queries. The system then searches, reranks, and chunks web content to isolate the most relevant factual evidence. Finally, LLM 2 cross-references the original claims with these top evidence chunks to deliver a definitive verified conclusion.</p>
            `
        },
        {
            tags: ["FULL-STACK PLATFORM", "<span class=\"mono-tag accent-red\">WEBPAGE</span>"],
            title: "Event Alarm",
            images: [
                "assets/event1.png",
                "assets/event2.png"
            ],
            leadText: "Advanced financial simulation leveraging RL to optimize dynamic investment strategies.",
            detailsHtml: `
                <p><strong>Pain Point:</strong> It relieves users from the anxiety and the tedious routine of constantly refreshing webpages to track highly anticipated future events—such as exam registrations, new product launches, or official policy announcements.</p>
                <p><strong>Solution:</strong> Users simply delegate their requests to the app, which silently scours the web 24/7 and leverages AI to cross-verify news and filter out rumors; once an event is confirmed with high certainty, it instantly delivers an email alert complete with a logical breakdown and authoritative source links.</p>
            `
        },
        {
            tags: ["FULL-STACK PLATFORM", "<span class=\"mono-tag accent-red\">WEBPAGE</span>"],
            title: "VibePlayer: Cross-Platform Audio Hub",
            url: "https://vibeplayer.onrender.com/",
            image: "assets/vibeplayer.png",
            leadText: "",
            detailsHtml: `
                <p><strong>Insight:</strong> As music consumption shifts towards video platforms, cross-platform listening has become highly fragmented due to ecosystem walled gardens and inadequate playback features.</p>
                <p><strong>Action:</strong> I built VibePlayer to break these boundaries. By parsing multi-source URLs (Bilibili, Xiaohongshu, TikTok) to extract audio streams and integrating native playlist management, it allows users to seamlessly aggregate and play their personalized collection of scattered tracks with zero friction.</p>
            `
        }
    ]
};
