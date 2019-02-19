<template>
  <div class="Home">
    <ManagementLeft></ManagementLeft>
    <div class="right">
      <div class="top">
        <ManagementTop></ManagementTop>
      </div>
      <div class="content">
        <ManagementContent></ManagementContent>
      </div>
    </div>

  </div>
</template>

<script>

  import ManagementLeft from './ManagementLeft';
  import ManagementTop from './ManagementTop';
  import ManagementContent from './ManagementContent';

  export default {
    name: 'ManagementPage',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        leftWidth: '200px'
      }
    },
    components: {
      ManagementLeft,
      ManagementTop,
      ManagementContent

    },
    mounted() {

      //进行判断，如果第一次登陆local的centerUrl是null，则使用默认首页地址
      //当centerUrl不是null，则使用local里的centerUrl的值
      if (localStorage.getItem('centerUrl')) {

      } else {
        localStorage.setItem('centerUrl', 'http://0.0.0.0:8082/#/');
      }

    },
    methods: {
      isLeftFlag(state) {
        if (state) {
          this.leftWidth = '200px';
        } else {
          this.leftWidth = '64px';
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    background: #000;
  }

  .left {
    transition: width 0.4s;
    /*background: #ccc;*/

  }

  .right {
    flex: 1;
    display: flex;
    flex-flow: column;
  }

  .top {
    height: 60px;
    /*background: #ccc;*/
  }

  .content {
    flex: 1;
    /*background: #f5f5f5;*/
  }

</style>
