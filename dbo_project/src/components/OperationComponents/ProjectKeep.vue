<template>
  <div id="ProjectKeep">
    <div class="ProjectKeep-title">产品留存率</div>
    <div class="project-keep-time">
      <el-date-picker
        v-model="TimeValue"
        @change="TimeChange"
        size="mini"
        type="date"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <div class="chart-box">
      <div class="bar-chart" v-for="(item,index) in ProjectKeepData" :key="index">
        <LeftBarChart :LeftBarData="item"></LeftBarChart>
      </div>
    </div>
  </div>
</template>

<script>

  import LeftBarChart from '../gcharts/LeftBarChart'


  export default {
    name: 'ProjectKeep',
    data() {
      return {
        TimeValue: '',
        ProjectKeepData: [
          {
            title: 'BIM5D旗舰',
            name: 'BIM5DFlagship',
            Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
            Xdata: [22, 32, 12, 26, 37]
          }, {
            title: 'BIM5D生产',
            name: 'BIM5DProduction',
            Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
            Xdata: [32, 28, 22, 25, 27]
          }, {
            title: '质量管理',
            name: 'QualityControl',
            Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
            Xdata: [32, 12, 9, 15, 27]
          }, {
            title: '劳务管理',
            name: 'LaborManage',
            Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
            Xdata: [27, 29, 30, 26, 17]
          }, {
            title: '安全管理',
            name: 'FasetyManage',
            Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
            Xdata: [27, 34, 17, 16, 32]
          }, {
            title: '物料管理',
            name: 'MaterialManage',
            Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
            Xdata: [23, 33, 13, 23, 37]
          }

        ]
      }
    },

    components: {
      LeftBarChart
    },

    mounted() {


    },
    methods: {
      TimeChange(val) {
        var timestamp = Date.parse(val)
        console.log(timestamp)
      }

    }
  }
</script>

<style scoped>

  #ProjectKeep {
    width: 80%;
    height: 80%;
    position: relative;
    padding: 1%;
    background: #ccc;
  }

  .ProjectKeep-title {
    width: 100%;
    height: 5%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }

  .project-keep-time {
    width: 100%;
    height: 5%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }

  .chart-box {
    width: 100%;
    height: 100%;
  }

  .bar-chart {
    width: 48%;
    height: 28%;
    float: left;
    padding: 1%;
  }

</style>
