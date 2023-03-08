<template>
  <div class="header">
    <ul class="list-left">
      <li>
        <p class="slope"></p>
        <span>数字建造</span>
      </li>
      <li>
        <p class="slope"></p>
        <span>数字住房</span>
      </li>
      <li>
        <p class="slope"></p>
        <span>数字城管</span>
      </li>
    </ul>
    <div class="title">
      <div class="origin">
        <p></p>
      </div>
      <div class="title-name">
        广东省数字住建大数据监测平台
      </div>
    </div>
    <ul class="list-right">
      <li>
        <p class="slope"></p>
        <span>数字城建</span>
      </li>
      <li>
        <p class="slope"></p>
        <span>资质资格</span>
      </li>
    </ul>
    <div class="user-info">
      <p id='msg'>系统管理员，欢迎您！</p>
      <p id='opt'>【退出】</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navBar'
  }
</script>

<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: space-around;
    height: (70rem/96);
    line-height: (70rem/96);
    background-color: #0433B3;

    .list-left{
      display: flex;
      list-style: none;
      // justify-content: space-around;
      line-height: (40rem/96);
      padding: (10rem/96) 0;
      margin: 0 0 0 (105rem/96);

      li{
        width: (150rem/96);
        margin-right: (20rem/96);
        font-size: (20rem/96);
        color: #64BBFE;
        opacity: 0.6;

        .slope{
          transform: skewX(30deg);
          border: (1rem/96) solid #0166CE;
          margin: 0;
          height: (50rem/96);
          background: rgba(1, 85, 186, 0.5);
        }

        span{
          position: relative;
          top: (-45rem/96);
          left: (35rem/96);
        }
      }
    }

    .title{
      width: (600rem/96);
      perspective: (200rem/96);
      z-index: 1;
      .origin{
        margin: 0;
        border: (1rem/96) solid #24FBFE;
        border-width: 0 (1rem/96) (1rem/96);
        height: (120rem/96);
        background: #0433B3;
        transform: rotateX(-25deg);
        transform-origin: 100% 0 0;
        box-shadow: 0 0 (10rem/96) #24FBFE inset;
        p{
          margin: 0;
          width: (606rem/96);
          height: (20rem/96);
          position: relative;
          left: (-5rem/96);
          top: (36rem/96);
          border-left: (7rem/96) solid #24FBFE;
          border-right: (7rem/96) solid #24FBFE;
        }
      }
      .title-name{
        position: relative;
        top: (-115rem/96);
        font-size: (28rem/96);
        font-weight: 800;
        // color: #01AAFF;
        overflow: hidden;
        width: (400rem/96);
        margin: auto;
        background: #01AAFF -webkit-linear-gradient(left, #01AAFF, #ffffff) 0 0 no-repeat;
        background-size: (50rem/96);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: slideShine 3s infinite;
      }
    }

    @-webkit-keyframes slideShine {
        0% {
            background-position: -10% 0;
        }
        100% {
            background-position: 120% 100%;
        }
    }

    .list-right{
      display: flex;
      list-style: none;
      justify-content: space-around;
      line-height: (40rem/96);
      padding: (10rem/96) 0;
      margin: 0;

      li{
        width: (150rem/96);
        margin-left: (20rem/96);
        font-size: (20rem/96);
        color: #64BBFE;
        opacity: 0.6;

        .slope{
          transform: skewX(-30deg);
          border: (1rem/96) solid #0166CE;
          margin: 0;
          height: (50rem/96);
          background: rgba(1, 85, 186, 0.5);
        }

        span{
          position: relative;
          top: (-45rem/96);
          left: (35rem/96);
        }
      }
    }

    .user-info{
      display: flex;
      // margin: 0 (15rem/96);
      font-size: (16rem/96);
      p{
        // height: 20rem/96;
        margin: 0;
      }
      #msg{
        color: #FFFFFF;
      }
      #opt{
        color: #FFB430;
        cursor: pointer;
      }
    }
  }
</style>
