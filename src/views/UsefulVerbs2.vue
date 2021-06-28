<template>
  <div class="outer-container">
    <h2>Useful Verbs - II</h2>
    <div class="numbers-container">
      <div class="inner-container">
        <span><b>manger</b> (to eat)</span>
        <span><b>marcher</b> (to walk)</span>
        <span><b>mettre</b> (to put)</span>
        <span><b>monter</b> (to go up)</span>
        <span><b>montrer</b> (to show)</span>
        <span><b>obtenir</b> (to gain/obtain)</span>
        <span><b>offrir</b> (to offer)</span>
        <span><b>oublier</b> (to forget)</span>
        <span><b>ouvrir</b> (to open)</span>
        <span><b>parler</b> (to speak/talk)</span>
        <span><b>partir</b> (to leave)</span>
        <span><b>passer</b> (to go/pass by)</span>
        <span><b>payer</b> (to pay)</span>
      </div>
      <div class="inner-container">
        <span><b>penser</b> (to think)</span>
        <span><b>perdre</b> (to lose)</span>
        <span><b>permettre</b> (to allow)</span>
        <span><b>porter</b> (to carry)</span>
        <span><b>poser</b> (to put down)</span>
        <span><b>pousser</b> (to push/grow)</span>
        <span><b>pouvoir</b> (to be able to)</span>
        <span><b>prendre</b> (to take)</span>
        <span><b>présenter</b> (to present)</span>
        <span><b>quitter</b> (to leave)</span>
        <span><b>recevoir</b> (to receive)</span>
        <span><b>reconnaître</b> (to recognise)</span>
        <span><b>refuser</b> (to refuse)</span>
      </div>
      <div class="inner-container">
        <span><b>regarder</b> (to watch/look at)</span>
        <span><b>rendre</b> (to give back)</span>
        <span><b>répondre</b> (to answer)</span>
        <span><b>rester</b> (to stay)</span>
        <span><b>réussir</b> (to succeed)</span>
        <span><b>retourner</b> (to return)</span>
        <span><b>revenir</b> (to come back)</span>
        <span><b>sauter</b> (to jump)</span>
        <span><b>savoir</b> (to know how to do something)</span>
        <span><b>sembler</b> (to seem)</span>
        <span><b>sortir</b> (to go out)</span>
        <span><b>suivre</b> (to follow)</span>
        <span><b>tenir</b> (to hold)</span>
      </div>
      <div class="inner-container">
        <span><b>tirer</b> (to pull)</span>
        <span><b>toucher</b> (to touch)</span>
        <span><b>travailler</b> (to work)</span>
        <span><b>trouver</b> (to find)</span>
        <span><b>vendre</b> (to sell)</span>
        <span><b>venir</b> (to come)</span>
        <span><b>vivre</b> (to live)</span>
        <span><b>voir</b> (to see)</span>
        <span><b>vouloir</b> (to want)</span>
      </div>
    </div>
  </div>
  <Navigator prev="/usefulVerbs1" next="/prepositions" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "UsefulVerbs2",
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

.numbers-container {
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