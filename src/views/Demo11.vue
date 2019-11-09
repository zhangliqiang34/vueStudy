<template>
<div class="demo">
    <h1>自定义指令</h1>
    <input type="text" v-focus>
    <div class="drag" v-drag>
        这个div
    </div>

</div>
</template>
<script>
// import Vue from "vue";
// Vue.filter("uppercase", value => {
//   return value.toUpperCase();
// });
import drag from "../plugins/drag";
export default {
  name: "demo9",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  filters: {},
  directives: {
    focus: {
      inserted: (el, binding) => {
        console.log(binding);
        el.focus();
      }
    },
    // drag: {
    //   inserted: el => {
    //     const fnDown = ev => {
    //       // console.log(ev);
    //       let currentX = el.offsetLeft;
    //       let currentY = el.offsetTop;

    //       let downX = ev.clientX;
    //       let downY = ev.clientY;

    //       const fnMove = ev => {
    //         let left = ev.clientX - downX + currentX;
    //         let top = ev.clientY - downY + currentY;
    //         el.style.left = left + "px";
    //         el.style.top = top + "px";
    //       };

    //       const fnUp = ev => {
    //         document.removeEventListener("mousemove", fnMove, false);
    //         document.removeEventListener("mouseup", fnUp, false);
    //       };
    //       document.addEventListener("mousemove", fnMove, false);
    //       document.addEventListener("mouseup", fnUp, false);
    //       return false;
    //     };

    //     el.addEventListener("mousedown", fnDown, false);
    //   }
    // }

    //引入第三方插件
    drag: {
      inserted: el => {
        drag(el);
      }
    }
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
