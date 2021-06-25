<template>
  <div class="outer-container">
    <h2>Numbers 1 - 30</h2>
    <div class="numbers-container">
      <div class="inner-container">
        <span><b>1</b> -> un / une</span>
        <span><b>2</b> -> deux</span>
        <span><b>3</b> -> trois</span>
        <span><b>4</b> -> quatre</span>
        <span><b>5</b> -> cinq</span>
        <span><b>6</b> -> six</span>
        <span><b>7</b> -> sept</span>
        <span><b>8</b> -> huit</span>
        <span><b>9</b> -> neuf</span>
        <span class="tens"><b>10</b> -> dix</span>
      </div>
      <div class="inner-container">
        <span><b>11</b> -> onze</span>
        <span><b>12</b> -> douze</span>
        <span><b>13</b> -> treize</span>
        <span><b>14</b> -> quatorze</span>
        <span><b>15</b> -> quinze</span>
        <span><b>16</b> -> seize</span>
        <span><b>17</b> -> dix-sept</span>
        <span><b>18</b> -> dix-huit</span>
        <span><b>19</b> -> dix-neuf</span>
        <span class="tens"><b>20</b> -> vingt</span>
      </div>
      <div class="inner-container">
        <span><b>21</b> -> vingt et un</span>
        <span><b>22</b> -> vingt-deux</span>
        <span><b>23</b> -> vingt-trois</span>
        <span><b>24</b> -> vingt-quatre</span>
        <span><b>25</b> -> vingt-cinq</span>
        <span><b>26</b> -> vingt-six</span>
        <span><b>27</b> -> vingt-sept</span>
        <span><b>28</b> -> vingt-huit</span>
        <span><b>29</b> -> vingt-neuf</span>
        <span class="tens"><b>30</b> -> trente</span>
      </div>
    </div>
  </div>
  <Navigator prev="/alphabets" next="/numbers2" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Numbers1",
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
  line-height: 1.75em;
}

.tens {
  color: rgb(255, 100, 126);
}
</style>