<template>
  <div id="myMap"></div>
</template>

<script>
import { inject, onMounted, nextTick } from 'vue'
import guangdongJson from '@/statics/guangdong.json'
export default{
  setup() {
    let charts = inject("ec")
    let chart = null
    // tdTheme: '',
    let color = [
      '#fffed1',
      '#edb230',
      '#eefc57',
      '#ff7600',
      '#00a287',
      '#00f6ff'
    ]

    function initMap() {
      // 基于准备好的dom，初始化echarts实例
      chart = charts.init(document.getElementById('myMap'))
      charts.registerMap('guangdong', guangdongJson) // 绘制图表
      let data = guangdongJson.features.map(item => {
        return {
          name: item.properties.name,     // 城市名
          value: (Math.random() * 1000).toFixed(0)
        }
      })
      // console.log(cities)
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            var tipHtml = '<div style="font-size: 16px;height: 60px;line-height: 30px;background:#000259;opacity: 0.75;border-radius: 3px;color:#fff">' + params.seriesName + '<br/>' + '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '个&nbsp;&nbsp;' + '</span>' + '</div>';
            return tipHtml;
          }
        },
        geo: [{
          map: 'guangdong',
          aspectScale: 0.9,
          roam: false, //是否允许缩放
          //zoom: 1.1, //默认显示级别
          layoutSize: '95%',
          layoutCenter: ['50%', '40%'],
          itemStyle: {
            areaColor: '#005DDC',
            borderColor: '#329BF5',
            borderWidth: 1,
          },
          zlevel: 1,
          silent: true,
        }],
        series: [{
          tooltip: {
            formatter: function(params) {
              let tipHtml = '<div style="font-size: 16px;height: 28px;line-height: 30px;background:#000259;opacity: 0.75;border-radius: 3px;color:#fff">' + '&nbsp;&nbsp;' + params.data.name + '&nbsp;&nbsp;&nbsp;' + params.data.value + '人&nbsp;&nbsp;' + '</span>' + '</div>';
              return tipHtml;
            }
          },
          itemStyle: {
            areaColor: {
              type: 'radial',
              x: 0.6,
              y: 0.5,
              r: 0.4,
              colorStops: [{
                offset: 0,
                color: '#1277FB' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0160AD' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
            borderColor: '#37C1FD',
            borderWidth: 1,
          },
          emphasis: {     // 选中时的颜色
            label: {
              show: false
            },
            itemStyle: {
              areaColor: '#1277FB',
            }
          },
          aspectScale: 0.9,
          layoutCenter: ['50%', '39%'],
          layoutSize: '95%',
          type: 'map',
          map: 'guangdong',
          data: data,
          zlevel: 2
        }]
      }
      chart.setOption(option)
    }

    onMounted(() => {
      nextTick(() => {
        initMap()
      })
    })
  }
}
</script>

<style scoped>
  #myMap{
    width: 100%;
    height: 100%;
  }
</style>
