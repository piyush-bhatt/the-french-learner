<template>
  <div class="navigator-container">
          <router-link :class="!(prev && prev !== '') ? 'disabled' : ''" :disabled="!(prev && prev !== '')"  :to="prev ? prev : ''"><span>&lt;-</span></router-link>
          <router-link :class="!(next && next !== '') ? 'disabled' : ''" :disabled="!(next && next !== '')" :to="next ? next : ''"><span>-&gt;</span></router-link>
  </div>
</template>

<script>
export default {
    name: 'Navigator',
    props: {
        prev: String,
        next: String
    }
}
</script>

<style scoped>
.navigator-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 2em;
    left: 0;
}

span {
  font-size: 5em;
  font-weight: bold;
  font-family: 'Homemade Apple', cursive;
  margin: 0 3em;
}

.disabled {
    opacity: 0.4;
    cursor: not-allowed;
}
</style>