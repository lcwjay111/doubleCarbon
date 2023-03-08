<template>
  <div class="info-box">
    <div id="corner1">
      <div id="corner1-1"></div>
      <div id="corner1-2"></div>
    </div>
    <div id="corner2"></div>
    <div class="box-title">
      <span>全省危险性较大分部分项工程整改情况</span>
    </div>
    <div class="ring-lists">
      <div id="gaugeChart1"></div>
      <div id="gaugeChart2"></div>
      <div id="gaugeChart3"></div>
      <div id="gaugeChart4"></div>
      <div id="gaugeChart5"></div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
export default {
  setup() {
    let charts = inject("ec")
    let option = {
      title: {
        text: '起重吊装及起重机\n械安装拆卸工程',
        textStyle: {
          fontSize: 10,
          color: '#6094FE'
        },
        top: '65%',
        left: '-6%'
      },
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: 180,
          arcLineWidth: 5,
          center: ['50%', '30%'],
          radius: '60%',
          data: [
            {
              // name: 'itemA',
              value: 75
            }
          ],
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 5,
              color: [[1, '#1ed3e5'], [0, '#0A4CA6']]
            }
          },
          splitLine: {
            show: false
          },
          dataItemStyle: {
            lineCap: 'round'
          },
          detail: {
            show: true,
            formatter: '{value}%',
            color: '#1ed3e5',
            fontSize: 14,
            offsetCenter: [0, '10%']
          }
        }
      ]
    }

    function initGaugeChart() {
      let chart1 = charts.init(document.getElementById('gaugeChart1'))
      let chart2 = charts.init(document.getElementById('gaugeChart2'))
      let chart3 = charts.init(document.getElementById('gaugeChart3'))
      let chart4 = charts.init(document.getElementById('gaugeChart4'))
      let chart5 = charts.init(document.getElementById('gaugeChart5'))
      // 使用刚指定的配置项和数据显示图表。
      chart1.setOption(option);
      chart2.setOption(option);
      chart3.setOption(option);
      chart4.setOption(option);
      chart5.setOption(option);
      window.addEventListener("load", function() {
        chart1.resize();
        chart2.resize();
        chart3.resize();
        chart4.resize();
        chart5.resize();
      });
    }

    onMounted(() => {
      initGaugeChart()
    })
  }
}
</script>

<style scoped lang="scss">
@import '../scss/style.scss';
.ring-lists{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  #gaugeChart1, #gaugeChart2, #gaugeChart3, #gaugeChart4, #gaugeChart5 {
    width: (110rem/96);
    height: (110rem/96);
    position: relative;
    top: (-30rem/96);
    margin: (5rem/96) (20rem/96) 0;
  }
}
</style>
