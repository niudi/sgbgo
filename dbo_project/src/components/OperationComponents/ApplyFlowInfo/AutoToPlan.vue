<template>
  <div class="AutoToPlan">

      <el-table
        :data="ProjectList"
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
          label="自动生成期间计划份数">
        </el-table-column>



      </el-table>

  </div>
</template>

<script>


  export default {
    name: 'AutoToPlan',
    data() {
      return {
        ProjectList:[{
          Address:'北京',
          ProjectName:'北京项目',
          ProjectNum:25,
        },{
          Address:'南京',
          ProjectName:'南京项目',
          ProjectNum:250,
        }]
      }
    },
    components: {

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
  .AutoToPlan {
    width: 98%;
    height: 98%;
    padding: 1%;
    overflow-x: hidden;
    overflow-y: scroll;
  }



</style>
