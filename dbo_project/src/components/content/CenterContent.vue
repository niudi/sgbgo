<template>
  <div class="center-content">
    <!--<iframe class="isIf" scrolling="no" :src="iframeUrl"></iframe>-->
    <!--<ManagementPage></ManagementPage>-->
    <!--<BarChart></BarChart>-->
    <!--draggable：可拖拽-->
    <!--resizable：可调整尺寸-->
    <!--mirrored：可如镜子-->
    <!--vertical-compact：垂直-->


    <!--<grid-layout-->
    <!--:layout.sync="layout"-->
    <!--:col-num="48"-->
    <!--:row-height="30"-->
    <!--:is-draggable="false"-->
    <!--:is-resizable="false"-->
    <!--:is-mirrored="false"-->
    <!--:vertical-compact="false"-->
    <!--:margin="[10, 10]"-->
    <!--:use-css-transforms="true"-->
    <!--&gt;-->
    <!--<grid-item v-for="item in layout"-->
    <!--:key="item.id"-->
    <!--:x="item.x"-->
    <!--:y="item.y"-->
    <!--:w="item.w"-->
    <!--:h="item.h"-->
    <!--:i="item.id">-->
    <!--<component v-if="item.name != ''"  :is="item.name" :parstid="item.id" :handleInOut="item.handle"  :key="item.id"></component>-->
    <!--</grid-item>-->

    <!--</grid-layout>-->


    <!--上面才是真正的内容，下面组件是测试使用-->
    <TopOnePage></TopOnePage>

  </div>
</template>

<script>

  import ManagementPage from '../management/ManagementPage'

  import BarChart from '@/components/gcharts/BarChart';
  import FunnelChart from '@/components/gcharts/FunnelChart';
  import LineChart from '@/components/gcharts/LineChart';
  import PieChart from '@/components/gcharts/PieChart';


  import TopOnePage from '@/components/TotalComponent/TotalOnePage';

  import VueGridLayout from 'vue-grid-layout';

  export default {
    name: 'CenterContent',
    data() {
      return {
        layout: [],
        msg: 'Welcome to Your Vue.js App',
        iframeUrl: ''
      }
    },
    components: {
      TopOnePage,


      ManagementPage,
      BarChart,
      FunnelChart,
      LineChart,
      PieChart,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    computed: {
      getUrlChange() {
        return this.$store.state.CenterUseTemplateId;
      }
    },
    watch: {

      getUrlChange(val) {

        console.log('监听变化');
        console.log(val);
        this.getTemplateContent(val)

      }

    },
    mounted() {

      let id = sessionStorage.getItem('firstPageId')
      this.getTemplateContent(id);

    },
    methods: {
      getTemplateContent(templateId) {  //根据模板ID查询组件信息API

        this.$axios({
          method: 'get',
          url: '/apis/api/module/getApiUrlData',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            templateId: templateId
          }
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {

            console.log(res.data.data)

            var newLayout = []
            for (var i = 0; i < res.data.data.elements.length; i++) {

              if (res.data.data.elements[i].runtimeParams) {
                var handle = {
                  in: res.data.data.elements[i].runtimeParams[0].val,
                  out: res.data.data.elements[i].runtimeParams[1].val
                }
              } else {
                var handle = {
                  in: 1,
                  out: 1
                }
              }

              let LayoutItem = {
                "x": res.data.data.elements[i].x,
                "y": res.data.data.elements[i].y,
                "w": res.data.data.elements[i].w,
                "h": res.data.data.elements[i].h,
                "i": res.data.data.elements[i].id,
                'name': res.data.data.elements[i].componentCode,
                'handle': handle
              }
              newLayout.push(LayoutItem)
            }

            this.layout = newLayout;
            console.log(this.layout)


          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }

        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center-content {
    width: 98%;
    height: 98%;
    padding: 1%;
    background: #020A2F;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .isIf {
    width: 100%;
    height: 100%;
    background: #fff;
    border: 1px solid #ffffff;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

  .box {
    width: 35px;
  }
</style>
