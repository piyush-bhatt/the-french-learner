<template>
  <header>
    <Logo />
    <Toggle @toggle-theme="$emit('toggleTheme')" />
  </header>
</template>

<script>
import Toggle from "./Toggle.vue";
import Logo from './Logo.vue'
export default {
  name: "Header",
  components: { Logo, Toggle },
};
</script>

<style scoped>
header {
  height: 5em;
  padding: 0 1.5em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>