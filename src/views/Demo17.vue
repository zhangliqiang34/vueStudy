<template>
  <div class="demo">
    <h1>路由</h1>
    {{
    $route.fullPath
    }}
    <div>
      <button @click="switchs">切换路由</button>
      <button>demo6</button>
    </div>
    <router-view />
  </div>
</template>
<script>
// import DynamicDemo1 from "../components/DynamicComponent1";
// import DynamicDemo2 from "../components/DynamicComponent2";
export default {
  name: "demo17",
  data() {
    return {
      txt: "abc"
    };
  },
  mounted() {
    //console.log(this.$route);
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
      this.$router.replace({
        path: "demo17/3333/aaaa",
        query: {
          key: "jisjdf"
        },
        hash: "#ppp"
      });
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
  },
  beforeRouteEnter(to, from, next) {
    //   ${//does NOT have access to `this` component instance}
    // }
    console.log("beforeRouteEnter:即将进入demo17");
    //beforeRouteEnter读取不到this 会报错
    // console.log(this.txt);
    next(vm => {
      console.log(vm.txt);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate:即将更新demo17");
    //beforeRouteUpdate可以读取this
    console.log(this.txt);
    next();
  },
  beforeRouteLeave(to, from, next) {
    //    ${//has access to `this` component instance}
    // }
    console.log("beforeRouteLeave:即将离开demo17");
    //beforeRouteLeave可以读取this
    console.log(this.txt);
  }
};
</script>
