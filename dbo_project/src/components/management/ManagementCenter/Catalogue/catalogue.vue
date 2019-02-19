<template>
  <div class="Catalogue">
    <div class="Catalogue-box">
      <div class="catalogue-tree">
        <div class="catalogue-tree-title">
          <div class="catalogue-tree-str">目录列表</div>
          <el-button type="primary" @click="NodeAdd" size="mini" icon="el-icon-circle-plus-outline"></el-button>
          <el-button type="primary" @click="NodeDelete" size="mini" icon="el-icon-delete"></el-button>
        </div>
        <el-tree
          class="clickOverBg"
          :data="TreeData"
          :highlight-current="true"
          :expand-on-click-node="false"
          default-expand-all
          :draggable="true"
          :props="defaultProps"
          @node-click="handleNodeClick">
        </el-tree>
      </div>
      <div class="catalogue-tree-content">

        <div class="catalogue-tree-content-from">
          <el-form ref="changeForm" :model="changeForm" label-width="80px">
            <el-form-item label="节点名称">
              <el-input placeholder="请输入节点名称" class="change-form-name" v-model="changeForm.name"></el-input>
            </el-form-item>
            <el-form-item label="PC模板">
              <el-select v-model="changeForm.regionPC" placeholder="请选择PC模板">
                <el-option v-for="(item,index) in webModule" :label="item.name" :value="item.id"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="移动模板">
              <el-select v-model="changeForm.regionH5" placeholder="请选择移动模板">
                <!--<el-option label="区域一" value="shanghai"></el-option>-->
                <!--<el-option label="区域二" value="beijing"></el-option>-->
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="changeNodeName">修改</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </div>


    <div class="addNewNodeBox" v-if="newIfShow">
      <div class="addNewNode">
        <div class="title">{{currentLabel}} - 添加子节点</div>
        <div class="NewNode">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="节点名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="PC模板">
              <el-select v-model="form.regionPC" placeholder="请选择PC模板">
                <el-option v-for="(item,index) in webModule" :label="item.name" :value="item.id"
                           :key="index"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="移动模板">
              <el-select v-model="form.regionH5" placeholder="请选择移动模板">
                <!--<el-option label="区域一" value="shanghai"></el-option>-->
                <!--<el-option label="区域二" value="beijing"></el-option>-->
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="AddNewNode">立即创建</el-button>
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
    data() {
      return {
        webModule: [],
        addDisabled: false,
        deleteDisabled: false,
        newIfShow: false,
        currentLabel: '',
        currentClick: '',
        form: {
          name: '',
          regionPC: '',
          regionH5: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        changeForm: {
          name: '',
          regionPC: '',
          regionH5: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        TreeData: [],
        defaultProps: {
          children: 'childrenList',
          label: 'name'
        }
      };
    },
    mounted() {
      this.getSysDictoryDictList(1)
      this.getTemplateList()
    },
    methods: {
      changeNodeName() {//修改节点名字

        console.log(this.changeForm.regionPC)


        let _this = this

        this.$confirm('此操修改目录：' + this.currentClick.name + ' , 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios({
            method: 'post',
            url: '/apis/api/sysDictoryDict/update',
            headers: {
              "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
            },
            data: {
              "name": this.changeForm.name,
              "type": this.currentClick.type,
              "webModuleId": this.changeForm.regionPC,
              "orderNo": this.currentClick.orderNo,
              "createDate": this.currentClick.createDate,
              "id": this.currentClick.id,
              "dictoryId": this.currentClick.dictoryId
            }
          }).then(res => {

            console.log(res)
            if (res.data.code == 0) {

              _this.getSysDictoryDictList(_this.currentClick.type)
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
      AddNewNode() {//添加新节点

        let _this = this

        this.$axios({
          method: 'post',
          url: '/apis/api/sysDictoryDict/add',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          data: {
            "dictoryParentId": this.currentClick.dictoryId,
            "icon": "1",
            "name": this.form.name,
            "type": 1,
            "webModuleId": this.form.regionPC,
            "appModuleId": 1
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {

            _this.getSysDictoryDictList(_this.currentClick.type)
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        })

        this.newIfShow = false;

      },
      noAddNode() {
        this.newIfShow = false;
      },
      NodeAdd() {
        this.newIfShow = true;
      },
      NodeDelete() {


        let _this = this

        this.$confirm('此操作将永久删除目录：' + this.currentClick.name + ' , 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios({
            method: 'post',
            url: '/apis/api/sysDictoryDict/delete',
            headers: {
              "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
            },
            data: {

              "id": this.currentClick.id,
              "dictoryId": this.currentClick.dictoryId
            }
          }).then(res => {

            console.log(res)
            if (res.data.code == 0) {

              _this.getSysDictoryDictList(_this.currentClick.type)
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
      handleNodeClick(data) {

        console.log(data)

        this.form.name = ''

        this.currentClick = data;
        this.currentLabel = data.name;
        this.changeForm.name = data.name;

        console.log(this.webModule)

        for (var i in this.webModule) {

          if (this.webModule[i].id == data.webModuleId) {
            this.changeForm.regionPC = this.webModule[i].name;
            break;
          } else {
            this.changeForm.regionPC = '';
          }

        }


      },
      getSysDictoryDictList(type) {

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
            this.TreeData = res.data.data
            this.addDisabled = true;
            this.deleteDisabled = true;
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }
          console.log(this.TreeData)

        })

        // ---

      },
      getTemplateList() { //模板列表

        // ---

        this.$axios({
          method: 'get',
          url: '/apis/api/module/listTemplate',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {

            let getNewTemplateList = []

            for (var i in res.data.data) {

              let getNewTemplateItem = {
                id: res.data.data[i].templateID,
                name: res.data.data[i].reportName,

              }

              getNewTemplateList.push(getNewTemplateItem)

            }
            this.webModule = getNewTemplateList


          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }

        })

        // ---

      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Catalogue {
    width: 98%;
    height: 98%;
    padding: 1%;

  }

  .Catalogue-box {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .catalogue-tree {
    width: 25%;
    height: 96%;
    position: absolute;
    left: 1%;
    top: 2%;
    background: rgb(76, 82, 103);
    color: #aaa;

  }

  .catalogue-tree-title {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
  }

  .catalogue-tree-str {
    display: inline-block;
    margin-right: 15%;
    margin-left: 10px;
    font-weight: bold;
    color: #888;

  }

  .catalogue-tree-content {
    width: 72%;
    height: 96%;
    position: absolute;
    left: 27%;
    top: 2%;
    background: #ffffff;
  }

  .clickOverBg {
    background: rgb(76, 82, 103);
    color: #aaa;
  }

  .is-current .el-tree-node__content {
    background: red !important;
  }

  .addNewNodeBox {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .4);
  }

  .addNewNode {
    width: 50%;
    height: 400px;
    background: #ffffff;
    position: absolute;
    left: 25%;
    top: 100px;

  }

  .addNewNode .title {
    width: 97%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    padding-left: 3%;
    color: #000;
    font-weight: bold;
  }

  .NewNode {
    width: 80%;
    padding-top: 50px;
    position: absolute;
    left: 10%;

  }

  .catalogue-tree-content-from {
    padding: 5%;
  }

  .change-form-name {
    width: 35%;
  }


</style>
