<template>
<div class="demo">
    <h1>自定义组件</h1>
    <!-- <my-component></my-component> -->
    <!-- <my-component :text="msg"></my-component>
    <my-component :num="1"></my-component>
    <my-component :obj="obj"></my-component>
    <my-component :list="list"></my-component> -->
    <!-- number,boolean,object,array类型数据必须用动态绑定的方式传参 -->
    <!-- <my-component :text="content" 
                @on-callback="getData"></my-component> -->
                    <my-component v-model="content"></my-component>
    <div>{{content}}</div>



</div>
</template>
<script>
// import Vue from "vue";
// Vue.filter("uppercase", value => {
//   return value.toUpperCase();
// });
import MyComponent from "../components/components2";
export default {
  name: "demo12",
  data() {
    return {
      content: "sdfsafs"
    };
  },
  computed: {},
  methods: {
    getData(val) {
      this.content = val;
    }
  },
  watch: {},
  filters: {},
  directives: {},
  components: {
    MyComponent
  }
};
</script>
