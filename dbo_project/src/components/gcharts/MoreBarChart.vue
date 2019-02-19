<template>
  <div id="MoreBarChart">

    <!--二维图表，柱状图+折线图-->
    <div :id="MoreBarData.name"></div>


  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'MoreBarChart',
    data() {
      return {}
    },
    props: ['handleInOut', 'MoreBarData'],
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

      this.MoreBar();


    },
    methods: {

      MoreBar() {


        //组装series，数据
        function DataRule(data) {

          let newArr = []

          for (var i in data) {
            let item = {
              name: data[i].name,
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
              data: data[i].value
            }

            newArr.push(item)

          }

          return newArr;

        }


        let myChart = echarts.init(document.getElementById(this.MoreBarData.name))

        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#ffffff'
              }
            }
          },
          legend: {
            show: this.MoreBarData.legendShow,
            data: this.MoreBarData.legendData,
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
            textStyle: {
              fontSize: 10,//字体大小
              color: '#ffffff'//字体颜色
            },
          },
          toolbox: {
            feature: {
              saveAsImage: {show: true}
            }
          },

          xAxis: [
            {
              type: 'category',
              data: this.MoreBarData.Xdata,
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          ],
          yAxis: {
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
          }
          ,
          series: DataRule(this.MoreBarData.Ydata)
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

  #MoreBarChart {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #MoreBarChart div {
    width: 100%;
    height: 100%;
  }


</style>
