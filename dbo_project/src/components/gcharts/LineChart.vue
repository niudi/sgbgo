<template>
  <div id="chartradar">
    <!--我是图表-->
    <!--id必须是不重复的name-->
    <div id="LineChart"></div>
  </div>
</template>

<script>


  // 引入echarts

  import store from '../../store'
  import Xcharts from '../../assets/Xcharts'

  export default {
    name: 'LineChart',
    data() {
      return {}
    },

    computed: {
      getChartChange() {
        return this.$store.state.ClickName;
      }
    },
    watch: {
      getChartChange(val) {
        console.log('监听变化：');
        console.log(val);
        this.lineChartOver('../../static/VisitData2.json')
      }
    },
    mounted() {


      this.lineChartOver('../../static/VisitData.json')


    },
    methods: {
      lineChartOver(url) {
        let isLine = this.line(url)

        isLine.then(res => {
          let isXchart = Xcharts('LineChart', res.data)
          return isXchart;
        }).then((res) => {
          res.on('click', function (param) {


            //向vuex中数据，点击了哪个图像的块
            store.state.ClickseriesName = param.seriesName
            store.state.ClickName = param.name

            // console.log(param)
            // console.log(store.state.ClickseriesName)
            // console.log(store.state.ClickName)


          })
        })
      },
      line(url) {

        let isLineData = this.$axios.get(url).then((res) => {

          let everydayDate = res.data.Visit.facility.phone.mold.date;
          let everydayNum = res.data.Visit.facility.phone.mold.Android.everydayNum;


          return {
            name: 'Gline',
            width: '100%',
            height: "100%",

            data: {
              toolbox: {
                show: true,
                feature: {
                  myTool2: {
                    show: true,
                    title: '还原',
                    icon: 'image://http://echarts.baidu.com/images/favicon.png',
                    onclick: function () {


                      isLineData.then(res => {
                        Xcharts('LineChart', res.data)
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
              xAxis: {
                type: 'category',
                data: everydayDate
              },
              yAxis: {
                type: 'value'
              },
              tooltip: {
                trigger: 'axis'
              },
              series: [{
                name: '折线图',
                data: everydayNum,
                type: 'line'
              }]
            }
          }
        })

        return isLineData


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

  #LineChart {
    width: 100%;
    height: 100%;
  }


</style>
