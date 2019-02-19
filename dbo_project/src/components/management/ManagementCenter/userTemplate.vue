<template>
  <div class="user-template">
    <div class="templateLeft">
      <div class="templateLeft-title">
        模板列表
        <el-tooltip class="item" effect="dark" content="模板管理" placement="bottom">
          <el-button class="along-template" value="模板管理" type="primary" @click="ManageTemplate" size="mini"
                     icon="el-icon-setting"></el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="同步模板" placement="bottom">
          <el-button class="manage-template" value="同步模板" type="primary" @click="AlongTemplate" size="mini"
                     icon="el-icon-refresh"></el-button>
        </el-tooltip>

      </div>

      <div class="templateLeft-tree">

        <ul>
          <li v-bind:class="{clickLiClass:index==current}" v-for="(item,index) in TemplateList" :key="index"
              @click="templateListItem(item,index)">{{item.reportName}}
          </li>
        </ul>

      </div>

    </div>
    <div class="templateRight">

      <!--draggable：可拖拽-->
      <!--resizable：可调整尺寸-->
      <!--mirrored：可如镜子-->
      <!--vertical-compact：垂直-->
      <grid-layout
        :layout.sync="layout"
        :col-num="48"
        :row-height="30"
        :is-draggable="false"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="false"
        :margin="[10, 10]"
        :use-css-transforms="true"
      >

        <grid-item v-for="item in layout"
                   :key="item.id"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.id">
          <component v-if="item.name != ''" :is="item.name" :parstid="item.id" :handleInOut="item.handle"
                     :key="item.id"></component>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>

  import BarChart from '@/components/gcharts/BarChart';
  import FunnelChart from '@/components/gcharts/FunnelChart';
  import LineChart from '@/components/gcharts/LineChart';
  import PieChart from '@/components/gcharts/PieChart';

  import VueGridLayout from 'vue-grid-layout';


  export default {
    name: "UserTemplate",
    data() {
      return {
        user_name: '',
        layout: [],
        current: 0,
        TemplateList: [],
      };
    },
    components: {
      BarChart,
      FunnelChart,
      LineChart,
      PieChart,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    mounted() {
      this.getTemplateList()
    },
    methods: {
      templateListItem(item, index) {//切换 iframe 的 src

        this.current = index;
        this.getTemplateContent(item.templateID)

      },
      AlongTemplate() {//同步模板
        console.log('同步模板');
        this.getTemplateList()
      },
      ManageTemplate() {//模板管理
        console.log('模板管理');

        this.$axios({
          method: 'get',
          url: '/apis/api/module/getManageUrl',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {
            window.open(res.data.data);
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }

        })


      },
      getTemplateList() { //模板列表

        // ---

        this.$axios({
          method: 'get',
          url: '/apis/api/module/listTemplate',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
        }).then(res => {

          console.log(res)

          if (res.data.code == 0) {

            let getNewTemplateList = []

            for (var i in res.data.data) {

              let getNewTemplateItem = {
                "templateID": res.data.data[i].templateID,
                "reportId": res.data.data[i].reportId,
                "reportName": res.data.data[i].reportName,
                "isSystem": res.data.data[i].isSystem,
                "isEnable": res.data.data[i].isEnable,
                "isDelete": res.data.data[i].isDelete
              }

              getNewTemplateList.push(getNewTemplateItem)

            }
            this.TemplateList = getNewTemplateList
            this.getTemplateContent(this.TemplateList[0].templateID)

          } else {

            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });

          }

        })

        // ---

      },
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
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-template {
    width: 98%;
    height: 98%;
    padding: 1%;
    position: relative;

  }

  .templateLeft {
    width: 25%;
    height: 96%;
    position: absolute;
    left: 1%;
    top: 1%;
    background: rgb(76, 82, 103);
    color: #aaa;
  }

  .template-tree {
    background: rgb(76, 82, 103);
    color: #aaa;
  }

  .templateLeft-title {
    width: 97%;
    height: 50px;
    padding-left: 3%;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    font-weight: bold;
    line-height: 50px;
    color: #888;
  }

  .along-template {
    float: right;
    margin-top: 10px;
    margin-right: 10px;
  }

  .manage-template {
    float: right;
    margin-top: 10px;
    margin-right: 10px;
  }

  .templateLeft-tree {
    padding: 5% 3%;
  }

  .templateRight {
    width: 72%;
    height: 96%;
    position: absolute;
    left: 27%;
    top: 1%;
    background: #ffffff;
    overflow: hidden;
    overflow-y: scroll;
  }

  .templateRight iframe {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .templateLeft-tree ul li {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #eeeeee;
    border-bottom: 1px solid #6b6a6a;
    cursor: pointer;
  }

  .templateLeft-tree .clickLiClass {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #888;
    background: #f0f7ff;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
</style>
