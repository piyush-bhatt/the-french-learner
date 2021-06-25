<template>
  <div class="intro-container">
    <h3>What is this website about?</h3>
    <p>
      <span class="first-letter">I</span> am an English speaker, trying to learn
      my way through the French language. I thought it would be good to have all
      the basic concepts accumulated in a website so anyone who is starting to
      learn French or wants to just go through these concepts quickly, can
      benefit from the same.
    </p>
    <Navigator prev="/" next="/alphabets" />
  </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Introduction",
  components: { Navigator },
};
</script>

<style scoped>
.intro-container {
  margin: 2em;
  padding: 2em;
}

.first-letter {
  font-family: "Homemade Apple", cursive;
  font-size: 2em;
  font-weight: bold;
}

h3 {
  font-family: "Homemade Apple", cursive;
}
</style>
