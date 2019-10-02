<template>
  <nav class="nav">
      <ul class="nav-list">
          <li>
                <router-link :to="todayUrl">
                  <i class="xi-home"></i>
                  <span>Today</span>
                </router-link>
          </li>
          <li>
              <router-link to="/calendar">
                  <i class="xi-calendar"></i>
                  <span>Calendar</span>
                </router-link>
          </li>
          <li>
              <router-link to="/setting">
                  <i class="xi-cog"></i>
                  <span>Setting</span>
                </router-link>
          </li>
          <li>
              <router-link to="/about">
                  <i class="xi-emoticon-smiley"></i>
                  <span>About</span>
                </router-link>
          </li>
          
      </ul>
  </nav>
</template>

<script>
import moment from 'moment'
export default {
name: 'Nav',
computed: {
  todayUrl(){
    let todayUrl = `/day/${moment(new Date()).format('YYYY-MM-DD')}`
    return todayUrl
  }
}
}
</script>

<style>

</style>