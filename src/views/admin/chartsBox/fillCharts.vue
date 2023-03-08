<template>
  <div class="info-box">
    <div id="corner1">
      <div id="corner1-1"></div>
      <div id="corner1-2"></div>
    </div>
    <div id="corner2"></div>
    <div class="box-title">
      <span>全省全省污水管网公里数历年趋势图</span>
    </div>
    <div id="fillChart"></div>
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
      grid: {
        bottom: '20%',
        left: '15%'
      },
      xAxis: {
        data: ['广州', '深圳', '惠州', '东莞', '佛山', '江门', '茂名', '清远', '中山', '汕头'],
        axisLabel: {
          color: '#FFFFFF',
          interval: 0,         // 显示所有的x轴分割段标签， 类型为category有效
          rotate: 20
        },
        axisLine: {
          lineStyle: {
            color: '#30ADFD'
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        axisLabel: {
          color: '#FFFFFF',
          // interval: 0
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //   color: '#30ADFD'
          // }
        },
        axisTick: {
          show: false
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
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 2700, 7600, 4340],
          type: 'line',
          smooth: true,
          lineStyle: {
            opacity: 0
          },
          areaStyle: {
            // gradient: ['rgba(254, 169, 79, 1)', 'rgba(254, 169, 79, 0.5)'],
            color: {    // 线性渐变色
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(254, 169, 79, 1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(254, 169, 79, 0.5)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        }
      ]
    }

    function initFillChart() {
      let chart = charts.init(document.getElementById('fillChart'))
      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option);
      window.addEventListener("load", function() {
        chart.resize();
      });
    }

    onMounted(() => {
      initFillChart()
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/style.scss';
  #fillChart{
    position: relative;
    top: (-55rem/96);
    height: (275rem/96);
    padding-left: (10rem/96);
  }
</style>
