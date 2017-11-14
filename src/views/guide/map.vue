<template>
    <i-article>
        <article>
            <h1>圆点的绘制</h1>
            <Anchor title="概述" h2></Anchor>
            <p>大数据圆点展示：可以设置背景颜色、大小、边框宽度、边框颜色、还有鼠标事件等</p>
            <Demo title="基础用法">
                <div slot="header">
                    <Anchor title="示例一：" h2></Anchor>
                    <p>普通大点高亮显示，展示数据的密度。
                    </p>
                </div>
                <div slot="desc">
                    基本使用方法，主要设置<code>style.normal</code>属性，
                    <code>normal</code> 可以设置的属性有：
                        <code>backgroundColor</code>、
                        <code>shadowColor</code>、
                        <code>shadowBlur</code>、
                        <code>globalCompositeOperation</code>、
                        <code>size</code>
                </div>
                <i-code lang="html" slot="code">{{code.introduce.demo1}}</i-code>
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
import code from "../../code2/guide.js";
import Demo1 from "./demo/dot-demo1.vue";
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