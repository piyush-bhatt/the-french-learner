<template>
  <div class="outer-container">
    <h2>Indefinite Articles</h2>
    <div class="articles-container">
      <div class="inner-container">
        <span><b>un</b> -> singular masculine</span>
        <span><b>une</b> -> singular feminine</span>
        <span><b>des</b> -> plural</span>
      </div>
      <div class="inner-container">
        <span
          >e.g.: <b><span class="article">un</span></b> vélo (a bike)</span
        >
        <span
          >e.g.: <b><span class="article">une</span></b> pomme (an apple)</span
        >
        <span
          >e.g.: <b><span class="article">des</span></b> chaises (some
          chairs)</span
        >
      </div>
    </div>
  </div>
  <Navigator prev="/directions" next="/definiteArticles" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "IndefiniteArticles",
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