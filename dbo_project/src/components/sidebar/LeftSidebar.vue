<template>
  <div class="left-sidebar">

    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#232b47"
      text-color="#b3c1e1"
      active-text-color="#ffd04b"
    >
      <div @click="toggleRadio" class="spread" :style="{textAlign:iconFlag,opacity:iconTimeShow}">
        <i :class="showIcon" style="margin-top: 5px;margin-right: 5px;"></i>
      </div>

      <el-submenu index="1">

        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>

        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>


      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'LeftSidebar',
    data() {
      return {
        isCollapse: false,
        iconFlag: 'right',
        showIcon: 'el-icon-close',
        iconTimeShow: 1
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);

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


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .left-sidebar {
    height: 100%;
    background: #000;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    min-height: 200px;

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

  }
</style>
