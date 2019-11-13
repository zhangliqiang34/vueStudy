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
    <hr />
    <ul>
      <li v-for="item in filterList" :key="item.id">{{item.name}} - {{item.sexName}}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="item in filterList2" :key="item.id">{{item.name}} - {{item.sexName}}</li>
    </ul>

    <hr />
    <button @click="getData(3)">获取3条数据</button>
    <button @click="getData2(5)">获取5条数据</button>
    <button @click="getList(10)">获取10条数据</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "demo19",
  data() {
    return {
      // msg: "Yes"
    };
  },
  created() {
    this.$store.dispatch("getList");
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
    },
    ...mapGetters({
      filterList2: "filterList"
    }),
    ...mapGetters(["filterList"])
  },
  methods: {
    add(val) {
      this.$store.commit("increment", val);
    },
    ...mapMutations({
      add2: "increment"
    }),
    ...mapMutations(["increment"]),
    getData(val) {
      this.$store.dispatch("getList", val).then(() => {
        this.add2(5);
      });
    },
    ...mapActions({
      getData2: "getList"
    }),
    ...mapActions(["getList"])
  }
};
</script>
