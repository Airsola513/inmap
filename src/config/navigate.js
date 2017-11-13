// 定义左侧导航

const list = {
    beforeComponents: [{
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
    components: [{
        type: '图层',
        title: '图层',
        list: [
            {
                title: '地图',
                path: '/docs/guide/dotOverlay',
                img: 'grid.png',
                icon: 'ios-grid-view-outline'
            },
            {
                title: '圆点',
                path: '/docs/guide/dotOverlay',
                img: 'grid.png',
                icon: 'ios-grid-view-outline'
            },
            {
                title: 'tooltip',
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
    }],
   
};

export default list;