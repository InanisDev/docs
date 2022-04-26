module.exports = {
    themeConfig: {
      logo: '/assets/img/logo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Projects', link: '/docs/' },
          { text: 'External', link: 'https://google.com' }
        ],
        sidebar: [
          ['/', 'Home'],
          {
            title: 'Our Team',   // required
            path: '/docs/',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/docs/'
            ]
          }
        ]
      },
    title: 'Inanis Dev Team',
    description: 'Official Documentation'
  }