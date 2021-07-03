<template>
  <div class="outer-container">
    <h2>Prepositions</h2>
    <div class="prepositions-container">
      <div class="inner-container">
        <span><b>à</b> (at/to)</span>
        <span><b>à côté de</b> (next to)</span>
        <span><b>après</b> (after)</span>
        <span><b>avant</b> (before)</span>
        <span><b>avec</b> (with)</span>
        <span><b>chez</b> (at someone's place)</span>
        <span><b>contre</b> (against)</span>
        <span><b>dans</b> (in)</span>
        <span><b>de</b> (of/from)</span>
        <span><b>devant</b> (in front of)</span>
        <span><b>derrière</b> (behind)</span>
        <span><b>en</b> (in/by)</span>
        <span><b>en face de</b> (opposite)</span>
        <span><b>entre</b> (between)</span>
      </div>
      <div class="inner-container">
        <span><b>plus</b> (more/add)</span>
        <span><b>pendant</b> (during/for)</span>
        <span><b>pour</b> (for / in order to / to)</span>
        <span><b>sans</b> (without)</span>
        <span><b>sauf</b> (except)</span>
        <span><b>sous</b> (under)</span>
        <span><b>sur</b> (on / on top of)</span>
        <span><b>à cause de</b> (because of)</span>
        <span><b>au lieu de</b> (instead of)</span>
        <span><b>d'après</b> (according to)</span>
        <span><b>depuis</b> (since/for)</span>
        <span><b>dès</b> (from / as soon as)</span>
        <span><b>durant</b> (during)</span>
        <span><b>moins</b> (less/minus)</span>
      </div>
      <div class="inner-container">
        <span><b>environ</b> (around/roughly)</span>
        <span><b>excepté</b> (except)</span>
        <span><b>grâce à</b> (owing to)</span>
        <span><b>hors</b> (outside/excluding/without)</span>
        <span><b>jusqu'à</b> (until)</span>
        <span><b>loin de</b> (far from)</span>
        <span><b>lors de</b> (during/while)</span>
        <span><b>malgré</b> (despite)</span>
        <span><b>par</b> (per/by/through/via)</span>
        <span><b>parmi</b> (among/by)</span>
        <span><b>près de</b> (near)</span>
        <span><b>selon</b> (according to)</span>
        <span><b>vers</b> (towards)</span>
      </div>
    </div>
  </div>
  <Navigator prev="/usefulVerbs2" next="/possesiveAdjectives" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Prepositions",
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

.prepositions-container {
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
  line-height: 1.55em;
}
</style>