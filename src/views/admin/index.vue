<template>
  <div id="indexPage" class="admin-page">
    <nav-bar />
    <div class="body">
      <div class="body-left">
        <bar-charts />
        <gauge-charts />
        <line-charts />
      </div>
      <div class="body-center">
        <flop-list />
        <div class="map-dist">
          <dv-border-box-12 class="border-box-12" >施工监管</dv-border-box-12>
          <map-item />
        </div>
        <div class="cities-series">
          <dv-border-box-12 class="border-box-12 series-title" >历史文化名城</dv-border-box-12>
          <div class="cities">
            <div class="city">广州市</div>
            <div class="city">佛山市</div>
            <div class="city">潮州市</div>
            <div class="city">惠州市</div>
            <div class="city">中山市</div>
          </div>
        </div>
      </div>
      <div class="body-right">
        <fill-charts />
        <pie-charts />
        <line-bar-charts />
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { pageResize } from '../../utils/resetScreenSize.js'
import navBar from "./navbar/index.vue"
import barCharts from "./chartsBox/barCharts.vue"
import gaugeCharts from "./chartsBox/gaugeCharts.vue"
import lineCharts from "./chartsBox/lineCharts.vue"
import fillCharts from "./chartsBox/fillCharts.vue"
import pieCharts from "./chartsBox/pieCharts.vue"
import lineBarCharts from "./chartsBox/lineBarCharts.vue"
import flopList from "./flopBoxList/index.vue"
import mapItem from "./map/index.vue"
export default {
  name: "admin",
  components: {
    navBar,
    barCharts,
    gaugeCharts,
    lineCharts,
    fillCharts,
    pieCharts,
    lineBarCharts,
    flopList,
    mapItem
  },
  setup() {
    provide('ec',echarts)
    onMounted(() => {
      pageResize()
    })
  },
  
}
</script>

<style lang="scss" scoped>
@import './scss/style.scss';
.border-box-12{
  width: (202rem/96);
  height: (50rem/96);
  color: #FFFFFF;
  font-size: (24rem/96);
  line-height: (50rem/96);
  text-align: center;
}
.cities-series{
  width: (500rem/96);
  // height: (300rem/96);
  margin-left: auto;
  position: relative;
  bottom: (350rem/96);
  // left: (390rem/96);
  .series-title{
    margin-left: auto;
    margin-bottom: (50rem/96);
  }
  .cities{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    // justify-content: flex-start;
    // align-items: flex-end;
    margin-left: auto;
    .city{
      width: (180rem/96);
      height: (60rem/96);
      background: rgba(1, 1, 109, 0.6);
      border: 1px solid #0183C7;
      margin: 0 (5rem/96) (20rem/96) (50rem/96);
      box-shadow: 0 0 (10rem/96) #0183C7 inset;
      line-height: (60rem/96);
      color: #05DC86;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>
