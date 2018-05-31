<template>
  <div id="app" :class="{'dark-mode': nameRoute}">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/portfolio/menu">Portfolio</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <!-- <li><router-link to="/portfolio">Portfolio</router-link></li> -->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    nameRoute() {
      return (
        this.$route.name == "BuddhaMode" ||
        this.$route.path == "/buddha-mode" ||
        this.$route.fullPath == "/buddha-mode/"
      );
    },
  },
};
</script>

<style lang="stylus">
  @require "./assets/stylus/icons.styl"

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 60px 0;
    width: 100%;
    height: 100%
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding: 0;
    min-width: 50rem;
    height: auto;
    margin: 0 auto;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #201939;
  }

  h1
    font-size: 2rem
    font-weight: bold
    // letter-spacing: 0.08rem
  h2
    font-size: 1.5rem
    font-weight: lighter
    letter-spacing: 0.06rem
  h4
    font-size: 1rem
    font-weight: lighter
    font-style: italic
    letter-spacing: 0.04rem
</style>
