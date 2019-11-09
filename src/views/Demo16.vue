<template>
<div class="demo">
    <h1>动态组件</h1>

    <button @click="currentComponent = 'DynamicDemo1'">组件1</button>
    <button @click="currentComponent = 'DynamicDemo2'">组件2</button>

    <!-- <DynamicDemo1 v-if="currentComponent === 'DynamicDemo1'"/>
    <DynamicDemo2 v-else/> -->
    <!-- keep-alive保持组件状态 -->
    <keep-alive>
          <component :is="currentComponent"></component>
    </keep-alive>
</div>
</template>
<script>
import DynamicDemo1 from "../components/DynamicComponent1";
import DynamicDemo2 from "../components/DynamicComponent2";
export default {
  name: "demo16",
  data() {
    return {
      currentComponent: "DynamicDemo1"
    };
  },
  components: {
    DynamicDemo1,
    DynamicDemo2
  },
  computed: {},
  methods: {},
  watch: {},
  filters: {},
  directives: {}
};
</script>
