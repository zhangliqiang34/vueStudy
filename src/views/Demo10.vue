<template>
<div class="demo">
    <h1>过滤器</h1>
    <div>{{content | uppercase}}</div>
    <div>{{cont}}</div>

    <div>{{content | transform('capitalize')}}</div>
    <div>{{content | uppercase | join('~')}}</div>
</div>
</template>
<script>
// import Vue from "vue";
// Vue.filter("uppercase", value => {
//   return value.toUpperCase();
// });
export default {
  name: "demo10",
  data() {
    return {
      content: "sdjlsakjflsjlfsjlfdjlakssxooxnoilqln "
    };
  },
  computed: {
    cont() {
      return this.content.toUpperCase();
    }
  },
  methods: {},
  watch: {},
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
    transform(value, type) {
      switch (type) {
        case "uppercase":
          return value.toUpperCase();
          break;
        case "lowercase":
          return value.toLowerCase();
          break;
        case "capitalize":
          return value.charAt(0).toUpperCase() + value.substr(1);
          break;
        default:
          break;
      }
    },
    join(value, str) {
      return value.split("").join(str);
    }
  }
};
</script>