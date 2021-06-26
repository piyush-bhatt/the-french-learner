<template>
  <div :class="[darkMode ? 'dark' : '', 'main-container']">
    <Header @toggle-theme="toggleTheme" />
    <Nav @toggle-nav="toggleNav" :isOpen="navOpen" />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
    Nav,
  },
  data() {
    return {
      darkMode: false,
      navOpen: false,
    };
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
    },
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");

:root {
  --text-color: #1e314f;
  --bg-color: #dee1c5;
}

.dark {
  --text-color: #dee1c5;
  --bg-color: #1e314f;
}

.main-container {
  height: 100vh;
  width: 100vw;
  color: var(--text-color);
  background-color: var(--bg-color);
}

.content-container {
  height: calc(100% - 5em);
  display: flex;
  z-index: 1;
}

body {
  font-family: "Helvetica Rounded", "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
}

a:hover,
a:visited,
a:link {
  text-decoration: none;
  color: var(--text-color);
}
</style>
