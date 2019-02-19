<template>
  <div id="KnobbyBarChart">

    <!--左边起的多节柱状图-->
    <div :id="KnobbyBarChartData.name"></div>

  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'KnobbyBarChart',
    data() {
      return {}
    },
    props: ['KnobbyBarChartData'],

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

      this.KnobbyBar()

    },
    methods: {

      KnobbyBar() {

        let myChart = echarts.init(document.getElementById(this.KnobbyBarChartData.name))

        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: this.KnobbyBarChartData.legendData,
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
            textStyle: {
              fontSize: 10,//字体大小
              color: '#ffffff'//字体颜色
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '12%',
            containLabel: true
          },
          xAxis: {
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            type: 'value',
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          yAxis: [{
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            type: 'category',
            data: this.KnobbyBarChartData.Ydata1,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#ffffff'
              }
            }
          }, {
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            type: 'category',
            data: this.KnobbyBarChartData.Ydata2,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#ffffff'
              }
            }
          }],
          series: this.KnobbyBarChartData.Xdata
        });


        myChart.on('click', function (param) {
          //向vuex中数据，点击了哪个图像的块
          if (this.handleInOut.out == 0) {

          } else if (this.handleInOut.out == 1) {

            store.state.ClickseriesName = param.seriesName;
            store.state.ClickName = param.name;

          }


        })


      }

    }
  }
</script>

<style scoped>

  #KnobbyBarChart {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #KnobbyBarChart div {
    width: 100%;
    height: 100%;
  }


</style>
