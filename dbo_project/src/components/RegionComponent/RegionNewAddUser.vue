<template>
  <div class="RegionNewAddUser">
    <div class="NewAddUser-title">新增用户统计</div>
    <div class="NewAddUser-chart">
      <BigGroupChart :BigGroupChartData="BigGroupChartData"></BigGroupChart>
    </div>
  </div>
</template>

<script>

  import BigGroupChart from '../gcharts/BigGroupChart';

  export default {
    name: 'RegionNewAddUser',
    data() {
      return {
        BigGroupChartData: {
          lineName: 'NewAddUserLine',
          TopBarName: 'NewAddUserTopBar',
          ButtomBarName: 'NewAddUserButtomBar',
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
  .RegionNewAddUser {
    width: 100%;
    height: 100%;

  }

  .NewAddUser-title {
    width: 100%;
    height: 2%;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    padding: 3% 0;
  }

  .NewAddUser-chart {
    width: 100%;
    height: 75%;
    border: 2px solid #ccc;
    overflow: scroll;
  }


</style>
