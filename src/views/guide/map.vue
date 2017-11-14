<template>
    <i-article>
        <article>
            <h1>inMap对象</h1>
            <Anchor title="概述" h2></Anchor>
            <p>inMap对象提供了创建了map和overlay图层对象，还提供了util工具类。</p>
            <Demo title="基础用法">
                <div slot="header">
                    <Anchor title="示例一：" h2></Anchor>
                    <p>创建一个inMap实例，并设置地图中心点、主题和地图级别区间。 inMap对百度地图做了一层封装，可以用创建的后的inmap实例
                        <code>
                            inmap.map
                        </code>访问。
                    </p>
                </div>
                <div slot="desc">
                    基本使用方法:设置一下三个属性，
                    <code>id</code>、
                    <code>center</code>、
                    <code>zoom</code>、
                    <code>skin</code>。
                </div>
                <i-code lang="html" slot="code">{{code.map}}</i-code>
                <div slot="demo" style="height:500px; position: relative; background-color: antiquewhite;">
                    <Demo1></Demo1>
                </div>
            </Demo>

        </article>
    </i-article>
</template>
<script>
    import iArticle from "../../components/article.vue";
    import Anchor from "../../components/anchor.vue";
    import Demo from "../../components/demo.vue";
    import iCode from "iCode";
    import code from "../../code2/map.js";
    import Demo1 from "./demo/map-demo1.vue";
    // debugger
    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor,
            Demo1,
        },
        data() {
            return {
                code: code
            };
        },
        methods: {}
    };
</script>