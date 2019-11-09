<template>
    <div>
        <p>{{txt}}</p>
        <button @click="modify">修改字符</button>
        <p>{{number}}</p>
        <p>{{flag}}</p>
        <p>{{obj.a}}</p>
        <p>{{arr.join('-')}}</p>
    </div>
    
</template>

<script>
export default {
  name: "MyComponent1",
  //   props: ["text", "num", "obj", "arr", "bool"],
  props: {
    text: {
      type: String,
      //   required: true,
      default: "默认值"
    },
    num: {
      type: Number,
      validator(val) {
        return val > 100;
      }
    },
    obj: {
      type: Object
    },
    arr: {
      type: Array
    },
    bool: {
      type: Boolean
    }
  },
  data() {
    return {
      txt: this.text
    };
  },
  computed: {
    number() {
      return this.num + 5;
    },
    flag() {
      return this.bool ? "yes" : "no";
    }
  },
  methods: {
    modify() {
      this.text = "xiugail";
    }
  }
};
</script>
