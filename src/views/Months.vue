<template>
  <div class="outer-container">
    <h2>Months of the year</h2>
    <div class="months-container">
      <div class="inner-container">
        <span><b>Janvier</b> -> January</span>
        <span><b>Février</b> -> February</span>
        <span><b>Mars</b> -> March</span>
        <span><b>Avril</b> -> April</span>
      </div>
      <div class="inner-container">
        <span><b>Mai</b> -> May</span>
        <span><b>Juin</b> -> June</span>
        <span><b>Julliet</b> -> July</span>
        <span><b>Août</b> -> August</span>
      </div>
      <div class="inner-container">
        <span><b>Septembre</b> -> September</span>
        <span><b>Octobre</b> -> October</span>
        <span><b>Novembre</b> -> November</span>
        <span><b>Décembre</b> -> December</span>
      </div>
    </div>
  </div>
  <Navigator prev="/days" next="/seasons" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Months",
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

.months-container {
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
</style>