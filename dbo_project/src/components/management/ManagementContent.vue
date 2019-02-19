<template>
  <div class="center-content">
    <User v-if="ManagementCenterIndex==1"></User>
    <Role v-if="ManagementCenterIndex==2"></Role>
    <Catalogue v-if="ManagementCenterIndex==3"></Catalogue>
    <UserTemplate v-if="ManagementCenterIndex==4"></UserTemplate>
    <SetRule v-if="ManagementCenterIndex==5"></SetRule>
  </div>
</template>

<script>

  import User from './ManagementCenter/user';
  import Role from './ManagementCenter/role';
  import Catalogue from './ManagementCenter/Catalogue/catalogue';
  import UserTemplate from './ManagementCenter/userTemplate';
  import SetRule from './ManagementCenter/setRule';


  export default {
    name: 'CenterContent',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        ManagementCenterIndex: '1',
        iframeUrl: ''
      }
    },

    components: {
      User,
      Role,
      Catalogue,
      UserTemplate,
      SetRule
    },
    computed: {
      getManagementCenterIndexChange() {
        return this.$store.state.ManagementCenterIndex;
      }
    },
    watch: {
      getManagementCenterIndexChange(val) {
        console.log('监听变化：');
        console.log(val);
        this.ManagementCenterIndex = val;
      }
    },
    mounted() {
      this.iframeUrl = localStorage.getItem('centerUrl');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center-content {
    width: 100%;
    height: 100%;
    background: #020A2F;
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
