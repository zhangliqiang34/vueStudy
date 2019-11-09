<template>
<div class="demo">
    <h1>组件插槽slot(内容分发)</h1>
    <slot-demo title="这是标题">
        <!-- 默认插槽 -->
        <div>这是内容</div>
        <!-- 默认插槽也可以写成这样 -->
        <template v-slot:default>
            <div>这是内容</div>
        </template>
        <!-- 具名插槽 -->
        <template v-slot:btns>
                <button>
                    按钮
                </button>
                <button>
                    按钮2
                </button>
        </template>
    </slot-demo>
</div>
</template>
<script>
import SlotDemo from "../components/SlotDemo";
export default {
  name: "demo15",
  data() {
    return {};
  },
  components: {
    SlotDemo
  },
  computed: {},
  methods: {},
  watch: {},
  filters: {},
  directives: {}
};
</script>
