<template>
  <div class="content">
    <div class="body-content">
      <div v-if="authenticated">
        <h1>Welcome</h1>
        <input
          v-model="entry.title"
          name="title"
          class="title-enter"
          type="text"
          placeholder="Title"
        >
        <input
          v-model="entry.subtitle"
          name="subtitle"
          class="title-enter"
          type="text"
          placeholder="Subtitle"
        >
        <textarea
          v-model="entry.body"
          class="text-enter"
          placeholder="Body"
        />
        <button
          class="submit"
          @click="submitBlogItem"
        >Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuddhaMode",
  data() {
    return {
      title: "Pedo mellon a minno",
      subtitle: "Speak friend and enter",
      entry: {
        title: null,
        subtitle: null,
        body: null,
      },
    };
  },
  computed: {
    authenticated() {
      return this.$store.getters.isAuth;
    },
  },
  mounted() {
    //do something after mounting vue instance
  },
  methods: {
    submitBlogItem() {
      const userJwt = localStorage.getItem("user-jwt");
      try {
        this.$store.dispatch("saveBlogEntry", {
          userJwt,
          content: this.entry,
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.body-content
  width: 50rem
  height: auto
  min-height: 40rem
  padding: 2rem
  box-sizing: border-box
  margin: 0 auto
  display: flex
  justify-content: top
  flex-direction: column
  .title-enter
    margin: 1rem auto
    display: flex
    padding: .5rem 1rem
    width: 36rem
    box-sizing: border-box
    border-radius: 3px
  .text-enter
    margin: 1rem auto
    display: flex
    padding: .5rem 1rem
    flex-direction: row
    justify-content: space-between
    align-items: center
    box-sizing: border-box
    width: 36rem
    height: 30rem
  button.submit
    padding: 1rem 2rem
    border-radius: 6px
    border: 0
    outline: 0
</style>
