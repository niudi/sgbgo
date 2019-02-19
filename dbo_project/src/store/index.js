import Vue from 'vue'
import vuex from 'vuex'


Vue.use(vuex);


let store = new vuex.Store({
  //store对象
  state: {
    SysSet: 0,
    selectUrl: '',
    ManagementCenterIndex: '1',
    ClickseriesName: '',
    ClickName: '',
    CenterUseTemplateId: ''
  },
  mutations: {}
})

export default store;
