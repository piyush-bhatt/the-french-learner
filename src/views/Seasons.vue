<template>
  <div class="outer-container">
    <h2>Seasons</h2>
    <div class="seasons-container">
      <div class="inner-container">
        <span><b>Le printemps</b> -> Spring</span>
        <span><b>L'été</b> -> Summer</span>
      </div>
      <div class="inner-container">
        <span><b>L'automne</b> -> Autumn</span>
        <span><b>L'hiver</b> -> Winter</span>
      </div>
    </div>
    <h2>Weather (Quel temp fait-il ?)</h2>
    <div class="seasons-container">
      <div class="inner-container">
        <span><b>Il y a du soleil</b> -> It's sunny</span>
        <span><b>Il fait beau</b> -> It's sunny</span>
        <span><b>Il fait chaud</b> -> It's hot</span>
      </div>
      <div class="inner-container">
        <span><b>Il fait froid</b> -> It's cold</span>
        <span><b>Il pleut</b> -> It's raining</span>
        <span><b>Il y a des nuages</b> -> It's snowy</span>
      </div>
    </div>
  </div>
  <Navigator prev="/months" next="" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Seasons",
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

.seasons-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  /* height: 100%; */
  width: 100%;
}

.inner-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 2em;
  line-height: 2.25em;
}

.weekend {
  color: rgb(255, 100, 126);
}
</style>