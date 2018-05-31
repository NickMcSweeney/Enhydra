import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Blog from "@/components/Blog";
import About from "@/components/About";
import PortfolioMenu from "@/components/PortfolioMenu";
import Portfolio from "@/components/Portfolio";
import BuddhaMode from "@/components/BuddhaMode";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: '/portfolio',
      redirect: {
        name: 'PortfolioMenu'
      }
    },
    {
      path: "/portfolio/menu",
      name: "PortfolioMenu",
      component: PortfolioMenu,
    },
    {
      path: "/portfolio/:section",
      name: "Portfolio",
      component: Portfolio,
      props: true,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/buddha-mode",
      name: "BuddhaMode",
      component: BuddhaMode,
    },
  ],
});
