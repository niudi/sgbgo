<template>

  <div class="goDemo" ref="goDome">


    <div class="btn" @click="btn">点击</div>

    <!--<div  id="isOne"></div>-->
    <div id="elename1"></div>



  </div>

</template>

<script>

  import go from 'gojs';
  import GoControl from './ApplyMapControl'

  export default {
    name: 'ApplyFlowAll',
    data() {
      return {
        EleName:'elename',
        EleIndex:1,
        goData:[
          { key: "Alpha" },
          { key: "Beta" },
          { key: "Gamma" },
          { key: "Tom" },
        ],
        goData2:[
          { key: "Alpha1" },
          { key: "Beta1" },
          { key: "Gamma1" },
          { key: "Tom1" },
        ],

      }
    },
    components: {
      GoControl
    },
    mounted() {

      this.CanvaseGo(this.goData,'elename1');


    },
    methods: {

      btn(){



        //删除页面承载canvas的元素，新建元素元素名为elename后加上递增的数字；用来承载新的gojs的canvase；、
        //新生成的元素需要添加两个属性，id和style，style需要提前定义，宽高，背景等；id为this.EleName+this.EleIndex；this.EleIndex递增；


        var oldEle = document.getElementById(this.EleName+this.EleIndex)
        this.$refs.goDome.removeChild(oldEle);



        this.EleIndex = this.EleIndex+1;

        var para=document.createElement("div");
        para.setAttribute("id",this.EleName+this.EleIndex);
        para.setAttribute("style","width: 100%;height: 92%;position: absolute;left: 0;top: 8%;background-color: #eeeeee;");
        this.$refs.goDome.appendChild(para);

        // this.CanvaseGo(this.goData2,this.EleName+this.EleIndex);


        if(this.EleIndex%2==0){

          this.CanvaseGo(this.goData2,this.EleName+this.EleIndex);
        }else{

          this.CanvaseGo(this.goData,this.EleName+this.EleIndex);
        }


      },

      handlerDC(e, node) {
        console.log(e, node);
        console.log(node.kb.title);//具体点击块的标题
      },
      changeSomeThing() {
        document.getElementById('mygoChart').innerHTML = '';
        this.CanvaseGo(this.someData2);
      },
      CanvaseGo(someData,name) {
        console.log(name)

        var $ = go.GraphObject.make;
        var myDiagram =
          $(go.Diagram, name,
            {
              "undoManager.isEnabled": true
            });

        var myModel = $(go.Model);

        myModel.nodeDataArray = someData;
        myDiagram.model = myModel;


      },

    }
  }
</script>

<style scoped>

  .goDemo {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #eeeeee;

  }
  .goDemo div:nth-child(2){
    width: 100%;
    height: 92%;
    position: absolute;
    left: 0;
    top: 8%;
    background-color: #eeeeee;
  }

  #isOne {
      width: 100%;
      height: 92%;
      position: absolute;
      left: 0;
      top: 8%;
      background-color: #eeeeee;
    }


  #isTwo {
    width: 100%;
    height: 92%;
    position: absolute;
    left: 0;
    top: 8%;
    background-color: #eeeeee;
  }



  canvas {
    border: 0px;
    outline: none;
    color: #ffffff !important;
  }
  .btn{
    width: 100px;
    height: 30px;
    background: #ccc;
    position: absolute;
    left: 10%;
    top: 50px;
    text-align: center;
    line-height: 30px;
  }

  .go-control{
    width: 96%;
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1111;
    padding:5px 2%;
  }

</style>
