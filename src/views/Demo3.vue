<template>
  <div>
    <h1>v-if条件判断</h1>
    <!-- v-if条件判断为false时，删除该元素-->
    <div v-if="isShow">isShow为true的时候才显示</div>
    <div v-else-if="isElse">isElse为true的时候才显示</div>
    <div v-else>所有条件都不满足</div>
<!-- -->
    <div v-if="isShow2">
        <div>第一行</div>
        <div>第二行</div>
    </div>
    <!-- template不会渲染到dom中-->
    <template v-if="isShow2">
        <div>第一行</div>
        <div>第二行</div>
    </template>

    <!-- v-show 的值为false后 不会删除dom元素  只是修改样式并隐藏 <div style="display: none;">通过v-show控制条件渲染</div>-->

    <div v-show="isShow3">通过v-show控制条件渲染</div>

  </div>


</template>
<script>
export default {
  name: "demo3",
  data() {
    return {
      isShow: true,
      isElse: true,
      isShow2: true,
      isShow3: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShow = false;
      this.isShow3 = false;
    }, 3000);
    setTimeout(() => {
      this.isElse = false;
    }, 4000);
  }
};
</script>

