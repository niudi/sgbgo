<template>
  <div id="chartradar">
    <!--我是图表-->
    <!--id必须是不重复的name-->
    <div id="BarChart"></div>
  </div>
</template>

<script>


  // 引入echarts
  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'BarChart',
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

          if (val == 'A' || val == 'B' || val == 'C') {
            this.barChart(val, '')
          }

        }


      }
    },
    mounted() {


      this.barChart('', '')


    },
    methods: {

      barChart(pcode, date) {

        var _this = this;


        this.$axios({
          method: 'get',
          url: '/apis/api/data/test',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            pcode: pcode,
            date: date
          }
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {

            let BarData = {
              date: [],
              nums: []
            }
            let date = [];
            let nums = [];


            for (var i in res.data.data) {

              let timeYear = res.data.data[i].name / 1000
              let timeAllYear = this.$formDate(timeYear)
              let year = timeAllYear.slice(0, 4)
              date.push(year);
              nums.push(res.data.data[i].value);

            }
            BarData.date = date;
            BarData.nums = nums;

            console.log(BarData)

            return BarData;

          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        }).then(res => {
          console.log(res)

          return {
            toolbox: {
              show: true,
              feature: {

                myTool2: {
                  show: true,
                  title: '还原',
                  icon: 'image://http://echarts.baidu.com/images/favicon.png',
                  onclick: function () {
                    isBarData.then(res => {
                      Xcharts('BarChart', res.data)
                    })
                  }
                },
                restore: {
                  title: ' ',
                  show: false
                },
                saveAsImage: {
                  title: ' ',
                  show: false
                }
              }
            },
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
                data: res.date,
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '柱状图',
                type: 'bar',
                barWidth: '60%',
                data: res.nums
              }
            ]
          }


        }).then(res => {

          console.log(res)


          let myChart = echarts.init(document.getElementById('BarChart'))


          // 绘制图表
          myChart.setOption(res);


          myChart.on('click', function (param) {
            //向vuex中数据，点击了哪个图像的块
            if (_this.handleInOut.out == 0) {

            } else if (_this.handleInOut.out == 1) {

              store.state.ClickseriesName = param.seriesName;
              store.state.ClickName = param.name;

            }


          })


        })

      }
    }
  }
</script>

<style scoped>

  #chartradar {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #chartradar div {
    width: 100%;
    height: 100%;
    background: #fff;
    float: left;

  }

  #BarChart {
    width: 100%;
    height: 100%;
  }


</style>
