<template>
  <div class="message" v-if="isShow" :style="styles">
    <i class="iconfont" :class="icon"></i>
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  // props: ["type", "message"],
  data() {
    return {
      isShow: false,
      type: "",
      message: "",
      types: {
        error: {
          icon: "icon-error",
          color: "#f56c6c",
          backgroundColor: "#fde2e2",
          borderColor: "#fef0f0f0"
        },
        success: {
          icon: "icon-success",
          color: "#67c23a",
          backgroundColor: "#f0f9eb",
          borderColor: "#e1f3d8"
        },
        warn: {
          icon: "icon-warn",
          color: "#e6a23c",
          backgroundColor: "#fdf6ec",
          borderColor: "#faecd8"
        },
        info: {
          icon: "icon-info",
          color: "#909399",
          backgroundColor: "#edf2fc",
          borderColor: "#e4e7ed"
        }
      }
    };
  },
  computed: {
    icon() {
      return this.types[this.type].icon;
    },
    styles() {
      const styles = { ...this.types[this.type] };

      delete styles.icon;
      return styles;
    }
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/iconfont/iconfont.css";

.message {
  padding: 8px 16px;
  line-height: 1.8;
  font-size: 14px;
  border-radius: 4px;
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  .iconfont {
    margin-right: 10px;
  }
}
</style>
