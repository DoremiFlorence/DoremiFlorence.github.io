window.portfolioData = {
    hero: {
        tag: " 创意全栈 AI 工程师",
        title: "郑锦芳<br>Zheng.",
        bioDropCap: "现",
        bioText: "为香港大学计算机科学理学硕士（HKU MSc in CS）。专注于构建前沿的 AI 解决方案，领域涵盖大型语言模型（LLM）、检索增强生成（RAG）以及高性能全栈 Web 应用。核心理念在于打造优雅、稳健且以用户为中心的数字系统体验，搭建尖端学术研究与真实行业驱动力之间的桥梁。",
        tags: ["#人工智能工程", "#数据智能", "#全栈架构"],
        socialLinks: [
            { label: "邮箱 EMAIL", url: "mailto:2473706282@qq.com" },
            { label: "开源 GITHUB", url: "https://github.com/DoremiFlorence" },
            { label: "领英 LINKEDIN", url: "https://www.linkedin.com/in/jinfang-zheng-0b590b336/" }
        ]
    },
    education: {
        degreesTitle: "学位背景 Degrees",
        honorsTitle: "荣誉与领导力 Honors",
        degrees: [
            {
                date: "2024年9月 - 2025年11月",
                gpa: "GPA: 3.63 • 前 10%",
                title: "香港大学 (HKU)",
                subtitle: "理学硕士 · 工程学院 · 计算机科学"
            },
            {
                date: "2020年9月 - 2024年6月",
                gpa: "GPA: 3.91/4.0 • 专业第一 1/78",
                title: "深圳北理莫斯科大学",
                subtitle: "工学学士 · 工程系 · 电子与计算机工程"
            },
            {
                date: "2021年9月 - 2022年6月",
                gpa: "GPA: 3.89/4.0 • 专业第二 2/78",
                title: "北京理工大学",
                subtitle: "电子与计算机工程（国家重点大学交流项目）"
            }
        ],
        honors: [
            {
                number: "I.",
                title: "核心荣誉奖项",
                description: "荣获国家奖学金；香港大学优秀毕业生；深圳北理莫斯科大学校长主项奖学金等。"
            },
            {
                number: "II.",
                title: "顶级竞赛佳绩",
                description: "北京理工大学“挑战杯”创业竞赛金奖；全国大学生数学建模竞赛及蓝桥杯大赛省级二等奖。"
            },
            {
                number: "III.",
                title: "校园领导力与传播",
                description: "曾任校学生会副部长；校新媒体中心核心骨干及北京理工大学新闻社骨干成员。"
            }
        ]
    },
    experience: [
        {
            company: "腾讯元宝 AI (TENCENT)",
            date: "2025年6月 - 10月",
            title: "AI 编程高级功能工程师 (实习)",
            images: [
                "assets/tencent2.png",
                "assets/tencent1.png"
            ],
            contentHtml: `
                <p>全面主导腾讯元宝核心 AI 编程高级功能的产品设计与工程部署，独立完成深度用户调研与竞品技术剖析。</p>
                <p>架构并开发端到端全栈技术工作流，独立搭建与部署了高安全性的沙盒运行环境（Sandbox Runtime）。</p>
                <p><strong>代码解释器 (Code Interpreter)：</strong> 深度应用 LLM Function Calling 安全机制动态调用外部 API，显著规避大模型幻觉，使核心编程任务准确率跃升至 90% 以上。</p>
            `
        },
        {
            company: "货拉拉 (LALAMOVE)",
            date: "2024年1月 - 4月",
            title: "AI 软件工程师 (实习)",
            image: "assets/lalamove.png",
            contentHtml: `
                <ul class="clean-list">
                    <li>主导研发企业级“IT 智能助手”（基于 Langchain + ChatGLM 架构），实现日常工单 50% 的高频自动拦截率。</li>
                    <li>基于 bge-embedding 向量模型与 Faiss 检索库，全面架构与优化企业内部知识库检索性能。</li>
                    <li>通过 LoRA 微调技术深化垂直领域问答质量，并前瞻探索与验证了 GPT-SoVITS 语音克隆技术原型。</li>
                </ul>
            `
        }
    ],
    projects: [
        {
            tags: ["大语言模型 RAG", "<span class=\"mono-tag accent-red\">在线网页</span>"],
            title: "FactChecker：基于大模型的自动化事实核查系统",
            url: "https://factchecker-mxoi.onrender.com/",
            image: "assets/source.png",
            leadText: "",
            detailsHtml: `
                <p>为直面并解决人工智能“幻觉”以及网络虚假资讯泛滥的痛点，独立研发了该款基于 LLM 的事实核查系统。用户只需输入待核查文本，系统即可静默检索权威信源，输出带有严密证据链追溯的真实性判定报告。</p>
                <p>底层搭载严谨的分布式 RAG 架构：LLM 1 深度解构核心论点并生成多维度检索词；系统随后对全网资讯进行实时抓取、相关性重排序与文本块切片；最终由 LLM 2 将原始声称与 Top 事实块进行深度交叉印证，输出极具公信力的结论。</p>
            `
        },
        {
            tags: ["全栈自动化监测", "<span class=\"mono-tag accent-red\">在线网页</span>"],
            title: "Event Alarm（智能事件监测与预警平台）",
            images: [
                "assets/event1.png",
                "assets/event2.png"
            ],
            leadText: "全天候静默巡查，让您彻底告别高频人工刷新焦虑",
            detailsHtml: `
                <p><strong>核心痛点：</strong> 解决广大用户在面对考试报名开放、热门极客新品发售、重要官方政策公告等重大预期事件时，不得不人工反复刷新网页的焦虑感与低效精力损耗。</p>
                <p><strong>产品方案：</strong> 用户只需将监测意图托管给应用，系统即刻开启 24/7 全天候云端静默巡查，并借助 AI 语义交叉印证过滤虚假信息；一旦事件以高置信度确认，系统会立即推送内含逻辑拆解与直达信源链接的预警邮件。</p>
            `
        },
        {
            tags: ["跨平台全栈音视频", "<span class=\"mono-tag accent-red\">在线网页</span>"],
            title: "VibePlayer：跨平台聚合音频播控中心",
            url: "https://vibeplayer.onrender.com/",
            image: "assets/vibeplayer.png",
            leadText: "",
            detailsHtml: `
                <p><strong>洞察与思考：</strong> 伴随数字音乐消费加速向视频流媒体迁移，受限于各大平台生态的高墙壁垒与简陋的后台播放支持，用户的跨平台听歌体验高度碎片化。</p>
                <p><strong>破壁行动：</strong> 独立打造 VibePlayer 破除生态鸿沟。通过智能解析多源分享链接（B站、小红书、抖音）无损提取纯净音频流，并深度整合原生歌单管理引擎，让用户以零摩擦的方式沉浸收藏与聆听散落在全网的珍藏曲目。</p>
            `
        }
    ]
};
