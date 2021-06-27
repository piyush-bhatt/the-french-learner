<template>
  <div class="outer-container">
    <h2>Useful Verbs - I</h2>
    <div class="numbers-container">
      <div class="inner-container">
        <span><b>accepter</b> (to accept)</span>
        <span><b>acheter</b> (to buy)</span>
        <span><b>aider</b> (to help)</span>
        <span><b>aimer</b> (to like/love)</span>
        <span><b>ajouter</b> (to add)</span>
        <span><b>aller</b> (to go)</span>
        <span><b>appartenir</b> (to belong)</span>
        <span><b>appeler</b> (to call)</span>
        <span><b>apporter</b> (to bring)</span>
        <span><b>apprendre</b> (to learn)</span>
        <span><b>arrêter</b> (to stop)</span>
        <span><b>arriver</b> (to arrive)</span>
        <span><b>attendre</b> (to wait)</span>
      </div>
      <div class="inner-container">
        <span><b>avancer</b> (to go forward)</span>
        <span><b>avoir</b> (to have)</span>
        <span><b>chanter</b> (to sing)</span>
        <span><b>changer</b> (to change)</span>
        <span><b>chercher</b> (to search/look for)</span>
        <span><b>choisir</b> (to choose)</span>
        <span><b>commencer</b> (to start)</span>
        <span><b>comprendre</b> (to understand)</span>
        <span><b>connaître</b> (to know somebody/something)</span>
        <span><b>continuer</b> (to continue)</span>
        <span><b>croire</b> (to believe)</span>
        <span><b>demander</b> (to ask)</span>
        <span><b>descendre</b> (to go down)</span>
      </div>
      <div class="inner-container">
        <span><b>devenir</b> (to become)</span>
        <span><b>devoir</b> (to have to)</span>
        <span><b>dire</b> (to say/tell)</span>
        <span><b>donner</b> (to give)</span>
        <span><b>dormir</b> (to sleep)</span>
        <span><b>écouter</b> (to listen)</span>
        <span><b>écrire</b> (to write)</span>
        <span><b>empêcher</b> (to prevent)</span>
        <span><b>entendre</b> (to hear)</span>
        <span><b>entrer</b> (to enter)</span>
        <span><b>envoyer</b> (to send)</span>
        <span><b>espérer</b> (to hope)</span>
        <span><b>essayer</b> (to try)</span>
      </div>
      <div class="inner-container">
        <span><b>être</b> (to be)</span>
        <span><b>éviter</b> (to avoid)</span>
        <span><b>exister</b> (to exist)</span>
        <span><b>expliquer</b> (to explain)</span>
        <span><b>faire</b> (to do/make)</span>
        <span><b>fermer</b> (to close)</span>
        <span><b>finir</b> (to finish)</span>
        <span><b>garder</b> (to keep)</span>
        <span><b>habiter</b> (to live)</span>
        <span><b>jeter</b> (to throw)</span>
        <span><b>jouer</b> (to play)</span>
        <span><b>laisser</b> (to leave, let go, allow)</span>
        <span><b>lire</b> (to read)</span>
      </div>
    </div>
  </div>
  <Navigator prev="/verbGroup3" next="/usefulVerbs2" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "UsefulVerbs1",
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