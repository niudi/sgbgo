<template>
  <div class="set-rule">
    <div class="set-manage-rule">
      <div class="set-rule-title">规则设置</div>
      <div class="set-rule-content">
        <el-form ref="form" :model="form" label-width="80px">


          <el-form-item label="区域设置">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="活跃时间">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="细分领域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>

        </el-form>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "SetRule",
    data() {
      return {

        form: {
          region: ''
        }

      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .set-rule {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .set-manage-rule {
    width: 96%;
    height: 96%;
    background: #ffffff;
    position: absolute;
    left: 2%;
    top: 2%;
  }

  .set-rule-title {
    width: 97%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    padding-left: 3%;
    line-height: 50px;
    font-size: 16px;
  }

  .set-rule-content {
    width: 80%;
    padding: 5%;
  }
</style>
