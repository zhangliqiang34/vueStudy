<template>
  <div class="demo">
    <h1>vuex状态管理</h1>
    <p>{{count}}</p>
    <p>{{count1}}</p>
    <p>{{count2}}</p>
    <hr />
    <button @click="add(1)">+1</button>
    <button @click="add(2)">+2</button>
    <button @click="add(10)">+10</button>
    <hr />
    <ul>
      <li v-for="item in filterList1" :key="item.id">{{item.name}} - {{item.sexName}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "demo19",
  data() {
    return {
      msg: "Yes"
    };
  },
  computed: {
    count1() {
      return this.$store.state.count;
    },
    ...mapState({
      count2: state => state.count
    }),
    ...mapState(["count"]),
    filterList1() {
      return this.$store.getters.filterList;
    }
  },
  methods: {
    add(val) {
      this.$store.commit("increment", val);
    },
    ...mapMutations({
      add2: "increment"
    }),
    ...mapMutations(["increment"])
  }
};
</script>
