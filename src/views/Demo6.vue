<template>
  <div>
    <h1>事件修饰符</h1>
   <div @click="fatherClick">
       父级
       <div @click="subClick1">子级1</div>
       <!--阻止冒泡修饰符-->
       <div @click.stop="subClick2">子级2</div>
   </div>
   <hr>
       <!--阻止默认事件-->
   <li @click.right="rightClick">点击右键</li>
    <button @click.right.prevent="rightClick">ok</button>
   <hr>
   <div @click.self="fatherClick">
       父级
       <div @click.stop="subClick2">子级</div>
   </div>
   <hr>
   <input type="text" @keydown.ctrl="ctrlEvent">
   <hr>
   <input type="text" @keydown.enter="submit">
   <hr>
   <input type="text" @keydown.delete="deleteEvent">
   <hr>
   <input type="text" @keydown.space.prevent="spaceEvent">

  </div>
</template>
<script>
export default {
  name: "demo6",
  data() {
    return {};
  },
  methods: {
    fatherClick() {
      console.log("父级事件");
    },
    subClick1() {
      console.log("子级1事件");
    },
    subClick2() {
      console.log("子级2事件");
    },
    rightClick() {
      console.log("点击了右键");
    },
    ctrlEvent() {
      console.log("按下了ctrl");
    },
    submit() {
      console.log("提交了");
    },
    deleteEvent() {
      console.log("删除了");
    },
    spaceEvent() {
      console.log("阻止空格");
    }
  }
};
</script>

