window.portfolioData = {
    en: {
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
                    subtitle: "Master of Science in Computer Science • Faculty of Engineering"
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
                    description: "National Scholarship; HKU Outstanding Graduate; Major award of SMBU."
                },
                {
                    number: "II.",
                    title: "Top Competition",
                    description: "Gold Prize in BIT \"Challenge Cup\"; Provincial 2nd Prizes in Math Modeling & Blue Bridge Cup."
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
                detailsHtml: `
                    <p><strong>Pain Point:</strong> It relieves users from the anxiety and the tedious routine of constantly refreshing webpages to track highly anticipated future events—such as exam registrations, new product launches, or official policy announcements.</p>
                    <p><strong>Solution:</strong> Users simply delegate their requests to the app, which silently scours the web 24/7 and leverages AI to cross-verify news and filter out rumors; once an event is confirmed with high certainty, it instantly delivers an email alert complete with a logical breakdown and authoritative source links.</p>
                `
            },
            {
                tags: ["FULL-STACK PLATFORM", "<span class=\"mono-tag accent-red\">WEBPAGE</span>"],
                title: "VibePlayer: Cross-Platform Audio Hub",
                image: "assets/vibeplayer.png",
                detailsHtml: `
                    <p><strong>Insight:</strong> As music consumption shifts towards video platforms, cross-platform listening has become highly fragmented due to ecosystem walled gardens and inadequate playback features.</p>
                    <p><strong>Action:</strong> I built VibePlayer to break these boundaries. By parsing multi-source URLs (Bilibili, Xiaohongshu, TikTok) to extract audio streams and integrating native playlist management, it allows users to seamlessly aggregate and play their personalized collection of scattered tracks with zero friction.</p>
                `
            }
        ]
    },
    zh: {
        hero: {
            tag: " 创新应用开发者 / AI 工程师",
            title: "郑<br>金芳.",
            bioDropCap: "香",
            bioText: "港大学计算机科学硕士（MSc in CS）。专注于构建先进的 AI 应用解决方案，涵盖大型语言模型（LLM）、检索增强生成（RAG）及高性能 Web 应用开发。我致力于打造优雅、高扩展性且以用户体验为核心的数字化产品，力求将前沿技术研究与真实业务价值无缝结合。",
            tags: ["#AI_应用开发", "#数据智能", "#全栈工程师"],
            socialLinks: [
                { label: "邮箱", url: "mailto:2473706282@qq.com" },
                { label: "GITHUB", url: "https://github.com/DoremiFlorence" },
                { label: "LINKEDIN", url: "https://www.linkedin.com/in/jinfang-zheng-0b590b336/" }
            ]
        },
        education: {
            degrees: [
                {
                    date: "2024年9月 - 2025年11月",
                    gpa: "GPA: 3.63 • 前 10%",
                    title: "香港大学 (HKU)",
                    subtitle: "计算机科学硕士 • 工程学院"
                },
                {
                    date: "2020年9月 - 2024年6月",
                    gpa: "GPA: 3.91/4.0 • 专业排名 1/78",
                    title: "深圳北理莫斯科大学",
                    subtitle: "电子与计算机工程 学士 • 工程系"
                },
                {
                    date: "2021年9月 - 2022年6月",
                    gpa: "GPA: 3.89/4.0 • 排名 2/78",
                    title: "北京理工大学 (BIT)",
                    subtitle: "电子与计算机工程（交换生项目）"
                }
            ],
            honors: [
                {
                    number: "I.",
                    title: "核心奖学金与荣誉",
                    description: "国家奖学金；香港大学优秀毕业生；深北莫校长特等奖学金。"
                },
                {
                    number: "II.",
                    title: "顶级竞赛奖项",
                    description: "北理工“挑战杯”金奖；全国大学生数学建模与蓝桥杯省级二等奖。"
                },
                {
                    number: "III.",
                    title: "校园学生领导力",
                    description: "深北莫学生会副部长；新媒体中心核心创作者及北理工新闻社骨干。"
                }
            ]
        },
        experience: [
            {
                company: "腾讯 元宝 AI",
                date: "2025年6月 - 10月",
                title: "AI 编程高级研发实习生",
                images: [
                    "assets/tencent2.png",
                    "assets/tencent1.png"
                ],
                contentHtml: `
                    <p>主导前沿 AI 编程特性功能的架构设计与工程部署，深度参与用户需求调研与竞品技术分析。</p>
                    <p>设计全栈应用工作流，并独立搭建与部署安全可靠的沙盒代码执行环境（Sandbox Runtime）。</p>
                    <p><strong>代码解释器（Code Interpreter）：</strong> 基于 LLM Function Calling 机制安全调用外部 API，有效解决大模型幻觉问题，执行准确率提升至 90%。</p>
                `
            },
            {
                company: "货拉拉 (LALAMOVE)",
                date: "2024年1月 - 4月",
                title: "AI 软件工程师实习生",
                image: "assets/lalamove.png",
                contentHtml: `
                    <ul class="clean-list">
                        <li>独立开发“IT 智能企业助手”（基于 Langchain + ChatGLM），达成 50% 的内部工单拦截率。</li>
                        <li>引入 bge-embedding 与 Faiss 向量数据库，大幅优化企业私有知识库的检索效率。</li>
                        <li>利用 LoRA 微调优化垂类问答质量，并主导研发 GPT-SoVITS 语音克隆原型系统。</li>
                    </ul>
                `
            }
        ],
        projects: [
            {
                tags: ["LLM 大模型", "<span class=\"mono-tag accent-red\">在线应用</span>"],
                title: "FactChecker：基于 LLM 的智能事实核查工具",
                url: "https://factchecker-mxoi.onrender.com/",
                image: "assets/source.png",
                detailsHtml: `
                    <p>为应对生成式 AI 的“大模型幻觉”以及互联网虚假信息泛滥问题，我独立研发了这款基于 LLM 的自动化事实核查与溯源系统。用户只需输入任意文本，系统即可全网检索权威信源，输出带有完整证据链的真实性判定报告。</p>
                    <p>底层采用严密的高级 RAG 工作流：由 LLM 1 提取待核查的核心论点并自动生成多维度检索词；系统联网检索、重排序并对网页长文进行切片，精确定位核心事实证据；最终由 LLM 2 将原始论点与核心证据块进行交叉比对，给出具备权威公信力的核查结论。</p>
                `
            },
            {
                tags: ["全栈平台", "<span class=\"mono-tag accent-red\">在线应用</span>"],
                title: "Event Alarm（全网智能事件侦测与告警雷达）",
                images: [
                    "assets/event1.png",
                    "assets/event2.png"
                ],
                detailsHtml: `
                    <p><strong>核心痛点：</strong> 解放用户精力，消除用户为了等待某一不确定发文时间的重大事件（如考试报名发文、新品发售、官方政策公告）而反复机械刷新网页的焦虑感。</p>
                    <p><strong>解决方案：</strong> 用户只需在平台托管关注目标，系统即刻开启 24 小时全网智能静默巡航。利用 AI 自动交叉验证新闻信源并过滤坊间传闻；一旦确认事件发生，系统立刻触发高优先级邮件告警，附带事件逻辑解读与权威官方发文链接。</p>
                `
            },
            {
                tags: ["全栈平台", "<span class=\"mono-tag accent-red\">在线应用</span>"],
                title: "VibePlayer：跨平台聚合音源播放终端",
                image: "assets/vibeplayer.png",
                detailsHtml: `
                    <p><strong>行业洞察：</strong> 随着音乐及音频消费全面向视频流媒体迁徙，跨平台听歌日益严重碎片化。各大平台生态封闭，且缺乏纯音频后台播放与优雅的收藏夹管理体验。</p>
                    <p><strong>产品实践：</strong> 我独立研发了 VibePlayer 以打破生态壁垒。支持一键解析多源视频网址（Bilibili、小红书、抖音）并精准抽离无损音频流；内置原生歌单与播放队列管理，让用户零阻碍沉浸式畅听散落在全网各处的宝藏单曲。</p>
                `
            }
        ]
    }
};
