import Vue from 'vue'
import Vuex, { Module } from 'vuex'

import Task from '../modules/Task'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  modules: {
    Task
  }
})