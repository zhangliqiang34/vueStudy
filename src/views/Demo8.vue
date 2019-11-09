<template>
  <div>
    <h1>双向绑定v-model</h1>
    <input type="text" v-model="text">
    <div>{{text}}</div>


    <textarea v-model="content" cols="30" rows="10"></textarea>
    <div>{{content}}</div>

<!-- 绑定select -->
<select v-model="cityCode">
    <option value="">请选择</option>
    <option v-for="city in citys" :value="city.code" :key="city.code">{{city.name}}</option>
</select>

<div>{{cityName}}</div>

<!-- 绑定radio -->
<input type="radio" name="sex" value="male" v-model="sex">男
<input type="radio" name="sex" value="female" v-model="sex">女
<div>{{sex}}</div>

<!-- 绑定checkbox -->
<input type="checkbox" v-model="remember"> 记住密码
<div>{{remember}}</div>


<input type="checkbox" true-value="Y" false-value="N" v-model="remember2"> 记住密码
<div>{{remember2}}</div>

<input type="checkbox" name="hobby" value="cf" v-model="hobby">吃饭
<input type="checkbox" name="hobby" value="sj" v-model="hobby">睡觉
<input type="checkbox" name="hobby" value="ddd" v-model="hobby">打豆豆

<div>{{hobby.join('、')}}</div>

<!-- v-mode修饰符 -->
<input type="text" v-model.lazy="text">
<div>{{text}}</div>

<!--number:转成数字 转不成数字的时候原样显示 只识别开头为数字的转换 -->
<input type="text" v-model.number="number">
<div>{{number}}</div>
<!--trim:去除前后空格 -->
<input type="text" v-model.trim="str">
<div>{{str}}</div>

  </div>
</template>
<script>
export default {
  name: "demo8",
  data() {
    return {
      text: "abc",
      content: "123",
      cityCode: "",
      citys: [
        {
          name: "北京",
          code: "bj"
        },
        {
          name: "上海",
          code: "sh"
        },
        {
          name: "深圳",
          code: "sz"
        }
      ],
      sex: "male",
      remember: true,
      remember2: "Y",
      hobby: [],
      number: 123,
      str: "   哈哈有空格  "
    };
  },
  computed: {
    cityName() {
      let _city = this.citys.find(city => city.code === this.cityCode);
      return _city ? _city.name : "";
    }
  },
  methods: {},
  watch: {}
};
</script>

