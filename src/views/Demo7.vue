<template>
  <div>
    <h1>计算属性和监听事件</h1>
    <!--表达式太复杂的话会导致模板难以维护，如果多个地方使用该表达式的话会导致重复，-->
    <div>
        {{type + ":" + msg}}
    </div>
    <!--使用computed计算属性-->
    <div>{{type_msg}}</div>
    <div>{{firstName}}</div>
    <div>{{lastName}}</div>
    <div>{{fullName}}</div>
    <button @click="modifyFullName">修改fullName</button>
    <button @click="modifyFirstName">修改firsName</button>
    <button @click="modifyLastName">修改lastName</button>

    <!--通过函数的形式得到同样的效果 不推荐使用， 因为Dom更新的时候computed可以缓存 而函数会返回的调用，性能低下-->
  
    <!--
        computed使用场景：某个数据受多个数据影响，或者需要对其他数据进行js处理再显示；

        watch使用场景：一个数据的变化会影响多个数据，或者一个数据变化的时候需要执行异步操作
    -->
    <div>语言：{{language}}</div>
    <button @click="switchs('ch')">中文</button>
    <button @click="switchs('en')">English</button>
    <div>{{zhangsan}}</div>
    <div>{{lisi}}</div>

  
  </div>
</template>
<script>
export default {
  name: "demo7",
  data() {
    return {
      msg: "demo1",
      type: "news",
      firstName: "zhang",
      lastName: "liqiang",
      language: "ch",
      zhangsan: "",
      lisi: ""
    };
  },
  computed: {
    type_msg() {
      return this.type + ":" + this.msg;
    },
    // fullName() {
    //   return this.firstName + " " + this.lastName;
    // }
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newsVal) {
        let arr = newsVal.split(" ");
        this.firstName = arr[0];
        this.lastName = arr[1];
      }
    }
  },
  methods: {
    modifyFullName() {
      this.fullName = "wu xiaotian";
    },
    modifyFirstName() {
      this.firstName = "Gao";
    },
    modifyLastName() {
      this.lastName = "yuanyuan";
    },
    switchs(val) {
      this.language = val;
    }
  },
  watch: {
    language: {
      handler(newVal) {
        if (newVal === "ch") {
          (this.zhangsan = "张三"), (this.lisi = "李四");
        } else if (newVal === "en") {
          (this.zhangsan = "zhangsan"), (this.lisi = "lisi");
        }
      },
      immediate: true
    }
  }
};
</script>

