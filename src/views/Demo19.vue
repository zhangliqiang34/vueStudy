<template>
  <div class="demo">
    <h1>vuex状态管理</h1>
    <p>{{count}}</p>
    <p>{{count1}}</p>
    <p>{{count2}}</p>
    <p>{{rootCount}}</p>
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
    this.$store.dispatch("moduleB/getList");
  },
  computed: {
    ...mapState(["rootCount"]),
    count1() {
      return this.$store.state.moduleA.count;
    },
    ...mapState("moduleA", {
      count2: state => state.count
    }),
    ...mapState("moduleA", ["count"]),
    filterList1() {
      return this.$store.getters["moduleB/filterList"];
    },
    ...mapGetters("moduleB", {
      filterList2: "filterList"
    }),
    ...mapGetters("moduleB", ["filterList"])
  },
  methods: {
    add(val) {
      this.$store.commit("moduleA/increment", val);
    },
    ...mapMutations("moduleA", {
      add2: "increment"
    }),
    ...mapMutations("moduleA", ["increment"]),
    getData(val) {
      this.$store.dispatch("moduleB/getList", val).then(() => {
        this.add2(5);
      });
    },
    ...mapActions("moduleB", {
      getData2: "getList"
    }),
    ...mapActions("moduleB", ["getList"])
  }
};
</script>
