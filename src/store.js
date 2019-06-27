import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    count: 0,
    user_id: "",
    rank:0,
    solvedNum:0,
    showModal: false,
    problemNum1:0,
    problemNum2:0,
    problemNum3:0,
    problemNum4:0,
    problemNum5:0,
    problemName1:0,
    problemCategory1:'',    
    problemName2:0,
    problemCategory2:'',    
    problemName3:0,
    problemCategory3:'',
    problemName4:0,
    problemCategory4:'',
    problemName5:0,
    problemCategory5:'',
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



















