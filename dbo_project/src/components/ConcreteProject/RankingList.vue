<template>
  <div id="RankingList">
    <div class="RankingList-title">全国应用排行</div>
    <div class="RankingTable">

      <el-table
        :data="RankingData"
        border
        size="mini"
        :row-class-name="tableRowClassName">

        <el-table-column
          prop="rank"
          label="排名">
        </el-table-column>

        <el-table-column
          prop="region"
          label="地区">
        </el-table-column>

        <el-table-column
          prop="ActiveProject"
          label="活跃项目数">
        </el-table-column>

        <el-table-column
          prop="ActiveCompany"
          label="活跃企业数">
        </el-table-column>

        <el-table-column
          prop="DeployProject"
          label="部署项目数">
        </el-table-column>

        <el-table-column
          prop="DeployCompany"
          label="部署企业数">
        </el-table-column>

      </el-table>


    </div>
  </div>
</template>

<script>

  // 引入echarts

  export default {
    name: 'RankingList',
    data() {
      return {
        RankingData: [{
          rank: '-',
          region: '全国',
          ActiveProject: 400,
          ActiveCompany: 100,
          DeployProject: 700,
          DeployCompany: 315
        }, {
          rank: '1',
          region: '北京',
          ActiveProject: 80,
          ActiveCompany: 25,
          DeployProject: 75,
          DeployCompany: 33
        }, {
          rank: '2',
          region: '河南',
          ActiveProject: 70,
          ActiveCompany: 85,
          DeployProject: 60,
          DeployCompany: 15
        }, {
          rank: '3',
          region: '陕西',
          ActiveProject: 40,
          ActiveCompany: 10,
          DeployProject: 70,
          DeployCompany: 31
        }, {
          rank: '4',
          region: '江苏',
          ActiveProject: 90,
          ActiveCompany: 100,
          DeployProject: 200,
          DeployCompany: 15
        }, {
          rank: '5',
          region: '上海',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
        }, {
          rank: '6',
          region: '广东',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
        }, {
          rank: '7',
          region: '浙江',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
        }, {
          rank: '8',
          region: '天津',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
        }, {
          rank: '9',
          region: '广西',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
        }, {
          rank: '10',
          region: '四川',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
        }, {
          rank: '11',
          region: '重庆',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
        }, {
          rank: '12',
          region: '河北',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
        }, {
          rank: '13',
          region: '安徽',
          ActiveProject: 35,
          ActiveCompany: 25,
          DeployProject: 22,
          DeployCompany: 44
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
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1 || rowIndex === 2 || rowIndex === 3) {
          return 'warning-row';
        }
        return '';
      },


    }
  }
</script>

<style>
  .el-table .warning-row {
    color: red;
  }

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

  #RankingList {
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    color: #ffffff;
  }

  .RankingList-title {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
  }

  .RankingTable {
    width: 96%;
    height: 90%;
    position: absolute;
    left: 2%;
    top: 30px;
  }


</style>
