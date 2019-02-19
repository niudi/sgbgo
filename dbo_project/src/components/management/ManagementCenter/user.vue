<template>
  <div class="User">
    <div class="UserBox">
      <div class="UserTop">
        <el-button icon="el-icon-plus" class="addUser" size="mini" @click="addOneUser" type="primary">添加人员</el-button>
        <el-input size="small" class="getUser" v-model="getUser" placeholder="请输入内容"></el-input>
        <el-button @click="SearchUserBtn" icon="el-icon-search" class="selectUser" size="mini" type="primary">搜索
        </el-button>
      </div>
      <div class="UserContent">
        <el-table
          :data="userList"
          border
          size="mini"
          style="width: 100%">
          <el-table-column
            fixed
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="mobile"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱">
          </el-table-column>

          <el-table-column
            prop="userType"
            label="账号类型">
          </el-table-column>

          <el-table-column
            prop="account"
            label="账号">
          </el-table-column>
          <el-table-column
            prop="password"
            label="密码">
          </el-table-column>

          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>
      <div class="floor-pagination">
        <el-pagination
          class="mypagination"
          background
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="total, prev, pager, next, jumper"
          :total="100">
        </el-pagination>
      </div>
    </div>


    <div class="AddUserBox" v-if="addOReditor">
      <div class="addUserContent">
        <div class="addUser-title">{{addBoxName}}</div>
        <div class="addUserInfo">
          <el-form size="mini" ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="账号">
              <el-input :disabled="canUpdate" v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item label="账号类型">

              <el-select v-model="form.userType" placeholder="请选择账号类型">
                <el-option label="广联云" value="1"></el-option>
                <el-option label="内嵌" value="2"></el-option>
                <el-option label="AD" value="3"></el-option>
              </el-select>

            </el-form-item>

            <el-form-item>
              <el-button v-if="addNode" type="primary" @click="AddNewNode">立即创建</el-button>
              <el-button v-if="RevNode" type="primary" @click="RevNewNode">修改</el-button>
              <el-button @click="noAddNode">取消</el-button>
            </el-form-item>


          </el-form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


  export default {
    name: 'User',
    data() {
      return {
        value: 2,
        canUpdate: false,
        currentPage: 10,
        addOReditor: false,
        addNode: false,
        RevNode: false,
        addBoxName: '',
        getUser: '',
        form: {
          name: '',
          mobile: '',
          email: '',
          account: '',
          password: '',
          userType: '内嵌'
        },
        userList: [],
        userRow: ''
      }
    },
    mounted() {
      this.sysUserList()
    },
    methods: {
      handleCurrentChange() {//切换底部分页

      },
      SearchUserBtn() {//搜索按钮点击
        console.log(this.getUser);
      },
      noAddNode() {//取消 ，添加人员
        this.addOReditor = false;
      },
      addOneUser() {//添加人员
        this.form = {
          name: '',
          mobile: '',
          email: '',
          account: '',
          password: '',
          userType: '内嵌'
        };
        this.addOReditor = true;
        this.addBoxName = "添加人员";
        this.RevNode = false;
        this.addNode = true;


      },
      AddNewNode() {//立即创建用户

        if (this.form.userType == '广联云') {
          var userTypeID = 1
        } else if (this.form.userType == '内嵌') {
          var userTypeID = 2
        } else if (this.form.userType == 'AD') {
          var userTypeID = 3
        }


        this.$axios({
          method: 'post',
          url: '/apis/api/sysUser/add',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          data: {
            account: this.form.account,
            name: this.form.name,
            mobile: this.form.mobile,
            email: this.form.email,
            password: this.form.password,
            userType: userTypeID
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {
            this.sysUserList()
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        })


        this.addOReditor = false;


      },
      RevNewNode() {//修改用户
        console.log('修改');

        if (this.form.userType == '广联云') {
          var userTypeID = 1
        } else if (this.form.userType == '内嵌') {
          var userTypeID = 2
        } else if (this.form.userType == 'AD') {
          var userTypeID = 3
        }


        this.$axios({
          method: 'post',
          url: '/apis/api/sysUser/update',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          data: {
            account: this.form.account,
            name: this.form.name,
            mobile: this.form.mobile,
            email: this.form.email,
            password: this.form.password,
            userType: userTypeID,
            id: this.userRow.id,
            userId: this.userRow.userId,
            orderNo: this.userRow.orderNo,
            createDate: this.userRow.createDate
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {

            this.sysUserList()
            this.canUpdate = false;//修改后，账号允许
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        })


        this.addOReditor = false;
      },
      handleClick(row) {
        this.canUpdate = true;//编辑时，账号不允许修改
        console.log(row);
        this.userRow = row
        this.addOReditor = true;
        this.addBoxName = "编辑";
        this.RevNode = true;
        this.addNode = false;
        this.form = {
          name: row.name,
          mobile: row.mobile,
          email: row.email,
          account: row.account,
          password: row.password,
          userType: row.userType
        }
      },
      deleteClick(row) {//删除用户
        this.userRow = row
        console.log(row);

        this.$confirm('此操作将永久删除用户：' + row.name + ' , 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios({
            method: 'post',
            url: '/apis/api/sysUser/delete',
            headers: {
              "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
            },
            data: {

              userId: row.userId
            }
          }).then(res => {

            console.log(res)
            if (res.data.code == 0) {

              this.$message({
                type: 'success',
                message: '删除成功!'
              });

              this.sysUserList();//删除后，刷新列表

            } else {
              this.$alert(res.data.message, '提示', {
                confirmButtonText: '确定',
              });
            }


          })


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },
      sysUserList() { //获取用户列表

        // ---

        this.$axios({
          method: 'get',
          url: '/apis/api/sysUser/list',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {

            let userList = []

            for (var i in res.data.data) {

              if (res.data.data[i].userType == 1) {
                var userType = '广联云'
              } else if (res.data.data[i].userType == 2) {
                var userType = '内嵌'
              } else if (res.data.data[i].userType == 3) {
                var userType = 'AD'
              }

              let userListItem = {
                name: res.data.data[i].name,
                mobile: res.data.data[i].mobile,
                email: res.data.data[i].email,
                account: res.data.data[i].account,
                password: res.data.data[i].password,
                id: res.data.data[i].id,
                userId: res.data.data[i].userId,
                lastLoginTime: res.data.data[i].lastLoginTime,
                orderNo: res.data.data[i].orderNo,
                createDate: res.data.data[i].createDate,
                userType: userType
              }
              userList.push(userListItem)
            }

            this.userList = userList

          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }

        })

        // ---


      }


    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .User {
    width: 100%;
    height: 100%;
    color: #ffffff;

  }

  .UserBox {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .UserTop {
    width: 98%;
    height: 6%;
    margin-left: 1%;
    background: #ffffff;
    position: absolute;
    top: 1%;
    bottom: 1%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .addUser {
    /*width: 80px;*/
    height: 30px;
    position: absolute;
    top: 11px;
    left: 320px;

  }

  .getUser {
    width: 200px;
    height: 30px;
    position: absolute;
    top: 11px;
    left: 20px;
  }

  .selectUser {
    height: 30px;
    position: absolute;
    left: 230px;
    top: 11px;
  }

  .UserContent {
    width: 96%;
    height: 80%;
    margin-left: 1%;
    background: #ffffff;
    border-radius: 5px;
    position: absolute;
    top: 8%;
    padding: 1%;
    overflow: scroll;

  }

  .floor-pagination {
    width: 96%;
    height: 4%;
    margin-left: 1%;
    background: #ffffff;
    border-radius: 5px;
    position: absolute;
    padding: 1%;
    top: 92%;
  }

  .mypagination {
    height: 100%;
    text-align: center;
  }

  .AddUserBox {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 11;
  }

  .addUserContent {
    width: 40%;
    height: 500px;
    position: absolute;
    left: 30%;
    top: 100px;
    background: #ffffff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

  }

  .addUser-title {
    width: 95%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    padding-left: 5%;
    color: #888;
    font-size: 16px;
    font-weight: bold;
  }

  .addUserInfo {
    padding: 10% 15%;
  }

</style>
