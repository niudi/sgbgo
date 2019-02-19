<template>
  <div class="RegionActiveUser">
    <div class="ActiveUser-title">活跃用户统计</div>
    <div class="ActiveUser-chart">
      <BigGroupChart :BigGroupChartData="BigGroupChartData"></BigGroupChart>
    </div>
  </div>
</template>

<script>

  import BigGroupChart from '../gcharts/BigGroupChart';

  export default {
    name: 'RegionActiveUser',
    data() {
      return {
        BigGroupChartData: {
          lineName: 'ActiveUserLine',
          TopBarName: 'ActiveUserTopBar',
          ButtomBarName: 'ActiveUserButtomBar',
        }
      }
    },
    components: {
      BigGroupChart

    },
    mounted() {


    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .RegionActiveUser {
    width: 100%;
    height: 100%;

  }

  .ActiveUser-title {
    width: 100%;
    height: 2%;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    padding: 3% 0;
  }

  .ActiveUser-chart {
    width: 100%;
    height: 75%;
    border: 2px solid #ccc;
    overflow: scroll;
  }


</style>
