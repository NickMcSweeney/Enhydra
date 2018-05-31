<template>
  <div class="content">
    <div class="menu-thingy">
      <!-- <circle-menu
        :menuItem="blogItems"
        @menuSelect="loadStory"
        @clear="clearStory"
      ></circle-menu> -->
      <div v-for="item in blogItems" key class="block-menu" @click="loadStory(item)">
        {{item}}
      </div>
    </div>
    <div v-if="showStory">
    <div class="header-content">
      <h1>{{ currentStory.title }}</h1>
      <h2>{{ currentStory.subtitle }}</h2>
    </div>
    <div class="body-content">
      <div class="display">{{ currentStory.body }}</div>
    </div>
  </div>
  </div>
</template>

<script>
// import CircleMenu from "@/components/Circle-Menu";

export default {
  name: "blog",
  // components: { CircleMenu },
  data() {
    return {
      imgUrl: "",
      showStory: false,
      showMenu: false,
    };
  },
  computed: {
    blogItems() {
      return this.$store.getters.getBlogList;
    },
    currentStory() {
      return this.$store.getters.getCurrentStory;
    },
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
    },
  },
  mounted() {
    //do something after mounting vue instance
    this.$store.dispatch("blogList");
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
  .menu-thingy
    width: 25rem
    height: auto
    margin: 0 auto
    background-color: rgb(42, 37, 46)
    /*display: flex
    flex-direction: column
    justify-content: center
    align-items: center*/
    // border-top: 1px solid rgb(42, 37, 46)
    // border-bottom: 1px solid rgb(42, 37, 46)
    .block-menu
      display: inline-block
      margin: .05rem .1rem
      padding: 0.2rem 1rem
      width: auto
      background-color: white
      cursor: pointer
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
    width: 50rem
    min-height: 40rem
    padding: 1rem
    box-sizing: border-box
    margin: 0 auto
    .display
      white-space: pre-line
      font-size: 1rem
      text-align: justify
      font-family: arial
      width: 100%
      cursor: default
      min-height: 20rem
      height: auto
  h6
    margin: 0 auto
</style>
