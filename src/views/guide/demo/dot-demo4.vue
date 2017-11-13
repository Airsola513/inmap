<template>
  <div ref='map' style="position: absolute;left: 0;right: 0;bottom: 0;top: 0;">
  </div>
</template>
<script>
  import jsonData from './data.js';
  export default {
    data() {
      return {};
    },
    mounted() {
      let dom = this.$refs.map;
      let data = jsonData;

      var map = new inMap.Map({
        center: [105.403119, 38.028658],
        zoom: {
          value: 5,
          show: true,
          max: 18,
          min: 5
        },
        id: dom,
        skin: "Blueness",
        zoom: {
          show: true
        }
      });
      var overlay = new inMap.DotOverlay({
        style: {
          normal: {
            backgroundColor: "rgba(200, 200, 50, 1)", // 填充颜色
            borderColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            size: 5 // 半径
          },
          mouseOver: {
            backgroundColor: "rgba(200, 200, 200, 1)",
            borderColor: "rgba(255,255,255,1)",
            borderWidth: 1
          },
          selected: {
            borderWidth: 1,
            backgroundColor: "rgba(184,0,0,1)",
            borderColor: "rgba(255,255,255,1)"
          },
          splitList: [{
              //设置区间颜色
              start: 0,
              end: 2,
              backgroundColor: "rgba(156,200,249,0.7)"
            },
            {
              start: 2,
              end: 5,
              backgroundColor: "rgba(93,158,247,0.7)"
            },
            {
              start: 5,
              end: 7,
              backgroundColor: "rgba(134,207,55,0.7)"
            },
            {
              start: 7,
              backgroundColor: "rgba(252,198,10,0.7)"
            }
          ]
        },
        data: data,
        event: {
          onMouseClick: function (item, event) {
            //能获取当前点的信息
          }
        }
      });
      map.add(overlay);
    },
    methods: {}
  };
</script>