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
        <p>后台管理</p>
        <p>Date Monitoring Center</p>
      </div>


      <div class="myInfo">
        <el-submenu index="3">
          <template slot="title"><i class="fa fa-user-circle-o"></i></template>
          <el-menu-item index="3-1">{{userName}}</el-menu-item>
          <el-menu-item v-if="userSysSet" @click="ToDataMon" index="3-2">数据监控中心</el-menu-item>
          <el-menu-item @click="logOut" index="3-2">退出</el-menu-item>
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
        userNamea: '',
        userSysSet: true,
        activeIndex: '',//选中项index
        project: 'BIM5D生产',//选中项name

      };
    },

    mounted() {


      if (localStorage.getItem('sysSet') == 3) {
        this.userSysSet = false
      }


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
      ToDataMon() {
        this.$router.replace('/Home');
      },
      handleSelect(key, keyPath) {//下拉选项
        console.log(key, keyPath);
        localStorage.setItem('activeItem', key);
      }
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

  .el-menu.el-menu--horizontal {
    border-bottom: none;
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
