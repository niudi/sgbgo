<template>
  <div id="NewUser">
    <div class="one">
      <TopBottomBarChart></TopBottomBarChart>
    </div>

  </div>
</template>

<script>

  import TopBottomBarChart from '@/components/gcharts/TopBottomBarChart'

  export default {
    name: 'NewUser',
    data() {
      return {}
    },
    components: {
      TopBottomBarChart

    },
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


    },
    methods: {}
  }
</script>

<style scoped>

  #NewUser {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .one {
    width: 500px;
    height: 500px;
  }

</style>
