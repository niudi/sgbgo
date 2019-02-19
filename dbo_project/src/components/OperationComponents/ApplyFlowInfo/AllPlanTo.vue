<template>
  <div class="apply-plan">
    <div class="left">
      <ApplyPieChart :ApplyPieChartData="ApplyPieChartData"></ApplyPieChart>
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
          prop="ProjectNum"
          label="project计划来源数">
        </el-table-column>

        <el-table-column
          prop="ZebraNum"
          label="斑马计划来源数">
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>

  import ApplyPieChart from '../../gcharts/ApplyPieChart'

  export default {
    name: 'ApplyPlanTo',
    data() {
      return {
        ApplyPieChartData:{
          name:'AllPlanTo',
          data:[
            {value:335, name:'project'},
            {value:310, name:'斑马'},

          ]
        },
        ProjectList:[{
          Address:'北京',
          ProjectName:'北京项目',
          ProjectNum:25,
          ZebraNum:55
        },{
          Address:'南京',
          ProjectName:'南京项目',
          ProjectNum:250,
          ZebraNum:550
        }]
      }
    },
    components: {
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
  .apply-plan {
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
