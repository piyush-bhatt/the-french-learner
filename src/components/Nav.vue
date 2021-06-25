<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.nav {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
