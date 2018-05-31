<template>
  <div class="content">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <h4>{{ subtitle }}</h4>
    </div>

    <div class="body-content">
      <router-link
        v-for="route in routes"
        :to="route.path"
        tag="div"
        class="satelite-content"
        :class="route.position"
        :id="route.img"
        key
      >
        <div class="text-block">{{ route.tag }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio",
  data() {
    return {
      title: "I Am Nick",
      subtitle: "Irregular software developer and designer",
      line: "",
      routes: {
        photograpy: {
          path: "portfolio/photos",
          position: "top-left",
          img: "mountain-lake",
          tag: "Photograpy gallery",
        },
        code: {
          path: "portfolio/design",
          position: "middle-right",
          img: "the-wall",
          tag: "Design work",
        },
        design: {
          path: "portfolio/code",
          position: "bottom-left",
          img: "venice",
          tag: "Coding projects",
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.content
  margin: 0
  padding: 1rem
  width: 100%
  box-sizing: border-box
  height: 100%
  .header-content
    width: 50rem
    min-height: 5rem
    padding: 1rem
    box-sizing: border-box
    margin: 0 auto
    h1, h2
      margin: 0 auto
      text-transform: capitalize

  .body-content
    width: 40rem
    height: 40rem
    margin: 0 auto
    border: .6rem solid rgb(42, 37, 46)
    border-radius: 40rem
    background-image: url('../assets/spiderweb-edited.jpg');
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    box-shadow: inset 0rem 0rem 1rem rgb(42, 37, 46)
    position: relative
    /*display: flex
    justify-content: center
    flex-direction: row
    flex-wrap: wrap*/

    /* TODO: make page dynamic at some point */
    // .satelite-content:hover
    //   width: 20rem
    //   height: 20rem
    //   border: .6rem solid rgb(42, 37, 46)
    //   border-radius: 30rem

    .satelite-content
      width: 15rem
      height: 15rem
      border: .3rem solid rgb(42, 37, 46)
      border-radius: 15rem
      background-repeat: no-repeat
      background-position: center
      background-size: cover
      box-shadow: inset 0rem 0rem 1rem rgb(42, 37, 46)
      position: absolute
      text-align: center
      vertical-align: middle
      box-sizing: border-box
      transition: 1s ease
      .text-block
        width: inherit
        height: 2rem
        color: white
        font-size: 1.4rem
        font-weight: 700
        text-align: center
        vertical-align: middle
        background-color: rgb(42, 37, 46)
        border-radius: 2px
        display: flex
        justify-content: center
        align-items: center
    .top-left
      top: -5rem
      left: -6rem
      width: 18rem
      height: 18rem
      padding: 9rem 0 0 3rem
    .middle-right
      top: 9rem
      right: -7rem
      width: 12rem
      height: 12rem
      padding: 6rem 0 0 2rem
    .bottom-left
      bottom: -4rem
      left: 2rem
      padding: 7rem 0 0 2rem
  #mountain-lake
    background-image: url('../assets/mountain-lake.jpg');
  #the-wall
    background-image: url('../assets/the-wall.jpg');
  #venice
    background-image: url('../assets/venice.jpg');
  h6
    margin: 0 auto
</style>
