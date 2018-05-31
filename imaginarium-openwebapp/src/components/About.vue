<template>
  <div class="content">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
    <div class="body-content">
      <p v-for="line in bodyText">{{ line }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      title: "Nicholas Shindler",
      subtitle: "Irregular programmer and aspiring designer",
      bodyText: [
        "Hello,",
        "It’s good to meet you, this is Nicholas Shindler. Nicholas, called Nick by his mother and Shindler by just about everyone else, is a young man just entering the adult world, regardless of how he feels about the idea. Nicholas is characterized by a number of principals, hard work, experimentation, intuition, and a smidge of good old fashion stubbornness, but not quite so much as many would consider cumbersome.",
        " Nicholas studied Chemistry at university, during this time he learned many fascinating things, however none as useful as the ability to sit in the basements of old brick buildings and play with electronics.",
        "After university, he began work, though not in the field of chemistry. Since finishing school Nicholas has worked at a company called Welocalize, a localization, linguistics, and technology company, among other things. Though largely specializing in the recruitment of large numbers of contract workers for outsourced projects. Nicholas began as one such contract worker, however, he quickly moved through many positions. Performing duties as a project lead, software tester, and software support, all over a period of fewer than six months, until finally being asked to join the companies software development and innovations team. Where he now works as a software engineer specializing in design and development."
      ]
    };
  }
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
    h1
      font-size: 2rem
      font-weight: bold
      // letter-spacing: 0.08rem
    h2
      font-size: 1.5rem
      font-weight: lighter
      letter-spacing: 0.06rem
  .body-content
    width: 50rem
    min-height: 40rem
    padding: 1rem
    box-sizing: border-box
    margin: 0 auto
    p
      font-size: 1rem
      text-align: justify
</style>
