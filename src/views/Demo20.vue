<template>
    <div class="demo">
        <h1>vuex案例</h1>
        <product-list/>
        <shopping-cart/>
    </div>
</template>
<script>
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
export default {
  name: "demo20",
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>
<style lang="less" scoped>
</style>
