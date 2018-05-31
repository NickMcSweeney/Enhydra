<template>
  <div class="content">
    <h2>{{ title }}<i class="icon-design-light"></i></h2>
    <div class="menu-bar">
      <router-link
        v-for="(item, key) in menuItems"
        :to="item.route"
        tag="div"
        class="menu-block"
        :id="key"
        key
      >
        <div class="menu-img" :style="`background-image: ${item.img}`">
          <i :class="item.icon" class="center-icon-lg"/>
          <div class="menu-title"><h3>{{item.title}}</h3><h4>{{item.subtitle}}</h4></div>
          <div class="menu-shaddow"></div>
        </div>
      </router-link>
    </div>


  </div>
</template>

<script>
import veniceIMG from '../assets/venice.jpg';
import mountainIMG from '../assets/mountain-lake.jpg';
import wallIMG from '../assets/the-wall.jpg';

export default {
  name: "contents",
  data() {
    return {
      title: "",
      menuItems: {
        design: {
          icon: "icon-sketch",
          img: `url(${veniceIMG})`,
          title: "Design",
          subtitle: "Projects focused on designing",
          route: "/portfolio/design"
        },
        photography: {
          icon: "icon-photo-camera",
          img: `url(${mountainIMG})`,
          title: "Photography",
          subtitle: "Personal photography gallery",
          route: "/portfolio/photography"
        },
        code: {
          icon: "icon-coding-2",
          img: `url(${wallIMG})`,
          title: "Code",
          subtitle: "Projects focused on writing code",
          route: "/portfolio/code"
        },
      },
    };
  },
  props: {
    id: {
      require: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.content
  margin: 0
  padding: 0
  width: 100%
  box-sizing: border-box
  height: 100%
  display: flex
  justify-content:flex-start
  align-items: center
  flex-direction: column
  h2
    margin: 4rem 0
  .menu-bar
    width: 970px
    height: 550px
    background-color: #291E2E
    border-radius: 15px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: row
    .menu-block
      width: 300px
      height: 500px
      border-radius: 0
      border: 3px solid rgba(#ffffff, 0.25)
      display: flex
      justify-content: center
      align-items: center
      cursor: pointer
      user-select:none
      .menu-img
        width: 294px
        height: 490px
        border-radius: 5px
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        .menu-title
          display: none
        .menu-shaddow
          display: none
        &:hover
          position: relative
          .menu-title
            color: white
            display: flex
            justify-content: center
            align-items: center
            flex-direction: column
            flex-wrap: wrap
            width: 100%
            z-index: 100
          .menu-shaddow
            display: flex
            position: absolute
            width: 100%
            height: 100%
            background-color: rgba(#000, 0.7)
            z-index: 10
        &:active
          opacity: .1
          transition: all 1s ease-out
        .center-icon-lg
          color: #FFF
          font-size: 5rem
          z-index: 1000
</style>
