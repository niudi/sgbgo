<template>
  <div class="New-Week-plan">
    <div class="left">
      <div class="left-title">新建周计划分布</div>
      <LeftBarChart :LeftBarData="LeftBarData"></LeftBarChart>
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
          prop="SelectTask"
          label="『选择新任务』生成任务条数">
        </el-table-column>

        <el-table-column
          prop="AddTask"
          label="『手动添加任务』生成任务条数">
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>

  import LeftBarChart from '../../gcharts/LeftBarChart'

  export default {
    name: 'NewWeekPlan',
    data() {
      return {
        LeftBarData:{
          title: '新建周计划分布',
          name: 'BIM5DFlagship',
          Ydata: ['2个月', '3个月', '4个月', '5个月', '6个月'],
          Xdata: [22, 32, 12, 26, 37]
        },
        ProjectList:[{
          Address:'北京',
          ProjectName:'北京项目',
          WeekTaskNum:25,
          SelectTask:55,
          AddTask:55,
        },{
          Address:'南京',
          ProjectName:'南京项目',
          WeekTaskNum:25,
          SelectTask:55,
          AddTask:55,
        }]
      }
    },
    components: {
      LeftBarChart
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
    width: 48%;
    height: 98%;
    padding: 1%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;

  }
  .left-title{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 14px;
  }
  .right{
    width: 48%;
    height: 98%;
    padding: 1%;
    position: absolute;
    left: 50%;
    top: 0;
    overflow-y: scroll;
  }


</style>
