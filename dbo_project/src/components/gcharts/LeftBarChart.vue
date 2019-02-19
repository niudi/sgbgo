<template>
  <div id="LeftBarChart">
    <div class="left-bar-title">{{LeftBarData.title}}</div>
    <!--二维图表，柱状图+折线图-->
    <div :id="LeftBarData.name"></div>

  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'LeftBarChart',
    data() {
      return {}
    },
    props: ['handleInOut', 'LeftBarData'],

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


      this.LeftBar()

    },
    methods: {
      LeftBar() {

        let myChart = echarts.init(document.getElementById(this.LeftBarData.name))


        // 绘制图表
        myChart.setOption({

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            type: 'value',
            axisLabel: {
              formatter: function () {
                return "";
              },
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: this.LeftBarData.Ydata,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#ffffff'
              }
            }

          },
          series: [

            {
              name: '2012年',
              type: 'bar',
              data: this.LeftBarData.Xdata,
              itemStyle: {
                normal: {
                  color: '#4B88CB',
                  label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                      color: '#ffffff'
                    },
                    formatter: function (params) {
                      if (params.value == 0) {
                        return '';
                      } else {
                        return params.value;
                      }
                    }
                  }
                }
              },
            }
          ]
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

  #LeftBarChart {
    width: 100%;
    height: 100%;
    position: relative;

  }

  #LeftBarChart div {
    width: 100%;
    height: 100%;
  }

  #LeftBarChart .left-bar-title {
    width: 100%;
    height: 5%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 15%;
    color: #ffffff;
    font-size: 14px;

  }


</style>
