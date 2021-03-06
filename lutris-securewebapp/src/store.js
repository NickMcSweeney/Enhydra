import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_URL = "https://lutra.lutrisimaginarium.com";

export default new Vuex.Store({
  state: {
    jwt: null,
    auth: false,
  },
  mutations: {
    setJWT(state, value) {
      state.jwt = value;
    },
    setAuth(state, value) {
      state.auth = value;
    },
  },
  getters: {
    isAuth(state) {
      return state.auth;
    },
  },
  actions: {
    async login(context, payload) {
      let body = new Object();
      body.username = payload.username;
      body.password = payload.password;
      body = JSON.stringify(body);

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      const init = {
        method: "POST",
        headers,
        body,
        mode: "cors",
        cache: "default",
      };

      fetch(API_URL + "/login/", init)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Endpoint Failure";
          }
        })
        .then(body => {
          console.log("store: ", body);
          if (body.sucess) {
            context.commit("setJWT", body.jwt);
            context.commit("setAuth", body.sucess);
            localStorage.setItem("user-jwt", body.jwt);
          } else {
            throw "Invalid Login";
          }
        })
        .catch(e => {
          context.commit("setJWT", null);
          context.commit("setAuth", false);
          console.error(e);
        });
    },
  },
});
