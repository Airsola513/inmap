 export default {
     map: `
     <script> 
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
    </script>`
    ,

 }