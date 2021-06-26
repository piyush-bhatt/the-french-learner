<template>
  <div class="outer-container">
    <h2>Subject Pronouns</h2>
    <div class="pronouns-container">
      <div class="inner-container">
        <span><b>Je</b> -> I</span>
        <span><b>Tu</b> -> You (informal)</span>
        <span><b>Il / Elle / On</b> -> He / She / We (one / informal)</span>
      </div>
      <div class="inner-container">
        <span><b>Nous</b> -> We</span>
        <span><b>Vous</b> -> You (formal / plural)</span>
        <span><b>Ils / Elles</b> -> They</span>
      </div>
    </div>
    <h2>Stressed Pronouns</h2>
    <div class="pronouns-container">
      <div class="inner-container">
        <span><b>Moi</b> -> Me</span>
        <span><b>Toi</b> -> You (informal)</span>
        <span><b>Lui / Elle</b> -> Him / Her</span>
      </div>
      <div class="inner-container">
        <span><b>Nous</b> -> We</span>
        <span><b>Vous</b> -> You (formal / plural)</span>
        <span><b>Eux / Elles</b> -> Them</span>
      </div>
    </div>
  </div>
  <Navigator prev="/seasons" next="/greetings" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Pronouns",
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

.pronouns-container {
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
  line-height: 2em;
}
</style>