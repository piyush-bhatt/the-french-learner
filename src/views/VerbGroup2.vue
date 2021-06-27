<template>
  <div class="outer-container">
    <h2>-IR Verbs Conjugation</h2>
    <input v-model="verb" />
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
        <span>{{ stem }}<span class="ending">is</span></span>
        <span>{{ stem }}<span class="ending">is</span></span>
        <span>{{ stem }}<span class="ending">it</span></span>
        <span>{{ stem }}<span class="ending">it</span></span>
        <span>{{ stem }}<span class="ending">it</span></span>
        <span>{{ stem }}iss<span class="ending">ons</span></span>
        <span>{{ stem }}iss<span class="ending">ez</span></span>
        <span>{{ stem }}iss<span class="ending">ent</span></span>
        <span>{{ stem }}iss<span class="ending">ent</span></span>
      </div>
      <div class="inner-container">
        <span><b>Passé</b></span>
        <span>ai {{ stem }}i</span>
        <span>as {{ stem }}i</span>
        <span>a {{ stem }}i</span>
        <span>a {{ stem }}i</span>
        <span>a {{ stem }}i</span>
        <span>avons {{ stem }}i</span>
        <span>avez {{ stem }}i</span>
        <span>ont {{ stem }}i</span>
        <span>ont {{ stem }}i</span>
      </div>
      <div class="inner-container">
        <span><b>Futur</b></span>
        <span>{{ verb }}<span class="ending">ai</span></span>
        <span>{{ verb }}<span class="ending">as</span></span>
        <span>{{ verb }}<span class="ending">a</span></span>
        <span>{{ verb }}<span class="ending">a</span></span>
        <span>{{ verb }}<span class="ending">a</span></span>
        <span>{{ verb }}<span class="ending">ons</span></span>
        <span>{{ verb }}<span class="ending">ez</span></span>
        <span>{{ verb }}<span class="ending">ont</span></span>
        <span>{{ verb }}<span class="ending">ont</span></span>
      </div>
      <div class="inner-container">
        <span><b>Imparfait</b></span>
        <span>{{ stem }}iss<span class="ending">ais</span></span>
        <span>{{ stem }}iss<span class="ending">ais</span></span>
        <span>{{ stem }}iss<span class="ending">ait</span></span>
        <span>{{ stem }}iss<span class="ending">ait</span></span>
        <span>{{ stem }}iss<span class="ending">ait</span></span>
        <span>{{ stem }}iss<span class="ending">ions</span></span>
        <span>{{ stem }}iss<span class="ending">iez</span></span>
        <span>{{ stem }}iss<span class="ending">aient</span></span>
        <span>{{ stem }}iss<span class="ending">aient</span></span>
      </div>
      <div class="inner-container">
        <span><b>Conditionnel</b></span>
        <span>{{ verb }}<span class="ending">ais</span></span>
        <span>{{ verb }}<span class="ending">ais</span></span>
        <span>{{ verb }}<span class="ending">ait</span></span>
        <span>{{ verb }}<span class="ending">ait</span></span>
        <span>{{ verb }}<span class="ending">ait</span></span>
        <span>{{ verb }}<span class="ending">ions</span></span>
        <span>{{ verb }}<span class="ending">iez</span></span>
        <span>{{ verb }}<span class="ending">aient</span></span>
        <span>{{ verb }}<span class="ending">aient</span></span>
      </div>
    </div>
  </div>
  <Navigator prev="/verbGroup1" next="/verbGroup3" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "VerbGroup2",
  components: { Navigator },
  data() {
    return {
      verb: "finir",
    };
  },
  computed: {
    stem() {
      return this.verb.slice(0, this.verb.length - 2);
    },
  },
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

.ending {
  color: rgb(255, 100, 126);
}
</style>