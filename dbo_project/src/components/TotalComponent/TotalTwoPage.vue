<template>
  <div id="TotalTwoPage">
    <div class="left">
      <div class="leftTop">
        <MapChain :mapChinaData="mapChinaData"></MapChain>

      </div>
      <div class="leftButtom">
        <RegionTop></RegionTop>
      </div>
    </div>
    <div class="center">
      <div class="centerTop">
        <MouthApplyRate></MouthApplyRate>
      </div>
      <div class="centerButtom">
        <MouthActiveProjectBusiness></MouthActiveProjectBusiness>
      </div>
    </div>
    <div class="right">
      <div class="rightTop">
        <ProjectKeep></ProjectKeep>
      </div>
      <div class="rightButtom">
        <NewAddProject></NewAddProject>
      </div>
    </div>


    <div class="to-one-page" @click="ToOnePage">
      <i class="el-icon-d-arrow-left"></i>
    </div>

  </div>
</template>

<script>

  import MapChain from '../gcharts/mapChina';
  import RegionTop from './TotalRegionTop';
  import MouthApplyRate from './TotalMouthApplyRate';
  import MouthActiveProjectBusiness from './TotalMouthActiveProjectBusiness';
  import ProjectKeep from './TotalProjectKeep';
  import NewAddProject from './TotalNewAddProjectList';


  export default {
    name: 'TotalTwoPage',
    data() {
      return {
        mapChinaData:[
          {name: '北京', value: 100},
          {name: '天津', value: 200},
          {name: '上海', value: 1500},
          {name: '重庆', value: 1500},
          {name: '河北', value: 1500},
          {name: '河南', value: 1500},
          {name: '云南', value: 1500},
          {name: '辽宁', value: 1500},
          {name: '黑龙江', value: 1500},
          {name: '湖南', value: 1500},
          {name: '安徽', value: 100},
          {name: '山东', value: 1500},
          {name: '新疆', value: 1500},
          {name: '江苏', value: 1500},
          {name: '浙江', value: 1500},
          {name: '江西', value: 1500},
          {name: '湖北', value: 1500},
          {name: '广西', value: 1500},
          {name: '甘肃', value: 1500},
          {name: '山西', value: 1500},
          {name: '内蒙古', value: 1500},
          {name: '陕西', value: 1500},
          {name: '吉林', value: 1500},
          {name: '福建', value: 1500},
          {name: '贵州', value: 1500},
          {name: '广东', value: 1500},
          {name: '青海', value: 460},
          {name: '西藏', value: 1500},
          {name: '四川', value: 1000},
          {name: '宁夏', value: 1500},
          {name: '海南', value: 1500},
          {name: '台湾', value: 1500},
          {name: '香港', value: 1500},
          {name: '澳门', value: 1500},
          {name: '南海诸岛', value: 1500}
        ]
      }
    },
    components: {
      MapChain,
      RegionTop,
      MouthApplyRate,
      MouthActiveProjectBusiness,
      ProjectKeep,
      NewAddProject
    },
    mounted() {

    },
    methods: {
      ToOnePage() {
        this.$router.replace('/TotalOnePage')
      }
    }
  }
</script>

<style scoped>

  #TotalTwoPage {
    width: 98%;
    height: 98%;
    position: relative;
    padding: 1%;

  }

  .left {
    width: 40%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .center {
    width: 35%;
    height: 100%;
    position: absolute;
    left: 40%;
    top: 0;
  }

  .right {
    width: 25%;
    height: 100%;
    position: absolute;
    left: 75%;
    top: 0;
  }

  .leftTop {
    width: 100%;
    height: 68%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .leftButtom {
    width: 100%;
    height: 32%;
    position: absolute;
    left: 0;
    top: 68%;
  }

  .centerTop {
    width: 100%;
    height: 40%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .centerButtom {
    width: 100%;
    height: 55%;
    position: absolute;
    left: 0;
    top: 40%;
  }

  .rightTop {
    width: 100%;
    height: 60%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .rightButtom {
    width: 100%;
    height: 40%;
    position: absolute;
    left: 0;
    top: 60%;
  }

  .to-one-page {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 50px;
    font-size: 35px;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    color: #eeeeee;
  }

</style>
