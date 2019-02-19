<template>
  <div class="Home">

    <div class="right">
      <div class="top">
        <TopSidebar></TopSidebar>
      </div>
      <div class="content">
        <CenterContent></CenterContent>
      </div>
    </div>

  </div>
</template>

<script>

  import LeftSidebar from './sidebar/LeftSidebar';
  import TopSidebar from './sidebar/TopSidebar';
  import CenterContent from './content/CenterContent';

  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        leftWidth: '200px'
      }
    },
    components: {
      LeftSidebar,
      TopSidebar,
      CenterContent

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
      },

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
    background: #ccc;

  }

  .right {
    flex: 1;
    background: orange;
    display: flex;
    flex-flow: column;
  }

  .top {
    height: 60px;
    background: #ccc;
  }

  .content {
    flex: 1;
    background: #f5f5f5;
  }

</style>
