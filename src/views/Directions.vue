<template>
  <div class="outer-container">
    <h2>Directions</h2>
    <div class="directions-container">
      <div class="inner-container">
        <span><b>Excuse-moi</b> -> Excuse me (informal)</span>
        <span><b>Excusez-moi</b> -> Excuse me (formal)</span>
        <span><b>Pardon-moi</b> -> Pardon me (informal)</span>
        <span><b>Pardonez-moi</b> -> Pardon me (formal)</span>
        <span><b>Où se trouve ...</b> -> Where is ...</span>
        <span><b>Où est ... ?</b> -> Where is ...</span>
        <span><b>ici</b> -> here</span>
        <span><b>là</b> -> there</span>
      </div>
      <div class="inner-container">
        <span><b>nord</b> -> north</span>
        <span><b>sud</b> -> south</span>
        <span><b>est</b> -> east</span>
        <span><b>ouest</b> -> west</span>
        <span><b>tournez</b> -> turn</span>
        <span><b>à droite / à gauche</b> -> on the right / left</span>
        <span><b>tout droit</b> -> straight</span>
      </div>
    </div>
  </div>
  <Navigator prev="/greetings" next="" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Directions",
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

.directions-container {
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