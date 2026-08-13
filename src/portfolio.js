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
    "软件工程专业本科生 / 全栈开发者 💻 喜欢把课程项目与开源实践结合起来，专注 Web 全栈、算法与工程化，正在为成为一名靠谱的软件工程师打基础。"
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
  subTitle: "软件工程专业在读，持续打磨工程能力与算法功底",
  skills: [
    emoji(
      "⚡ 使用 React / Vue + TypeScript 构建现代化前端界面，注重组件复用与交互细节"
    ),
    emoji(
      "⚡ 用 Node.js / Spring Boot 编写后端服务，设计 RESTful API 与数据库模型"
    ),
    emoji("⚡ 练习数据结构与算法，参加蓝桥杯与校内 ACM 选拔训练"),
    emoji(
      "⚡ 用 Git / Docker / GitHub Actions 管理项目，关注工程化与可维护性"
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
      duration: "2022.09 – 2026.06",
      desc: "主修软件工程，系统学习数据结构、算法、操作系统、计算机网络、数据库、软件工程等核心课程，GPA 3.6 / 4.0（专业前 15%）。",
      descBullets: [
        "加入学院 ACM 集训队，参与算法竞赛训练并协助校赛出题",
        "作为核心成员开发校园二手书交易平台，服务本校 3000+ 名学生"
      ]
    },
    {
      schoolName: "湛江市第二中学",
      logo: require("./assets/images/zhanjiangHS.svg"),
      subHeader: "理科班",
      duration: "2019.09 – 2022.06",
      desc: "高中阶段接触信息学，参加全国青少年信息学奥林匹克联赛（NOIP），由此确立对计算机专业的兴趣。",
      descBullets: ["NOIP 普及组 / 提高组获奖"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "前端开发", //Insert stack or technology you have experience in
      progressPercentage: "82%" //Insert relative proficiency in percentage
    },
    {
      Stack: "后端开发",
      progressPercentage: "72%"
    },
    {
      Stack: "算法与数据结构",
      progressPercentage: "70%"
    },
    {
      Stack: "工程化 / DevOps",
      progressPercentage: "58%"
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
      company: "云栖科技（CloudNest）",
      companylogo: require("./assets/images/cloudnest.svg"),
      date: "2025.07 – 2025.09",
      desc: "参与企业官网与后台管理系统的前端开发，基于 React + TypeScript + Ant Design 重构数据看板模块，首屏加载时间下降约 35%。",
      descBullets: [
        "独立完成权限管理（RBAC）前端模块开发与单元测试",
        "与后端协作制定 OpenAPI 规范，统一前后端字段约定"
      ]
    },
    {
      role: "开源贡献者",
      company: "GitHub 开源社区",
      companylogo: require("./assets/images/oss.svg"),
      date: "2024.03 – 至今",
      desc: "长期向若干前端 / 工具类开源项目贡献代码，涉及文档完善、Bug 修复与功能增强，累计合并 12+ 个 PR。",
      descBullets: [
        "维护个人算法题解仓库，累计获得 200+ Stars",
        "为多个开源项目提交可复用的组件封装与示例"
      ]
    },
    {
      role: "项目组长",
      company: "校园二手书交易平台（孵化项目）",
      companylogo: require("./assets/images/freelance.svg"),
      date: "2023.09 – 2024.06",
      desc: "作为组长带领 4 人小组完成校园二手书交易平台的需求分析、设计与落地，使用 Spring Boot + Vue 实现，获校级大创项目立项。",
      descBullets: [
        "负责技术选型、任务拆解与进度管理",
        "设计发布 / 搜索 / 私信 / 订单核心模块并落地"
      ]
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
      image: require("./assets/images/proj-algo.svg"),
      projectName: "算法可视化平台 AlgoViz",
      projectDesc:
        "面向初学者的算法可视化网站，支持排序、图遍历、动态规划等算法的分步动画演示；前端基于 React + Canvas，后端用 Node.js 提供题解接口。",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/chenbenkong"
        }
      ]
    },
    {
      image: require("./assets/images/proj-book.svg"),
      projectName: "校园二手书交易平台 BookSwap",
      projectDesc:
        "本校学生二手教材流转平台，Spring Boot + Vue 全栈实现，含发布 / 搜索 / 私信 / 订单模块，注册用户 3000+。",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/chenbenkong"
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
  subtitle: "奖项、证书与一些有意思的里程碑",

  achievementsCards: [
    {
      title: "蓝桥杯软件大赛 省一等奖",
      subtitle: "第十五届蓝桥杯软件类 Java 大学 B 组 广东赛区一等奖。",
      image: require("./assets/images/ach-comp.svg"),
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
      subtitle: "GitHub 累计 200+ Stars，多个项目被社区采用。",
      image: require("./assets/images/ach-oss.svg"),
      imageAlt: "Open Source Logo",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/chenbenkong"
        }
      ]
    },

    {
      title: "大创项目 立项",
      subtitle: "校级大学生创新创业训练计划《校园二手书交易平台》负责人，顺利结项。",
      image: require("./assets/images/ach-cert.svg"),
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
        "使用 GitHub Pages + 开源模板免费部署一个属于自己的技术博客与作品集，含完整步骤与踩坑记录。"
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
      subtitle: "在社团内部分享如何迈出开源第一步：从读文档到提交第一个 PR",
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
