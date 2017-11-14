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

            <Demo title="基础用法">
                <div slot="header">
                    <Anchor title="示例二：" h2></Anchor>
                    <p>设置圆点的悬浮样式和点击后样式。
                    </p>
                </div>
                <div slot="desc">
                    基本使用方法，主要设置<code>style.mouseOver</code><code>style.selected</code>
                    里面的样式属性     
                </div>
                <i-code lang="html" slot="code">{{code.introduce.demo2}}</i-code>

                <div slot="demo" style="height:500px; position: relative;background-color: antiquewhite;">
                    <Demo2></Demo2>   
                </div>
            </Demo>
            <Demo title="基础用法">
                <div slot="header">
                    <Anchor title="示例三：" h2></Anchor>
                    <p>根据数据的count权重值，设置圆的大小。
                    </p>
                </div>
                <div slot="desc">
                    基本使用方法，主要设置<code>style.splitList</code>
                     <code>start</code>和<code>end</code>表示一个区间。 
                     <code>start</code>表示：大于等于，<code>end</code>表示：小于。
                     当前demo根据区间设置了<code>size</code>属性
                </div>
                <i-code lang="html" slot="code">{{code.introduce.demo3}}</i-code>

                <div slot="demo" style="height:500px; position: relative;background-color: antiquewhite;">
                    <Demo3></Demo3>   
                </div>
            </Demo>
             <Demo title="基础用法">
                <div slot="header">
                    <Anchor title="示例四：" h2></Anchor>
                    <p>根据数据的count权重值，设置圆的颜色
                    </p>
                </div>
                <div slot="desc">
                   基本使用方法，主要设置<code>style.splitList</code>
                     <code>start</code>和<code>end</code>表示一个区间。 
                     <code>start</code>表示：大于等于，<code>end</code>表示：小于。
                     当前demo根据区间设置了<code>backgroundColor</code>属性
                </div>   
                </div>
                <i-code lang="html" slot="code">{{code.introduce.demo4}}</i-code>

                <div slot="demo" style="height:500px; position: relative;background-color: antiquewhite;">
                    <Demo4></Demo4>   
                </div>
            </Demo>
            <Demo title="基础用法">
                <div slot="header">
                    <Anchor title="示例2 DotOverlay" h2></Anchor>
                    <p>inmap提供了自动分配颜色的功能（在实际项目中，最让人头疼的就是如何设置颜色区间，主要原因是数据是时时更新的，导致数据空间分布状态不确定，要采用实例二那种方式显然很不合适，人工设置区间颜色的成本很高）
                        <br/> 下面展示的是把圆点分成7等份颜色的示例,主要是这是<code>color</code>属性，接收一个数组:颜色由冷色到暖色。
                    </p>
                </div>
                <div slot="desc">
                    <p>基本使用方法
                        <code>colors</code>接收一个数组类型
                        </P>
                </div>
                <i-code lang="html" slot="code">{{code.introduce.demo5}}</i-code>

                <div slot="demo" style="height:500px;position: relative;background-color: antiquewhite;">
                  <Demo5></Demo5>
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
import Demo2 from "./demo/dot-demo2.vue";
import Demo3 from "./demo/dot-demo3.vue";
import Demo4 from "./demo/dot-demo4.vue";
import Demo5 from "./demo/dot-demo5.vue";
// debugger
export default {
  components: {
    iArticle,
    iCode,
    Demo,
    Anchor,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5
  },
  data() {
    return {
      code: code
    };
  },
  methods: {}
};
</script>