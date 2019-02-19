<template>
  <div class="ProductionMeet">
    <div class="left">
      <div class="left-title">生产周会投屏次数分布</div>
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
          prop="ProductionWeekClickNum"
          label="『生产周会』点击次数">
        </el-table-column>

        <el-table-column
          prop="CastNum"
          label="投屏次数">
        </el-table-column>



      </el-table>
    </div>
  </div>
</template>

<script>

  import LeftBarChart from '../../gcharts/LeftBarChart'

  export default {
    name: 'ProductionMeet',
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
          ProductionWeekClickNum:25,
          CastNum:55,

        },{
          Address:'南京',
          ProjectName:'南京项目',
          ProductionWeekClickNum:25,
          CastNum:55,
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
  .ProductionMeet {
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
