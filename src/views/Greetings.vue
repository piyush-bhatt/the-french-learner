<template>
  <div class="outer-container">
    <h2>Greetings</h2>
    <div class="greetings-container">
      <div class="inner-container">
        <span><b>Salut</b> -> Hi</span>
        <span><b>Bonjour</b> -> Good Morning / Hello</span>
        <span><b>Bon aprés-midi</b> -> Good Afternoon</span>
        <span><b>Bonsoir</b> -> Good Evening</span>
        <span><b>Bonne nuit</b> -> Good Night</span>
        <span><b>Bonne journée</b> -> Have a nice day</span>
        <span><b>Bonne soirée</b> -> Have a nice evening!</span>
      </div>
      <div class="inner-container">
        <span><b>Ça va ?</b> -> How are you? (informal)</span>
        <span><b>Comment ça va ?</b> -> How are you? (informal)</span>
        <span><b>Comment vas-tu ?</b> -> How are you? (informal)</span>
        <span
          ><b>Comment allez-vous ?</b> -> How are you? (formal / plural)</span
        >
        <span><b>Ça va / Je vais bien</b> -> I'm fine</span>
        <span><b>Tout va bien</b> -> Everything is fine</span>
        <span><b>Je ne vais pas bien</b> -> I'm not fine</span>
      </div>
      <div class="inner-container">
        <span><b>Au revoir</b> -> Goodbye</span>
        <span><b>À bientôt</b> -> See you soon</span>
        <span><b>À plus tard</b> -> See you later</span>
        <span><b>À demain</b> -> See you tomorrow</span>
        <span><b>À la prochaine</b> -> See you next time</span>
        <span><b>À lundi</b> -> See you Monday</span>
        <span><b>À la semaine prochaine</b> -> See you next week</span>
      </div>
    </div>
  </div>
  <Navigator prev="/pronouns" next="/directions" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Greetings",
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

.greetings-container {
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
</style>