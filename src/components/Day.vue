<template>
 <div class="day">
   <h1 class="day-title">{{ $route.params.date }}</h1>
   <ul class="day-list">
     <li class="day-list-item" v-for="item in items" :key="item.id">
       <div class="time">
         <h2>{{ item.id }}</h2>
       </div>
       <div class="action">
         <input type="text" placeholder="type your to-do list" v-model="item.action"/>
       </div>
       <DayScore @onUpdateScore = 'updateScore' :item = 'item'></DayScore>
        <div class="note">
         <textarea type="text" placeholder="leave your feedback" v-model="item.note"></textarea>
       </div>
     </li>
   </ul>
 </div>
</template>

<script>
import DayScore from './DayScore'
export default {
  name:'Day',
  components: {
    DayScore
  },
  methods: {
    updateScore(item, score){
      item.score = score;
    }
  },
  data(){
    return {
      items : [
    {
        action: "",
        id: "2018-04-21-08-10",
        note: "",
        open: false,
        score: undefined,
    },
     {
        action: "",
        id: "2018-04-21-10-12",
        note: "",
        open: false,
        score: undefined,
    },
    {
        action: "",
        id: "2018-04-21-12-14",
        note: "",
        open: false,
        score: undefined,
    },
]

    }
  }

}
</script>

<style>

</style>