<template>
  <div class="Role">
    <div class="RoleBoxCentent">
      <div class="roleBox">
        <div class="role-title">
          角色列表
          <el-button @click="addRole" class="addRole" size="mini" type="primary">添加角色</el-button>
        </div>
        <div class="role-list">
          <ul>
            <li v-bind:class="{clickLiClass:index==current}" v-for="(item,index) in RoleList" :key="index"
                @click="RoleItem(item,index)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="roleUser">
        <div class="role-user-title">
          <div class="role-name"> {{RoleTitle}}</div>
          <el-button @click="lookRole" size="mini" icon="el-icon-document"></el-button>
          <el-button @click="handleRole" size="mini" icon="el-icon-edit-outline"></el-button>
          <el-button @click="deleteRole" size="mini" icon="el-icon-delete"></el-button>
        </div>

        <div class="role-user-list">
          <div class="role-user-list-handle">
            <el-button icon="el-icon-plus" class="addRoleUser" size="mini" type="primary" @click="roleAddUser">添加人员
            </el-button>
          </div>
          <div class="role-user-list-content">
            <el-table
              :data="RoleUserList"
              border
              size="mini"
              style="width: 100%">

              <el-table-column
                fixed
                prop="name"
                label="姓名">
              </el-table-column>

              <el-table-column
                prop="account"
                label="账号">
              </el-table-column>

              <el-table-column
                prop="mobile"
                label="手机">
              </el-table-column>

              <el-table-column
                prop="userType"
                label="账号类型">
              </el-table-column>

              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button @click="userDeleteAtRole(scope.row)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>

            </el-table>
          </div>
        </div>

      </div>
    </div>

    <div class="addORedit" v-if="roleHandle">
      <div class="addOReditBox">
        <div class="add-edit-title">{{roleAdd}}</div>
        <div class="add-edit-content">
          <el-form size="mini" ref="form" :model="form" label-width="80px">
            <el-form-item label="角色名称">
              <el-input :disabled="ifNameEdit" v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="权限选择">
              <div class="tabRole">
                <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane class="roleFirst" label="前端目录" name="first">
                    <!--前端目录tree-->
                    <el-tree
                      ref="Fetree"
                      :data="RoleFirst"
                      :show-checkbox="ifRoleEdit"
                      node-key="id"
                      default-expand-all
                      :expand-on-click-node="false"
                      :default-checked-keys="FECatalogue"
                      @node-click="FEClick"
                      @current-change="curChangeFe"
                      @check-change="checkFE"
                      :props="defaultProps1">
                    </el-tree>

                  </el-tab-pane>

                  <el-tab-pane class="roleFirst" label="后台配置" name="second">
                    <!--后台配置tree-->
                    <el-tree
                      ref="Matree"
                      :data="RoleSecond"
                      :show-checkbox="ifRoleEdit"
                      node-key="id"
                      :default-checked-keys="ManagementCatalogue"
                      :props="defaultProps2">
                    </el-tree>

                  </el-tab-pane>

                </el-tabs>
              </div>
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


    <div class="roleAdduser" v-if="roleAddUserShow">
      <div class="roleAdduserBox">
        <div class="role-add-user-title">{{RoleTitle}} - 添加成员 <span @click="noAdd" class="hideThisBox"><i
          class="el-icon-circle-close-outline"></i></span></div>
        <div class="role-add-user-search">
          <el-input
            class="search-user-inp"
            size="mini"
            placeholder="请输入内容"
            v-model="userName"
            clearable>
          </el-input>
          <el-button size="mini" type="primary">搜索</el-button>
        </div>
        <div class="role-add-user-content">

          <el-table
            border
            ref="multipleTable"
            :data="RoleAddOneUser"
            tooltip-effect="dark"
            style="width: 100%">


            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>

            <el-table-column
              prop="account"
              label="账号">
            </el-table-column>


            <el-table-column
              prop="userType"
              label="账号类型">
            </el-table-column>

            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button @click="UserAddToRole(scope.row)" type="text" size="small">添加</el-button>
              </template>
            </el-table-column>

          </el-table>

        </div>


      </div>
    </div>

  </div>
</template>

<script>


  export default {
    name: 'Role',
    data() {
      return {
        handleCurFE: [],
        handleCurMA: [],
        lookRoleFe: [],
        lookRoleMa: [],
        pTreeList: [],
        FECatalogue: [22, 23, 24, 25],
        ManagementCatalogue: [],
        CurFEArr: [],
        CurManagementArr: [],
        currentRow: '',
        roleAddUserShow: false,
        roleHandle: false,
        ifNameEdit: false,
        ifRoleEdit: true,
        activeName: 'first',
        addNode: false,
        RevNode: false,
        roleAdd: '添加角色',
        current: 0,
        RoleTitle: '',
        userName: '',
        form: {
          name: ''
        },
        RoleList: [
          "1111",
          "2222",
          "3333"
        ],
        RoleUserList: [{

          name: '王小虎',
          job: '运营',
          account: '131',
          phone: '13521233778',

        }],
        RoleFirst: [],
        RoleSecond: [],
        defaultProps1: {
          children: 'childrenList',
          label: 'name'
        },
        defaultProps2: {
          children: 'childrenList',
          label: 'name'
        },
        RoleAddOneUser: [],
        multipleSelection: []

      }
    },

    mounted() {
      this.getSysRoleList()
      this.getRoleSysDictoryDictList(1, 0)
      this.getRoleSysDictoryDictList(3, 0)


      console.log(this.pTreeList)

    },
    methods: {
      FEClick(data) {
        // console.log(data)
      },
      curChangeFe(data, node) { //选中节点，取消选中
        // console.log(data)
        // console.log(node)

      },
      checkFE(data, node) {//选中节点

        // console.log(data)
        // console.log(node)

      },
      userDeleteAtRole(row) { //角色列表旁，用户列表，点击删除

        let _this = this

        let currentRowId = this.currentRow.roleId


        this.$confirm('此操作将' + row.name + '从' + this.currentRow.name + '中删除 , 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios({
            method: 'post',
            url: '/apis/api/sysRoleUser/delete',
            headers: {
              "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
            },
            params: {
              userId: row.userId,
              roleId: currentRowId
            }
          }).then(res => {

            console.log(res)

            if (res.data.code == 0) {

              _this.getUserByRoleId(currentRowId)


            }


          })


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });


      },
      roleAddUser() {//角色添加人员
        this.getUserListUseAddRole(this.currentRow.roleId)
        this.roleAddUserShow = true;
      },
      UserAddToRole(row) {//把用户添加到角色列表旁


        this.$axios({
          method: 'post',
          url: '/apis/api/sysRoleUser/add',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            userId: row.userId,
            roleId: this.currentRow.roleId
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {
            this.getUserListUseAddRole(this.currentRow.roleId)
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        })

      },
      yesAdd() {//角色添加人员 - 确认添加;
        this.roleAddUserShow = false;
      },
      noAdd() {//角色添加人员 - 取消
        this.getUserByRoleId(this.currentRow.roleId)
        this.roleAddUserShow = false;
      },
      lookRole() {//查看角色列表


        this.mapByRoleId(this.currentRow.roleId, 1)


        this.form.name = this.currentRow.name;
        this.roleHandle = true;
        this.addNode = false;
        this.RevNode = false;
        this.ifNameEdit = true;
        this.ifRoleEdit = false;
        this.roleAdd = '查看角色';

      },
      handleRole() {//编辑角色列表

        this.getRoleSysDictoryDictList(1, 1)
        this.getRoleSysDictoryDictList(3, 1)

        this.mapByRoleId(this.currentRow.roleId, 2)

        this.form.name = this.currentRow.name;
        this.roleHandle = true;
        this.ifRoleEdit = true;
        this.ifNameEdit = false;
        this.addNode = false;
        this.RevNode = true;
        this.roleAdd = '编辑角色';


      },
      deleteRole() {//删除角色


        let _this = this;

        this.$confirm('此操作将永久删除角色：' + this.currentRow.name + ' , 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios({
            method: 'post',
            url: '/apis/api/sysRole/delete',
            headers: {
              "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
            },
            data: {
              id: this.currentRow.id,
              roleId: this.currentRow.roleId
            }
          }).then(res => {

            console.log(res)
            if (res.data.code == 0) {

              _this.getSysRoleList()

              this.$message({
                type: 'success',
                message: '删除成功!'
              });


            } else {
              this.$alert(res.data.message, '提示', {
                confirmButtonText: '确定',
              });
            }


          })


        }).then(res => {
          this.getSysRoleList();//删除后，刷新列表
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });


      },
      noAddNode() {//取消


        this.roleHandle = false;

      },
      AddNewNode() {//创建新角色-按钮


        let FecurArr = this.$refs.Fetree.getCheckedKeys().concat(this.$refs.Fetree.getHalfCheckedKeys());
        let MacurArr = this.$refs.Matree.getCheckedKeys().concat(this.$refs.Matree.getHalfCheckedKeys());


        let curArr = FecurArr.concat(MacurArr)

        let newArr = []

        for (var i in this.pTreeList) {
          if (curArr.indexOf(this.pTreeList[i].id) > -1) {
            newArr.push(this.pTreeList[i])
          }
        }
        console.log(this.pTreeList)
        console.log(FecurArr)
        console.log(MacurArr)
        console.log(curArr)
        console.log(newArr)


        this.$axios({
          method: 'post',
          url: '/apis/api/sysRole/add',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          data: {
            roleType: 1,
            name: this.form.name,
            dictoryList: newArr
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {
            this.getSysRoleList()
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        })


        this.roleHandle = false;


      },
      RevNewNode() {//修改角色权限


        let FecurArr = this.$refs.Fetree.getCheckedKeys().concat(this.$refs.Fetree.getHalfCheckedKeys());
        let MacurArr = this.$refs.Matree.getCheckedKeys().concat(this.$refs.Matree.getHalfCheckedKeys());


        let curArr = FecurArr.concat(MacurArr)


        let newArr = []

        for (var i in this.pTreeList) {
          if (curArr.indexOf(this.pTreeList[i].id) > -1) {
            newArr.push(this.pTreeList[i])
          }
        }

        console.log(this.pTreeList)
        console.log(FecurArr)
        console.log(MacurArr)
        console.log(curArr)
        console.log(newArr)


        let _this = this;

        this.$axios({
          method: 'post',
          url: '/apis/api/sysRole/update',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          data: {
            id: this.currentRow.id,
            roleId: this.currentRow.roleId,
            roleType: this.currentRow.roleType,
            name: this.form.name,
            lastModifyDate: this.currentRow.lastModifyDate,
            orderNo: this.currentRow.orderNo,
            createDate: this.currentRow.createDate,
            dictoryList: newArr
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {

            _this.getSysRoleList()
            _this.canUpdate = false;//修改后，账号允许

          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        })


        this.roleHandle = false;
      },
      addRole() {//添加角色

        this.getRoleSysDictoryDictList(1, 1)
        this.getRoleSysDictoryDictList(3, 1)

        this.form.name = ''
        this.FECatalogue = [];
        this.ManagementCatalogue = [];
        this.roleHandle = true;
        this.ifRoleEdit = true;
        this.ifNameEdit = false;
        this.addNode = true;
        this.RevNode = false;
        this.roleAdd = '添加角色';


      },
      handleClick(row) {
        console.log(row);
      },
      RoleItem(item, index) {
        this.currentRow = item;
        this.RoleTitle = item.name;
        this.current = index;

        this.getUserByRoleId(item.roleId)

      },
      getSysRoleList() {//获取角色列表

        // --
        this.$axios({
          method: 'get',
          url: '/apis/api/sysRole/list',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
        }).then(res => {

          console.log(res)

          let sysRoleList = []

          if (res.data.code == 0) {

            for (var i in res.data.data) {
              let sysRoleItem = {
                createDate: res.data.data[i].createDate,
                id: res.data.data[i].id,
                lastModifyDate: res.data.data[i].lastModifyDate,
                name: res.data.data[i].name,
                orderNo: res.data.data[i].orderNo,
                roleId: res.data.data[i].roleId,
                roleType: res.data.data[i].roleType
              }

              sysRoleList.push(sysRoleItem)

            }

            this.RoleList = sysRoleList;
            this.RoleTitle = this.RoleList[0].name
            this.getUserByRoleId(this.RoleList[0].roleId);
            this.currentRow = this.RoleList[0];
            this.current = 0;

          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }

        })

        // --

      },
      getUserByRoleId(roleId) { //通过角色ID查询用户列表

        this.$axios({
          method: 'get',
          url: '/apis/api/sysUser/listByRoleId',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            roleId: roleId
          }
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {

            let getUserByReloList = []

            for (var i in res.data.data) {

              if (res.data.data[i].userType == 1) {
                var userType = '广联云'
              } else if (res.data.data[i].userType == 2) {
                var userType = '内嵌'
              } else if (res.data.data[i].userType == 3) {
                var userType = 'AD'
              }


              let userByRoleItem = {
                "id": res.data.data[i].id,
                "userId": res.data.data[i].userId,
                "account": res.data.data[i].account,
                "name": res.data.data[i].name,
                "mobile": res.data.data[i].mobile,
                "email": res.data.data[i].email,
                "password": res.data.data[i].password,
                "userType": userType,
                "lastLoginTime": res.data.data[i].lastLoginTime,
                "orderNo": res.data.data[i].orderNo,
                "createDate": res.data.data[i].createDate
              }

              getUserByReloList.push(userByRoleItem)

            }

            this.RoleUserList = getUserByReloList


          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }

        })
      },
      getUserListUseAddRole(roleId) {

        this.$axios({
          method: 'get',
          url: '/apis/api/sysUser/listByNotInRoleId',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            roleId: roleId
          }
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

            this.RoleAddOneUser = userList;


          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }

        })
      },
      getRoleSysDictoryDictList(type, treeFlag) { //根据类型获取目录 1：前端目录 3：后台管理目录
        // --
        this.$axios({
          method: 'get',
          url: '/apis/api/sysDictoryDict/list',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            type: type
          }
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {


            console.log(this.pTreeList)


            if (type == 1) {
              this.RoleFirst = res.data.data
            } else if (type == 3) {
              this.RoleSecond = res.data.data
            }

            return res;

          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        }).then(res => {
          console.log(res)
          if (treeFlag == 0) {
            this.treeFor(res.data.data)
          }
        })

        // ---
      },
      treeFor(tree) {

        for (var i in tree) {
          let treeItem = {
            id: tree[i].id,
            dictoryId: tree[i].dictoryId
          }
          this.pTreeList.push(treeItem)
          this.treeFor(tree[i].childrenList)
        }


      },
      treeForCurFE(tree) {


        for (var i in tree) {

          if (tree[i].childrenList) {
            this.treeForCurFE(tree[i].childrenList)
          } else {
            this.handleCurFE.push(tree[i].id)
          }


        }

        console.log(this.handleCurFE)

        // this.$refs.Fetree.setCheckedKeys(this.handleCurFE)
        this.$refs.Fetree.setCheckedKeys(this.handleCurFE)

      },
      treeForCurMA(tree) {

        for (var i in tree) {
          this.handleCurMA.push(tree[i].id)
          this.treeForCurMA(tree[i].childrenList)
        }

        this.$refs.Matree.setCheckedKeys(this.handleCurMA)

      },
      mapByRoleId(roleId, root) { //根据角色id目录

        this.$axios({
          method: 'get',
          url: '/apis/api/sysDictoryDict/mapByRoleId',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            roleId: roleId
          }
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {

            //root来源 1：查看 2：修改

            if (root == 1) {

              if (res.data.data[1]) {
                this.RoleFirst = res.data.data[1]
              } else {
                this.RoleFirst = []
              }

              if (res.data.data[3]) {
                this.RoleSecond = res.data.data[3]
              } else {
                this.RoleSecond = []
              }

            } else if (root == 2) {


              if (res.data.data[1]) {

                this.treeForCurFE(res.data.data[1])


              } else {
                this.RoleFirst = []
              }

              if (res.data.data[3]) {

                this.treeForCurMA(res.data.data[3])

              } else {
                this.RoleSecond = []
              }


            }


          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }

        })

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Role {
    width: 100%;
    height: 100%;

  }

  .RoleBoxCentent {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .roleBox {
    width: 20%;
    height: 96%;
    position: absolute;
    left: 1%;
    top: 2%;
    background: rgb(76, 82, 103);
  }

  .role-title {
    width: 95%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    padding-left: 5%;
    position: relative;
    font-weight: bold;
    font-size: 16px;
    color: #888;
  }

  .addRole {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .role-list {
    padding: 5% 3%;
  }

  .role-list ul li {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #eeeeee;
    border-bottom: 1px solid #6b6a6a;
    cursor: pointer;
  }

  .role-list .clickLiClass {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #888;
    background: #f0f7ff;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }

  .roleUser {
    width: 77%;
    height: 96%;
    position: absolute;
    left: 22%;
    top: 2%;
    background: #ffffff;
  }

  .role-user-title {
    width: 98%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
    padding-left: 2%;
    font-size: 14px;

  }

  .role-name {
    margin-right: 10px;
    height: 100%;
    display: inline-block;
  }

  .role-user-list {
    width: 98%;
    height: 98%;
    padding: 1%;

  }

  .role-user-list-handle {
    width: 100%;
    height: 40px;
    position: relative;
  }

  .addRoleUser {
    position: absolute;
    left: 10px;
    top: 5px;
  }

  .addORedit {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 11;
  }

  .addOReditBox {
    width: 50%;
    height: 600px;
    background: #ffffff;
    position: absolute;
    left: 25%;
    top: 100px;
  }

  .add-edit-title {
    width: 95%;
    height: 50px;
    padding-left: 5%;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
  }

  .add-edit-content {
    padding: 40px 10% 0 5%;
  }

  .tabRole {
    width: 100%;
    height: 390px;
    /*border: 1px solid #ccc;*/

  }

  .roleFirst {
    width: 100%;
    height: 320px;
    /*border: 1px solid #ccc;*/
  }

  .roleAdduser {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 11;
  }

  .roleAdduserBox {
    width: 50%;
    height: 600px;
    background: #ffffff;
    position: absolute;
    left: 25%;
    top: 100px;
  }

  .role-add-user-title {
    width: 95%;
    height: 50px;
    padding-left: 5%;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
  }

  .hideThisBox {
    width: 40px;
    height: 100%;
    position: absolute;
    right: 0;
  }

  .role-add-user-search {
    width: 100%;
    height: 40px;
    padding-left: 3%;
    padding-top: 10px;
  }

  .search-user-inp {
    width: 30%;

  }

  .role-add-user-content {
    width: 94%;
    height: 450px;
    padding: 10px 3%;
    overflow: scroll;
    background: #e0e0e0;
    /*box-sizing: border-box;*/
    /*border-top: 1px solid #ccc;*/
    /*border-bottom: 1px solid #ccc;*/
  }

  .role-add-user-btn {
    padding-top: 20px;
    padding-left: 40%;
  }

</style>
