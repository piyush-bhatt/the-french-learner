<template>
  <div class="outer-container">
    <h2>Alphabets</h2>
  
  <div class="alphabets-container">
    <div class="inner-container">
      <span class="vowel"><b>A</b> -> ahh</span>
      <span><b>B</b> -> bay</span>
      <span><b>C</b> -> cay</span>
      <span><b>D</b> -> day</span>
      <span class="vowel"><b>E</b> -> euh</span>
      <span><b>F</b> -> eff</span>
      <span><b>G</b> -> jay</span>
      <span><b>H</b> -> ash</span>
      <span class="vowel"><b>I</b> -> ee</span>
    </div>
    <div class="inner-container">
      <span><b>G</b> -> jee</span>
      <span><b>K</b> -> kaa</span>
      <span><b>L</b> -> el</span>
      <span><b>M</b> -> am</span>
      <span><b>N</b> -> an</span>
      <span class="vowel"><b>O</b> -> o</span>
      <span><b>P</b> -> pay</span>
      <span><b>Q</b> -> kuuh</span>
      <span><b>R</b> -> airr</span>
    </div>
    <div class="inner-container">
      <span><b>S</b> -> es</span>
      <span><b>T</b> -> tay</span>
      <span class="vowel"><b>U</b> -> uuh</span>
      <span><b>V</b> -> vay</span>
      <span><b>W</b> -> doobl-vay</span>
      <span><b>X</b> -> eeks</span>
      <span class="vowel"><b>Y</b> -> ee-grek</span>
      <span><b>Z</b> -> zed</span>
    </div>
  </div>
  </div>
  <Navigator prev="/introduction" next="numbers1" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Alphabets",
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

.alphabets-container {
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
  line-height: 2em;
}

.vowel {
  color: rgb(255, 100, 126);
}
</style>