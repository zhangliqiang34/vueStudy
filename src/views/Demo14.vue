<template>
<div class="demo">
    <h1>案例</h1>
    <div style="text-align:left;margin-bottom:10px">
        <input class="btn" 
                type="button"
                value="新增用户"
                @click="addUser">
    </div>
    <table class="table">
        <tr>
            <th>姓名</th>
            <th>外号</th>
            <th>技能</th>
            <th>操作</th>
        </tr>
        <tr v-for="(user,index) of userList"
            :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.nickName}}</td>
            <td>
                <span v-for="(skill,skillIndex) of user.skill" :key="skillIndex" class="tag">{{skill}}</span>
            </td>
            <td>
                <a href="javascript:;"
                    @click="editUser(user,index)">编辑</a> |
                <a href="javascript:;"
                    @click="deleteUser(index)">删除</a>
            </td>
        </tr>
    </table>
    <edit-modal v-show="isShow" 
    :data="editedUser"
    @on-submit="submit"
    @on-cancel="cancel"></edit-modal>

</div>
</template>
<script>
import EditModal from "../components/model";
export default {
  name: "demo14",
  data() {
    return {
      isShow: false,
      editedUser: {},
      editedUserIndex: -1,
      userList: [
        {
          id: 1562725945741,
          name: "欧阳锋",
          nickName: "西毒、老毒物",
          skill: ["蛤蟆功", "灵蛇杖法"]
        },
        {
          id: 1562723132751,
          name: "洪七公",
          nickName: "北丐、老叫花",
          skill: ["降龙十八掌", "打狗棒法"]
        },
        {
          id: 1562725939582,
          name: "黄药师",
          nickName: "东邪、黄老邪",
          skill: ["弹指神通", "碧海潮生曲"]
        },
        {
          id: 1562725920190,
          name: "段智兴",
          nickName: "南帝、一灯大师",
          skill: ["一阳指", "先天功"]
        }
      ]
    };
  },

  methods: {
    addUser() {
      this.isShow = true;
    },
    editUser(user, index) {
      this.isShow = true;
      this.editedUser = { ...user };
      this.editedUserIndex = index;
    },
    deleteUser(index) {
      if (window.confirm("是否确认删除？")) {
        this.userList.splice(index, 1);
      }
    },
    submit(data) {
      console.log(data);
      if (this.editedUserIndex === -1) {
        //ADD
        data = {
          ...data,
          id: Date.now()
        };
        this.userList.unshift(data);
      } else {
        //EDIT
        this.userList.splice(this.editedUserIndex, 1, data);
      }
      this.cancel();
    },
    cancel() {
      this.isShow = false;
      this.editedUser = {};
      this.editedUserIndex = -1;
    }
  },
  components: {
    EditModal
  }
};
</script>
<style lang="less" scoped>
.title {
  font-size: 32px;
  color: blue;
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

.table {
  width: 100%;
  border-collapse: collapse;
  th {
    background: #eee;
  }
  th,
  td {
    padding: 8px 0;
    border: 1px solid #ccc;
  }
}
.tag {
  display: inline-block;
  padding: 0 8px;
  line-height: 1.5;
  background: #f0f0f0;
  //   background: grey;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  margin: 4px;
}
</style>

