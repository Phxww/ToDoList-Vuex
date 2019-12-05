import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import {mutations} from './mutations';
import  getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        storageName:'vuex-todos',
        todos:JSON.parse(localStorage.getItem('vuex-todos') || "[]")
    },
    actions,
    mutations,
    getters,

})