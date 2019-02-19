<template>
  <div class="TotalAllProjectList">
    <div class="all-project-list-title">项目总数：{{AllProjectNum}}</div>
    <div class="all-project-list">
      <table border="1">
        <tr>
          <td v-for="(item,index) in ProjectListData" :key="index">{{item.title}}:{{item.projectNum}}</td>

        </tr>
        <tr>
          <td v-for="(item,index) in ProjectListData" :key="index">{{item.rate}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'TotalAllProjectList',
    data() {
      return {
        AllProjectNum: 6532,
        ProjectListData: [{
          title: '5D旗舰',
          projectNum:'754',
          rate: '64.35%'
        }, {
          title: '5D生产',
          projectNum:'520',
          rate: '90.12%'
        }, {
          title: '质量',
          projectNum:'2753',
          rate: '76.35%'
        }, {
          title: '安全',
          projectNum:'1753',
          rate: '71.12%'
        }, {
          title: '物料',
          projectNum:'2083',
          rate: '73.25%'
        }, {
          title: '劳务',
          projectNum:'888',
          rate: '84.42%'
        },]
      }
    },
    components: {},
    mounted() {


    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .TotalAllProjectList {
    width: 100%;
    height: 100%;

  }

  .all-project-list-title {
    padding: 1% 0;
    width: 100%;
    height: 15%;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }

  .all-project-list {
    width: 100%;
    height: 75%;
    color: #ffffff;
    /*background: #ffffff;*/
  }

  .all-project-list table {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ffffff;
  }


</style>
