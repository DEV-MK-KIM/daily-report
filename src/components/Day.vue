<template>
 <div class="day">
   <h1 class="day-title">{{ $route.params.date }}</h1>
   <ul class="day-list">
     <li class="day-list-item" v-for="item in items" :key="item.id" :class="{'open': item.open}">
       <div class="time">
         <h2>{{ item.id }}</h2>
       </div>
       <div class="action">
         <p v-if="!item.open"
         @click="toggleOpen(item)"> 
           {{ item.action }}
           <span v-if="item.action.length === 0">input your task</span>
         </p>
         <input v-if="item.open" type="text" placeholder="type your to-do list" v-model="item.action" @keyup.enter="updateItem(item)"/>
       </div>
       <DayScore @onUpdateScore = 'updateScore' :item = 'item' v-if="item.open"></DayScore>
        <div class="note" v-if="item.toggleOpen">
         <textarea @keyup.enter="updateItem(item)" type="text" placeholder="leave your feedback" v-model="item.note"></textarea >
       </div>

        <div class="buttons" v-if="item.open">
          <button class="save" @click="updateItem(item)">Save</button>
                    <button class="cancel" @click="toggleOpen(item)">Cancel</button>

        </div>

     </li>
   </ul>
 </div>
</template>

<script>
import DayScore from './DayScore'
import axios from 'axios'
import moment from 'moment'

export default {
  name:'Day',
  components: {
    DayScore
  },
  mounted(){
    this.getItems();
  },
  methods: {
    updateScore(item, score){
      item.score = score;
      this.updateItem(item);
    },
    getItems(){
      let url = `https://daily-report-92feb.firebaseio.com/items.json?orderBy="$key"&startAt="${this.$route.params.date}"&endAt="${this.$route.params.date}-22-24"`;
      axios.get(url)
      .then(res=>{
        this.items = this.displayItems(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    displayItems(result){

      let items = [];
      let startTime = '08:00'
      for(let i = 0; i< 12; i++){
        let datetime = moment(this.$route.params.date+' '+startTime)

        let itemKey = `${this.$route.params.date}-${datetime.add(i*2, 'hours').format('HH')}-${datetime.add(2, 'hours').format('HH')}`

        let item = {
          id:itemKey,
          action:'',
          note:'',
          open: false,
          score: undefined,
        }

      Object.keys(result).map(key=>{
        if(key === itemKey){
          item = result[key]
        }
      })

       items.push(item);
      }

      return items;

    },
    updateItem(item){
      let url = `https://daily-report-92feb.firebaseio.com/items/${item.id}.json`
      axios.put(url, item)
      .then(res=>{  
      this.getItems() 
      })
    },
    toggleOpen(item){
      item.open = !item.open    }
  },
  data(){
    return {
      items : []
    }
  }

}
</script>

<style>

</style>