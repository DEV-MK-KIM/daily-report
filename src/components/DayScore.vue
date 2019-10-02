<template>
  <div class="score">
    <button v-for ="button in buttons" :key="button.label"
    @click="updateScore(button.score)"
    :class="{'active': button.score === item.score}"
    >{{ button.label }}</button>
  </div>
</template>

<script>
export default {
    name: 'DayScore',
    data(){
        return{
            buttons: [
                {label: 'Good', score:3},
                {label: 'Okay', score:2},
                {label: 'Bad', score:1},

            ]

        }
    },
    methods: {
        updateScore(score){
            this.$emit('onUpdateScore',this.item, score)
        }
    },
    props: ['item']
};
</script>

<style>
</style>