<template>
  <div class="outer-container">
    <h2>Conjugation with être and avoir</h2>
    <div class="groups-container">
      <div class="inner-container">
        <span><b>Pronoun</b></span>
        <span>Je</span>
        <span>Tu</span>
        <span>Il</span>
        <span>Elle</span>
        <span>On</span>
        <span>Nous</span>
        <span>Vous</span>
        <span>Ils</span>
        <span>Elles</span>
      </div>
      <div class="inner-container">
        <span><b>être</b></span>
        <span>suis</span>
        <span>es</span>
        <span>est</span>
        <span>est</span>
        <span>est</span>
        <span>sommes</span>
        <span>êtes</span>
        <span>sont</span>
        <span>sont</span>
      </div>
      <div class="inner-container">
        <span><b>avoir</b></span>
        <span>ai</span>
        <span>as</span>
        <span>a</span>
        <span>a</span>
        <span>a</span>
        <span>avons</span>
        <span>avez</span>
        <span>ont</span>
        <span>ont</span>
      </div>
    </div>
  </div>
  <Navigator prev="/verbGroup3" next="/usefulVerbs1" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "EtreAvoir",
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

.groups-container {
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
  font-size: 1.65em;
  line-height: 2em;
}

input {
  border: 2px solid var(--text-color);
  border-radius: 6px;
  background-color: var(--bg-color);
  font-size: 1.5em;
  padding: 5px;
  outline: none;
  color: var(--text-color);
}
</style>