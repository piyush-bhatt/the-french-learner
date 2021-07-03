<template>
  <div class="outer-container">
    <h2>Possesive Adjectives</h2>
    <div class="adjectives-container">
      <div class="inner-container">
        <span><b>Masculin</b></span>
        <span>mon</span>
        <span>ton</span>
        <span>son</span>
        <span>notre</span>
        <span>votre</span>
        <span>leur</span>
      </div>
      <div class="inner-container">
        <span><b>Féminin</b></span>
        <span>ma</span>
        <span>ta</span>
        <span>sa</span>
        <span>notre</span>
        <span>votre</span>
        <span>leur</span>
      </div>
      <div class="inner-container">
        <span><b>Pluriel</b></span>
        <span>mes</span>
        <span>tes</span>
        <span>ses</span>
        <span>nos</span>
        <span>vos</span>
        <span>leurs</span>
      </div>
    </div>
  </div>
  <Navigator prev="/prepositions" next="/demonstrativeAdjectives" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "PossesiveAdjectives",
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
</style>