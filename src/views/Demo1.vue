<template>
  <div class="demo1">
    <h1>数据绑定 v-bind</h1>
    <!--花括号 {{}} 绑定数据-->
    <p>{{msg}}</p>
    <div>{{type + ':' + msg}}</div>
    <!--v-bind绑定属性-->
    <div v-bind:title="title" v-bind:msg="msg">This is a div</div>
    <div :title="title" :msg="msg">This is another div</div>

    <!--绑定一个动态属性-->
    <a :[attrName]="title">links</a>

  </div>
</template>
<script>
export default {
  name: "demo1",
  data() {
    return {
      msg: "demo1",
      type: "news",
      title: "This is a div",
      attrName: "title"
    };
  },
  mounted() {
    setTimeout(() => {
      this.msg = "ssssss";
      this.attrName = "msg";
    }, 3000);
  }
};
</script>

