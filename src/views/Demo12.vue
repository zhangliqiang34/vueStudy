<template>
<div class="demo">
    <h1>自定义组件</h1>
    <!-- <my-component></my-component> -->
    <!-- <my-component :text="msg"></my-component>
    <my-component :num="1"></my-component>
    <my-component :obj="obj"></my-component>
    <my-component :list="list"></my-component> -->
    <!-- number,boolean,object,array类型数据必须用动态绑定的方式传参 -->
    <my-component 
    :text="msg"
    :obj="obj"
    :num="number"
    :bool = "bool"
    :arr="list"></my-component>



</div>
</template>
<script>
// import Vue from "vue";
// Vue.filter("uppercase", value => {
//   return value.toUpperCase();
// });
import MyComponent from "../components/components1";
import MyComponent2 from "../components/components2";
export default {
  name: "demo12",
  data() {
    return {
      msg: "中国男足",
      number: 102,
      bool: false,
      obj: {
        a: 3,
        b: "haha"
      },
      list: [1, 21, 3]
    };
  },
  computed: {},
  methods: {},
  watch: {},
  filters: {},
  directives: {},
  components: {
    MyComponent
  }
};
</script>
<style lang="less" scoped>
.drag {
  position: absolute;
  background: red;
  width: 300px;
  height: 300px;
}
</style>
