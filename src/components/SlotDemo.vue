<template>
    <div>
        <h2 class="title">{{title}}</h2>
        <slot ></slot>
        <slot name="btns"></slot>
    </div>
</template>
<script>
export default {
  name: "SlotDemo",
  props: ["title"]
};
</script>