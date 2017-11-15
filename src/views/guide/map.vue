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
                        </code>访问,了解地图实例，<a href="http://lbsyun.baidu.com/index.php?title=jspopular">请访问该地址访问百度地图文档</a>
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
            <div class="api" style="margin-top:10px">
                <Anchor title="API" h2></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>html的id属性或dom对象</td>
                            <td>String/DOM</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>skin</td>
                            <td>设置皮肤,inmap内置两种皮肤，分布别是 Blueness、WhiteLover。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>center</td>
                            <td>
                                设置地图中心点：[经度、维度]
                            </td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>zoom</td>
                            <td>设置地图的zoom工具条，参数如下：
                                <br/>
                                <ol > 
                                    <li>vue：当前默认初始化的地图级别</li>
                                    <li>show：ture/false 是否显示</li>
                                    <li>max：最大地图级别</li>
                                    <li>min：最小地图级别</li>
                                </ol></td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
        </article>
    </i-article>
</template>
<style>
.ivu-article ol li:not([class^=ivu-]) {
    margin-bottom: 0px;
    font-size: 12px;
}
</style>
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