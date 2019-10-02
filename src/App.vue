<template>
  <div id="app">
    <router-view/>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components: {
  Nav
}
}
</script>

<style lang="scss" src="./assets/css/style.scss">

</style>
