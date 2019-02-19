<template>
  <div id="ApplyFlow">
    <div class="title">总计划导入</div>
    <div class="FlowNums">
      <div class="lanNums">100</div>
      <div class="RealNums">95</div>
    </div>
    <div class="flowPercent">95%</div>
  </div>
</template>

<script>


  export default {
    name: 'ApplyFlow',
    data() {
      return {}
    },

    mounted() {


    },
    methods: {}
  }
</script>

<style scoped>

  #ApplyFlow {
    width: 200px;
    height: 150px;
    position: relative;
    padding: 10px;
    background: #ffffff;
    left: 10%;
    top: 20%;
    color: #ffffff;
  }

  .title {
    width: 100%;
    height: 70px;
    background: #909090;
    text-align: center;
    line-height: 70px;
    font-size: 16px;
    margin-bottom: 10px;

  }

  .FlowNums {
    width: 100%;
    height: 70px;
    /*background: #ccc;*/
    text-align: center;
    line-height: 70px;
    font-size: 16px;
  }

  .lanNums {
    width: 48%;
    height: 70px;
    background: #909090;
    float: left;
    margin-right: 2%;
  }

  .RealNums {
    width: 48%;
    height: 70px;
    background: #909090;
    float: left;
    margin-left: 2%;
  }

  .flowPercent {
    position: absolute;
    right: -25px;
    top: -25px;
    width: 50px;
    height: 50px;
    background: #909090;
    text-align: center;
    line-height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

</style>
