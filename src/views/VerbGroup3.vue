<template>
  <div class="outer-container">
    <h2>Irregular Verbs Conjugation</h2>
    <span class="info"
      >Irregular verbs follow no specific pattern for conjugation. Here is an
      example of one of them.</span
    >
    <span class="info">Verb: <b>connaître</b> (to know)</span>
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
        <span><b>Présent</b></span>
        <span>connais</span>
        <span>connais</span>
        <span>connaît</span>
        <span>connaît</span>
        <span>connaît</span>
        <span>connaiss<span class="ending">ons</span></span>
        <span>connaiss<span class="ending">ez</span></span>
        <span>connaiss<span class="ending">ent</span></span>
        <span>connaiss<span class="ending">ent</span></span>
      </div>
      <div class="inner-container">
        <span><b>Passé</b></span>
        <span>ai connu</span>
        <span>as connu</span>
        <span>a connu</span>
        <span>a connu</span>
        <span>a connu</span>
        <span>avons connu</span>
        <span>avez connu</span>
        <span>ont connu</span>
        <span>ont connu</span>
      </div>
      <div class="inner-container">
        <span><b>Futur</b></span>
        <span>connaîtr<span class="ending">ai</span></span>
        <span>connaîtr<span class="ending">as</span></span>
        <span>connaîtr<span class="ending">a</span></span>
        <span>connaîtr<span class="ending">a</span></span>
        <span>connaîtr<span class="ending">a</span></span>
        <span>connaîtr<span class="ending">ons</span></span>
        <span>connaîtr<span class="ending">ez</span></span>
        <span>connaîtr<span class="ending">ont</span></span>
        <span>connaîtr<span class="ending">ont</span></span>
      </div>
      <div class="inner-container">
        <span><b>Imparfait</b></span>
        <span>connaiss<span class="ending">ais</span></span>
        <span>connaiss<span class="ending">ais</span></span>
        <span>connaiss<span class="ending">ait</span></span>
        <span>connaiss<span class="ending">ait</span></span>
        <span>connaiss<span class="ending">ait</span></span>
        <span>connaiss<span class="ending">ions</span></span>
        <span>connaiss<span class="ending">iez</span></span>
        <span>connaiss<span class="ending">aient</span></span>
        <span>connaiss<span class="ending">aient</span></span>
      </div>
      <div class="inner-container">
        <span><b>Conditionnel</b></span>
        <span>connaîtr<span class="ending">ais</span></span>
        <span>connaîtr<span class="ending">ais</span></span>
        <span>connaîtr<span class="ending">ait</span></span>
        <span>connaîtr<span class="ending">ait</span></span>
        <span>connaîtr<span class="ending">ait</span></span>
        <span>connaîtr<span class="ending">ions</span></span>
        <span>connaîtr<span class="ending">iez</span></span>
        <span>connaîtr<span class="ending">aient</span></span>
        <span>connaîtr<span class="ending">aient</span></span>
      </div>
    </div>
  </div>
  <Navigator prev="/verbGroup2" next="" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "VerbGroup3",
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

.info {
  font-size: 1.5em;
}

.ending {
  color: rgb(255, 100, 126);
}
</style>