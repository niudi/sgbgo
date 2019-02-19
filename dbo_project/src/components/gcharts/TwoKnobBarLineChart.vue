<template>
  <div id="TwoKnobBarLineChart">

    <!--二维图表，柱状图+折线图-->
    <div id="TwoKnobBarLine"></div>

  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store';
  import echarts from 'echarts';

  export default {//生产看板。产品应用率趋势
    name: 'TwoKnobBarLineChart',
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

      this.TwoDimonsion()

    },
    methods: {
      TwoDimonsion() {

        let myChart = echarts.init(document.getElementById('TwoKnobBarLine'))

        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {},
          legend: {
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
            textStyle: {
              fontSize: 10,//字体大小
              color: '#ffffff'//字体颜色
            },
            data: ['不活跃', '普通', '活跃', '超活跃', '应用率']
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018-6', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          ],
          yAxis: [

            {
              type: 'value',
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              name: '',
              axisLabel: {
                formatter: '{value} ',
                textStyle: {
                  color: '#ffffff'
                }
              }
            },
            {
              type: 'value',
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              name: '',
              axisLabel: {
                formatter: '{value} %',
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          ],
          series: [
            {
              name: '不活跃',
              type: 'bar',
              stack: '产品应用率',
              itemStyle: {
                normal: {
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
              data: [220, 232, 201, 234, 290, 230, 220, 240]
            },
            {
              name: '普通',
              type: 'bar',
              stack: '产品应用率',
              itemStyle: {
                normal: {
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
              data: [120, 132, 101, 134, 290, 230, 220, 250]
            },
            {
              name: '活跃',
              type: 'bar',
              stack: '产品应用率',
              itemStyle: {
                normal: {
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
              data: [60, 72, 71, 74, 190, 130, 110, 450]
            },
            {
              name: '超活跃',
              type: 'bar',
              stack: '产品应用率',
              itemStyle: {
                normal: {
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
              data: [62, 82, 91, 84, 109, 110, 120, 160]
            },
            {
              name: '应用率',
              type: 'line',
              yAxisIndex: 1,
              itemStyle: {
                normal: {
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
                        return params.value + '%';
                      }
                    }
                  }
                }
              },
              data: [20, 22, 33, 45, 63, 82, 73, 34]
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

  #TwoKnobBarLineChart {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #TwoKnobBarLineChart div {
    width: 100%;
    height: 100%;
  }


</style>
