<template>
  <div id="TotalMouthActiveProjectBusiness">
    <div class="title">1月活跃项目/企业统计</div>
    <MoreBarChart :MoreBarData="MoreBarData"></MoreBarChart>
  </div>
</template>

<script>

  import MoreBarChart from '../gcharts/MoreBarChart'

  export default {
    name: 'TotalMouthActiveProjectBusiness',
    data() {
      return {
        MoreBarData: {
          name: 'MouthActiveProjectBusiness',
          legendData: ["活跃项目数", "活跃企业数"],
          legendShow: true,
          Xdata: ['BIM5D旗舰', 'BIM5D生产', '质量管理', '安全管理', '物料管理', '劳务管理'],
          Ydata: [
            {
              name: '活跃项目数',
              value: [2.0, 4.9, 7.0, 3.2, 5.6, 6.7]
            }, {
              name: '活跃企业数',
              value: [2.6, 5.9, 5.0, 6.4, 8.7, 7.7]
            }
          ]
        }
      }
    },
    components: {
      MoreBarChart
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>

  #TotalMouthActiveProjectBusiness {
    width: 98%;
    height: 98%;
    position: relative;
    padding: 1%;

  }

  .title {
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    font-size: 18px;
    line-height: 50px;
    color: #ffffff;
  }

</style>
