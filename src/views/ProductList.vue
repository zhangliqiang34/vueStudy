<template>
    <div>
        <h2>商品列表</h2>
        <ul class="list">
            <li
                class="item"
                v-for="product in products"
                :key="product.id"
            >
                <div>{{product.title}}</div>
                <div>{{product.price}}</div>
                <button
                    class="btn"
                    :disabled="!product.sku"
                    @click="addToCart(product)"
                >
                    {{product.sku > 0 ? "添加到购物车" : "库存不足"}}
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { UPDATE_CART } from "../store/mutations-type.js";
export default {
  name: "productList",
  created() {
    this.getProducts();
  },
  computed: {
    ...mapState("products", ["products"])
  },
  methods: {
    ...mapActions("products", ["getProducts"]),
    ...mapActions("cart", {
      addToCart: "addToCart"
    })
  }
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  .item {
    width: 160px;
    height: 200px;
    border: 1px solid #ccc;
    background: #f0f0f0;
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .btn {
      cursor: pointer;
      color: #fff;
      height: 32px;
      line-height: 32px;
      background: #06f;
      padding: 0 8px;
      border: none;
      border-radius: 32px;
      outline: none;
      &:disabled {
        background: #ccc;
        color: #999;
        cursor: default;
      }
    }
  }
}
</style>


