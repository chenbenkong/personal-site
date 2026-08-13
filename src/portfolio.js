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
    "一名计算机专业学生 / 编程爱好者 💻 喜欢用代码解决实际问题，正在探索 Web 开发、算法与开源的世界。"
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
  subTitle: "计算机专业学生，正在打磨全栈与算法能力",
  skills: [
    emoji("⚡ 使用 React / Next.js 构建交互式前端界面"),
    emoji("⚡ 用 Node.js / Python 编写后端服务与脚本工具"),
    emoji("⚡ 练习数据结构与算法，参加编程竞赛")
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "某 985 高校",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "计算机科学与技术 · 工学学士",
      duration: "2022 - 2026",
      desc: "系统学习数据结构、算法、操作系统、计算机网络、数据库等核心课程，GPA 排名专业前 10%。",
      descBullets: [
        "加入学校开源社区，参与多个校园项目开发",
        "担任程序设计竞赛集训队成员"
      ]
    },
    {
      schoolName: "某重点高中",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "理科实验班",
      duration: "2019 - 2022",
      desc: "信息学奥林匹克竞赛获奖，从此爱上编程。",
      descBullets: ["NOIP 提高组一等奖"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "前端 / Web", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "后端 / 算法",
      progressPercentage: "70%"
    },
    {
      Stack: "工程化 / DevOps",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "前端开发实习生",
      company: "某科技公司",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "2025.06 – 2025.09",
      desc: "参与公司内部管理系统的前端开发，使用 React + TypeScript 重构多个核心页面，提升加载性能约 30%。",
      descBullets: [
        "独立完成权限管理模块的开发与单测",
        "与后端协作设计 RESTful 接口规范"
      ]
    },
    {
      role: "开源贡献者",
      company: "多个 GitHub 项目",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "2024 - 至今",
      desc: "为若干开源项目提交 PR，涉及文档、Bug 修复与功能增强，累计合并 10+ 个 PR。"
    },
    {
      role: "自由项目接单",
      company: "独立开发者",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2023 - 至今",
      desc: "为同学与小团队开发个人主页、小程序与数据爬虫工具，积累全栈实战经验。"
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
  subtitle: "我参与或主导的一些项目",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "算法可视化平台",
      projectDesc:
        "一个面向初学者的算法可视化网站，支持排序、图遍历、动态规划等算法的动画演示，使用 React + Canvas 实现。",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/chenbenkong"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "个人博客系统",
      projectDesc:
        "基于 Astro 的静态博客，支持 Markdown 写作、RSS 订阅与 GitHub Pages 一键部署，本站点即由其衍生。",
      footerLink: [
        {
          name: "Live",
          url: "https://chenbenkong.github.io/personal-site/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "证书、奖项与一些有意思的里程碑",

  achievementsCards: [
    {
      title: "程序设计竞赛获奖",
      subtitle: "在省级 / 国家级算法竞赛中多次获奖，锤炼扎实的算法与编码能力。",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Competition Logo",
      footerLink: [
        {
          name: "详情",
          url: "https://github.com/chenbenkong"
        }
      ]
    },
    {
      title: "开源贡献者",
      subtitle: "在 GitHub 上持续向多个开源项目贡献代码，累计获得 50+ Stars。",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Open Source Logo",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/chenbenkong"
        }
      ]
    },

    {
      title: "全栈开发认证",
      subtitle: "完成现代 Web 全栈开发系列课程并产出毕业项目。",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Certificate Logo",
      footerLink: [
        {name: "Certification", url: ""}
      ]
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
        "使用 Astro + GitHub Pages 免费部署一个属于自己的技术博客与作品集，含完整步骤与踩坑记录。"
    },
    {
      url: "https://chenbenkong.github.io/personal-site/",
      title: "我是如何刷完 300 道算法题的",
      description:
        "分享我的刷题路线图、错题本方法与常用模板，帮助初学者少走弯路。"
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
      subtitle: "在社团内部分享如何迈出开源第一步",
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

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
