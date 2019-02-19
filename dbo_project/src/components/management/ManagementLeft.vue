<template>
  <div class="left-sidebar">

    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @select="selectActive"
      :collapse="isCollapse"
      background-color="#232b47"
      text-color="#b3c1e1"
      active-text-color="#ffd04b"
    >
      <div @click="toggleRadio" class="spread" :style="{textAlign:iconFlag,opacity:iconTimeShow}">
        <i :class="showIcon" style="margin-top: 5px;margin-right: 5px;"></i>
      </div>

      <el-menu-item v-for="(item,index) in mList" :index="getNumToStr(index)" :key="index">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>


    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'LeftSidebar',
    data() {
      return {
        mList: [],
        isCollapse: false,
        iconFlag: 'right',
        showIcon: 'el-icon-close',
        iconTimeShow: 1
      };
    },
    mounted() {
      this.mapsByuser()
    },
    methods: {
      getNumToStr(num) {
        let n = parseInt(num) + 1
        console.log(n.toString())
        return n.toString()
      },
      selectActive(index) {
        console.log(index);
        this.$store.state.ManagementCenterIndex = index;
        console.log(this.$store.state.ManagementCenterIndex);
      },
      toggleRadio() {

        this.$emit('flexIsLeft', this.isCollapse);
        this.isCollapse = !this.isCollapse;
        this.iconTimeShow = 0;
        setTimeout(() => {
          this.isCollapse ? this.showIcon = 'el-icon-d-arrow-right' : this.showIcon = 'el-icon-close';
          this.isCollapse ? this.iconFlag = 'center' : this.iconFlag = 'right';
          this.iconTimeShow = 1;
        }, 200);


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

            if (res.data.data[3]) {


              _this.mList = res.data.data[3]


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

  .left-sidebar {

    height: 100%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    min-height: 200px;

  }

  .el-menu {
    border: none;
  }

  .el-menu-vertical-demo {
    height: 100%;
  }

  .spread {
    width: 100%;
    height: 30px;
    font-size: 25px;
    line-height: 25px;
    background: #232b47;
    color: #909399;
    margin-bottom: 20px;

  }
</style>
