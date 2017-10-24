/**
 * Created by aresn on 16/8/22.
 */
const routers = [{
        path: '/docs/guide/introduce',
        meta: {
            title: 'inMap介绍'
        },
        component: (resolve) => require(['./views/guide/introduce.vue'], resolve)
    },
    {
        path: '/docs/guide/install',
        meta: {
            title: '安装'
        },
        component: (resolve) => require(['./views/guide/install.vue'], resolve)
    },
    {
        path: '/docs/guide/dotOverlay',
        meta: {
            title: '点的绘制'
        },
        component: (resolve) => require(['./views/guide/dotOverlay.vue'], resolve)
    },
    // {
    //     path: '*',
    //     redirect: '/docs/guide/introduce'
    // }
];

export default routers;