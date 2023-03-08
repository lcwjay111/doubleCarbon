<template>
  <div class="info-box">
    <div id="corner1">
      <div id="corner1-1"></div>
      <div id="corner1-2"></div>
    </div>
    <div id="corner2"></div>
    <div class="box-title">
      <span>建筑起重机械现运行使用数量情况分类统计</span>
    </div>
    <div id="pieChart"></div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
  setup() {
    let charts = inject("ec")
    let option = {
      color: ['#388EF6', '#34CCFF', '#00FF99', '#03DFB3', '#FFFF99'],
      tooltip: {
        formatter: '{b}:{c}<br/>{d}%'
      },
      label: {
        color: '#1ED3E5'
      },
      series: [
        {
          type: 'pie',
          // radius: '60%',
          // center: ['55%', '60%'],
          data: [
            { name: '可口可乐', value: 93 },
            { name: '百事可乐', value: 32 },
            { name: '哇哈哈', value: 65 },
            { name: '康师傅', value: 44 },
            { name: '统一', value: 52 },
          ],
          // insideLabel: {
          //   show: true
          // },
          label: {
            show: true,
            // labelLineEndLength: 30,
            formatter: '{b}\n{c}'
          },
          roseType: true,
          clockwise: false
        }
      ]
    }

    function initPieChart() {
      let chart = charts.init(document.getElementById('pieChart'))
      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option)
      window.addEventListener("load", function() {
        chart.resize();
      })
    }

    onMounted(() => {
      initPieChart()
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/style.scss';
  #pieChart{
    position: relative;
    top: (-30rem/96);
    // left: (30rem/96);
    width: (500rem/96);
    height: (240rem/96);
    // margin-left: (20rem/96);
  }
</style>
