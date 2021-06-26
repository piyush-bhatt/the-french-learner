<template>
  <div class="outer-container">
    <h2>Definite Articles</h2>
    <div class="articles-container">
      <div class="inner-container">
        <span><b>le</b> -> singular masculine</span>
        <span><b>la</b> -> singular feminine</span>
        <span><b>l'</b> -> singular (vowel or h)</span>
        <span><b>les</b> -> plural</span>
      </div>
      <div class="inner-container">
        <span
          >e.g.: <b><span class="article">le</span></b> livre (the book)</span
        >
        <span
          >e.g.: <b><span class="article">la</span></b> voiture (the car)</span
        >
        <span
          >e.g.: <b><span class="article">l'</span></b
          >ordinateur (the computer)</span
        >
        <span
          >e.g.: <b><span class="article">les</span></b> arbres (the
          trees)</span
        >
      </div>
    </div>
  </div>
  <Navigator prev="/indefiniteArticles" next="/verbGroups" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "DefiniteArticles",
  components: { Navigator },
};
</script>

<style scoped>
.outer-container {
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
}

h2 {
  font-size: 2.25em;
  font-family: "Homemade Apple", cursive;
}

.articles-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  /* height: 100%; */
  width: 100%;
  margin-bottom: 10em;
}

.inner-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 1.75em;
  line-height: 2em;
}

.article {
  color: rgb(255, 100, 126);
}
</style>