<template>
  <div class="TotalMouthApplyRate">
    <div class="title">1月产品应用率</div>
    <KnobbyBarChart :KnobbyBarChartData="KnobbyBarChartData"></KnobbyBarChart>
  </div>
</template>

<script>

  import KnobbyBarChart from '../gcharts/KnobbyBarChart'

  export default {
    name: 'TotalMouthApplyRate',
    data() {
      return {
        KnobbyBarChartData: {
          name: 'MouthApplyRate',
          legendData: ['不活跃', '普通', '活跃', '超活跃'],
          Ydata1: ['BIM5D旗舰', 'BIM5D生产', '质量管理', '安全管理', '物料管理', '劳务管理'],
          Ydata2: ['51.08%', '30.45%', '36.54%', '50.52%', '28.51%', '54.33%'],
          Xdata: [{
            name: '不活跃',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [320, 302, 301, 334, 390, 330]
          }, {
            name: '普通',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [120, 132, 101, 134, 90, 230]
          },
            {
              name: '活跃',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [220, 182, 191, 234, 290, 330]
            },
            {
              name: '超活跃',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [150, 212, 201, 154, 190, 330]
            }
          ]
        }
      }
    },
    components: {
      KnobbyBarChart
    },
    mounted() {


    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .TotalMouthApplyRate {
    width: 100%;
    height: 100%;

  }

  .title {
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    line-height: 30px;
    position: absolute;
  }


</style>
