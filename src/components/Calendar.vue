<template>
  <div>
      <div class="calendar">
        <FullCalendar :config = "config" @day-click="dayClick"></FullCalendar>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'

export default {
  data(){
    return {
      config: {
        defaultView: 'month',
        header: {
          left: "prev",
          center: "title",
          right: "next"
        },
        height: 500
      }
    }
  },
  components: {
    FullCalendar
  },
  methods: {
    dayClick(date){    
      let url = `/day/${moment(date).format('YYYY-MM-DD')}`
      this.$router.push(url)
    }
  }

}
</script>

<style>

</style>