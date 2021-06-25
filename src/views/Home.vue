<template>
  <div>
    <Main />
    <Navigator next="/introduction" />
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import Navigator from '@/components/Navigator.vue'
export default {
  name: 'Home',
  components: {
    Main,
    Navigator
  }
}
</script>
