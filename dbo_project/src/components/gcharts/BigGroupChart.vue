<template>
  <div id="BigGroupChart">

    <div class="TopLine-title">企业数<br/>/<br/>项目数</div>
    <div id="TopLine"></div>

    <!--二维图表，柱状图+折线图-->
    <div class="BigGroupTop-title">项目数</div>
    <div id="BigGroupTop"></div>

    <!--向下的柱状图-->
    <div class="BigGroupBottom-title">企业数</div>
    <div id="BigGroupBottom"></div>

  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'BigGroupChart',
    data() {
      return {}
    },
    props: ['handleInOut', 'BigGroupChartData'],//BigGroupChartData后期需要两个大的综合图表，时传过来三个图形的id
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

      this.TopLine();
      this.BigGroupTop();
      this.BigGroupBottom();

    },
    methods: {
      TopLine() {

        let myChart = echarts.init(document.getElementById('TopLine'))

        // 绘制图表
        myChart.setOption({
          tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#ffffff'
              }
            }
          },
          toolbox: {
            feature: {
              saveAsImage: {show: false}
            }
          },
          xAxis: [
            {
              show: false,
              type: 'category',
              data: ['2018-6', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2018-13'],
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
              show: false,
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              type: 'value',
              name: '',
              axisLabel: {
                formatter: '{value}%',
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          ],
          series: [
            {
              name: '企业数/项目数',
              type: 'line',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
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
              data: [5.0, 6.2, 8.3, 7.5, 6.3, 6.2, 9.3, 10.4]
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
      BigGroupTop() {

        let myChart = echarts.init(document.getElementById('BigGroupTop'))

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
          toolbox: {
            feature: {
              saveAsImage: {show: false}
            }
          },
          legend: {
            data: ['蒸发量', '降水量', '平均温度']
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018-6', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2018-13'],
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
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              type: 'value',
              name: '',
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: '#ffffff'
                }
              }
            },
            {
              type: 'value',
              name: '',
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              axisLabel: {
                formatter: '',
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          ],
          series: [
            {
              name: 'BIM5D旗舰',
              type: 'bar',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
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
              data: [2.0, 4.9, 7.0, 3.2, 5.6, 6.7, 5.6, 2.2]
            },
            {
              name: 'BIM5D生产',
              type: 'bar',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
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
              data: [2.6, 5.9, 5.0, 6.4, 8.7, 7.7, 7.6, 8.2]
            }
            ,
            {
              name: '质量管理',
              type: 'bar',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
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
              data: [2.0, 3.2, 4.3, 4.5, 5.3, 6.2, 5.3, 3.4]
            },

            {
              name: '安全管理',
              type: 'bar',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
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
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 6.3, 5.4]
            },
            {
              name: '物料管理',
              type: 'bar',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
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
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 5.2, 8.3, 9.4]
            },
            {
              name: '劳务管理',
              type: 'bar',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
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
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 3.2, 2.3, 3.4]
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
      BigGroupBottom() {


        let myChart = echarts.init(document.getElementById('BigGroupBottom'))

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
                var str = params[0].axisValue + '<br/>'
                for (var i in params) {
                  str += params[i].seriesName + ':' + -params[i].value + '<br/>'
                }
                return str;
              }
            }
          },
          xAxis: [
            {
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              axisLabel: {
                formatter: function () {
                  return "";
                },
                textStyle: {
                  color: '#ffffff'
                }
              },
              type: 'category',
              data: ['2018-6', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2018-13'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              type: 'value',
              name: '',
              axisLabel: {
                formatter: function (params) {
                  return -params

                },
                textStyle: {
                  color: '#ffffff'
                }
              }
            },
            {
              type: 'value',
              name: '',
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              axisLabel: {
                formatter: '',
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          ],
          series: [
            {
              name: 'BIM5D旗舰',
              type: 'bar',
              data: [-2.0, -4.9, -7.0, -3.2, -5.6, -6.7, -5.6, -2.2],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: '#ffffff'
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
              name: 'BIM5D生产',
              type: 'bar',
              data: [-2.6, -5.9, -5.0, -6.4, -5.7, -7.7, -7.6, -5.2],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: '#ffffff'
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
            ,
            {
              name: '质量管理',
              type: 'bar',
              yAxisIndex: 1,
              data: [-2.0, -3.2, -4.3, -4.5, -5.3, -6.2, -5.3, -3.4],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: '#ffffff'
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
              name: '安全管理',
              type: 'bar',
              yAxisIndex: 1,
              data: [-2.0, -2.2, -3.3, -4.5, -6.3, -5.2, -6.3, -5.4],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: '#ffffff'
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
              name: '物料管理',
              type: 'bar',
              yAxisIndex: 1,
              data: [-2.0, -2.2, -3.3, -4.5, -6.3, -5.2, -5.3, -4.4],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: '#ffffff'
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
              name: '劳务管理',
              type: 'bar',
              yAxisIndex: 1,
              data: [-2.0, -2.2, -3.3, -4.5, -6.3, -3.2, -2.3, -3.4],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: '#ffffff'
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

  #BigGroupChart {
    width: 1500px;
    position: relative;
  }

  .TopLine-title {
    width: 15px;
    height: 100px;
    position: absolute;
    left: 30px;
    top: 10px;
    color: #ffffff;
  }

  #TopLine {
    width: 1500px;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .BigGroupTop-title {
    width: 15px;
    height: 100px;
    position: absolute;
    left: 30px;
    top: 250px;
    color: #ffffff;
  }

  #BigGroupTop {
    width: 1500px;
    height: 250px;
    position: absolute;
    left: 0;
    top: 150px;
  }

  .BigGroupBottom-title {
    width: 15px;
    height: 100px;
    position: absolute;
    left: 30px;
    top: 400px;
    color: #ffffff;
  }

  #BigGroupBottom {
    width: 1500px;
    height: 250px;
    position: absolute;
    left: 0;
    top: 320px;
  }


</style>
