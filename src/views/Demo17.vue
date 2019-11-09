<template>
<div class="demo">
    <h1>路由</h1>
    {{
        $route.fullPath
    }}
    <div>
        <button @click="switchs">demo5</button>
        <button>demo6</button>
    </div>
    <router-view/>>
</div>
</template>
<script>
// import DynamicDemo1 from "../components/DynamicComponent1";
// import DynamicDemo2 from "../components/DynamicComponent2";
export default {
  name: "demo17",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    switchs() {
      //通过js切换路由的方式
      //   this.$router.push("/demo5");
      //通过name切换路由
      // this.$router.push({
      //   name: "demo17/3333/aaaa",
      //   query: {
      //     key: "jisjdf"
      //   },
      //   hash: "#ppp"
      // })
      //通过path切换路由，不能穿params
      // this.$router.push({
      //   path: "demo17/3333/aaaa",
      //   query: {
      //     key: "jisjdf"
      //   },
      //   hash: "#ppp"
      // })
      //replace用法跟push一样，但是replace不会产生历史记录
      // this.$router.replace({
      //   path: "demo17/3333/aaaa",
      //   query: {
      //     key: "jisjdf"
      //   },
      //   hash: "#ppp"
      // });
      //router-link的to属性也能跟push方法一样使用
      // <router-link :to="{
      //   path: 'demo17/3333/aaaa',
      //   query: {
      //       key: 'jisjdf'
      //    },
      //   hash: '#ppp'
      // }">Demo17</router-link> |
      //类似window.history.go(-1)
      // this.router.go(-1);
    }
  }
};
</script>
