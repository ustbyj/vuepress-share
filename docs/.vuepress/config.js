module.exports = {
    title: 'MICL知识库',  // 设置网站标题
    description: ' MICL知识库',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '使用帮助', link: '/help' },
            { text:  '知识库', link: '/share/'},
        ],
        sidebar: [
            '/share/',
            '/share/one'
        ]
    }
}