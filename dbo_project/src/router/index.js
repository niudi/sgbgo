import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/login';
import ManagementPage from '@/components/management/ManagementPage';
import BarChart from '@/components/gcharts/BarChart';
import FunnelChart from '@/components/gcharts/FunnelChart';
import LineChart from '@/components/gcharts/LineChart'
import PieChart from '@/components/gcharts/PieChart';
import MapChina from '@/components/gcharts/mapChina';
import MapChinaTwo from '@/components/gcharts/mapChinaTwo';
import TwoDimonsionChart from '@/components/gcharts/TwoDimonsionChart';
import CommonBarChart from '@/components/gcharts/CommonBarChart';
import LeftBarChart from '@/components/gcharts/LeftBarChart';
import MoreLineChart from '@/components/gcharts/MoreLineChart';
import TopBottomBarChart from '@/components/gcharts/TopBottomBarChart';
import KnobbyBarChart from '@/components/gcharts/KnobbyBarChart';
import BigGroupChart from '@/components/gcharts/BigGroupChart';
import TwoKnobBarLineChart from '@/components/gcharts/TwoKnobBarLineChart';


import NewUser from '@/components/OperationComponents/NewUser';
import ApplyFlow from '@/components/OperationComponents/ApplyFlow';
import ApplyFlowAll from '@/components/OperationComponents/ApplyFlowAll';

import ProjectKeep from '@/components/OperationComponents/ProjectKeep';


import gotest from '@/components/OperationComponents/gotest1';
import gotest2 from '@/components/OperationComponents/gotest2';


// 下方路由，开发测试使用


import TotalAllProjectList from '@/components/TotalComponent/TotalAllProjectList';
import TotalAllProjectListButtom from '@/components/TotalComponent/TotalAllProjectListButtom';
import TotalProjectApplyRate from '@/components/TotalComponent/TotalProjectApplyRate';
import TotalActiveUserStatistics from '@/components/TotalComponent/TotalActiveUserStatistics';
import TotalNewAddUserStatistics from '@/components/TotalComponent/TotalNewAddUserStatistics';
import TotalOnePage from '@/components/TotalComponent/TotalOnePage';
import TotalRegionTop from '@/components/TotalComponent/TotalRegionTop';
import TotalNewAddProjectList from '@/components/TotalComponent/TotalNewAddProjectList';
import TotalMouthApplyRate from '@/components/TotalComponent/TotalMouthApplyRate';
import TotalMouthActiveProjectBusiness from '@/components/TotalComponent/TotalMouthActiveProjectBusiness';
import TotalProjectKeep from '@/components/TotalComponent/TotalProjectKeep';
import TotalTwoPage from '@/components/TotalComponent/TotalTwoPage';


import RegionOnePage from '@/components/RegionComponent/RegionOnePage';
import RegionActiveUser from '@/components/RegionComponent/RegionActiveUser';


import ProductionBoard from '@/components/ConcreteProject/ProductionBoard';
import RankingList from '@/components/ConcreteProject/RankingList';
import ProductionActiveUser from '@/components/ConcreteProject/ProductionActiveUser';



import DateSelect from '@/components/PublicComponent/DateSelect';

import ApplyMapControl from '@/components/OperationComponents/ApplyMapControl';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ManagementPage',
      name: 'ManagementPage',
      component: ManagementPage
    },
    {
      path: '/BarChart',
      name: 'BarChart',
      component: BarChart
    },
    {
      path: '/FunnelChart',
      name: 'FunnelChart',
      component: FunnelChart
    },
    {
      path: '/LineChart',
      name: 'LineChart',
      component: LineChart
    },
    {
      path: '/PieChart',
      name: 'PieChart',
      component: PieChart
    },
    {
      path: '/MapChina',
      name: 'MapChina',
      component: MapChina
    },
    {
      path: '/MapChinaTwo',
      name: 'MapChinaTwo',
      component: MapChinaTwo
    },
    {
      path: '/NewUser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/TwoDimonsionChart',
      name: 'TwoDimonsionChart',
      component: TwoDimonsionChart
    },
    {
      path: '/CommonBarChart',
      name: 'CommonBarChart',
      component: CommonBarChart
    },
    {
      path: '/LeftBarChart',
      name: 'LeftBarChart',
      component: LeftBarChart
    },
    {
      path: '/MoreLineChart',
      name: 'MoreLineChart',
      component: MoreLineChart
    },
    {
      path: '/TopBottomBarChart',
      name: 'TopBottomBarChart',
      component: TopBottomBarChart
    },
    {
      path: '/ApplyFlow',
      name: 'ApplyFlow',
      component: ApplyFlow
    },
    {
      path: '/ApplyFlowAll',
      name: 'ApplyFlowAll',
      component: ApplyFlowAll
    },
    {
      path: '/KnobbyBarChart',
      name: 'KnobbyBarChart',
      component: KnobbyBarChart
    },
    {
      path: '/BigGroupChart',
      name: 'BigGroupChart',
      component: BigGroupChart
    },

    {
      path: '/ProjectKeep',
      name: 'ProjectKeep',
      component: ProjectKeep
    },

    {
      path: '/ProductionActiveUser',
      name: 'ProductionActiveUser',
      component: ProductionActiveUser
    },
    {
      path: '/TwoKnobBarLineChart',
      name: 'TwoKnobBarLineChart',
      component: TwoKnobBarLineChart
    },
    {
      path: '/gotest',
      name: 'gotest',
      component: gotest
    },
    {
      path: '/gotest2',
      name: 'gotest2',
      component: gotest2
    },

    // 下方路由，开发测试使用
    {
      path: '/TotalAllProjectList',
      name: 'TotalAllProjectList',
      component: TotalAllProjectList
    },
    {
      path: '/TotalAllProjectListButtom',
      name: 'TotalAllProjectListButtom',
      component: TotalAllProjectListButtom
    }, {
      path: '/TotalProjectApplyRate',
      name: 'TotalProjectApplyRate',
      component: TotalProjectApplyRate
    }, {
      path: '/TotalActiveUserStatistics',
      name: 'TotalActiveUserStatistics',
      component: TotalActiveUserStatistics
    }, {
      path: '/TotalNewAddUserStatistics',
      name: 'TotalNewAddUserStatistics',
      component: TotalNewAddUserStatistics
    }, {
      path: '/TotalOnePage',
      name: 'TotalOnePage',
      component: TotalOnePage
    }, {
      path: '/TotalRegionTop',
      name: 'TotalRegionTop',
      component: TotalRegionTop
    }, {
      path: '/TotalNewAddProjectList',
      name: 'TotalNewAddProjectList',
      component: TotalNewAddProjectList
    }, {
      path: '/TotalMouthApplyRate',
      name: 'TotalMouthApplyRate',
      component: TotalMouthApplyRate
    }, {
      path: '/TotalMouthActiveProjectBusiness',
      name: 'TotalMouthActiveProjectBusiness',
      component: TotalMouthActiveProjectBusiness
    }, {
      path: '/TotalProjectKeep',
      name: 'TotalProjectKeep',
      component: TotalProjectKeep
    }, {
      path: '/TotalTwoPage',
      name: 'TotalTwoPage',
      component: TotalTwoPage
    }, {
      path: '/RegionOnePage',
      name: 'RegionOnePage',
      component: RegionOnePage
    }, {
      path: '/RegionActiveUser',
      name: 'RegionActiveUser',
      component: RegionActiveUser
    }, {
      path: '/ProductionBoard',
      name: 'ProductionBoard',
      component: ProductionBoard
    }, {
      path: '/RankingList',
      name: 'RankingList',
      component: RankingList
    },{
      path: '/DateSelect',
      name: 'DateSelect',
      component: DateSelect
    },{
      path: '/ApplyMapControl',
      name: 'ApplyMapControl',
      component: ApplyMapControl
    },
  ]
})
