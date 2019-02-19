<template>
  <div id="NewAddUserStatistics">
    <div class="title">新增用户统计</div>
    <MoreBarChart :MoreBarData="MoreBarData"></MoreBarChart>
  </div>
</template>

<script>

  import MoreBarChart from '../gcharts/MoreBarChart'

  export default {
    name: 'TotalNewAddUserStatistics',
    data() {
      return {
        MoreBarData: {
          name: 'NewAddUserChart',
          Xdata: ['2018-6', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2018-13'],
          Ydata: [
            {
              name: 'BIM5D旗舰',
              value: [2.0, 4.9, 7.0, 3.2, 5.6, 6.7, 5.6, 2.2]
            }, {
              name: 'BIM5D生产',
              value: [2.6, 5.9, 5.0, 6.4, 8.7, 7.7, 7.6, 8.2]
            }, {
              name: '质量管理',
              value: [2.0, 3.2, 4.3, 4.5, 5.3, 6.2, 5.3, 3.4]
            }, {
              name: '安全管理',
              value: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 6.3, 5.4]
            }, {
              name: '物料管理',
              value: [2.0, 2.2, 3.3, 4.5, 6.3, 5.2, 8.3, 9.4]
            }, {
              name: '劳务管理',
              value: [2.0, 2.2, 3.3, 4.5, 6.3, 3.2, 2.3, 3.4]
            },
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

  #NewAddUserStatistics {
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
