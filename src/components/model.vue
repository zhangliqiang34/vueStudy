<template>

    <div class="modal"
         v-show="isShow">
        <form class="form">
            <label class="form-item">
                <span class="label-text">姓名：</span>
                <input type="text"
                        v-model="editedUser.name" 
                        class="form-input">
            </label>
            <label class="form-item">
                <span class="label-text">外号：</span>
                <input type="text"
                        v-model="editedUser.nickName" 
                        class="form-input">
            </label>
            <label class="form-item">
                <span class="label-text">技能：</span>
                <textarea v-model="skill"
                        placeholder="多个技能之间用回车隔开"
                         rows="4"
                         class="form-input textarea"></textarea>
            </label>
            <div class="form-item text-center">
                <input type="button" class="btn btn-blue" value="提交" @click="submit">
                <input type="button" class="btn btn-gray" value="取消" @click="cancel">
            </div>
        </form>
    </div>

</template>
<script>
export default {
  name: "model",
  data() {
    return {
      isShow: false,
      editedUser: this.data
    };
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  computed: {
    skill: {
      get() {
        return this.editedUser.skill ? this.editedUser.skill.join("\n") : "";
      },
      set(val) {
        let skill = val.split("\n");
        this.editedUser = {
          ...this.editedUser,
          skill
        };
        console.log(this.editedUser);
      }
    }
  },
  methods: {
    submit() {
      const { name, nickName, skill } = this.editedUser;
      if (!name) {
        alert("请输入姓名");
        return;
      } else if (!nickName) {
        alert("请输入外号");
        return;
      } else if (!skill || !skill.join("")) {
        alert("请输入技能");
        return;
      }
      this.$emit("on-submit", this.editedUser);
    },
    cancel() {
      this.$emit("on-cancel");
    }
  },
  watch: {
    data(val) {
      this.editedUser = val;
    }
  }
};
</script>
<style lang="less" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 16px;
    border-radius: 8px;
    background: #fff;
  }
  .form-item {
    display: block;
    text-align: left;
    margin-top: 10px;
    &.text-center {
      text-align: center;
    }
    .label-text {
      margin-right: 8px;
      line-height: 32px;
      font-size: 14px;
    }
    .form-input {
      width: 240px;
      padding: 0 8px;
      background: #fff;
      border: 1px solid #d0d0d0;
      border-radius: 4px;
      height: 32px;
      line-height: 1.8;
      //   font-size: 14px;
      //   vertical-align: top;
      &.textarea {
        height: 80px;
        overflow: hidden;
        vertical-align: top;
        height: auto;
      }
    }
    // .btn {
    //   margin: 0 4xp;
    // }
  }
}

.btn {
  border: none;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  border-radius: 16px;
  cursor: pointer;
  outline: none;
  &.btn-blue {
    color: #fff;
    background: #00f;
  }
  &.btn-gray {
    color: #333;
    background: #e0e0e0;
  }
}
</style>
