/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Benkong",
  title: "Hi all, I'm Benkong",
  subTitle: emoji(
    "全栈 + AI 方向开发者 🤖 擅长用 React / Spring Boot 搭产品，并用 Python / 大模型把智能能力嵌进真实业务；喜欢把课程项目做成能跑、能演示、能讲故事的作品。"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chenbenkong",
  linkedin: "https://www.linkedin.com/in/chenbenkong/",
  gmail: "chenbenkong@example.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/chenbenkong",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "软件工程在读，主攻全栈开发与 AI 应用落地",
  skills: [
    emoji(
      "⚡ 前端：React / Vue + TypeScript，能独立完成从设计稿到上线的交互界面"
    ),
    emoji(
      "⚡ 后端：Spring Boot / Node.js，设计 RESTful API、鉴权与数据库建模"
    ),
    emoji(
      "⚡ AI 应用：基于 LangChain / RAG 构建检索增强问答，调用主流大模型 API"
    ),
    emoji(
      "⚡ 工程化：Git / Docker / GitHub Actions，习惯写测试、文档与 CI"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AI / LLM",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "岭南师范学院",
      logo: require("./assets/images/lnnu.svg"),
      subHeader: "软件工程 · 工学学士",
      duration: "2022.09 – 2026.06（本科在读）",
      desc: "主修软件工程，系统学习数据结构、算法、操作系统、计算机网络、数据库、软件工程等核心课程，GPA 3.6 / 4.0（专业前 15%）。",
      descBullets: [
        "加入学院 ACM 集训队，参与算法竞赛训练并协助校赛出题",
        "作为核心成员开发校园二手书交易平台，服务本校 3000+ 名学生",
        "连续两年获校级奖学金，毕业设计为 RAG 文档问答系统"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "前端开发", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "后端开发",
      progressPercentage: "78%"
    },
    {
      Stack: "AI / LLM 应用",
      progressPercentage: "72%"
    },
    {
      Stack: "算法与数据结构",
      progressPercentage: "70%"
    },
    {
      Stack: "工程化 / DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI 应用开发实习生",
      company: "云栖科技（CloudNest）",
      companylogo: require("./assets/images/cloudnest.svg"),
      date: "2025.07 – 2025.09",
      desc: "参与企业知识库问答产品研发，基于 RAG 架构将内部文档接入大模型，负责对话前端与检索链路调优。",
      descBullets: [
        "独立开发对话前端（React + TypeScript），支持流式输出与答案引用溯源",
        "用 LangChain 编排检索流程，答案可用率较初版提升约 25%",
        "与算法同学协作沉淀评测集与回归脚本，纳入每日 CI"
      ],
      tech: [
        "React",
        "TypeScript",
        "LangChain",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Chroma",
        "Docker"
      ],
      highlights: [
        "首个可用版本两周内交付并上线内部试用",
        "获团队季度新人奖提名"
      ],
      links: [{name: "RAG 专题", url: "https://github.com/topics/rag"}]
    },
    {
      role: "全栈开发实习生",
      company: "智言科技（AI SaaS 初创）",
      companylogo: require("./assets/images/zhiyan.svg"),
      date: "2024.06 – 2024.09",
      desc: "负责 AI 客服产品后台与开放平台，使用 Spring Boot + Vue 实现工单与多渠道接入模块。",
      descBullets: [
        "实现微信 / 网页多渠道消息接入与智能路由",
        "设计开放平台 API 与签名鉴权方案",
        "编写 60+ 单元 / 接口测试，核心模块覆盖率提升至 70%"
      ],
      tech: [
        "Spring Boot",
        "Vue",
        "MySQL",
        "Redis",
        "RabbitMQ",
        "Docker",
        "JWT"
      ],
      highlights: [
        "模块按时交付，支撑首批 5 家客户接入",
        "沉淀的鉴权中间件被其他业务线复用"
      ],
      links: [{name: "Chatbot 专题", url: "https://github.com/topics/chatbot"}]
    },
    {
      role: "开源贡献者",
      company: "GitHub 开源社区",
      companylogo: require("./assets/images/oss.svg"),
      date: "2024.03 – 至今",
      desc: "长期向 LLM 工具链与前端开源项目贡献代码，涉及文档、Bug 修复与功能增强。",
      descBullets: [
        "为 LangChain-CN 等文档项目提交翻译与可运行示例",
        "维护个人算法与 AI 题解仓库，累计 200+ Stars",
        "参与社区 issue 答疑与 good first issue 修复"
      ],
      tech: ["Python", "TypeScript", "LangChain", "React", "Docs"],
      highlights: [
        "累计合并 12+ 个 PR，2 个项目被社区采用 / 收录",
        "获项目维护者邀请成为 triage 协助者"
      ],
      links: [{name: "Open Source 专题", url: "https://github.com/topics/open-source"}]
    },
    {
      role: "项目组长",
      company: "校园二手书交易平台（校级大创）",
      companylogo: require("./assets/images/freelance.svg"),
      date: "2023.09 – 2024.06",
      desc: "作为组长带领 4 人小组完成校园二手书交易平台的需求分析、设计与落地。",
      descBullets: [
        "负责技术选型（Spring Boot + Vue）与数据库建模",
        "设计发布 / 搜索 / 私信 / 订单核心模块并落地",
        "统筹排期、分工与结项答辩演示"
      ],
      tech: ["Spring Boot", "Vue", "MySQL", "Redis", "Git", "Nginx"],
      highlights: [
        "获校级大学生创新创业训练计划立项并顺利结项",
        "注册用户 3000+，成为校内常用二手流转渠道"
      ],
      links: [{name: "Spring Boot 专题", url: "https://github.com/topics/spring-boot"}]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "我主导或深度参与的一些项目，点击卡片跳转到对应开源仓库",
  projects: [
    {
      image: require("./assets/images/proj-docqa.svg"),
      projectName: "DocQA · RAG 文档问答",
      projectDesc:
        "基于检索增强生成（RAG）的本地文档问答系统，上传 PDF / Markdown 即可对话，答案带引用溯源。毕业设计原型。",
      footerLink: [{name: "GitHub · afaqueumer/DocQA", url: "https://github.com/afaqueumer/DocQA"}],
      tech: [
        "Python",
        "LangChain",
        "Chroma",
        "FastAPI",
        "React",
        "OpenAI / 通义千问"
      ],
      features: [
        "PDF / Markdown 自动切分、向量化与混合检索（BM25 + 向量）",
        "检索增强生成，答案标注来源段落并可点击跳转",
        "会话记忆与多轮追问，支持本地模型与云端模型切换"
      ],
      outcomes: [
        "在课程实验与毕设答辩中作为演示系统，获评优秀",
        "整理为可复用的 RAG 脚手架，分享给同学后续项目"
      ]
    },
    {
      image: require("./assets/images/proj-algo.svg"),
      projectName: "AlgoViz · 算法可视化平台",
      projectDesc:
        "面向初学者的算法可视化网站，支持排序、图遍历、动态规划等算法的分步动画演示与复杂度标注。",
      footerLink: [{name: "GitHub · algorithm-visualizer", url: "https://github.com/algorithm-visualizer/algorithm-visualizer"}],
      tech: ["React", "TypeScript", "Canvas", "Node.js", "Vite"],
      features: [
        "排序 / 图遍历 / 动态规划的分步动画与控制（播放 / 单步 / 调速）",
        "每步标注当前操作与数据结构状态，附时间 / 空间复杂度",
        "暗色模式与代码对照视图"
      ],
      outcomes: [
        "被校内数据结构实验课作为辅助演示素材采用",
        "累计 1k+ 访问，收到同学改进建议并迭代"
      ]
    },
    {
      image: require("./assets/images/proj-bot.svg"),
      projectName: "CampusBot · 校园智能问答",
      projectDesc:
        "面向校园场景的 FAQ 机器人，结合规则引擎与 LLM，接入微信公众号，解答选课 / 教务 / 校园服务类问题。",
      footerLink: [{name: "GitHub · aagrxyz/CampusBot", url: "https://github.com/aagrxyz/CampusBot"}],
      tech: ["Python", "FastAPI", "Vue", "微信公众号", "向量检索"],
      features: [
        "校内 FAQ 知识库 + 大模型兜底，降低幻觉",
        "微信消息接入、意图识别与多轮对话",
        "后台可运营知识条目与查看对话日志"
      ],
      outcomes: [
        "在社团招新与迎新期间试用，减少重复性人工答疑",
        "沉淀一套低成本的校园 Bot 搭建流程"
      ]
    },
    {
      image: require("./assets/images/proj-book.svg"),
      projectName: "BookSwap · 校园二手书平台",
      projectDesc:
        "本校学生二手教材流转平台，Spring Boot + Vue 全栈实现，含发布 / 搜索 / 私信 / 订单模块。",
      footerLink: [{name: "GitHub · kphillpotts/BookSwap", url: "https://github.com/kphillpotts/BookSwap"}],
      tech: ["Spring Boot", "Vue", "MySQL", "Redis", "Nginx"],
      features: [
        "教材发布、按课程 / 专业检索与私信沟通",
        "简易订单与交易状态流转",
        "管理员后台与基础数据统计"
      ],
      outcomes: [
        "校级大创项目，注册用户 3000+",
        "成为校内常用的二手教材流转渠道"
      ]
    },
    {
      image: require("./assets/images/proj-site.svg"),
      projectName: "个人站点 / 作品集（本网站）",
      projectDesc:
        "你正在浏览的站点：基于开源模板定制的个人编程主页，含博客、项目与经历展示，GitHub Pages 自动部署。",
      footerLink: [
        {name: "模板源码 · saadpasta/developerFolio", url: "https://github.com/saadpasta/developerFolio"}
      ],
      tech: ["React", "GitHub Pages", "GitHub Actions", "Markdown"],
      features: [
        "单页作品集 + 博客聚合，支持暗色模式",
        "推送到 main 即自动构建部署",
        "项目 / 经历卡片可点击跳转到对应仓库"
      ],
      outcomes: [
        "作为求职与作品展示的统一入口",
        "沉淀个人技术博客与学习记录"
      ]
    },
    {
      image: require("./assets/images/proj-leet.svg"),
      projectName: "LeetHelper · 刷题助手",
      projectDesc:
        "CLI + 网页的算法题管理工具，管理错题本、生成每日练习并导出复习计划。",
      footerLink: [{name: "GitHub · helloShen/leetcode-helper", url: "https://github.com/helloShen/leetcode-helper"}],
      tech: ["Node.js", "TypeScript", "SQLite", "Express"],
      features: [
        "题目的标签 / 难度 / 状态管理，支持艾宾浩斯复习提醒",
        "按薄弱点生成每日练习清单",
        "命令行与网页双入口，数据本地存储"
      ],
      outcomes: [
        "自用支撑 300+ 道题的系统训练",
        "开源后获同学 star 与反馈"
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "奖项、证书与一些有意思的里程碑",

  achievementsCards: [
    {
      title: "蓝桥杯软件大赛 省一等奖",
      subtitle: "第十五届蓝桥杯软件类 Java 大学 B 组 广东赛区一等奖。",
      image: require("./assets/images/ach-comp.svg"),
      imageAlt: "Competition Logo",
      footerLink: [{name: "算法专题", url: "https://github.com/topics/algorithm"}]
    },
    {
      title: "大创项目 立项",
      subtitle: "校级大学生创新创业训练计划《校园二手书交易平台》负责人，顺利结项。",
      image: require("./assets/images/ach-cert.svg"),
      imageAlt: "Certificate Logo",
      footerLink: [{name: "Spring Boot 专题", url: "https://github.com/topics/spring-boot"}]
    },
    {
      title: "开源贡献者",
      subtitle: "GitHub 累计 200+ Stars，多个项目被社区采用。",
      image: require("./assets/images/ach-oss.svg"),
      imageAlt: "Open Source Logo",
      footerLink: [{name: "Open Source 专题", url: "https://github.com/topics/open-source"}]
    },
    {
      title: "AI 应用实践",
      subtitle: "完成 LLM 应用开发系列实践，独立交付 RAG 问答与校园 Bot。",
      image: require("./assets/images/ach-ai.svg"),
      imageAlt: "AI Logo",
      footerLink: [{name: "LLM 专题", url: "https://github.com/topics/llm"}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "记录学习过程，分享踩坑与心得。",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://chenbenkong.github.io/personal-site/",
      title: "从零搭建一个个人编程网站",
      description:
        "使用 GitHub Pages + 开源模板免费部署一个属于自己的技术博客与作品集，含完整步骤与踩坑记录。"
    },
    {
      url: "https://chenbenkong.github.io/personal-site/",
      title: "我是如何刷完 300 道算法题的",
      description:
        "分享我的刷题路线图、错题本方法与常用模板，帮助初学者少走弯路。"
    },
    {
      url: "https://chenbenkong.github.io/personal-site/",
      title: "用 LangChain 搭一个 RAG 问答系统",
      description:
        "从文档切分、向量检索到增强生成，记录一个可上手的 RAG 实践全过程。"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("喜欢分享有限的知识，也喜欢在交流中成长 😅"),

  talks: [
    {
      title: "校园开源入门分享",
      subtitle: "在社团内部分享如何迈出开源第一步：从读文档到提交第一个 PR",
      slides_url: "",
      event_url: ""
    },
    {
      title: "大模型应用小谈",
      subtitle: "面向同学科普 RAG 与提示工程，演示一个本地文档问答 demo",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "偶尔聊聊技术、学习与成长",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "欢迎下载我的简历",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "想聊项目，或者只是打个招呼？我的收件箱永远为你敞开。",
  number: "",
  email_address: "chenbenkong@example.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
