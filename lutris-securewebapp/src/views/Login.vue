<template>
  <div class="content">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
    <div class="body-content">
      <div class="login-item">
        <input
          id="user-name"
          v-model="username"
          placeholder="Username"
          tabIndex="1"
          type="text"
          required
          @keydown.enter.stop.prevent="nextinput"
        >
      </div>
      <div class="login-item">
        <input
          id="user-password"
          v-model="password"
          placeholder="Password"
          tabIndex="1"
          type="password"
          required
          @keydown.enter.stop.prevent="submitMe"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      title: "Pedo mellon a minno",
      subtitle: "Speak friend and enter",
      username: null,
      password: null,
    };
  },
  computed: {
    authenticated() {
      return this.$store.getters.isAuth;
    },
  },
  created() {
    // add cookie check here
    const userJwt = localStorage.getItem("user-jwt");
    if (userJwt) {
      console.log("jwt", userJwt);
    }
  },
  updated() {
    // possible double check
  },
  methods: {
    nextinput() {
      document.getElementById("user-password").focus();
    },
    async submitMe() {
      const username = this.username;
      const password = this.password;
      console.log("Loging in: " + username);
      try {
        const res = await this.$store.dispatch("login", {
          username,
          password,
        });
        if (res.sucess) console.log("Success!");
        else throw res;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="stylus">
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
    .login-item
      margin: 1em auto
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      width: 20rem
      > input
        border: 1px solid rgb(211, 217, 227)
        background-color: rgba(211, 217, 227, 0)
        border-radius: 3px
        padding: .8em 2em
        color: rgb(211, 217, 227)
        margin: 0 auto
</style>
