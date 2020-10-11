import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    count(state) {
      return state.count;
    }
  },
  state: {
    count: 0
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    }
  },
  actions: {
    increment({ commit, state }) {
      commit("setCount", state.count + 1);
    }
  },
  modules: {}
});
