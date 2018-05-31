import Vue from "vue";
import Vuex from "vuex";

// vue needs loaded and vuex prior to this script included
Vue.use(Vuex);

const PROD_URL = "http://www.lutrisimaginarium.com:8080";
const SECURE_PROD_URL = "https://www.lutrisimaginarium.com:8088";

export const store = new Vuex.Store({
  state: {
    jwt: null,
    auth: false,

    blogList: [],

    currentStory: {
      title: null,
      subtitle: null,
      bodyText: null,
      imgUrl: "../assets/the_cloud.png",
    },
    blogs: {},
  },
  mutations: {
    setCurrentStory(state, value) {
      state.currentStory = value;
    },
    setJWT(state, value) {
      state.jwt = value;
    },
    setAuth(state, value) {
      state.auth = value;
    },
    setBlogList(state, value) {
      state.blogList = value;
    },
  },
  getters: {
    getCurrentStory(state) {
      return state.currentStory;
    },
    getBlogList(state) {
      return state.blogList;
    },
    isAuth(state) {
      return state.auth;
    },
  },
  actions: {
    setCurrentStory(context, payload) {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let body = new Object();
      body.content = payload;
      body = JSON.stringify(body);

      const init = {
        method: "POST",
        headers,
        body,
        mode: "cors",
        cache: "default",
      };

      fetch(PROD_URL + "/blog/getItem/", init)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Endpoint Failure";
          }
        })
        .then(body => {
          console.log("store: ", body);
          context.commit("setCurrentStory", body.story);
        })
        .catch(e => {
          console.error(e);
        });
    },
    blogList(context, payload) {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      const init = {
        method: "GET",
        headers,
        mode: "cors",
        cache: "default",
      };

      fetch(PROD_URL + "/blog/listItems", init)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Endpoint Failure";
          }
        })
        .then(body => {
          console.log("store: ", body);
          context.commit("setBlogList", body.list);
        })
        .catch(e => {
          console.error(e);
        });
    },
    saveBlogEntry(context, payload) {
      let body = new Object();
      body.jwt = payload.userJwt;
      body.entry = payload.content;
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

      fetch(SECURE_PROD_URL + "/blog/addItem", init)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Endpoint Failure";
          }
        })
        .then(body => {
          console.log("store: ", body);
          return true;
        })
        .catch(e => {
          console.error(e);
          return e;
        });
    },
    loginBuddhaMode(context, payload) {
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

      fetch(SECURE_PROD_URL + "/login/", init)
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
