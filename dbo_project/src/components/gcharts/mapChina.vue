<template>
  <div class="echarts">
    <div id="MapChina" ref="myEchart"></div>
  </div>
</template>
<script>


  import echarts from "echarts";
  import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据

  export default {
    name: "MapChina",
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.chinaConfigure();
    },
    props: ['mapChinaData'],
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      chinaConfigure() {

        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
          backgroundColor: "",
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          visualMap: {
            min: 0,
            max: 1500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            color: ['#091E47', '#1A6CAB', '#2FC8B2'],
            calculable: true
          },
          geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(255,255,255,0.4)'
                }
              },
              emphasis: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.7)'
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#0e2a5d',
                borderColor: '#2786A4'
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [
            {
              type: 'scatter',
              coordinateSystem: 'geo' // 对应上方配置
            },
            {
              name: '', // 浮动框的标题
              type: 'map',
              geoIndex: 0,
              data: this.mapChinaData
            }
          ]
        })


        myChart.on('click', function (param) {

          console.log(param)
          console.log(param.name)


          //向vuex中数据，点击了哪个图像的块
          // if(_this.handleInOut.out == 0){
          //
          // }else if(_this.handleInOut.out == 1){
          //
          //   store.state.ClickseriesName = param.seriesName;
          //   store.state.ClickName = param.name;
          //
          // }


        })

      }
    }
  }
</script>
<style scoped>

  .echarts {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .echarts #MapChina {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

</style>
