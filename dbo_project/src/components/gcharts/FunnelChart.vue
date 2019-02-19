<template>
  <div id="chartradar">
    <!--我是图表-->
    <!--id必须是不重复的name-->
    <div id="FunnelChart"></div>
  </div>
</template>

<script>


  // 引入echarts

  import store from '../../store'
  import Xcharts from '../../assets/Xcharts'

  export default {
    name: 'FunnelChart',
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
        this.funnelChartOver('../../static/VisitData2.json')
      }
    },
    mounted() {

      this.funnelChartOver('../../static/VisitData.json')


    },
    methods: {
      funnelChartOver(url) {
        let isFunnel = this.funnel(url)

        isFunnel.then(res => {
          let isXchart = Xcharts('FunnelChart', res.data)
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
      funnel(url) {


        let isFunnleData = this.$axios.get(url).then((res) => {


          let Visit = res.data.Visit.num
          let Browes = res.data.Browse.num
          let IsClick = res.data.IsClick.num
          let Consult = res.data.Consult.num
          let Order = res.data.Order.num

          return {
            name: 'Gfunnel',
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


                      isFunnleData.then(res => {
                        Xcharts('FunnelChart', res.data)
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

              calculable: true,
              series: [
                {
                  name: '漏斗图',
                  type: 'funnel',
                  left: '10%',
                  top: 60,
                  bottom: 60,
                  width: '80%',
                  min: 0,
                  minSize: '0%',
                  maxSize: '100%',
                  sort: 'descending',
                  gap: 2,
                  label: {
                    normal: {
                      show: true,
                      position: 'inside'
                    },
                    emphasis: {
                      textStyle: {
                        fontSize: 20
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      length: 10,
                      lineStyle: {
                        width: 1,
                        type: 'solid'
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      borderColor: '#fff',
                      borderWidth: 1
                    }
                  },
                  data: [
                    {value: Visit, name: '访问'},
                    {value: Browes, name: '浏览'},
                    {value: IsClick, name: '点击'},
                    {value: Consult, name: '咨询'},
                    {value: Order, name: '订单'}
                  ]
                }
              ]
            }
          };
        })

        return isFunnleData


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

  #FunnelChart {
    width: 100%;
    height: 100%;
  }


</style>
