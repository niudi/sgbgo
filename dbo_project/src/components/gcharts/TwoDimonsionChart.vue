<template>
  <div id="TwoDimonsionChart">

    <!--二维图表，柱状图+折线图-->
    <div id="TwoDimonsion"></div>

  </div>
</template>

<script>

  // 引入echarts

  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'TwoDimonsionChart',
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

        let myChart = echarts.init(document.getElementById('TwoDimonsion'))


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
            data: ['新增项目数', '新增项目应用率']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [

            {
              type: 'value',
              axisLine: {show: false},
              name: '',
              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              type: 'value',
              axisLine: {show: false},
              name: '',
              axisLabel: {
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name: '新增项目数',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name: '新增项目应用率',
              type: 'line',
              yAxisIndex: 1,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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

  #TwoDimonsionChart {
    width: 500px;
    height: 500px;
    position: relative;
  }

  #TwoDimonsion {
    width: 500px;
    height: 500px;
  }


</style>
