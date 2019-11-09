<template>
  <div>
      <h1>数据class和绑定style</h1>
  <!--绑定一个class-->
    <div :class="classA">绑定class</div>
    <!--通过数组的方式绑定多个class-->
    <div :class="[classA,classB]">绑定多个class</div>
    <!--通过对象的方式绑定class-->
    <div :class="classObj">通过对象的方式绑定class</div>
    <div :class="{ current: true,focus: false}">通过对象的方式绑定class</div>
    <div :class="{ current: isCurrent,focus: isFocus}">通过对象的方式绑定class</div>

    <!-- bind sytle -->
    <div :style="{color:'red',fontSize:'20px'}">bind style</div>
    <div :style="{color:color,fontSize:ft}">bind style</div>
    <div :style="styleObj">bind style</div>
  </div>
</template>
<script>
export default {
  name: "demo2",
  data() {
    return {
      classA: "current",
      classB: "focus",
      classObj: {
        current: true,
        focus: false
      },
      isCurrent: true,
      isFocus: true,
      color: "blue",
      ft: "30px",
      styleObj: {
        color: "gray",
        fontSize: "50px"
      }
    };
  }
};
</script>

