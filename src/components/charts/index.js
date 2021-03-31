
'use strict'


import { mapState } from 'vuex'
import { MachineMode } from '../../store/machine/modelEnums.js';



import Vue from 'vue'
import 'chartjs-adapter-date-fns'

import LayerChart from './LayerChart.vue'
import TemperatureChart from './TemperatureChart.vue'


Vue.component('layer-chart', LayerChart)
Vue.component('temperature-chart', TemperatureChart)


export default {
    computed: {
       ...mapState('machine/model', {
               machineMode: state => state.state.machineMode
      }),
      isFFF() {
           return !this.machineMode || (this.machineMode === MachineMode.fff);
       }
    }
}


