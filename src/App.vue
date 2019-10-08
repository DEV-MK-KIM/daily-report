<template>
  <div id="app">
    <router-view/>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './components/Nav'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  Nav
},
// methods: {
//   init(){
//     this.getSettings()
//   },
//   getSettings(){

//   }
// },
// created(){
//   this.init()
// }
}
</script>

<style lang="scss" src="./assets/css/style.scss">

</style>
