<template>
  <div class="echarts">
    <div id="MapChinaTwo" ref="myEchart"></div>
  </div>
</template>
<script>


  import echarts from "echarts";
  import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据

  export default {
    name: "MapChinaTwo",
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.chinaConfigure();
    },
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
        myChart.setOption({
          title: {},
          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            color: ['#091E47', '#1A6CAB', '#2FC8B2'],
            calculable: true
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              },
              emphasis: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
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
              name: '',
              type: 'map',
              mapType: 'china',
              roam: false,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                {name: '北京', value: 1500},
                {name: '天津', value: 2500},
                {name: '上海', value: 1500},
                {name: '重庆', value: 1500},
                {name: '河北', value: 2500},
                {name: '河南', value: 1500},
                {name: '云南', value: 1500},
                {name: '辽宁', value: 1500},
                {name: '黑龙江', value: 1500},
                {name: '湖南', value: 2500},
                {name: '安徽', value: 1500},
                {name: '山东', value: 1500},
                {name: '新疆', value: 1500},
                {name: '江苏', value: 1300},
                {name: '浙江', value: 1500},
                {name: '江西', value: 1500},
                {name: '湖北', value: 1500},
                {name: '广西', value: 1500},
                {name: '甘肃', value: 2000},
                {name: '山西', value: 1500},
                {name: '内蒙古', value: 1500},
                {name: '陕西', value: 1500},
                {name: '吉林', value: 1500},
                {name: '福建', value: 1500},
                {name: '贵州', value: 1500},
                {name: '广东', value: 1500},
                {name: '青海', value: 1500},
                {name: '西藏', value: 1500},
                {name: '四川', value: 1500},
                {name: '宁夏', value: 1500},
                {name: '海南', value: 1500},
                {name: '台湾', value: 1500},
                {name: '香港', value: 1500},
                {name: '澳门', value: 1500},
                {name: '南海诸岛', value: 1500},
              ]
            }
          ]
        });
      }
    }
  }
</script>
<style scoped>

  .echarts {
    width: 100%;
    height: 100%;
  }

  .echarts #MapChinaTwo {
    width: 100%;
    height: 100%;
  }

</style>
