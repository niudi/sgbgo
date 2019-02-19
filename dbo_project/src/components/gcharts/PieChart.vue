<template>
  <div id="chartradar">
    <!--我是图表-->
    <!--id必须是不重复的name-->
    <div id="PieChart"></div>
  </div>
</template>

<script>


  // 引入echarts

  import store from '../../store'
  import echarts from 'echarts'

  export default {
    name: 'PieChart',
    data() {
      return {
        childData: '',

      }
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
          if (val == '2017') {

            this.pieChart('', '1483200000000')

          } else if (val == '2018') {

            this.pieChart('', '1514736000000')

          } else if (val == '2019') {

            this.pieChart('', '1546272000000')

          }
        }


      }
    },
    mounted() {

      this.pieChart('', '1483200000000')
      console.log(this.handleInOut.in)

    },
    methods: {

      pieChart(pcode, date) {


        let _this = this;


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
              name: [],
              value: []
            }
            let name = [];
            let value = [];


            for (var i in res.data.data) {


              name.push(res.data.data[i].name);
              value.push(res.data.data[i]);

            }
            BarData.name = name;
            BarData.value = value;

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
                    isPieData.then(res => {
                      Xcharts('PieChart', res.data)
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
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: res.name
            },
            series: [
              {
                name: '饼状图',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: res.value,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }


        }).then(res => {

          console.log(res)


          let myChart = echarts.init(document.getElementById('PieChart'))


          // 绘制图表
          myChart.setOption(res);


          myChart.on('click', function (param) {
            //向vuex中数据，点击了哪个图像的块


            if (_this.handleInOut.out == 0) {

            } else if (_this.handleInOut.out == 1) {

              store.state.ClickseriesName = param.seriesName
              store.state.ClickName = param.name

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

  #PieChart {
    width: 100%;
    height: 100%;
  }


</style>
