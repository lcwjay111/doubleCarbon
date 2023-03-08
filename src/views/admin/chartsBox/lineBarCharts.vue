<template>
  <div class="info-box">
    <div id="corner1">
      <div id="corner1-1"></div>
      <div id="corner1-2"></div>
    </div>
    <div id="corner2"></div>
    <div class="box-title">
      <span>城市生活垃圾无害化处理率指标完成情况</span>
    </div>
    <div id="lineBarChart"></div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
  setup() {
    let charts = inject("ec")
    let option = {
      color: ['#388EF6', '#00FF99'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['降雨量', '气温'],
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12
        },
        top: '10%'
      },
      grid: {
        bottom: '15%',
        left: '15%'
      },
      xAxis: {
        data: [
          '广州', '深圳', '惠州', '东莞', '佛山', '江门',
          '茂名', '清远', '中山', '汕头'
        ],
        axisLabel: {
          rotate: 20,
          color: '#FFFFFF',
          interval: 0,         // 显示所有的x轴分割段标签， 类型为category有效
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
      yAxis: [
        {
          min: 0,
          max: 300,
          interval: 50,
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#193B9D'
            }
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          }
        },
        {
          position: 'right',
          min: 0,
          max: 30,
          interval: 5,
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#193B9D'
            }
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          }
        }
      ],
      series: [
        {
          name: '降雨量',
          data: [175, 125, 90, 130, 45, 65, 65, 47, 50, 52],
          type: 'bar',
          gradient: {
            color: ['#37a2da', '#67e0e3']
          },
          animationCurve: 'easeOutBounce'
        },
        {
          name: '气温',
          data: [23, 18, 16, 14, 10, 8, 6, 6, 6, 6],
          type: 'line',
          yAxisIndex: 1,
          animationCurve: 'easeOutBounce'
        }
      ]
    }

    function initLineBarChart() {
      let chart = charts.init(document.getElementById('lineBarChart'))
      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option)
      window.addEventListener("load", function() {
        chart.resize()
      })
    }

    onMounted(() => {
      initLineBarChart()
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/style.scss';
  #lineBarChart{
    position: relative;
    top: (-50rem/96);
    // width: 340rem/96;
    height: (250rem/96);
    // margin-left: 20rem/96;
  }
</style>
