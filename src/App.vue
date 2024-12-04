<script>
import Header from './components/Header.vue';
import Registrar from './components/Registrar.vue'
import Listar from './components/Listar.vue'

export default {
  components: {
    Registrar,
    Listar,
    Header
  }
}
</script>

<template>
  <Header />
  <Registrar />
  <Listar />
</template>

<style scoped>

</style>
