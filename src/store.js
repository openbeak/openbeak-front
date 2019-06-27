import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    count: 0,
    showModal: false
  },
  getters: {
    getShowModal(state){
      return state.showModal;
    }
  },
  mutations: {
    setModalOn(state){
      console.log("store set modal on");
      return state.showModal=true;
    },
    setModalOff(state){
      console.log("store set modal off")
      return state.showModal=false;
    }

  }
})



















