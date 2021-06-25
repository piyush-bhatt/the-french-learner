<template>
  <div :class="[darkMode ? 'dark' : '', 'main-container']">
    <Header @toggle-theme="toggleTheme" />
    <div class="content-container">
      <Nav />
      <router-view/>
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
    Nav
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style>
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
  display: flex;
}

body {
  font-family: 'Helvetica Rounded','Montserrat', sans-serif;
  padding: 0;
  margin: 0;
}
</style>
