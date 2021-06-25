<template>
  <div class="outer-container">
    <h2>Numbers (Periods)</h2>
    <div class="numbers-container">
      <div class="inner-container">
        <span class="tens"><b>0</b> -> zéro</span>
        <span class="tens"><b>10</b> -> dix</span>
      </div>
      <div class="inner-container">
        <span class="tens"><b>100</b> -> cent</span>
        <span class="tens"><b>1 000</b> -> mille</span>
      </div>
      <div class="inner-container">
        <span class="tens"><b>1 000 000</b> -> un million</span>
      </div>
    </div>
  </div>
  <Navigator prev="/numbers3" next="" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Numbers4",
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
  font-size: 2em;
  line-height: 2.25em;
}

.tens {
  color: rgb(255, 100, 126);
}
</style>