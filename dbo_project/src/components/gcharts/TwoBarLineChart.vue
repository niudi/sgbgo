<template>
  <div id="TwoBarLineChart">

    <div class="title">{{ActiveUserData.title}}</div>
    <!--二维图表，柱状图+折线图-->
    <div :id="ActiveUserData.name"></div>

  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store';
  import echarts from 'echarts';

  export default {
    name: 'TwoBarLineChart',
    data() {
      return {}
    },
    props: ['handleInOut', 'ActiveUserData'],

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

      this.TwoBarLine()

    },
    methods: {
      TwoBarLine() {

        let myChart = echarts.init(document.getElementById(this.ActiveUserData.name))


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
            data: this.ActiveUserData.legend,
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
            textStyle: {
              fontSize: 10,//字体大小
              color: '#ffffff'//字体颜色
            },
          },
          xAxis: [
            {
              type: 'category',
              data: this.ActiveUserData.Xdata,
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
          series: this.dataChange(this.ActiveUserData.Ydata)
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
      dataChange(data) {

        let newArr = []

        for (var i in data) {
          let ChartType = data[i].type
          console.log(ChartType)
          let item = {
            name: data[i].name,
            type: data[i].type,
            data: data[i].value,
            color: data[i].color,
            yAxisIndex: ChartType == 'bar' ? 0 : 1,
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


                      if (ChartType == 'bar') {
                        return params.value;
                      } else {
                        return params.value + '%';
                      }


                    }
                  }
                }
              }
            }
          };
          newArr.push(item)

        }

        return newArr;


      }

    }
  }
</script>

<style scoped>

  #TwoBarLineChart {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #TwoBarLineChart div {
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
    padding-top: 5px;
    color: #ffffff;
  }


</style>
