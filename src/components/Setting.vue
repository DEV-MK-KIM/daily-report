<template>
  <div class="setting">
    <div class="setting-inner">
      <h1>Setting</h1>
      <form @submit.prevent = "saveSettings">
        <fieldset>
          <label for="starttime">Starting Time</label>
          <select id="starttime" v-model = "settings.starttime">
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>

          </select>
        </fieldset>
        <fieldset class="submit">
          <button type="submit" class="save">save</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      settings: {
        starttime: "08:00"
      }
    }
  },
  created(){
    this.getSettings();
  },
  methods: {
    saveSettings(){
      let url = `https://daily-report-92feb.firebaseio.com/settings.json`
      axios.put(url, this.settings)
      .then(res=>{  
        console.log("저장완료")
      })
    },
    getSettings(){
      let url = `https://daily-report-92feb.firebaseio.com/settings.json`
      axios.get(url)
      .then(res=>{  
        this.settings = res.data
      })
    }
  }
}
</script>

<style>

</style>