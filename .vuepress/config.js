module.exports = {
    themeConfig: {
      logo: '/assets/img/logo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' }
        ],
        sidebar: [
          {
            title: 'Projects',   // required
            path: '/docs/Projects/',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/'
            ]
          },
          {
            title: 'Group 2',
            children: [ /* ... */ ],
            initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
          }
        ]
      },
    title: 'Inanis Dev Team',
    description: 'Official Documentation'
  }