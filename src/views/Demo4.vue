<template>
  <div>
    <h1>v-for遍历数组</h1>
    <!--
      格式：v-for="xx in data"
      1,需要绑定唯一的key
      2，in可以换成of
      -->
    <hr>
    <div v-for="item in arr">{{item}}</div>
    <hr>
    <hr>
    <div v-for="(num,index) in arr" :key="index">{{index}}--{{num +5}}</div>
    <hr>
    <div v-for="(item,key,index) in obj" :key="index">{{index}}--{{key}}--{{item}}</div>
    <hr>
    <hr>
    <ul :style="{textAlign:'left'}">
      <li v-for="news in newsList" :key="news.id">{{news.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "demo4",
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      obj: {
        name: "zhangsan",
        sex: "man",
        age: "twenty"
      },
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
      ]
    };
  }
};
</script>

