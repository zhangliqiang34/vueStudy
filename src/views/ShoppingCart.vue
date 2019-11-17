<template>
  <div>
    <h2>购物车</h2>
    <p v-show="!products.length">
      <i>购物车空空如也</i>
    </p>
    <ul class="list">
      <li class="item" v-for="product in products" :key="product.id">
        {{product.title}}
        {{product.price}}
        <input
          class="input"
          type="number"
          :min="1"
          :max="product.max"
          :value="product.nums"
          @input="onChangeNums(product,$event)"
        />
        =
        {{product.price * product.nums | float(2)}}
        <button
          class="btn"
          @click="deleteProdduct(product)"
        >删除</button>
      </li>
    </ul>
    <div class="payment">
      <p>总计：{{total | float(2)}}</p>
      <p>
        <button class="btn-pay" :disabled="!products.length" @click="pay">结算</button>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "shoppingCart",
  computed: {
    ...mapState("cart", ["products"]),
    ...mapGetters("cart", ["total"])
  },
  filters: {
    float(val, num) {
      return val.toFixed(num);
    }
  },
  methods: {
    onChangeNums(product, e) {
      let val = e.target.value;
      console.log(product, val);
      this.$store.dispatch("cart/onChangeNums", { product, val });
      if (val >= product.max) {
        e.target.value = product.max;
      }
    },
    deleteProdduct(product) {
      this.$store.dispatch("cart/deleteProduct", product);
    },
    pay(product) {
      this.$store.dispatch("cart/pay").then(data => {
        if (data) {
          alert("结算成功");
        } else {
          alert("结算失败");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  text-align: left;
  list-style: circle;
  .item {
    margin-top: 16px;
    .ipnut {
      width: 40px;
    }
  }
}

.payment {
  text-align: right;
  .btn-pay {
    padding: 0 16px;
    font-size: 16px;
    height: 32px;
    line-height: 32px;
    border: none;
    border-radius: 32px;
    background: #f60;
    color: #fff;
    cursor: pointer;
    outline: none;
    &:disabled {
      background: #ccc;
      color: #999;
      cursor: pointer;
    }
  }
}
</style>
