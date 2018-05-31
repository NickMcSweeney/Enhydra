<template>
  <div class="content">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
    <div class="body-content">
      <div v-if="authenticated">
        <h1>Welcome</h1>
        <input name="title" class="title-enter" type="text" placeholder="Title" v-model="entry.title"/>
        <input name="subtitle" class="title-enter" type="text" placeholder="Subtitle" v-model="entry.subtitle"/>
        <textarea
          class="text-enter"
          v-model="entry.body"
          placeholder="Body"
        />
        <button class="submit" @click="submitBlogItem">Submit</button>
      </div>
      <div v-else>
        <div class="login-item">
          <!-- <label>Username: </label> -->
          <input id="user-name" placeholder="Username" @keydown.enter.stop.prevent="nextinput" tabIndex="1" v-model="username" type="text" required/>
        </div>
        <div class="login-item">
          <!-- <label>Password: </label> -->
          <input id="user-password" placeholder="Password" @keydown.enter.stop.prevent="submitMe" tabIndex="1" v-model="password" type="password" required/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buddha-mode",
  data() {
    return {
      title: "Pedo mellon a minno",
      subtitle: "Speak friend and enter",
      username: null,
      password: null,
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
  methods: {
    nextinput() {
      document.getElementById("user-password").focus();
    },
    submitMe() {
      const username = this.username;
      const password = this.password;
      try {
        const res = this.$store.dispatch("loginBuddhaMode", {
          username,
          password,
        });
        if (res) {
          console.log("Success!");
        } else {
          throw res;
        }
      } catch (e) {
        console.error(e);
      }
    },
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
  mounted() {
    //do something after mounting vue instance
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
    h1
      font-size: 2rem
      font-weight: bold
      // letter-spacing: 0.08rem
    h2
      font-size: 1.2rem
      font-weight: lighter
      letter-spacing: 0.06rem
      font-style: italic
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
    .login-item
      margin: 1rem auto
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      width: 20rem
      > input
        border: 1px solid rgb(211, 217, 227)
        background-color: rgba(211, 217, 227, 0)
        border-radius: 3px
        padding: .3rem 1rem
        color: rgb(211, 217, 227)
        margin: 0 auto
</style>
<style lang="stylus">
body #app.dark-mode
  background-color: #121922
  color: rgb(211, 217, 227)
  height: 100vh
  .content
    color: rgb(211, 217, 227)
  a
    color: #c7c4d2
</style>
