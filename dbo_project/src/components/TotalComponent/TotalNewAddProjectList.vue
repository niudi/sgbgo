<template>
  <div id="TotalNewAddProjectList">

    <div class="title">1月新增项目统计</div>

    <div class="NewAddProjectList">

      <el-table
        :data="TopList"
        id="table-list"
        border
        size="mini"
        style="width: 100%">

        <el-table-column
          prop="project"
          label="产品">
        </el-table-column>

        <el-table-column
          prop="NewAddProject"
          label="本月新增项目数">
          <template slot-scope="scope">
            <span>{{scope.row.NewAddProject}}</span>

            <span v-if="scope.row.NewAddProjectFlag == 0"></span>
            <span v-else-if="scope.row.NewAddProjectFlag == 1" style="color: red;font-weight:bold;font-size: 16px;">↑{{scope.row.ActiveProjectChange}}</span>
            <span v-else="scope.row.NewAddProjectFlag == 2" style="color: green;font-weight:bold;font-size: 16px;">↓{{scope.row.ActiveProjectChange}}</span>


          </template>

        </el-table-column>


      </el-table>


    </div>
  </div>
</template>

<script>

  // 引入echarts

  export default {
    name: 'TotalNewAddProjectList',
    data() {
      return {

        TopList: [{
          project: 'BIM5D旗舰',
          NewAddProject: '753',
          NewAddProjectFlag: 1,
          NewAddProjectChange: '50'
        }, {
          project: 'BIM5D生产',
          NewAddProject: '520',
          NewAddProjectFlag: 1,
          NewAddProjectChange: '50'
        }, {
          project: '质量管理',
          NewAddProject: '2083',
          NewAddProjectFlag: 1,
          NewAddProjectChange: '50'
        }, {
          project: '安全管理',
          NewAddProject: '1852',
          NewAddProjectFlag: 2,
          NewAddProjectChange: '104'
        }, {
          project: '物料管理',
          NewAddProject: '779',
          NewAddProjectFlag: 2,
          NewAddProjectChange: '104'
        }, {
          project: '劳务管理',
          NewAddProject: '888',
          NewAddProjectFlag: 2,
          NewAddProjectChange: '104'
        }]

      }
    },
    props: ['handleInOut'],

    computed: {
      getChartChange() {
        return this.$store.state.ClickName;
      }
    },
    watch: {
      getChartChange(val) {

        console.log('监听变化：');
        console.log(val);

        if (this.handleInOut.in == 0) {

        } else if (this.handleInOut.in == 1) {

        }


      }
    },
    mounted() {


    },
    methods: {}
  }
</script>


<style>
  .el-table__header th, .el-table__header tr {

    background-color: #0a184e;
    color: #ffffff;

  }

  .el-table__body th, .el-table__body tr {
    background-color: #0a184e;
    color: #ffffff;
  }

  .el-table__body tr:hover > td {
    background: #0a184e !important;
  }

  .el-table__body tr.current-row > td {
    background: #0a184e !important;
  }
</style>

<style scoped>

  #TotalNewAddProjectList {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: scroll;
  }

  .NewAddProjectList {
    width: 60%;
    height: 100%;
    position: absolute;
    left: 20%;
    top: 50px;
  }

  .title {
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    line-height: 30px;
    position: absolute;
    top: 3%;

  }


</style>
