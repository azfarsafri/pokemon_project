import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    message: []
  },
  mutations: {
    CHANGE_ISLOGGEDIN(state, status){
      state.isLoggedIn = status
    }
  },
  actions: {
    async toLogin(context, payload){
      try {
        const response = await axios ({
          method: "post",
          url: "http://localhost:7000/trainers/login",
          data: payload
        })
        localStorage.setItem("access_token", response.data.access_token)
        context.commit("CHANGE_ISLOGGEDIN", true)
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {},
});
