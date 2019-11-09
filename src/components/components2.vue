<template>
    <div>
        <input type="text" v-model="val" @input="submit">
        <!-- <button @click="submit">提交</button> -->
    </div>
</template>
<script>
export default {
  name: "Components2",
  props: ["text", "msg"],
  model: {
    prop: "msg",
    event: "on-callback"
  },
  data() {
    return {
      //   val: this.text;
      val: this.msg
    };
  },
  methods: {
    submit() {
      this.$emit("on-callback", this.val);
    }
  }
};
</script>