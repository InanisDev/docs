/* const config = {
  title: "Inanis Dev Team",
  description: "Official Documentation",
  plugins: [],
  theme: "yuu",
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
    },
    logo: "/assets/img/logo.png",
    lastUpdated: "Last Updated", // string | boolean
    repo: "InanisDev/docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    nav: [
      { 
        text: "Home", 
        link: "/",
      },
      { 
        text: "Projects", 
        link: "/docs/",
       },
      { text: "Github",
        link: "https://github.com/InanisDev",
      },
    ],
    sidebar: [
      ["/", "Home"],
      {
        title: "Our Team", // required
        path: "/docs/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/docs/"],
      },
      {
        title: "Methuselah OS", // required
        path: "/docs/Methuselah/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/docs/Methuselah/", "/docs/Methuselah/Features.md"],
      },
    ],
  },
};

module.exports = config;
  */

const config = {
  title: "Vuepress Theme Yuu",
  description:
    "A VuePress theme that supports a dark theme, multiple color themes, and other useful features.",
  plugins: [],
  theme: "yuu",
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
    },
    repo: "danktuary/vuepress-theme-yuu",
    docsBranch: "docs",
    editLinks: true,
    sidebarDepth: 3,
    lastUpdated: true,
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Theme Configuration",
        link: "/theme-configuration",
      },
      {
        text: "Default Theme Config",
        link: "https://vuepress.vuejs.org/theme/default-theme-config.html",
      },
    ],
  },
};

module.exports = config;
