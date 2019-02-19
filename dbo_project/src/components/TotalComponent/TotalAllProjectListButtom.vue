<template>
  <div id="TotalAllProjectListButtom">

    <div class="ButtomList">

      <el-table
        :data="ProjectList"
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
          label="2019新增项目数">
        </el-table-column>

        <el-table-column
          prop="AllOpenProject"
          label="累计打开项目数">
        </el-table-column>

        <el-table-column
          prop="NewAddBusiness"
          label="2019新增企业数">
        </el-table-column>

        <el-table-column
          prop="AllOpenBusiness"
          label="累计打开企业数">
        </el-table-column>


      </el-table>

      <!--<table border="1">-->
      <!--<tr>-->
      <!--<th v-for="(item,index) in TableTh" :key="index">{{item}}</th>-->
      <!--</tr>-->
      <!--<tr>-->
      <!--<td v-for="(item,index) in ProjectList" :key="index">{{item.project}}</td>-->
      <!--</tr>-->
      <!--<tr>-->
      <!--<td v-for="(item,index) in ProjectList" :key="index">{{item.NewAddProject}}</td>-->
      <!--</tr>-->
      <!--</table>-->


    </div>
  </div>
</template>

<script>

  // 引入echarts

  export default {
    name: 'TotalAllProjectListButtom',
    data() {
      return {
        TableTh: ['产品', '2019新增项目数', '累计打开项目数', '2019新增企业数', '累计打开企业数'],
        ProjectList: [{
          project: "BIM5D旗舰",
          NewAddProject: 200,
          AllOpenProject: 1300,
          NewAddBusiness: 974,
          AllOpenBusiness: 1724
        }, {
          project: "BIM5D生产",
          NewAddProject: 520,
          AllOpenProject: 520,
          NewAddBusiness: 425,
          AllOpenBusiness: 425
        }, {
          project: "质量管理",
          NewAddProject: 2083,
          AllOpenProject: 3024,
          NewAddBusiness: 153,
          AllOpenBusiness: 183
        }, {
          project: "安全管理",
          NewAddProject: 1853,
          AllOpenProject: 4979,
          NewAddBusiness: 196,
          AllOpenBusiness: 263
        }, {
          project: "物料管理",
          NewAddProject: 779,
          AllOpenProject: 1887,
          NewAddBusiness: 9174,
          AllOpenBusiness: 2698
        }, {
          project: "劳务管理",
          NewAddProject: 888,
          AllOpenProject: 1921,
          NewAddBusiness: 289,
          AllOpenBusiness: 475
        },]

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

  #TotalAllProjectListButtom {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: scroll;
  }

  #table-list {
    background: #000;
    text-align: center;
  }


</style>
