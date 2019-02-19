<template>
  <div class="top-sidebar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#232b47"
      text-color="#b3c1e1"
      active-text-color="#ffd04b"
    >

      <div class="logo-box">
        <p>数字监控中心</p>
        <p>Date Monitoring Center</p>
      </div>


      <el-submenu v-for="(item,index) in mList" :index="getNumToStr(index)" :key="index">
        <template slot="title">{{item.name}}</template>
        <el-menu-item v-for="(childrenItem,childrenIndex) in item.childrenList" :key="childrenIndex+1"
                      @click="itemClick(childrenItem)" :value="childrenItem.name"
                      :index='getStrTwo(index,childrenIndex)'>{{childrenItem.name}}
        </el-menu-item>
      </el-submenu>


      <div class="myInfo">
        <el-submenu index="10">
          <template slot="title"><i class="fa fa-user-circle-o"></i></template>
          <el-menu-item index="10-1">用户名：{{userName}}</el-menu-item>
          <el-menu-item v-if="sysSetJur" @click="SysSet" index="10-2">系统设置</el-menu-item>
          <el-menu-item @click="logOut" index="10-2">退出</el-menu-item>
        </el-submenu>
      </div>


    </el-menu>


  </div>
</template>

<script>

  //所有粗颗粒的权限配置，是否显示某个权限项；

  export default {
    name: 'TopSidebar',
    data() {
      return {
        userName: '',
        mList: '',
        activeIndex: '1-1',//选中项index
        project1: '监控主页',//选中项name
        project2: 'BIM5D生产',//选中项name
        sysSetJur: false,//权限判断；是否显示系统设置


      };
    },

    mounted() {

      this.mapsByuser()
      //刷新时，再次查看自己在哪个active项中,和active项的名字
      this.project = localStorage.getItem('activeName');
      this.activeIndex = localStorage.getItem('activeItem');


      //判断角色权限，是否显示后台设置
      let sysSet = localStorage.getItem('sysSet');
      if (sysSet == 1) {
        this.sysSetJur = true;
      } else {
        this.sysSetJur = false;
      }

      this.activeIndex = '1-1'

      this.userName = sessionStorage.getItem('userName');

    },
    methods: {
      logOut() {

        this.$axios({
          method: 'post',
          url: '/apis/api/auth/logout',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            access_token: sessionStorage.getItem('accessToken')
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {
            this.$router.replace('/');
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }
        })

      },
      getNumToStr(num) {
        let n = parseInt(num) + 1
        console.log(n.toString())
        return n.toString()
      },
      getStrTwo(one, two) {

        let o = parseInt(one) + 1
        let t = parseInt(two) + 1
        console.log(o + "-" + t)
        return o + "-" + t;
      },
      itemClick(data) {

        console.log(data);


        //center在监控vuex.state中selectUrl的变化，直接加载新的页面；
        //同时改变local中的centerUrl，用于用户刷新页面时，重新从local中加载地址

        this.$store.state.CenterUseTemplateId = data.webModuleId;


        //设置顶部active选项的具体项，并local中记住这个值！
        // localStorage.setItem('activeName',data.$attrs.value);
        // this.project = localStorage.getItem('activeName');


      },
      SysSet() {//系统设置项点击

        this.$router.replace('/ManagementPage');

      },
      handleSelect(key, keyPath) {//下拉选项
        console.log(key, keyPath);
        localStorage.setItem('activeItem', key);
      },
      mapsByuser() {//根据userID获取用户权限目录

        let _this = this;

        this.$axios({
          method: 'get',
          url: '/apis/api/sysDictoryDict/mapByUserId',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            userId: sessionStorage.getItem('userid')
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {
            if (res.data.data[1]) {

              _this.mList = res.data.data[1][0].childrenList

              sessionStorage.setItem('firstPageId', res.data.data[1][0].childrenList[0].childrenList[0].webModuleId);

              for (var i in res.data.data[1][0].childrenList) {

                // if(i==0){
                //   this.project = res.data.data[1][0].childrenList[0].name;
                // }else if(i==1){
                //   this.project = res.data.data[1][0].childrenList[1].name;
                // }else if(i==2){
                //   this.project = res.data.data[1][0].childrenList[2].name;
                // }

              }


            }
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }
        })


      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-sidebar {
    width: 100%;
    height: 60px;
    /*box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.7);*/
    position: relative;
    background: #000;
  }

  .logo-box {
    float: left;
    width: 200px;
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    color: rgb(179, 193, 225);
    font-weight: bold;
    margin-right: 50px;

  }

  .logo-box p:first-child {
    line-height: 35px;
    font-size: 20px;
  }

  .el-menu-demo,
  .el-menu--horizontal {
    width: 100%;
    height: 60px;
  }

  .myInfo {
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }

  .myInfo i {
    display: inline-block;
    width: 40px;
    height: 40px;
    color: #ffffff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    /*margin-top: 10px;*/
    /*margin-left: 30px;*/
    font-size: 30px;
    text-align: center;
    line-height: 40px;
  }


</style>
