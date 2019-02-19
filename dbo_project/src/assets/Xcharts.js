import echarts from 'echarts'
import '../../node_modules/echarts/map/js/china.js'

let Xcharts = function (ele,eleDate){

  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.getElementById(ele))

  // 绘制图表
  myChart.setOption(eleDate);

  //导出mychart实例
  return myChart;

}

export default Xcharts;
