<template>
  <div id="TotalRegionTop">

    <div class="RegionTopList">

      <el-table
        :data="TopList"
        id="table-list"
        border
        size="mini"
        style="width: 100%;">

        <el-table-column
          prop="region"
          label="地区">
          <template slot-scope="scope">
            <span>{{scope.row.region}}</span>
            <span v-if="scope.row.regionFlag == 0"></span>
            <span v-else-if="scope.row.regionFlag == 1" style="color: red;font-weight:bold;font-size: 16px;">↑</span>
            <span v-else="scope.row.regionFlag == 2" style="color: green;font-weight:bold;font-size: 16px;">↓</span>
            <span v-if="scope.row.regionChange== 0"></span>
            <span v-else-if="scope.row.regionChange!= 0">{{scope.row.regionChange}}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="ActiveProject"
          label="活跃项目数">
          <template slot-scope="scope">
            <span>{{scope.row.ActiveProject}}</span>
            <span v-if="scope.row.ActiveProjectFlag == 0"></span>
            <span v-else-if="scope.row.ActiveProjectFlag == 1"
                  style="color: red;font-weight:bold;font-size: 16px;">↑</span>
            <span v-else="scope.row.ActiveProjectFlag == 2"
                  style="color: green;font-weight:bold;font-size: 16px;">↓</span>
            <span v-if="scope.row.ActiveProjectChange == 0"></span>
            <span v-else-if="scope.row.ActiveProjectChange!= 0">{{scope.row.ActiveProjectChange}}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="ActiveBusiness"
          label="活跃企业数">
          <template slot-scope="scope">

            <span>{{scope.row.ActiveBusiness}}</span>

            <span v-if="scope.row.ActiveBusinessFlag == 0"></span>
            <span v-else-if="scope.row.ActiveBusinessFlag == 1"
                  style="color: red;font-weight:bold;font-size: 16px;">↑</span>
            <span v-else="scope.row.ActiveBusinessFlag == 2"
                  style="color: green;font-weight:bold;font-size: 16px;">↓</span>

            <span v-if="scope.row.ActiveBusinessChange == 0"></span>
            <span v-else-if="scope.row.ActiveBusinessChange != 0">{{scope.row.ActiveBusinessChange}}</span>
          </template>
        </el-table-column>


      </el-table>


    </div>
  </div>
</template>

<script>

  // 引入echarts

  export default {
    name: 'TotalRegionTop',
    data() {
      return {

        TopList: [{
          region: '北京',
          regionFlag: 0,
          regionChange: '0',
          ActiveProject: '750',
          ActiveProjectFlag: 1,
          ActiveProjectChange: '50',
          ActiveBusiness: '100',
          ActiveBusinessFlag: 1,
          ActiveBusinessChange: '5'
        }, {
          region: '河南',
          regionFlag: 1,
          regionChange: '1',
          ActiveProject: '652',
          ActiveProjectFlag: 1,
          ActiveProjectChange: '150',
          ActiveBusiness: '180',
          ActiveBusinessFlag: 1,
          ActiveBusinessChange: '15'
        }, {
          region: '陕西',
          regionFlag: 1,
          regionChange: '1',
          ActiveProject: '420',
          ActiveProjectFlag: 2,
          ActiveProjectChange: '42',
          ActiveBusiness: '200',
          ActiveBusinessFlag: 1,
          ActiveBusinessChange: '8'
        }, {
          region: '江苏',
          regionFlag: 2,
          regionChange: '2',
          ActiveProject: '300',
          ActiveProjectFlag: 2,
          ActiveProjectChange: '104',
          ActiveBusiness: '170',
          ActiveBusinessFlag: 2,
          ActiveBusinessChange: '14'
        }, {
          region: '上海',
          regionFlag: 1,
          regionChange: '2',
          ActiveProject: '152',
          ActiveProjectFlag: 1,
          ActiveProjectChange: '54',
          ActiveBusiness: '52',
          ActiveBusinessFlag: 1,
          ActiveBusinessChange: '5'
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

  #TotalRegionTop {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .RegionTopList {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 25%;
    top: 0;
  }


</style>
