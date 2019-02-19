<template>
  <div id="ProductionActiveUser">
    <div class="title">{{ProductionData.title}}</div>
    <TwoBarLineChart :ActiveUserData="ActiveUserData"></TwoBarLineChart>
  </div>
</template>

<script>

  import TwoBarLineChart from '../gcharts/TwoBarLineChart'

  export default {
    name: 'ProductionActiveUser',
    data() {
      return {
        ActiveUserData: {
          name: '',
          legend: ['活跃项目', '活跃企业', '项目增长率', '企业增长率'],
          Xdata: ['2018-6', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],
          Ydata: [
            {
              name: '活跃项目',
              type: 'bar',
              value: [2.0, 4.9, 7.0, 3.2, 5.6, 6.7, 5.6, 2.2]
            }, {
              name: '活跃企业',
              type: 'bar',
              value: [2.6, 5.9, 5.0, 6.4, 8.7, 7.7, 7.6, 8.2]
            }, {
              name: '项目增长率',
              type: 'line',
              value: [22, 32, 43, 45, 53, 62, 53, 34]
            }, {
              name: '企业增长率',
              type: 'line',
              value: [20, 22, 33, 45, 63, 52, 63, 54]
            }
          ]
        }
      }
    },
    props: ['ProductionData'],
    components: {
      TwoBarLineChart
    },
    created() {
      this.ActiveUserData.name = this.TwoBarLineChart.chartName
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>

  #ProductionActiveUser {
    width: 98%;
    height: 98%;
    position: relative;
    padding: 1%;
  }

  .title {
    width: 100%;
    height: 30%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
  }

</style>
