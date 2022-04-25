module.exports = {
    themeConfig: {
      logo: '/assets/img/logo.png',
      themeConfig: {
        sidebar: [
          '/',
          '/page-a',
          ['/page-b', 'Explicit link text']
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Docs', link: '/docs/index.md' },
            { text: 'Website', link: 'https://www.inanisdevteam.tech' }
          ]
      }
    },
    title: 'Inanis Dev Team',
    description: 'Official Documentation'
  }