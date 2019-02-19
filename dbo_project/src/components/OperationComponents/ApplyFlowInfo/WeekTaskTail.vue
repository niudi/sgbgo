<template>
  <div class="New-Week-plan">
    <div class="left">
     <div class="left-left">
       <ApplyPieChart :ApplyPieChartData="leftPieChartData"></ApplyPieChart>
     </div>
     <div class="left-center">
       <ApplyPieChart :ApplyPieChartData="centerPieChartData"></ApplyPieChart>
     </div>
     <div class="left-right">
       <LeftBarChart :LeftBarData="LeftBarData"></LeftBarChart>
     </div>
    </div>
    <div class="right">
      <el-table
        :data="ProjectList"
        border
        style="width: 100%">

        <el-table-column
          prop="Address"
          label="地区">
        </el-table-column>

        <el-table-column
          prop="ProjectName"
          label="项目名称">
        </el-table-column>

        <el-table-column
          prop="WeekTaskNum"
          label="周计划份数">
        </el-table-column>

        <el-table-column
          prop="AllTaskNum"
          label="任务总条数">
        </el-table-column>

        <el-table-column
          prop="NeedConcertTask"
          label="需协调任务条数">
        </el-table-column>

        <el-table-column
          prop="TaskOverRate"
          label="任务完成率">
        </el-table-column>


        <el-table-column
          prop="PlanPhotoNum"
          label="形象进度照片数">
        </el-table-column>


        <el-table-column
          prop="EveryayPhotoNum"
          label="日常进度照片数">
        </el-table-column>

        <el-table-column
          prop="WeekPlanExportNum"
          label="周计划报表导出次数">
        </el-table-column>

        <el-table-column
          prop="logNum"
          label="施工日志数量">
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>

  import LeftBarChart from '../../gcharts/LeftBarChart';
  import ApplyPieChart from '../../gcharts/ApplyPieChart'

  export default {
    name: 'WeekTaskTail',
    data() {
      return {
        leftPieChartData:{
          name:'leftPie',
          data:[
            {value:335, name:'project'},
            {value:310, name:'斑马'},

          ]
        },
        centerPieChartData:{
          name:'centerPie',
          data:[
            {value:335, name:'project'},
            {value:310, name:'斑马'},

          ]
        },
        LeftBarData:{
          title: '施工日志统计',
          name: 'BIM5DFlagship',
          Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
          Xdata: [22, 32, 12, 26, 37]
        },
        ProjectList:[{
          Address:'北京',
          ProjectName:'北京项目',
          WeekTaskNum:22,
          AllTaskNum:22,
          NeedConcertTask:22,
          TaskOverRate:22,
          PlanPhotoNum:22,
          EveryayPhotoNum:22,
          WeekPlanExportNum:22,
          logNum:22,
        },{
          Address:'南京',
          ProjectName:'南京项目',
          WeekTaskNum:22,
          AllTaskNum:22,
          NeedConcertTask:22,
          TaskOverRate:22,
          PlanPhotoNum:22,
          EveryayPhotoNum:22,
          WeekPlanExportNum:22,
          logNum:22,
        },{

        }]
      }
    },
    components: {
      LeftBarChart,
      ApplyPieChart
    },
    computed: {
      getUrlChange() {
        return this.$store.state.CenterUseTemplateId;
      }
    },
    watch: {

      getUrlChange(val) {

        console.log('监听变化');
        console.log(val);
        this.getTemplateContent(val)

      }

    },
    mounted() {



    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .New-Week-plan {
    width: 98%;
    height: 98%;
    padding: 1%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .left{
    width: 98%;
    height: 48%;
    padding: 1%;
    position: absolute;
    left: 0;
    top: 1%;
  }
  .left-left{
    width: 33%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .left-center{
    width: 33%;
    height: 100%;
    position: absolute;
    left: 33.5%;
    top: 0;
  }
  .left-right{
    width: 33%;
    height: 100%;
    position: absolute;
    left: 67%;
    top: 0;

  }


  .right{
    width: 98%;
    height: 50%;
    padding: 1%;
    position: absolute;
    left: 0;
    top: 53%;
    overflow-y: scroll;
    padding-bottom: 280px;
  }


</style>
