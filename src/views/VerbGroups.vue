<template>
  <div class="outer-container">
    <h2>Verb Groups</h2>
    <div class="groups-container">
      <div class="inner-container">
        <span><b>-ER (Regular)</b></span>
        <span>march<span class="ending">er</span> (to walk)</span>
        <span>chant<span class="ending">er</span> (to sing)</span>
        <span>tomb<span class="ending">er</span> (to fall)</span>
        <span>regard<span class="ending">er</span> (to watch)</span>
        <span>écout<span class="ending">er</span> (to listen)</span>
        <span>aim<span class="ending">er</span> (to like/love)</span>
        <span>demand<span class="ending">er</span> (to ask)</span>
        <span>habit<span class="ending">er</span> (to live)</span>
        <span>mang<span class="ending">er</span> (to eat)</span>
        <span>jou<span class="ending">er</span> (to play)</span>
      </div>
      <div class="inner-container">
        <span><b>-IR (Regular)</b></span>
        <span>fin<span class="ending">ir</span> (to finish)</span>
        <span>chois<span class="ending">ir</span> (to choose)</span>
        <span>obé<span class="ending">ir</span> (to obey)</span>
        <span>pun<span class="ending">ir</span> (to punish)</span>
        <span>réfléch<span class="ending">ir</span> (to reflect/think)</span>
        <span>bât<span class="ending">ir</span> (to build)</span>
        <span>convert<span class="ending">ir</span> (to convert)</span>
        <span>réuss<span class="ending">ir</span> (to succeed)</span>
        <span>agrand<span class="ending">ir</span> (to enlarge/increase)</span>
        <span>vieill<span class="ending">ir</span> (to age/grow old)</span>
      </div>
      <div class="inner-container">
        <span><b>Irregular</b></span>
        <span>sort<span class="ending">ir</span> (to leave)</span>
        <span>dorm<span class="ending">ir</span> (to sleep)</span>
        <span>sav<span class="ending">oir</span> (to know)</span>
        <span>attend<span class="ending">re</span> (to wait)</span>
        <span>croi<span class="ending">re</span> (to believe)</span>
        <span>di<span class="ending">re</span> (to say/tell)</span>
        <span>fai<span class="ending">re</span> (to make/do)</span>
        <span>vo<span class="ending">ir</span> (to see)</span>
        <span>all<span class="ending">er</span> (to go)</span>
        <span>av<span class="ending">oir</span> (to have)</span>
      </div>
    </div>
  </div>
  <Navigator prev="/definiteArticles" next="/verbGroup1" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "VerbGroups",
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

.groups-container {
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

.ending {
  color: rgb(255, 100, 126);
}
</style>