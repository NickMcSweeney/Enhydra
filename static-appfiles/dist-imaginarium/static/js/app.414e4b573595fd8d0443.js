webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "app",
  computed: {
    routeNameIsBuddha() {
      if (this.$route.name == "BuddhaMode" || this.$route.path == "/buddha-mode" || this.$route.fullPath == "/buddha-mode/") return true;
      return false;
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "about",
  data() {
    return {
      title: "Nicholas Shindler",
      subtitle: "Irregular programmer and aspiring designer",
      bodyText: ["Hello,", "It’s good to meet you, this is Nicholas Shindler. Nicholas, called Nick by his mother and Shindler by just about everyone else, is a young man just entering the adult world, regardless of how he feels about the idea. Nicholas is characterized by a number of principals, hard work, experimentation, intuition, and a smidge of good old fashion stubbornness, but not quite so much as many would consider cumbersome.", " Nicholas studied Chemistry at university, during this time he learned many fascinating things, however none as useful as the ability to sit in the basements of old brick buildings and play with electronics.", "After university, he began work, though not in the field of chemistry. Since finishing school Nicholas has worked at a company called Welocalize, a localization, linguistics, and technology company, among other things. Though largely specializing in the recruitment of large numbers of contract workers for outsourced projects. Nicholas began as one such contract worker, however, he quickly moved through many positions. Performing duties as a project lead, software tester, and software support, all over a period of fewer than six months, until finally being asked to join the companies software development and innovations team. Where he now works as a software engineer specializing in design and development."]
    };
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import CircleMenu from "@/components/Circle-Menu";

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "blog",
  // components: { CircleMenu },
  data() {
    return {
      imgUrl: "",
      showStory: false,
      showMenu: false
    };
  },
  computed: {
    blogItems() {
      return this.$store.getters.getBlogList;
    },
    currentStory() {
      return this.$store.getters.getCurrentStory;
    }
  },
  methods: {
    expandMenu() {
      this.showMenu = true;
    },
    loadStory(item) {
      this.showMenu = false;
      this.$store.dispatch("setCurrentStory", item);
      this.showStory = true;
    },
    clearStory() {
      this.showStory = false;
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.$store.dispatch("blogList");
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "buddha-mode",
  data() {
    return {
      title: "Pedo mellon a minno",
      subtitle: "Speak friend and enter",
      username: null,
      password: null,
      entry: {
        title: null,
        subtitle: null,
        body: null
      }
    };
  },
  computed: {
    authenticated() {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    nextinput() {
      document.getElementById("user-password").focus();
    },
    submitMe() {
      const username = this.username;
      const password = this.password;
      try {
        const res = this.$store.dispatch("loginBuddhaMode", {
          username,
          password
        });
        if (res) {
          console.log("Success!");
        } else {
          throw res;
        }
      } catch (e) {
        console.error(e);
      }
    },
    submitBlogItem() {
      const userJwt = localStorage.getItem("user-jwt");
      try {
        this.$store.dispatch("saveBlogEntry", {
          userJwt,
          content: this.entry
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Main",
  data() {
    return {
      title: "Welcome to My web page",
      intro: "My name is Nicholas Shindler",
      msg: "I am a software developer among other things. I bult this site to play around this web tech, also there's (barely) a blog, and I am in process of adding my portfolio."
    };
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "portfolio",
  data() {
    return {};
  },
  props: {
    section: {
      require: true
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_venice_jpg__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_venice_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_venice_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_mountain_lake_jpg__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_mountain_lake_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_mountain_lake_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_the_wall_jpg__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_the_wall_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_the_wall_jpg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: "contents",
  data() {
    return {
      title: "",
      menuItems: {
        design: {
          icon: "icon-sketch",
          img: `url(${__WEBPACK_IMPORTED_MODULE_0__assets_venice_jpg___default.a})`,
          title: "Design",
          subtitle: "Projects focused on designing",
          route: "/portfolio/design"
        },
        photography: {
          icon: "icon-photo-camera",
          img: `url(${__WEBPACK_IMPORTED_MODULE_1__assets_mountain_lake_jpg___default.a})`,
          title: "Photography",
          subtitle: "Personal photography gallery",
          route: "/portfolio/photography"
        },
        code: {
          icon: "icon-coding-2",
          img: `url(${__WEBPACK_IMPORTED_MODULE_2__assets_the_wall_jpg___default.a})`,
          title: "Code",
          subtitle: "Projects focused on writing code",
          route: "/portfolio/code"
        }
      }
    };
  },
  props: {
    id: {
      require: true
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Main__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Blog__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_About__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PortfolioMenu__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Portfolio__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_BuddhaMode__ = __webpack_require__(32);









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: "/",
    name: "Main",
    component: __WEBPACK_IMPORTED_MODULE_2__components_Main__["a" /* default */]
  }, {
    path: "/blog",
    name: "Blog",
    component: __WEBPACK_IMPORTED_MODULE_3__components_Blog__["a" /* default */]
  }, {
    path: "/portfolio",
    redirect: {
      name: "PortfolioMenu"
    }
  }, {
    path: "/portfolio/menu",
    name: "PortfolioMenu",
    component: __WEBPACK_IMPORTED_MODULE_5__components_PortfolioMenu__["a" /* default */]
  }, {
    path: "/portfolio/:section",
    name: "Portfolio",
    component: __WEBPACK_IMPORTED_MODULE_6__components_Portfolio__["a" /* default */],
    props: true
  }, {
    path: "/about",
    name: "About",
    component: __WEBPACK_IMPORTED_MODULE_4__components_About__["a" /* default */]
  }, {
    path: "/buddha-mode",
    name: "BuddhaMode",
    component: __WEBPACK_IMPORTED_MODULE_7__components_BuddhaMode__["a" /* default */]
  }]
}));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);



// vue needs loaded and vuex prior to this script included
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const API_URL = "https://lutra.lutrisimaginarium.com";

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    jwt: null,
    auth: false,

    blogList: [],

    currentStory: {
      title: null,
      subtitle: null,
      bodyText: null,
      imgUrl: "../assets/the_cloud.png"
    },
    blogs: {}
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
    }
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
    }
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
        cache: "default"
      };

      fetch(API_URL + "/blog/getItem/", init).then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw "Endpoint Failure";
        }
      }).then(body => {
        console.log("store: ", body);
        context.commit("setCurrentStory", body.story);
      }).catch(e => {
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
        cache: "default"
      };

      fetch(API_URL + "/blog/listItems", init).then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw "Endpoint Failure";
        }
      }).then(body => {
        console.log("store: ", body);
        context.commit("setBlogList", body.list);
      }).catch(e => {
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
        cache: "default"
      };

      fetch(API_URL + "/blog/addItem", init).then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw "Endpoint Failure";
        }
      }).then(body => {
        console.log("store: ", body);
        return true;
      }).catch(e => {
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
        cache: "default"
      };

      fetch(API_URL + "/login/", init).then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw "Endpoint Failure";
        }
      }).then(body => {
        console.log("store: ", body);
        if (body.sucess) {
          context.commit("setJWT", body.jwt);
          context.commit("setAuth", body.sucess);
          localStorage.setItem("user-jwt", body.jwt);
        } else {
          throw "Invalid Login";
        }
      }).catch(e => {
        context.commit("setJWT", null);
        context.commit("setAuth", false);
        console.error(e);
      });
    }
  }
});
/* harmony export (immutable) */ __webpack_exports__["a"] = store;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e6525d92_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(41);
function injectStyle (ssrContext) {
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e6525d92_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(12);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: "#app",
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* store */],
  template: "<App/>",
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/mountain-lake.5fdf4ab.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/the-wall.38fd6e1.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/the_cloud.58a42ec.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/venice.cdf9c8d.jpg";

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_About_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_180ac766_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_About_vue__ = __webpack_require__(36);
function injectStyle (ssrContext) {
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-180ac766"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_About_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_180ac766_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_About_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Blog_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e05b735e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Blog_vue__ = __webpack_require__(40);
function injectStyle (ssrContext) {
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e05b735e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Blog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e05b735e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Blog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuddhaMode_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ab330f7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuddhaMode_vue__ = __webpack_require__(37);
function injectStyle (ssrContext) {
  __webpack_require__(17)
  __webpack_require__(16)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5ab330f7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuddhaMode_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ab330f7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuddhaMode_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_647bc376_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__ = __webpack_require__(38);
function injectStyle (ssrContext) {
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-647bc376"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_647bc376_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Portfolio_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eef19fce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Portfolio_vue__ = __webpack_require__(42);
function injectStyle (ssrContext) {
  __webpack_require__(22)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eef19fce"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Portfolio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eef19fce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Portfolio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioMenu_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78f22ce1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioMenu_vue__ = __webpack_require__(39);
function injectStyle (ssrContext) {
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-78f22ce1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioMenu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78f22ce1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioMenu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('div',{staticClass:"header-content"},[_c('h1',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.subtitle))])]),_vm._v(" "),_c('div',{staticClass:"body-content"},_vm._l((_vm.bodyText),function(line){return _c('p',[_vm._v(_vm._s(line))])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('div',{staticClass:"header-content"},[_c('h1',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.subtitle))])]),_vm._v(" "),_c('div',{staticClass:"body-content"},[(_vm.authenticated)?_c('div',[_c('h1',[_vm._v("Welcome")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.entry.title),expression:"entry.title"}],staticClass:"title-enter",attrs:{"name":"title","type":"text","placeholder":"Title"},domProps:{"value":(_vm.entry.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.entry, "title", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.entry.subtitle),expression:"entry.subtitle"}],staticClass:"title-enter",attrs:{"name":"subtitle","type":"text","placeholder":"Subtitle"},domProps:{"value":(_vm.entry.subtitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.entry, "subtitle", $event.target.value)}}}),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.entry.body),expression:"entry.body"}],staticClass:"text-enter",attrs:{"placeholder":"Body"},domProps:{"value":(_vm.entry.body)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.entry, "body", $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"submit",on:{"click":_vm.submitBlogItem}},[_vm._v("Submit")])]):_c('div',[_c('div',{staticClass:"login-item"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],attrs:{"id":"user-name","placeholder":"Username","tabIndex":"1","type":"text","required":""},domProps:{"value":(_vm.username)},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.nextinput($event)},"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"login-item"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],attrs:{"id":"user-password","placeholder":"Password","tabIndex":"1","type":"password","required":""},domProps:{"value":(_vm.password)},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.submitMe($event)},"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('div',{staticClass:"cover-logo-img"}),_vm._v(" "),_c('div',{staticClass:"main-body"},[_c('h1',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.intro))]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.msg))])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{attrs:{"src":__webpack_require__(28)}}),_vm._v(" "),_c('h6',[_vm._v("Image thanks to xkcd: "),_c('a',{attrs:{"href":"https://xkcd.com/1084/"}},[_vm._v("https://xkcd.com/1084/")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('h2',[_vm._v(_vm._s(_vm.title)),_c('i',{staticClass:"icon-design-light"})]),_vm._v(" "),_c('div',{staticClass:"menu-bar"},_vm._l((_vm.menuItems),function(item,key){return _c('router-link',{key:"",staticClass:"menu-block",attrs:{"to":item.route,"tag":"div","id":key}},[_c('div',{staticClass:"menu-img",style:(("background-image: " + (item.img)))},[_c('i',{staticClass:"center-icon-lg",class:item.icon}),_vm._v(" "),_c('div',{staticClass:"menu-title"},[_c('h3',[_vm._v(_vm._s(item.title))]),_c('h4',[_vm._v(_vm._s(item.subtitle))])]),_vm._v(" "),_c('div',{staticClass:"menu-shaddow"})])])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('div',{staticClass:"menu-thingy"},_vm._l((_vm.blogItems),function(item){return _c('div',{key:"",staticClass:"block-menu",on:{"click":function($event){_vm.loadStory(item)}}},[_vm._v("\n      "+_vm._s(item)+"\n    ")])})),_vm._v(" "),(_vm.showStory)?_c('div',[_c('div',{staticClass:"header-content"},[_c('h1',[_vm._v(_vm._s(_vm.currentStory.title))]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.currentStory.subtitle))])]),_vm._v(" "),_c('div',{staticClass:"body-content"},[_c('div',{staticClass:"display"},[_vm._v(_vm._s(_vm.currentStory.body))])])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'dark-mode': _vm.routeNameIsBuddha},attrs:{"id":"app"}},[_c('ul',[_c('li',[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/portfolio/menu"}},[_vm._v("Portfolio")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/about"}},[_vm._v("About")])],1)]),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('div',{staticClass:"header-content"},[_c('h2',[_vm._v(_vm._s(_vm.section))])]),_vm._v(" "),_c('div')])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[14]);
//# sourceMappingURL=app.414e4b573595fd8d0443.js.map