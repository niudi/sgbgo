<template>
  <div id="chartradar">

    <div :id="ApplyPieChartData.name"></div>
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
    props: ['handleInOut','ApplyPieChartData'],
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

      this.PieChart()

    },
    methods: {

      PieChart() {

        let myChart = echarts.init(document.getElementById(this.ApplyPieChartData.name))


        // 绘制图表
        myChart.setOption({
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['project','斑马']
          },
          series : [
            {
              name: '项目来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:this.ApplyPieChartData.data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
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




</style>
