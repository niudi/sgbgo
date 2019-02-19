<template>
  <div id="TotalOnePage">
    <div class="left">
      <div class="leftTop">
        <AllProjectList></AllProjectList>
      </div>
      <div class="leftCenter">
        <MapChain :mapChinaData="mapChinaData"></MapChain>
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
        <ActiveUserStatis></ActiveUserStatis>
      </div>
      <div class="RightButtom">
        <NewAddUserstatis></NewAddUserstatis>
      </div>
    </div>


    <div class="to-two-page" @click="ToTwoPage">
      <i class="el-icon-d-arrow-right"></i>
    </div>


  </div>
</template>

<script>

  import AllProjectList from './TotalAllProjectList';
  import AllProjectListButtom from './TotalAllProjectListButtom';
  import MapChain from '../gcharts/mapChina';


  import ProjectApplyRate from './TotalProjectApplyRate';
  import ActiveUserStatis from './TotalActiveUserStatistics';
  import NewAddUserstatis from './TotalNewAddUserStatistics';


  export default {
    name: 'TotalOnePage',
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
      AllProjectList,
      AllProjectListButtom,
      MapChain,
      ProjectApplyRate,
      ActiveUserStatis,
      NewAddUserstatis
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

  #TotalOnePage {
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
    height: 12%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .leftCenter {
    width: 100%;
    height: 55%;
    position: absolute;
    left: 0;
    top: 10%;
  }

  .leftButtom {
    width: 100%;
    height: 35%;
    position: absolute;
    left: 0;
    top: 67%;
  }

  .RightTop {
    width: 100%;
    height: 33%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .RightCenter {
    width: 100%;
    height: 33%;
    position: absolute;
    left: 0;
    top: 33%;
  }

  .RightButtom {
    width: 100%;
    height: 33%;
    position: absolute;
    left: 0;
    top: 66%;
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
