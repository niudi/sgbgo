<template>
  <div class="ConcreteApplyRate">
    <div class="title">产品应用率趋势</div>
    <div class="ApplyRate">
      <TwoKnobBarLine></TwoKnobBarLine>
    </div>
  </div>
</template>

<script>


  import TwoKnobBarLine from '../gcharts/TwoKnobBarLineChart';

  export default {
    name: 'ConcreteApplyRate',
    data() {
      return {}
    },
    components: {
      TwoKnobBarLine
    },
    mounted() {


    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ConcreteApplyRate {
    width: 100%;
    height: 100%;

  }

  .title {
    width: 100%;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    font-size: 18px;
    padding-top: 10px;
    color: #ffffff;
  }

  .ApplyRate {
    width: 100%;
    height: 100%;
  }


</style>
