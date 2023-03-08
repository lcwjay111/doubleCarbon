<template>
  <div class="info-box">
    <div id="corner1">
      <div id="corner1-1"></div>
      <div id="corner1-2"></div>
    </div>
    <div id="corner2"></div>
    <div class="box-title">
      <span>老旧小区改造情况</span>
    </div>
    <div id="barChart"></div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
export default {
  setup() {
    let charts = inject("ec")
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        position: function (pos, params, dom, rect, size) {
          return [pos[0], '5%'];  // 提示框在顶部，随光标位置横向偏移
        }
      },
      legend: {
        data: ['本年度申报老旧小区改造中央补助计划任务小区数', '本年度全省开工改造的老旧小区数', '本年度全省已完工改造的老旧小区数'],
        orient: 'vertical',
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12
        },
        // top: '8%',
        left: 0,
        itemGap: 2,
        itemWidth: 15,
        itemHeight: 9
      },
      grid: {
        left: '12%',
        top: '40%',
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
        // data: 'value',
        // scale: true,
        // splitNumber: 5,
        // max: 5000,
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
          name: '本年度申报老旧小区改造中央补助计划任务小区数',
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 4900, 4650, 2700],
          type: 'bar'
        },
        {
          name: '本年度全省开工改造的老旧小区数',
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 4900, 4650, 2700],
          type: 'bar'
        },
        {
          name: '本年度全省已完工改造的老旧小区数',
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 4900, 4650, 2700],
          type: 'bar'
        }
      ]
    }

    function initBarChart() {
      let chart = charts.init(document.getElementById('barChart'))
      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option)
      window.addEventListener("load", function() {
        chart.resize();
      })
    }

    onMounted(() => {
      initBarChart()
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/style.scss';
  #barChart{
    position: relative;
    top: (-30rem/96);
    height: (240rem/96);
    padding-left: (10rem/96);
  }
</style>
