<template>
  <div class="outer-container">
    <h2>Demonstrative Adjectives</h2>
    <div class="adjectives-container">
      <div class="inner-container">
        <span><b>Masculin</b></span>
        <span><b>Féminin</b></span>
        <span><b>Pluriel</b></span>
      </div>
      <div class="inner-container">
        <span>ce, cet</span>
        <span>cette</span>
        <span>ces</span>
      </div>
      <div class="inner-container">
        <span><span class="highlight">ce</span> train, <span class="highlight">cet</span> homme</span>
        <span><span class="highlight">cette</span> femme</span>
        <span><span class="highlight">ces</span> arbres</span>
      </div>
    </div>
  </div>
  <Navigator prev="/possesiveAdjectives" next="" />
</template>
  
<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "DemonstrativeAdjectives",
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

.adjectives-container {
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
  font-size: 2em;
  line-height: 1.75em;
}

.highlight {
  color: rgb(255, 100, 126);
}
</style>