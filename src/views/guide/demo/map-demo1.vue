<template>
    <div ref='map' style="position: absolute;left: 0;right: 0;bottom: 0;top: 0;">
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        mounted() {
            let dom = this.$refs.map;
            
            var inmap = new inMap.Map({
                skin: "Blueness",
                center: [105.403119, 38.028658],
                zoom: {
                    value: 5,
                    show: true,
                    max: 18,
                    min: 5
                },
                id: dom,
                zoom: {
                    show: true
                }
            });
            console.log('百度地图实例', inmap.map);
        },
        methods: {}
    };
</script>