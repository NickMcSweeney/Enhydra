<template>
  <div class="hello">
    <div class="cover-logo-img"></div>
    <div class="main-body">
      <h1>{{ title }}</h1>
      <h2>{{ intro }}</h2>
      <div>
        <img src="../assets/the_cloud.png"/>
        <h6>Image thanks to xkcd: <a href="https://xkcd.com/1084/">https://xkcd.com/1084/</a></h6>
      </div>
      <h2>{{ msg }}</h2>
      <!-- <ul>
        <li><a href="https://imgs.xkcd.com/comics/self_driving.png" target="_blank">Confirm Humanity</a></li>
        <li><a href="https://imgs.xkcd.com/comics/good_code.png" target="_blank">My current development process</a></li>
        <li><a href="https://imgs.xkcd.com/comics/server_attention_span.png" target="_blank">Moble version</a></li>
        <li><a href="https://imgs.xkcd.com/comics/server_problem.png" target="_blank">Current server development process</a></li>
        <li><a href="https://imgs.xkcd.com/comics/the_cloud.png" target="_blank">Current server stability</a></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      title: "Welcome to My web page",
      intro: "My name is Nicholas Shindler",
      msg:
        "I am a software developer among other things. I bult this site to play around this web tech, also there's (barely) a blog, and I am in process of adding my portfolio.",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  font-weight: normal
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: #201939

.cover-logo-img
  background-image: url('../assets/light-cover-logo.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: 36rem auto
  width: 50rem
  height: 15rem
  margin: 0 auto
  padding: 5rem 0
.main-body
  min-width: 50rem
  max-width: 60rem
  height: auto
  margin: 0 auto
</style>
