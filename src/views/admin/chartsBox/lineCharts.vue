<template>
  <div class="info-box">
    <div id="corner1">
      <div id="corner1-1"></div>
      <div id="corner1-2"></div>
    </div>
    <div id="corner2"></div>
    <div class="box-title">
      <span>综合管廊</span>
    </div>
    <div id="lineChart"></div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
  setup() {
    let charts = inject("ec")
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#3F95E4'
          }
        },
        // position: function (pos, params, dom, rect, size) {
        //   return [pos[0], '5%'];  // 提示框在顶部，随光标位置横向偏移
        // }
      },
      legend: {
        data: ['开工长度', '形成廊体长度', '运营管廊长度'],
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12
        },
        top: '5%',
        left: '2%'
      },
      grid: {
        left: '13%',
        top: '30%',
        width: '82%',
        height: '45%'
      },
      xAxis: {
        data: ['广州', '深圳', '惠州', '东莞', '佛山', '江门', '茂名', '清远', '中山', '汕头'],
        axisLabel: {
          color: '#FFFFFF',
          interval: 0         // 显示所有的x轴分割段标签， 类型为category有效
        },
        axisLine: {
          lineStyle: {
            color: '#30ADFD'
          }
        }
      },
      yAxis: {
        axisLabel: {
          color: '#FFFFFF',
          // interval: 0
        },
        axisLine: {
          lineStyle: {
            color: '#30ADFD'
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#193B9D'
          }
        }
      },
      series: [
        {
          name: '开工长度',
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 4100, 2700, 3400],
          type: 'line',
          // stack: 'a',
        },
        {
          name: '形成廊体长度',
          data: [1400, 3230, 2900, 5100, 6500, 3200, 7985, 1500, 2250, 3600],
          type: 'line',
          // stack: 'a',
        },
        {
          name: '运营管廊长度',
          data: [2100, 2560, 1340, 4100, 3200, 7800, 1985, 5300, 5600, 2100],
          type: 'line',
          // stack: 'a',
        }
      ]
    }

    function initLineChart() {
      let chart = charts.init(document.getElementById('lineChart'))
      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option);
      window.addEventListener("load", function() {
        chart.resize();
      });
    }

    onMounted(() => {
      initLineChart()
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/style.scss';
  #lineChart{
    position: relative;
    top: (-40rem/96);
    height: (270rem/96);
    padding-left: (10rem/96);
  }
</style>
