<template>
  <div>
    <!-- 全局提示框 -->
    <div v-show="visible && type==1" class="dialog-tips dialog-center">
      <div>
        <!-- <img src="../../static/image/message.png" /> -->
        {{message}}
      </div>
    </div>

    <div v-show="visible && type==2" class="dialog-tips dialog-center">
      <div>
        <!-- <img src="../../static/image/message2.png" /> -->
        {{message}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
      type: 1
    };
  }
};
</script>
<style lang="less">
.dialog-tips {
  position: absolute;
  z-index: 100;
  max-width: 90vw;
  height: 6vw;
  white-space: nowrap;
  background-color: #fff;
  border-radius: 3vw;
  padding-left: 10vw;
  padding-right: 3vw;
  left: 50%;
  top: 8vw;
  transform: translate(-50%);
  animation: name 2s ease-in;
  div {
    font-size: 2.6vw;
    line-height: 6vw;
    width: 100%;
    overflow: hidden;
    color: rgba(182, 142, 100, 1);
    img {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 8vw;
    }
  }
}
@-webkit-keyframes name {
  0% {
    left: 100%;
  }
  20% {
    left: 50%;
  }
  80% {
    left: 50%;
  }
  100% {
    left: -100%;
  }
}
</style>