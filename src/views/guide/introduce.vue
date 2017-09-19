<template>
    <i-article>
        <article>
            <h1>关于 inMap</h1>
            <p>inMap 是一款基于百度地图的大数据可视化库，专注于大数据的方向的点线面的展示。</p>
            <Anchor title="特性" h2></Anchor>
            <ul>
                <li>高性能、解决了大数据展示问题</li>
                <li>多线程</li>
                <li>友好的 API 、使用方便</li>
                <li>可以自定义主题</li>
            </ul>
            <Anchor title="安装" h2></Anchor>
            <p>使用 npm</p>
            <i-code lang="auto" bg>{{ code.introduce.install }}</i-code>
            <p>或使用 &lt;script&gt; 全局引用</p>
            <i-code lang="html" bg>{{ code.introduce.script }}</i-code>
            <p>inMap依赖百度地图，需要开发者<a href='http://lbsyun.baidu.com'>到百度地图开发</a>平台申请，方可使用百度地图。</p>
            <Anchor title="示例" h2></Anchor>
            <i-code lang="html" bg>{{ code.introduce.demo }}</i-code>
            <p>效果</p>
            <Slider v-model="value" range></Slider>
            <Anchor title="版本" h2></Anchor>
            <p>
                <a href="https://www.npmjs.com/package/iview" target="_blank">
                    <img src="https://img.shields.io/npm/v/iview.svg?style=flat-square">
                </a>
            </p>
            <Anchor title="兼容" h2></Anchor>
            <ul>
                <li>支持 Vue.js 2.x</li>
                <li>支持 Vue.js 1.x <a href="http://v1.iviewui.com">查看 1.0 文档</a></li>
                <li>支持服务端渲染</li>
                <li>支持 Nuxt.js</li>
                <li><a href="http://electron.atom.io/" target="_blank">Electron</a></li>
                <li>由于 <a href="https://cn.vuejs.org/v2/guide/reactivity.html" target="_blank">Vue.js</a> 是基于Object.defineProperty实现数据追踪，故不支持IE8及更低版本的浏览器。</li>
            </ul>
            <Anchor title="相关链接" h2></Anchor>
            <ul>
                <li>
                    <a href="http://cn.vuejs.org/" target="_blank">Vue官方文档</a>
                </li>
                <li>
                    <a href="http://webpack.github.io/" target="_blank">webpack</a>
                </li>
                <li>
                    <a href="https://github.com/ant-design/ant-design/" target="_blank">Ant Design</a>
                </li>
                <li>
                    <a href="https://git.oschina.net/icarusion/iview" target="_blank">码云</a>
                </li>
            </ul>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code2/guide';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                code: Code,
                value: [20, 50]
            }
        },
        methods: {

        }
    }
</script>