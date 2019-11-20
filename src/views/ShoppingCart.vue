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
    <!-- <Message v-if="isShow" :type="message.type" :message="message.message" /> -->
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

// import Message from "../components/messages";
export default {
  name: "shoppingCart",
  data() {
    return {
      //   isShow: false,
      //   message: {}
    };
  },
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
    pay() {
      this.$store.dispatch("cart/pay").then(data => {
        if (data) {
          // this.isShow = true;
          // this.message = {
          //   type: "success",
          //   message: "结算成功"

          // };
          // this.$message = {
          //   type: "success",
          //   message: "结算成功"
          // };
          this.$myToast.success("这是提示信息");
          this.$message.success("结算成功", "success");
        } else {
          // this.isShow = true;
          // this.message = {
          //   type: "error",
          //   message: "结算失败"
          // };
          // this.$message = {
          //   type: "error",
          //   message: "结算失败"
          // };
          this.$myToast.success("这是提示信息");
          this.$message.success("结算失败", "error");
        }

        //   setTimeout(() => {
        //     this.isShow = false;
        //   }, 2000);
      });
    }
  }
};
</script>
<style lang="less" scpoed>
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
