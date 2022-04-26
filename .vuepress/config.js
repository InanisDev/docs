module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
    lastUpdated: "Last Updated", // string | boolean
    repo: "InanisDev/docs",
    repoLabel: "Contribute!",
    docsRepo: "InanisDev/docs",
    docsDir: "docs",
    docsBranch: "dev",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/docs/" },
      { text: "Github", link: "https://github.com/InanisDev" },
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
  title: "Inanis Dev Team",
  description: "Official Documentation",
};
