<template>
  <div>
    <h1>v-on 事件的绑定</h1>
    <div>{{number}}</div>
    <button v-on:click="add">Add one</button>
    <button @click="reduce">Reduce one</button>
    <button @click="reduce(2,$event)">Reduce Two</button>

    <hr>

    <div v-if="isShow">isSho is true</div>
    <div v-else>isSho is false</div>
    <button @click="toggle">切换isShow</button>

    <hr>

    <ul :style="{textAlign:'left'}">
      <li v-for="news in newsList" :key="news.id">{{news.title}}</li>
    </ul>
    <button @click="addNews">添加新闻</button>
    <button @click="removeNews">删除新闻</button>
    <button @click="updateNews">修改第一条新闻</button>

    <hr>

    <div v-for="(v,k,i) in obj" :key="k">
      {{i}} -- {{k}} -- {{v}}
    </div>
    <button @click="addAttr()">add attr</button>
    <button @click="removeAttr()">reomve attr</button>
    <button @click="updateAttr()">update attr</button>

  </div>
</template>
<script>
export default {
  name: "demo5",
  data() {
    return {
      number: 1,
      isShow: true,
      newsList: [
        {
          id: 1,
          title: "新闻第一则"
        },
        {
          id: 2,
          title: "新闻第2则"
        },
        {
          id: 3,
          title: "新闻第3则"
        },
        {
          id: 4,
          title: "新闻第4则"
        }
      ],
      obj: {
        name: "zhangsan",
        age: "33",
        sex: "man"
      }
    };
  },
  methods: {
    add(event) {
      console.log(event);
      this.number++;
    },
    reduce(val, event) {
      console.log(event);
      if (typeof val === "number") {
        this.number -= val;
      } else {
        this.number--;
      }
    },
    toggle() {
      this.isShow = !this.isShow;
    },
    addNews() {
      this.newsList.unshift({ id: Date.now(), title: "添加新新闻" });
    },
    removeNews() {
      this.newsList.pop();
    },
    updateNews() {
      //方法无效
      // this.newsList[0] = {
      // },
      this.$set(this.newsList, 0, {
        id: Date.now(),
        title: "修改了第一条新闻"
      });
      // this.newsList.splice(0, 1, {
      //   id: Date.now(),
      //   title: "修改了第一条新闻"
      // });
    },
    addAttr() {
      //此方法无效
      // this.obj.hobby = "吃饭，睡觉，撸啊撸";

      //第一种添加属性的方法
      // this.$set(this.obj, "吃饭，睡觉，撸啊撸");
      //第二种
      this.obj = {
        ...this.obj,
        hobby: "吃饭，睡觉，撸啊撸"
      };
    },
    removeAttr() {
      //此方法无效
      // delete this.obj.age;

      let _obj = { ...this.obj };
      delete _obj.age;
      this.obj = { ..._obj };
    },
    updateAttr() {
      this.obj.age = 30;
    }
  }
};
</script>

