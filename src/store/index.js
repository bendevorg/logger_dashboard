import Vue from 'vue';
import Vuex from 'vuex';
import log from './modules/log';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    log,
  }
});
