<template>
  <div class="outer-container">
    <h2>Days of the week</h2>
    <div class="days-container">
      <div class="inner-container">
        <span><b>Lundi</b> -> Monday</span>
        <span><b>Mardi</b> -> Tuesday</span>
      </div>
      <div class="inner-container">
        <span><b>Mercredi</b> -> Wednesday</span>
        <span><b>Jeudi</b> -> Thursday</span>
        <span><b>Vendredi</b> -> Friday</span>
      </div>
      <div class="inner-container">
        <span class="weekend"><b>Samedi</b> -> Saturday</span>
        <span class="weekend"><b>Dimanche</b> -> Sunday</span>
      </div>
    </div>
  </div>
  <Navigator prev="/numbers4" next="/months" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Days",
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

.days-container {
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
  line-height: 2.25em;
}

.weekend {
  color: rgb(255, 100, 126);
}
</style>