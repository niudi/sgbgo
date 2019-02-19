<template>
  <div class="TotalProjectApplyRate">
    <div class="title">产品应用率趋势</div>
    <MoreLineChart :projectApplyRateData="projectApplyRateData"></MoreLineChart>
  </div>
</template>

<script>

  import MoreLineChart from '../gcharts/MoreLineChart'

  export default {
    name: 'TotalProjectApplyRate',
    data() {
      return {
        projectApplyRateData: {
          name: 'projectApplyRateData',
          Xdata: ['2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],
          legendData: ['BIM5D旗舰', 'BIM5D生产', '质量管理', '安全管理', '物料管理', '劳务管理'],
          Ydata: [
            {
              name: 'BIM5D旗舰',
              type: 'line',
              data: [22, 34, 48, 56, 78, 88, 45, 35]
            }, {
              name: 'BIM5D生产',
              type: 'line',
              data: [42, 56, 44, 88, 34, 96, 55, 15]
            }, {
              name: '质量管理',
              type: 'line',
              data: [9, 22, 33, 22, 56, 36, 90, 57]
            }, {
              name: '安全管理',
              type: 'line',
              data: [67, 43, 32, 76, 34, 87, 32, 43]
            }, {
              name: '物料管理',
              type: 'line',
              data: [45, 14, 67, 45, 90, 56, 78, 36]
            }, {
              name: '劳务管理',
              type: 'line',
              data: [89, 56, 37, 89, 34, 28, 47, 52]
            }
          ]
        }

      }
    },
    components: {
      MoreLineChart
    },
    mounted() {


    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .TotalProjectApplyRate {
    width: 100%;
    height: 100%;

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
