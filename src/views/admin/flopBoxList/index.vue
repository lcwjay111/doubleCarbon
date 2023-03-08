<template>
  <div class="flop-list">
    <div class="flop-list-item">
      <div class="top-corner"></div>
      <div class="item-msg">
        <dv-digital-flop :config="flopNum1" class="flop-num" :key="key1" />
        <div class="item-info">全省及城市污水处理厂数量</div>
      </div>
    </div>
    <div class="flop-list-item">
      <div class="top-corner"></div>
      <div class="item-msg">
        <dv-digital-flop :config="flopNum2" class="flop-num" :key="key2" />
        <div class="item-info">全省污泥处理设施数量</div>
      </div>
    </div>
    <div class="flop-list-item">
      <div class="top-corner"></div>
      <div class="item-msg">
        <dv-digital-flop :config="flopNum3" class="flop-num" :key="key3" />
        <div class="item-info">全省及各地易涝点个数</div>
      </div>
    </div>
    <div class="flop-list-item">
      <div class="top-corner"></div>
      <div class="item-msg">
        <dv-digital-flop :config="flopNum4" class="flop-num" :key="key4" />
        <div class="item-info">全省生活垃圾处理设施</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, nextTick, onMounted } from 'vue'
export default {
  setup() {
    let key1 = ref(1)
    let key2 = ref(1)
    let key3 = ref(1)
    let key4 = ref(1)
    let flopNum1 = reactive({
      number: [100],
      content: '{nt}个',
      style: {
        fontSize: 20
      }
    })
    let flopNum2 = reactive({
      number: [80],
      content: '{nt}个',
      style: {
        fontSize: 20
      }
    })
    let flopNum3 = reactive({
      number: [60],
      content: '{nt}个',
      style: {
        fontSize: 20
      }
    })
    let flopNum4 = reactive({
      number: [74],
      content: '{nt}个',
      style: {
        fontSize: 20
      }
    })

    onMounted(() => {
      /* nextTick更新key值，强制刷新dv-digital-flop组件 */
      nextTick(() => {
        key1.value++
        key2.value++
        key3.value++
        key4.value++
      })
    })

    return  {
      key1,
      key2,
      key3,
      key4,
      flopNum1,
      flopNum2,
      flopNum3,
      flopNum4
    }
  }
}
</script>

<style scoped lang="scss">
  .flop-list{
    display: flex;
    justify-content: space-around;
    .flop-list-item{
      width: (190rem/96);
      height: (120rem/96);
      background: rgba(1, 1, 109, 0.6);
      box-shadow: 0 0 (10rem/96) #0E2D9E inset;
      .top-corner{
        width: (55rem/96);
        height: (50rem/96);
        border-top: (2rem/96) solid #0271EA;
        border-left: (2rem/96) solid #0271EA;
      }
      .item-msg{
        width: (120rem/96);
        margin: auto;
        position: relative;
        top: (-35rem/96);
        .flop-num{
          width:(100rem/96);
          height:(45rem/96);
          margin: auto;
        }
        .item-info{
          color: #00EAFF;
          font-size: (16rem/96);
        }
      }
    }
  }
</style>
