<template>
  <div id="RegionOnePage">
    <div class="left">
      <div class="leftTop">
        <MapChain></MapChain>
      </div>
      <div class="leftButtom">
        <AllProjectListButtom></AllProjectListButtom>
      </div>
    </div>

    <div class="right">
      <div class="RightTop">
        <ProjectApplyRate></ProjectApplyRate>
      </div>

      <div class="RightCenter">
        <RegionActiveUser></RegionActiveUser>
      </div>

      <div class="RightButtom">
        <RegionNewAddUser></RegionNewAddUser>
      </div>

    </div>


    <div class="to-two-page" @click="ToTwoPage">
      <i class="el-icon-d-arrow-right"></i>
    </div>


  </div>
</template>

<script>


  import AllProjectListButtom from '../TotalComponent/TotalAllProjectListButtom';
  import MapChain from '../gcharts/mapChina';
  import BigGroupChart from '../gcharts/BigGroupChart';


  import ProjectApplyRate from '../TotalComponent/TotalProjectApplyRate';


  import RegionActiveUser from './RegionActiveUser';
  import RegionNewAddUser from './RegionNewAddUser';


  export default {
    name: 'RegionOnePage',
    data() {
      return {}
    },
    components: {
      AllProjectListButtom,
      MapChain,
      ProjectApplyRate,
      BigGroupChart,
      RegionActiveUser,
      RegionNewAddUser

    },
    mounted() {

    },
    methods: {
      ToTwoPage() {
        this.$router.replace('/TotalTwoPage')
      }
    }
  }
</script>

<style scoped>

  #RegionOnePage {
    width: 98%;
    height: 98%;
    position: relative;
    padding: 1%;

  }

  .left {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

  }

  .right {
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;

  }

  .leftTop {
    width: 100%;
    height: 62%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .leftButtom {
    width: 98%;
    height: 36%;
    position: absolute;
    left: 0;
    top: 65%;
    padding: 1%;
  }

  .RightTop {
    width: 100%;
    height: 33%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .RightCenter {
    width: 96%;
    height: 28%;
    padding: 2%;
    position: absolute;
    left: 0;
    top: 33%;
    overflow: scroll;
  }

  .RightButtom {
    width: 96%;
    height: 28%;
    padding: 2%;
    position: absolute;
    left: 0;
    top: 66%;
    overflow: scroll;
  }

  .to-two-page {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 50px;
    height: 50px;
    font-size: 35px;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    color: #eeeeee;
  }


</style>
