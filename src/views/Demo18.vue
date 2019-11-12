<template>
  <div class="demo">
    <h1>组件的钩子函数(生命周期)</h1>
   
    <div id="msg">
    {{msg}}
    </div>
    <button @click="modify">修改</button>

  </div>
</template>
<script>
export default {
  name: "demo18",
  data() {
    return {
      msg: "Yes"
    };
  },
  methods: {
    show() {
      console.log("执行了show方法");
    },
    modify() {
      this.timer = setTimeout(() => {
        this.msg = Date.now();
        console.log(this.msg);
      }, 3000);
    }
  },
  beforeCreate() {
    //组件实例化之前，
    //data和methods里面的属性和方法还是读取不到的
    console.log(this.show());
  },
  created() {
    //data和methods都已经初始化完成
    //data和methods里面的属性和方法都可以读取
    //但是这时候模板还没有编译
    console.log(this.msg);
    console.log(this.show());
  },
  beforeMount() {
    //模板已经编辑，也是页面还没有渲染
    //页面的内容还是模板字符串
    console.log(document.getElementById("msg"));
  },
  mounted() {
    //页面渲染完成，我们可以看到最终的效果
    console.log("mounted", document.getElementById("msg"));
  },
  beforeUpdate() {
    //页面更新之前
    //此时data里面的属性更新了，但是页面还没有更新
    console.log(
      "beforeUpdate",
      this.msg,
      document.getElementById("msg").innerText
    );
  },
  updated() {
    //页面更新后
    //此时data里面的属性更新了，页面也更新了
    console.log("updated", this.msg, document.getElementById("msg").innerText);
  },
  beforeDestroy() {
    //页面销毁之前
    console.log("beforeDestroy");
    clearTimeout(this.timer);
  },
  destroyed() {
    //页面销毁之后
    console.log("destroyed");
  }
};
</script>
