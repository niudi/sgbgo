<template>
  <div id="MoreLineChart">

    <!--二维图表，柱状图+折线图-->
    <div :id="projectApplyRateData.name"></div>

  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'CommonBarChart',
    data() {
      return {}
    },
    props: ['projectApplyRateData'],

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

      console.log(this.projectApplyRateData)
      this.MoreLine()

    },
    methods: {


      MoreLine() {

        let myChart = echarts.init(document.getElementById(this.projectApplyRateData.name))


        // 绘制图表
        myChart.setOption({

          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: this.projectApplyRateData.legendData,
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
            bottom: '10%',
            containLabel: true
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#ffffff'
              }
            },
            data: this.projectApplyRateData.Xdata,
          },
          yAxis: {
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            type: 'value',
            max: 100,
            axisLabel: {
              show: true,
              formatter: '{value}%',
              textStyle: {
                color: '#ffffff'
              }
            },
          },
          series: this.projectApplyRateData.Ydata,
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

  #MoreLineChart {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #MoreLineChart div {
    width: 100%;
    height: 100%;
  }


</style>
