<template>
  <div class="login">
    <canvas id="cas"></canvas>
    <div class="login-box">
      <div class="title">数字监控中心</div>
      <div class="phone">
        <el-input
          placeholder="用户名"
          v-model="account">
          <i slot="prefix" class="fa fa-user left-icon"></i>
        </el-input>
      </div>

      <div class="pwd">
        <el-input
          placeholder="密码"
          :type="pwdHide"
          v-model="password">
          <i slot="prefix" class="fa fa-lock left-icon"></i>
          <i slot="suffix" @click="PwdShow" :class="classObject"></i>
        </el-input>
      </div>

      <div class="login-control">
        <el-checkbox class="remeber-pwd" v-model="checked">记住密码</el-checkbox>
      </div>

      <div class="login-to-home">
        <el-button @click="LoginBtn" class="login-btn" type="primary"> 登 录</el-button>
      </div>

    </div>
  </div>
</template>


<script>


  export default {
    name: 'login',
    data() {
      return {
        account: '',
        password: '',
        checked: '',
        pwdHide: 'password',
        classObject: {
          fa: true,
          'fa-eye-slash': true,
          'right-icon': true,
          'fa-eye': false
        }

      }
    },
    mounted() {

      this.aniLogin('cas')

    },
    methods: {
      LoginBtn() {//登录

        // localStorage.setItem('sysSet',1);
        // this.$router.replace('/Home');


        this.$axios({
          method: 'post',
          url: '/apis/api/auth/login',
          params: {
            username: this.account,
            password: this.password
          }
        }).then(res => {
          console.log(res)

          if (this.account === '') {


            this.$notify({
              title: '',
              message: '请输入账号',
              type: 'warning'
            });

          } else if (this.password === '') {

            this.$notify({
              title: '',
              message: '请输入密码',
              type: 'warning'
            });

          } else {

            console.log(res)


            if (res.data.code == 0) {
              sessionStorage.setItem('accessToken', res.data.data.access_token)
              this.getUserInfo()
            } else {
              this.$alert(res.data.message, '提示', {
                confirmButtonText: '确定',
              });
            }

            //
            // if(this.phone === res.data.user.account && this.password === res.data.user.pwd){
            //
            //   this.$message({
            //     message: '登录成功',
            //     type: 'success'
            //   });
            //
            //
            //   if(res.data.user.account === '131'){
            //     localStorage.setItem('sysSet',1);
            //   }else{
            //     localStorage.setItem('sysSet',0);
            //   }
            //
            //
            //   this.$router.replace('/Home');
            //
            //
            // }else{
            //
            //   this.$message({
            //     message: '账号或密码输入错误',
            //     type: 'warning'
            //   });
            //
            // }


          }

        })
      },
      PwdShow() {
        if (this.pwdHide === 'password') {
          this.pwdHide = 'text';
          this.classObject = {
            fa: true,
            'fa-eye-slash': false,
            'right-icon': true,
            'fa-eye': true
          }
        } else {
          this.pwdHide = 'password';
          this.classObject = {
            fa: true,
            'fa-eye-slash': true,
            'right-icon': true,
            'fa-eye': false
          }
        }
      },
      getUserInfo() {

        this.$axios({
          method: 'post',
          url: '/apis/api/user/getUserInfo',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {
            sessionStorage.setItem('userid', res.data.data.userId)
            sessionStorage.setItem('userName', res.data.data.name)
            this.mapsByuser();
          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }
        })


      },
      mapsByuser() {//根据userID获取用户权限目录

        this.$axios({
          method: 'get',
          url: '/apis/api/sysDictoryDict/mapByUserId',
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
          },
          params: {
            userId: sessionStorage.getItem('userid')
          }
        }).then(res => {

          console.log(res)
          if (res.data.code == 0) {
            for (var i in res.data.data) {


              //sysSet:1:前,后台权限 2：只有前台权限 3：只有后台权限

              if (res.data.data[1]) {

                if (res.data.data[3]) {
                  localStorage.setItem('sysSet', 1);
                } else {
                  localStorage.setItem('sysSet', 2);
                }
                this.$router.replace('/Home');


              } else if (res.data.data[3]) {
                localStorage.setItem('sysSet', 3);
                this.$router.replace('/ManagementPage');
              }


            }

          } else {
            this.$alert(res.data.message, '提示', {
              confirmButtonText: '确定',
            });
          }


        })


      },
      aniLogin(ele) {

        var canvas = document.getElementById(ele);
        var ctx = canvas.getContext("2d");
        resize();
        window.onresize = resize;

        function resize() {
          canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }

        var RAF = (function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
        })();
        // 鼠标活动时，获取鼠标坐标
        var warea = {x: null, y: null, max: 20000};
        window.onmousemove = function (e) {
          e = e || window.event;
          warea.x = e.clientX;
          warea.y = e.clientY;
        };
        window.onmouseout = function (e) {
          warea.x = null;
          warea.y = null;
        };
        // 添加粒子
        // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
        var dots = [];
        for (var i = 0; i < 300; i++) {
          var x = Math.random() * canvas.width;
          var y = Math.random() * canvas.height;
          var xa = Math.random() * 2 - 1;
          var ya = Math.random() * 2 - 1;
          dots.push({
            x: x,
            y: y,
            xa: xa,
            ya: ya,
            max: 6000
          })
        }
        // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
        setTimeout(function () {
          animate();
        }, 100);

        // 每一帧循环的逻辑
        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
          var ndots = [warea].concat(dots);
          dots.forEach(function (dot) {
            // 粒子位移
            dot.x += dot.xa;
            dot.y += dot.ya;
            // 遇到边界将加速度反向
            dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1;
            dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1;
            // 绘制点
            ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
            // 循环比对粒子间的距离
            for (var i = 0; i < ndots.length; i++) {
              var d2 = ndots[i];
              if (dot === d2 || d2.x === null || d2.y === null) continue;
              var xc = dot.x - d2.x;
              var yc = dot.y - d2.y;
              // 两个粒子之间的距离
              var dis = xc * xc + yc * yc;
              // 距离比
              var ratio;
              // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
              if (dis < d2.max) {
                // 如果是鼠标，则让粒子向鼠标的位置移动
                if (d2 === warea && dis > (d2.max / 2)) {
                  dot.x -= xc * 0.03;
                  dot.y -= yc * 0.03;
                }
                // 计算距离比
                ratio = (d2.max - dis) / d2.max;
                // 画线
                ctx.beginPath();
                ctx.lineWidth = ratio / 2;
                ctx.strokeStyle = 'rgba(2,10,47,' + (ratio + 0.2) + ')';
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(d2.x, d2.y);
                ctx.stroke();
              }
            }
            // 将已经计算过的粒子从数组中删除
            ndots.splice(ndots.indexOf(dot), 1);
          });
          RAF(animate);
        }

      }

    }

  }
</script>


<style scoped>


  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #eeeeee;
    color: #ffffff;
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    /*background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);*/
  }

  .login-box {
    position: absolute;
    top: 200px;
    right: 120px;
    width: 230px;
    padding: 20px;
    height: 310px;
    background: rgba(35, 43, 71, 0.8);
    -webkit-box-shadow: 0px 10px 20px 0 rgba(8, 8, 8, 0.42);
    box-shadow: 0px 10px 20px 0 rgba(8, 8, 8, 0.42);
    border-radius: 5px;
  }

  .title {
    width: 100%;
    height: 50px;
    text-align: left;
    line-height: 50px;
    font-size: 18px;
  }

  .phone, .pwd, .login-to-home {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    line-height: 50px;
    text-align: center;
  }

  .left-icon {
    margin-left: 5px;
  }

  .right-icon {
    margin-right: 5px;
  }

  .login-btn {
    width: 100%;
    border-color: #6070a8;
    background: #6070a8;
  }

  .login-control {
    width: 100%;
    height: 40px;
    margin-top: 5px;
    line-height: 40px;
    text-align: left;
    color: #ffffff;
  }

  .remeber-pwd {
    color: #ffffff;
    font-size: 10px !important;
  }


</style>
