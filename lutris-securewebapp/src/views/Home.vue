<template>
  <div class="home">
    <Portal />
  </div>
</template>

<script>
// @ is an alias to /src
import Portal from "@/components/Portal.vue";

export default {
  name: "Home",
  components: {
    Portal,
  },
  computed: {
    authenticated() {
      return this.$store.getters.isAuth();
    },
  },
};
</script>
