<template>
  <div id="DateSelect">
    <div class="title"> 时间 </div>

    <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      size="mini"
      style="width:250px;"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker>

  </div>
</template>

<script>

  // 引入echarts

  export default {
    name: 'DateSelect',
    data() {
      return {

        DateValue1:'',
        DateValue2:'',
        value7:'',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近九个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 270);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一年',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 360);
              picker.$emit('pick', [start, end]);
            }
          }]
        },

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

<style scoped>

  #DateSelect {
    width: 400px;
    height: 50px;
    position: relative;
    color: #ffffff;
    padding:10px 50px;
  }
  .title{
    position: absolute;
    left: 10px;
    font-size: 14px;
    top: 0;
    line-height: 48px;
  }




</style>
