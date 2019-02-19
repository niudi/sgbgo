<template>

  <div class="goDemo" ref="goDome">

    <div class="go-control">
      <GoControl></GoControl>
      <el-button type="primary" size="mini" @click="ChangeCan">主要按钮</el-button>
    </div>
    <div id="elename1"></div>

    <div class="ApplyBigBox" v-if="ApplyInfoShow">
      <div class="info-box">
        <div class="Apply-title">{{ApplyTitle}}</div>
        <div class="close-box" @click="closeApplyBox">
          <i class="el-icon-circle-close-outline"></i>
        </div>

        <div class="info">
          <component v-if="ChildShow" :is="ApplyComponent"></component>
        </div>


      </div>
    </div>

  </div>

</template>

<script>

  import go from 'gojs';

  import GoControl from './ApplyMapControl';

  import AllPlanTo from './ApplyFlowInfo/AllPlanTo';

  import AutoToPlan from './ApplyFlowInfo/AutoToPlan';

  import NewWeekPlan from './ApplyFlowInfo/NewWeekPlan';

  import WeekTaskTail from './ApplyFlowInfo/WeekTaskTail';

  import ProductionMeet from './ApplyFlowInfo/ProductionMeet';

  import TermTimeUpdate from './ApplyFlowInfo/TermTimeUpdate';

  export default {
    name: 'ApplyFlowAll',
    data() {
      return {
        EleName: 'elename',
        EleIndex: 1,
        ChildShow: false,
        ApplyComponent: '',
        ApplyTitle: '',
        ApplyInfoShow: false,
        someData: [

          {from: 1, to: 2, "category": 'lineColor'},
          {from: 1, to: 3, "category": 'lineColor'},

          {from: 2, to: 4, "category": 'lineColor'},
          {from: 3, to: 4, "category": 'lineColor'},


          {from: 4, to: 5, "category": 'lineColor'},
          {from: 4, to: 100, "category": 'lineNoColor'},

          {from: 5, to: 6, "category": 'lineColor'},
          {from: 5, to: 200, "category": 'lineNoColor'},

          {from: 6, to: 7, "category": 'lineColor'},
          {from: 6, to: 300, "category": 'lineNoColor'},
          {from: 6, to: 400, "category": 'lineNoColor'},


          {from: 7, to: 8, "category": 'lineColor'},


        ],

        someData2: [

          {from: 1, to: 2, "category": 'lineColor'},
          {from: 1, to: 3, "category": 'lineColor'},

          {from: 2, to: 4, "category": 'lineColor'},
          {from: 3, to: 4, "category": 'lineColor'},


          {from: 4, to: 5, "category": 'lineColor'},
          {from: 4, to: 100, "category": 'lineNoColor'},

          {from: 5, to: 6, "category": 'lineColor'},
          {from: 5, to: 200, "category": 'lineNoColor'},

          {from: 6, to: 7, "category": 'lineColor'},
          {from: 7, to: 300, "category": 'lineNoColor'},
          {from: 7, to: 400, "category": 'lineNoColor'},


          {from: 7, to: 8, "category": 'lineColor'},


        ]

      }
    },
    components: {
      GoControl,
      AllPlanTo,
      AutoToPlan,
      NewWeekPlan,
      WeekTaskTail,
      ProductionMeet,
      TermTimeUpdate
    },
    mounted() {
      this.CanvaseGo(this.someData, 'elename1');
    },
    methods: {
      ChangeCan() {

        //删除页面承载canvas的元素，新建元素元素名为elename后加上递增的数字；用来承载新的gojs的canvase；、
        //新生成的元素需要添加两个属性，id和style，style需要提前定义，宽高，背景等；id为this.EleName+this.EleIndex；this.EleIndex递增；

        var oldEle = document.getElementById(this.EleName + this.EleIndex)
        this.$refs.goDome.removeChild(oldEle);


        this.EleIndex = this.EleIndex + 1;

        var para = document.createElement("div");
        para.setAttribute("id", this.EleName + this.EleIndex);
        para.setAttribute("style", "width: 100%;height: 92%;position: absolute;left: 0;top: 8%;");
        this.$refs.goDome.appendChild(para);


        if (this.EleIndex % 2 == 0) {

          this.CanvaseGo(this.someData2, this.EleName + this.EleIndex);

        } else {

          this.CanvaseGo(this.someData, this.EleName + this.EleIndex);

        }


      },
      closeApplyBox() {
        this.ApplyInfoShow = false;
        this.ChildShow = false;
      },
      handlerDC(e, node) {

        if (node.kb.key < 100) {
          this.ApplyTitle = node.kb.title;
          this.ApplyComponent = node.kb.GName;
          this.ChildShow = true;
          this.ApplyInfoShow = true;
        }

        console.log(e, node)
        console.log(node.kb.title)//具体点击块的标题
      },
      CanvaseGo(fromToData, ele) {

        function clThis(node) {//单击
          console.log(node)
        }


        var _this = this;


        var mySelf = this;
        const MAKE = go.GraphObject.make;


        mySelf.myDiagram = MAKE(go.Diagram, ele);//构建gojs对象


        mySelf.myDiagram.nodeTemplate =
          MAKE(go.Node, "Vertical",
            new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
            // { selectionChanged: clThis },
            //节点选中改变事件，nodeSelectionChanged为回调的方法名
            {
              doubleClick: function (e, node) {// 双击事件
                _this.handlerDC(e, node);//双击执行的方法
              }
            },
            MAKE(go.Panel, "Auto",
              {minSize: new go.Size(NaN, 10)},
              MAKE(go.Shape, "Circle", {fill: "#999"}),
              MAKE(go.TextBlock,
                {width: 30},
                {
                  font: "bold 13px Helvetica, bold Arial, sans-serif",
                  stroke: "white", margin: 3
                },
                {margin: new go.Margin(0, 0, 0, 0)},
                new go.Binding("text", "ratio")),
            ),


            MAKE(go.Panel, "Auto",
              {minSize: new go.Size(NaN, 30)},
              MAKE(go.Shape, "Rectangle", {fill: "#a1a1a1"}),
              MAKE(go.TextBlock,
                {width: 150},
                {
                  font: "bold 13px Helvetica, bold Arial, sans-serif",
                  stroke: "white", margin: 3
                },
                {margin: new go.Margin(2, 2, 0, 2), textAlign: "center"},
                new go.Binding("text", "title"))
            ),


            MAKE(go.Panel, "Auto",
              {minSize: new go.Size(NaN, 30)},
              MAKE(go.Shape, "Rectangle", {fill: "#a1a1a1"}),
              MAKE(go.TextBlock,
                {width: 150},
                {
                  font: "bold 13px Helvetica, bold Arial, sans-serif",
                  stroke: "white", margin: 3
                },
                {margin: new go.Margin(2, 2, 0, 2), textAlign: "center"},
                new go.Binding("text", "planNum"))
            ),

            MAKE(go.Panel, "Auto",
              {minSize: new go.Size(NaN, 30)},
              MAKE(go.Shape, "Rectangle", {fill: "#a1a1a1"},),
              MAKE(go.TextBlock,
                {width: 150},
                {
                  font: "bold 13px Helvetica, bold Arial, sans-serif",
                  stroke: "white", margin: 3
                },
                {margin: new go.Margin(2, 2, 0, 2), textAlign: "center"},
                new go.Binding("text", "resultNum"))
            )
          );




        mySelf.myDiagram.groupTemplate =
          MAKE(go.Group, "Vertical",
            MAKE(go.Panel, "Auto",
              MAKE(go.Shape, "Rectangle",
                {fill: "#102365"},
                new go.Binding("fill", "role", function (r) {
                  return r[0] === 't' ? "lightgray" : "#102365";
                })),
              MAKE(go.TextBlock,
                {
                  font: "bold 13px Helvetica, bold Arial, sans-serif",
                  stroke: "white", margin: 3
                },
                {margin: new go.Margin(2, 2, 0, 2), textAlign: "center"},
                new go.Binding("text", "header"))
            ),
            MAKE(go.Panel, "Auto",
              MAKE(go.Shape, {fill: "#102365"}),
              MAKE(go.Placeholder, {padding: 20}),
              MAKE(go.Shape, "Rectangle",
                {
                  visible: false, width: 10, height: 10,
                  alignment: new go.Spot(0.5, 1, 0, -3), alignmentFocus: go.Spot.Bottom
                },
                new go.Binding("visible", "loop"))
            ),
          );


        mySelf.myDiagram.linkTemplateMap.add("lineColor",
          MAKE(go.Link,
            {
              selectable: false,      // 用户不能选择链接
              layerName: "Background"  // 不要在任何节点前面交叉
            },
            MAKE(go.Shape,  // 此形状仅在突出显示时才显示
              {isPanelMain: true, stroke: "#a1a1a1", strokeWidth: 4},
              new go.Binding("stroke", "isHighlighted", function (h) {
                return h ? "#a1a1a1" : null;
              }).ofObject()),
            MAKE(go.Shape,
              // mark each Shape to get the link geometry with isPanelMain: true
              {isPanelMain: true, stroke: "#a1a1a1", strokeWidth: 2},
              new go.Binding("stroke", "color")),
            MAKE(go.Shape, {toArrow: "Standard", stroke: "#a1a1a1", strokeWidth: 4})
          ),
          MAKE(go.TextBlock, new go.Binding('text', 'text'))
        );


        mySelf.myDiagram.linkTemplateMap.add("lineNoColor",
          MAKE(go.Link,
            {
              selectable: false,      // 用户不能选择链接
              layerName: "Background"  // 不要在任何节点前面交叉
            },
            MAKE(go.Shape,  // 此形状仅在突出显示时才显示
              {isPanelMain: true, stroke: "#a1a1a1", strokeWidth: 4},
              new go.Binding("stroke", "isHighlighted", function (h) {
                return h ? "#a1a1a1" : null;
              }).ofObject()),
            MAKE(go.Shape,
              // mark each Shape to get the link geometry with isPanelMain: true
              {isPanelMain: true, stroke: "#a1a1a1", strokeWidth: 2},
              new go.Binding("stroke", "color")),
          ),
          MAKE(go.TextBlock, new go.Binding('text', 'text'))
        );


        mySelf.myDiagram.model = new go.GraphLinksModel([
          {
            key: 1,
            title: "总计划导入",
            GName: 'AllPlanTo',
            ratio: "95%",
            planNum: "总计划份数:1200",
            resultNum: "项目数量：190",
            location: '0 0'
          },
          {
            key: 2,
            title: "自动生成期间计划",
            GName: 'AutoToPlan',
            ratio: "90%",
            planNum: "生成期间计划份数:200",
            resultNum: "项目数量：190",
            location: '-100 150'
          },
          {
            key: 3,
            title: "导入期间计划",
            GName: 'AllPlanTo',
            ratio: "90%",
            planNum: "期间计划份数:300",
            resultNum: "项目数量：190",
            location: '100 150'
          },
          {
            key: 4,
            title: "新建周计划",
            GName: 'NewWeekPlan',
            ratio: "85%",
            planNum: "周计划份数:300",
            resultNum: "项目数量：190",
            location: '0 350'
          },
          {
            key: 5,
            title: "周计划跟踪",
            GName: 'WeekTaskTail',
            ratio: "82%",
            planNum: "被跟踪周计划份数:200",
            resultNum: "项目数量：190",
            location: '500 350'
          },
          {
            key: 6,
            title: "生产上会",
            GName: 'ProductionMeet',
            ratio: "75%",
            planNum: "点击投屏按钮次数:100",
            resultNum: "项目数量：190",
            location: '800 350'
          },
          {
            key: 7,
            title: "期间计划时间被更新",
            GName: 'TermTimeUpdate',
            ratio: "40%",
            planNum: "被更新计划份数:60",
            resultNum: "项目数量：190",
            location: '800 150'
          },
          {
            key: 8,
            title: "总计划时间被更新",
            GName: 'TermTimeUpdate',
            ratio: "10%",
            planNum: "被更新计划份数:10",
            resultNum: "项目数量：190",
            location: '800 0'
          },


          {key: 100, header: "新建周计划详情", isGroup: true, location: '30 550'},

          {
            key: 101,
            title: "任务包生成周计划",
            ratio: "85%",
            planNum: "选择新任务点击次数:100",
            resultNum: "项目数量：19",
            group: 100,
            location: '-100 550'
          },
          {
            key: 102,
            title: "手动添加周计划",
            ratio: "85%",
            planNum: "手动添加点击次数:110",
            resultNum: "项目数量：29",
            group: 100,
            location: '100 550'
          },


          {key: 200, header: "周计划跟踪详情", isGroup: true},

          {
            key: 201,
            title: "实际时间回填",
            ratio: "80%",
            planNum: "被跟踪周计划份数:80",
            resultNum: "项目数量：79",
            group: 200,
            location: '300 550'
          },
          {
            key: 202,
            title: "周计划报表导出",
            ratio: "75%",
            planNum: "报表导出次数:20",
            resultNum: "项目数量：29",
            group: 200,
            location: '500 550'
          },
          {
            key: 203,
            title: "APP周报",
            ratio: "75%",
            planNum: "APP周报点击次数:30",
            resultNum: "项目数量：39",
            group: 200,
            location: '700 550'
          },
          {
            key: 204,
            title: "照片上传",
            ratio: "75%",
            planNum: "照片总数:130",
            resultNum: "项目数量：39",
            group: 200,
            location: '300 700'
          },
          {
            key: 205,
            title: "施工日志",
            ratio: "75%",
            planNum: "日志总份数:230",
            resultNum: "项目数量：39",
            group: 200,
            location: '500 700'
          },


          {key: 300, header: "结果呈现", isGroup: true},

          {
            key: 301,
            title: "数字周报",
            ratio: "75%",
            planNum: "数字周报总份数:130",
            resultNum: "项目数量：39",
            group: 300,
            location: '1000 150'
          },
          {
            key: 302,
            title: "PPT导出",
            ratio: "75%",
            planNum: "导出次数:330",
            resultNum: "项目数量：39",
            group: 300,
            location: '1200 150'
          },
          {
            key: 303,
            title: "Word周报导出",
            ratio: "75%",
            planNum: "导出次数:430",
            resultNum: "项目数量：39",
            group: 300,
            location: '1000 300'
          },

          {key: 400, header: "报告输出", isGroup: true},

          {
            key: 401,
            title: "生产首页-web端",
            ratio: "75%",
            planNum: "生产首页按钮点击次数:430",
            resultNum: "项目数量：39",
            group: 400,
            location: '1000 550'
          },
          {
            key: 402,
            title: "生产首页-APP",
            ratio: "75%",
            planNum: "生产首页按钮点击次数:430",
            resultNum: "项目数量：39",
            group: 400,
            location: '1000 700'
          },
          {
            key: 403,
            title: "Web作战地图",
            ratio: "75%",
            planNum: "作战地图点击次数:430",
            resultNum: "项目数量：39",
            group: 400,
            location: '1200 550'
          },
          {
            key: 404,
            title: "PC作战地图",
            ratio: "75%",
            planNum: "作战地图点击次数:430",
            resultNum: "项目数量：39",
            group: 400,
            location: '1200 700'
          },


        ], fromToData);


      },

    }
  }
</script>

<style scoped>

  .goDemo {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #0a184e;

  }

  #elename1 {
    width: 100%;
    height: 92%;
    position: absolute;
    left: 0;
    top: 8%;
    background-color: #0a184e;
  }

  canvas {
    border: 0px;
    outline: none;
    color: #ffffff !important;
  }

  .go-control {
    width: 96%;
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 111;
    padding: 5px 2%;
  }

  .ApplyBigBox {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 200;
  }

  .info-box {
    width: 70%;
    height: 60%;
    position: absolute;
    left: 15%;
    top: 15%;
    background: #ffffff;
  }

  .close-box {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
  }

  .info {
    width: 100%;
    height: 90%;
    position: absolute;
    left: 0;
    top: 10%;
    overflow: hidden;
    background: #ccc;
  }

  .Apply-title {
    line-height: 50px;
    font-size: 16px;
    padding-left: 10px;
    color: #666;
  }

</style>
