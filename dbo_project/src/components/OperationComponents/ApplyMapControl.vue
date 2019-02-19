<template>
  <div id="ApplyMapControl">
    <DateSelect></DateSelect>
    <div class="userBase">
      客群
      <el-select v-model="value" placeholder="请选择客群" style="width:150px;" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    </div>

    <div class="bigRegion">
      所属大区
      <el-select v-model="value" placeholder="请选择所属大区" style="width:150px;" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    </div>

    <div class="region">
      地区
      <el-select v-model="value" placeholder="请选择地区" style="width:150px;" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    </div>

    <div class="projectName">
      项目名称
      <el-select v-model="value" placeholder="请选择项目名称" style="width:150px;" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    </div>

    <el-button size="mini" type="primary" class="getNewData">确定</el-button>


  </div>
</template>

<script>

  import DateSelect from '../PublicComponent/DateSelect'

  // 引入echarts

  export default {
    name: 'ApplyMapControl',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''


      }
    },
    components: {
      DateSelect
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

<style scoped>

  #ApplyMapControl {
    width: 100%;
    height: 60px;
    position: relative;
    color: #ffffff;
    font-size: 14px;
  }
  .userBase{
    position: absolute;
    left: 320px;
    top: 10px;
    width: 200px;

  }

  .bigRegion{
    position: absolute;
    left: 520px;
    top: 10px;
    width: 250px;

  }

  .region{
    position: absolute;
    left: 750px;
    top: 10px;
    width: 200px;

  }

  .projectName{
    position: absolute;
    left: 950px;
    top: 10px;
    width: 250px;

  }
  .getNewData{
    position: absolute;
    left: 1200px;
    top: 10px;
  }




</style>
