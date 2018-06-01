<template>
  <div class="portal-container">
    <div class="header-content">
      <h1>Welcome</h1>
      <h2>You actually F**ing did it...</h2>
    </div>
    <img src="https://imgs.xkcd.com/comics/doors_of_durin.png" alt="Hey">

    <div>
      <router-link to="login">create user</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "Portal",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
