<template>
  <div>
  <div class="alt-nav">
      <router-link
        tag="div"
        v-for="(item, key, index) in routeItems"
        :to="item.route"
        :key="key"
        class="selector-items"
        :id="slide(index)"
        :class="{'selected-group': isSelected(item), 'selected-item-active': isSelected(item) === 'partial'}"
      >
        <div class="selector-item" :class="{selected: isSelected(item, index)}">
          {{ item.label }}
          <i class="icon-arrow-right"></i>
        </div>
        <router-link
          v-if="item.children"
          tag="div"
          v-for="(child, childKey) in item.children"
          :to="child.route"
          :key="childKey"
          class="selector-child"
        >
          {{ child.label }}
        </router-link>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "stacked-nav",
  data() {
    return {
      selectorTop: null,
      selectedItem: null,
      selectedParent: null,
      routeItems: {
        offers: {
          label: "Offers",
          route: "/offers",
          children: null,
        },
        projects: {
          label: "Projecs",
          route: "/project",
          children: {
            inProgress: {
              label: "In progress",
              route: "/in-progress",
              children: null,
            },
            complete: {
              label: "Complete",
              route: "/complete",
              children: null,
            },
            archived: {
              label: "Archived",
              route: "/archived",
              children: null,
            },
          },
        },
      },
    };
  },
  props: {
    items: {
      type: Object,
      default: {},
    },
  },
  computed: {
  },
  methods: {
    isSelected(item, index) {
      if (item.children && this.$route) {
        const keys = Object.keys(item.children);
        const filteredList = keys.filter(childKey => {
          const child = item.children[childKey];
          return String(this.$route.path) === String(child.route);
        });
        if (filteredList.length === 0 && String(this.$route.path).startsWith(String(item.route))){
          this.selectedItem = index !== undefined ? index : this.selectedItem;
          return 'partial';
        } else if (filteredList.length === 1){
          this.selectedItem = index !== undefined ? index : this.selectedItem;
          return true;
        }
        return false;
      } else if (this.$route) {
        if (String(this.$route.path) === String(item.route)){
          this.selectedItem = index !== undefined ? index : this.selectedItem;
          return true;
        };
      }
      return false;
    },
    slide(index) {
      if (index > this.selectedItem)
       return "slide-down";
       else if (index < this.selectedItem)
        return "slide-up";
      return "slide-none";
    },
  },
};
</script>

<style lang="stylus">
.alt-nav
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
  margin: 0 14px
  .selector-items
    cursor: pointer
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    margin 0px 0px
    position: relative
    &::before
      width: 100%
      height: 32px
      background-color: #00a1ff
      z-index: 100
      content: ""
      position: absolute
      border-radius: 30px
      left: 0
      top: 0
      opacity: 1
      transition: opacity .25s 1s ease-in-out
    &::after
      width: 40%
      height: 32px
      background-color: #b9c2d2
      z-index: 1
      content: ""
      position: absolute
      border-radius: 0 30px 30px 0
      right: 0
      opacity: 0
    &#slide-down::before
      top: -32px
      opacity: 0
      z-index: 1
      transition: top .5s ease-in-out
    &#slide-down::after
      top: -32px
      opacity: 0
      z-index: 1
      transition: top .5s ease-in-out
    &#slide-up::before
      top: 32px
      opacity: 0
      z-index: 10
      transition: top .5s ease-in-out
    &#slide-up::after
      top: 32px
      opacity: 0
      z-index: 1
      transition: top .5s ease-in-out
    .icon-arrow-right
      z-index: 1
      opacity: 0
      transition: opacity .25s .25s ease
      transition: margin .5s ease
      margin-right: 15px
    .selector-item
      display flex
      justify-content space-between
      align-items: center
      width 175px
      height: 32px
      padding: 2px 15px
      border-radius: 30px
      z-index: 100
    .selector-child
      margin 1px 0px 0px 5px
      border-radius: 15px
      padding: 2px 15px
      color #777
      &.router-link-active
        color: #00a1ff
    .selected
      color: #FFF
      background-color: transparent
      transition: color .2s .1s ease-in-out
  .selected-group
    &::before
      z-index: 100
      opacity: 1
    &::after
      z-index: 10
      opacity: 0
      transition: opacity 0.2s ease-in-out
    &#slide-none::before
      top: 0px
      opacity: 1
      z-index: 100
      transition: top .25s ease-in-out
    &#slide-none::after
      top: 0px
      opacity: 0
      z-index: 1
      transition: opacity .25s ease-in-out

  .selected-group.selected-item-active#slide-none
    .icon-arrow-right
      z-index: 100
      margin-right: 0
      opacity: 1
      transition: all 0.25s 0.25s ease
    &::before
      width: 75%
      z-index: 100
      transition: width 0.25s 0.25s ease-in-out
      opacity: 1
    &::after
      top: 0
      right: 0
      z-index: 10
      opacity: 1
      transition: opacity .25s .25s ease-in-out
</style>
