<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
body
  background-color: #121922
  color: rgb(211, 217, 227)
  height: 100vh
  width: 100vw
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center

  background-color: #121922
  color: rgb(211, 217, 227)
  height: 100vh
  .content
    color: rgb(211, 217, 227)
    margin: 0
    padding: 1rem
    width: 100%
    box-sizing: border-box
    height: 100%
  a
    color: #c7c4d2
</style>
