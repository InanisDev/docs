module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
    lastUpdated: "Last Updated", // string | boolean
    repo: "InanisDev/docs",
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: "Contribute!",

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: "vuejs/vuepress",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
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
