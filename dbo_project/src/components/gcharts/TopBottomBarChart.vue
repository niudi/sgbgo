<template>
  <div id="TopBottomBarChart">

    <!--二维图表，柱状图+折线图-->
    <div id="TopBar"></div>

    <div id="BottomBar"></div>

  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'TopBottomBarChart',
    data() {
      return {}
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

      this.TopBar()
      this.BottomBar()

    },
    methods: {


      TopBar() {

        let myChart = echarts.init(document.getElementById('TopBar'))


        // 绘制图表
        myChart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              axisLabel: {
                formatter: function () {
                  return "";
                }
              },
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220],
              itemStyle: {
                normal: {
                  color: '#3E72B0',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: '#615a5a'
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
              }
            },

          ]
        });


        myChart.on('click', function (param) {
          //向vuex中数据，点击了哪个图像的块
          if (_this.handleInOut.out == 0) {

          } else if (_this.handleInOut.out == 1) {

            store.state.ClickseriesName = param.seriesName;
            store.state.ClickName = param.name;

          }


        })


      },

      BottomBar() {

        let myChart = echarts.init(document.getElementById('BottomBar'))


        // 绘制图表
        myChart.setOption({

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: function (params) {

              if (params.value == 0) {
                return '';
              } else {//可以通过console.log(params)查看，每一项的数据，具体拼凑需要的值
                return params[0].axisValue + '<br/>' + params[0].seriesName + ':' + -params[0].value + '<br/>' + params[1].seriesName + ':' + -params[1].value;
              }
            }
          },

          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
              formatter: function () {
                return "";
              }
            }

          },
          yAxis: {
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
              formatter: function () {
                return "";
              }
            }
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [-1823, -2349, -2904, -2040, -1314, -3300, -2600],
              itemStyle: {
                emphasis: {
                  barBorderRadius: 30
                },
                normal: {
                  barBorderRadius: 30,
                  color: '#878904',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: '#615a5a'
                    },
                    formatter: function (params) {
                      if (params.value == 0) {
                        return '';
                      } else {
                        return -params.value;
                      }
                    }
                  }
                }
              },
            },
            {
              name: '2012年',
              type: 'bar',
              data: [-1935, -2348, -3100, -2214, -1341, -3817, -2500],
              itemStyle: {
                emphasis: {
                  barBorderRadius: 30
                },
                normal: {
                  barBorderRadius: 30,
                  color: '#107002',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: '#615a5a'
                    },
                    formatter: function (params) {
                      if (params.value == 0) {
                        return '';
                      } else {
                        return -params.value;
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


      },
    }
  }
</script>

<style scoped>

  #TopBottomBarChart {
    width: 100%;
    height: 100%;
    position: relative;
    background: #ffffff;
  }

  #TopBar {
    width: 100%;
    height: 50%;
  }

  #BottomBar {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 45%;
  }

</style>
