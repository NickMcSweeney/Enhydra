<template>
  <div class="content">
    <div class="header-content">
      <h2>{{ section }}</h2>
    </div>

    <div>
      <!-- TODO: put stuff here pulled from db -->
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio",
  data() {
    return {};
  },
  props: {
    section: {
      require: true,
    },
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
    height: 12rem
    padding: 3rem 0 5rem 18rem
    box-sizing: border-box
    margin: 0 auto
    background-image: url('../assets/header-logo.svg')
    background-repeat: no-repeat
    background-position: center
    background-size: contain
    display: flex
    justify-content: flex-start
    align-items: center
    h2
      margin: auto 0
      text-transform: capitalize
      padding: 0 3rem

</style>
