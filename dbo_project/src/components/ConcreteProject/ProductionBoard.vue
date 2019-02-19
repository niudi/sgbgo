<template>
  <div class="ProductionBoard">
    1111
    <div class="left">
      <div class="left-top">
        <RankingList></RankingList>
      </div>
      <div class="left-buttom">
        <div class="left-buttom-title">产品留存率</div>
        <LeftBarChart :LeftBarData="LeftBarData"></LeftBarChart>
      </div>

    </div>
    <div class="right">
      <div class="right-top">
        <ConcreteApplyRate></ConcreteApplyRate>
      </div>
      <div class="right-buttom">
        <div class="right-buttom-left">
          <TwoBarLineChart :ActiveUserData="ActiveUserData"></TwoBarLineChart>
        </div>
        <div class="right-buttom-center">
          <TwoBarLineChart :ActiveUserData="NewAddUserData"></TwoBarLineChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import RankingList from './RankingList';
  import ConcreteApplyRate from './ConcreteApplyRate';


  import TwoBarLineChart from '../gcharts/TwoBarLineChart'
  import LeftBarChart from '../gcharts/LeftBarChart'

  export default {
    name: 'ProductionBoard',
    data() {
      return {
        ActiveUserData: {
          title: '活跃用户统计',
          name: 'ActiveUser',
          legend: ['活跃项目', '活跃企业', '项目增长率', '企业增长率'],
          Xdata: ['2018-6', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],
          Ydata: [
            {
              name: '活跃项目',
              type: 'bar',
              value: [2.0, 4.9, 7.0, 3.2, 5.6, 6.7, 5.6, 2.2],
              color: '#4B88CB',
            }, {
              name: '活跃企业',
              type: 'bar',
              value: [2.6, 5.9, 5.0, 6.4, 8.7, 7.7, 7.6, 8.2],
              color: '#949494',
            }, {
              name: '项目增长率',
              type: 'line',
              value: [22, 32, 43, 45, 53, 62, 53, 34],
              color: '#FDB409',
            }, {
              name: '企业增长率',
              type: 'line',
              value: [20, 22, 33, 45, 63, 52, 63, 54],
              color: '#E66826',
            }
          ]
        },
        NewAddUserData: {
          title: '新增用户统计',
          name: 'NewAdduser',
          legend: ['活跃项目', '活跃企业', '项目增长率', '企业增长率'],
          Xdata: ['2018-6', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],
          Ydata: [
            {
              name: '活跃项目',
              type: 'bar',
              value: [2.0, 4.9, 7.0, 3.2, 5.6, 6.7, 5.6, 2.2],
              color: '#4B88CB',
            }, {
              name: '活跃企业',
              type: 'bar',
              value: [2.6, 5.9, 5.0, 6.4, 8.7, 7.7, 7.6, 8.2],
              color: '#E66826',
            }, {
              name: '项目增长率',
              type: 'line',
              value: [22, 32, 43, 45, 53, 62, 53, 34],
              color: '',
            }, {
              name: '企业增长率',
              type: 'line',
              value: [20, 22, 33, 45, 63, 52, 63, 54],
              color: '',
            }
          ]
        },
        LeftBarData: {
          title: '',
          name: 'ProjectGiveRate',
          Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
          Xdata: [22, 32, 12, 26, 37]
        }
      }
    },
    components: {
      RankingList,
      ConcreteApplyRate,
      TwoBarLineChart,
      LeftBarChart
    },
    mounted() {


    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ProductionBoard {
    width: 100%;
    height: 100%;

  }

  .left {
    width: 40%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .left-top {
    width: 100%;
    height: 65%;
    position: absolute;
    left: 0;
    top: 0;

  }

  .left-buttom-title {
    width: 100%;
    height: 30px;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    font-size: 18px;
    color: #ffffff;
  }

  .left-buttom {
    width: 96%;
    height: 31%;
    padding: 2%;
    position: absolute;
    left: 0;
    top: 65%;
  }

  .right {
    width: 60%;
    height: 100%;
    position: absolute;
    left: 40%;
    top: 0;
  }

  .right-top {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    top: 0;

  }

  .right-buttom {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    top: 50%;
  }

  .right-buttom-left {
    width: 48%;
    height: 98%;
    padding: 1%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .right-buttom-center {
    width: 48%;
    height: 98%;
    padding: 1%;
    position: absolute;
    left: 50%;
    top: 0;
  }


</style>
