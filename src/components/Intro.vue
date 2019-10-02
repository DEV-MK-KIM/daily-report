<template>
  <div class="intro">
    <div class="intro-inner">
      <h1>Daily Report</h1>
      <router-link class="button" :to='todayUrl'>
      Start
      </router-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
computed: {
  todayUrl(){
    let today = moment(new Date()).format('YYYY-MM-DD')
    return `/day/${today}`
  }
}
}
</script>

<style>

</style>