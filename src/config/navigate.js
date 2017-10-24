// 定义左侧导航

const list = {
    guide: [
        {
            title: '介绍',
            titleEn: 'Introduction',
            path: '/docs/guide/introduce'
        },
        {
            title: '设计原则',
            titleEn: 'Design Principles',
            path: '/docs/guide/design'
        },
        {
            title: '布局',
            titleEn: 'Navigation Examples',
            path: '/docs/guide/layout'
        },
        {
            title: '参与贡献',
            titleEn: 'Contributing Guide',
            path: '/docs/guide/standard'
        }
    ],
    beforeComponents: [
        {
            title: '安装',
            titleEn: 'Installation',
            path: '/docs/guide/install'
        },
        {
            title: '更新日志',
            titleEn: 'Change Log',
            path: '/docs/guide/update'
        }
    ],
    components: [
        {
            type: '图层',
            title: '图层',
            list: [
                {
                    title: '点',
                    path: '/docs/guide/dotOverlay',
                    img: 'grid.png',
                    icon: 'ios-grid-view-outline'
                },
                {
                    title: '提示信息',
                    path: '/docs/guide/pop',
                    img: 'layout-new.png',
                    icon: 'ios-browsers-outline'
                },
                {
                    title: '图标',
                    path: '/docs/guide/imgOverlay',
                    img: 'layout-new.png',
                    icon: 'ios-browsers-outline'
                },
                {
                    title: '围栏',
                    path: '/docs/guide/boundaryOverlay',
                    img: 'button.png',
                    icon: 'social-youtube-outline'
                },
                {
                    title: '线路',
                    path: '/docs/guide/Circuit',
                    img: 'icon.png',
                    icon: 'ios-heart-outline'
                },
                {
                    title: '格子聚合热力',
                    path: '/docs/guide/griddingOverlay',
                    img: 'icon.png',
                    icon: 'ios-heart-outline'
                },
                {

                    title: '热力图',
                    path: '/components/honeycombOverlay',
                    img: 'icon.png',
                    icon: 'ios-heart-outline'
                }
            ]
        }
    ],
    practice: [
        {
            title: '实践案例',
            titleEn: 'Practical Cases',
            path: '/docs/practice/case'
        },
        {
            title: 'iView Logo 设计思路',
            titleEn: 'iView Logo Design',
            path: '/docs/practice/logo'
        }
    ],
    live: [
        {
            title: '最新课程',
            path: '/live'
        }
    ]
};

export default list;
