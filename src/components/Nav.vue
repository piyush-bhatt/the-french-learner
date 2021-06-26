<template>
  <div class="nav-container">
    <!-- <div class="open" v-if="!isOpen" @click="$emit('toggle-nav')">
      <span><b>&gt;</b></span>
    </div> -->
    <transition name="nav">
      <div class="nav" v-if="isOpen">
        <div class="items-container">
          <router-link to="/"><h3>Home</h3></router-link>
          <router-link to="/introduction"><h3>Introduction</h3></router-link>
          <router-link to="/alphabets"><h3>Alphabets</h3></router-link>
          <router-link to="/numbers1"><h3>Numbers 1-30</h3></router-link>
          <router-link to="/numbers2"><h3>Numbers 31-60</h3></router-link>
          <router-link to="/numbers3"><h3>Numbers 61-100</h3></router-link>
          <router-link to="/numbers4"><h3>Numbers (Periods)</h3></router-link>
          <router-link to="/days"><h3>Days of the Week</h3></router-link>
          <router-link to="/months"><h3>Months of the Year</h3></router-link>
          <router-link to="/seasons"><h3>Seasons / Weather</h3></router-link>
          <router-link to="/pronouns"><h3>Pronouns</h3></router-link>
        </div>
        <div class="close" @click="$emit('toggle-nav')">
          <span><b>&lt;</b></span>
        </div>
      </div>
    </transition>
    <div class="open" v-if="!isOpen" @click="$emit('toggle-nav')">
      <span><b>&gt;</b></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    isOpen: Boolean,
  },
};
</script>

<style scoped>
.nav {
  border-right: 2px solid var(--text-color);
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
}

.items-container {
  width: 10em;
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 2em;
}

/* animated nav */
.nav-enter-active,
.nav-leave-active {
  transition: 00.8s ease all;
}

.nav-enter-from {
  transform: translateX(-10em);
}

.nav-leave-to {
  transform: translateX(-14em);
}

.nav-container {
  position: absolute;
  left: 0;
  top: 5em;
  background-color: var(--bg-color);
  z-index: 2;
  height: calc(100% - 5em);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.open,
.close {
  font-family: "Homemade Apple", cursive;
  color: var(--bg-color);
  background-color: var(--text-color);
  width: 2em;
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.open {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.close {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  /* margin-left: 10em; */
}

span > b {
  font-size: 2em;
}
</style>
