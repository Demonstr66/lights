<template>
  <div>
    <light color='green' :active='isGreen' :time="isGreen ? limit : undefined" />
    <light color='yellow' :active='isYellow' :time="isYellow ? limit : undefined"/>
    <light color='red' :active='isRed' :time="isRed ? limit : undefined"/>
  </div>
</template>

<script>
import Light from '../components/light.vue'

export default {
  props: {
    color: {
      validator: function (value) {
        return ["green", "yellow", "red"].indexOf(value) !== -1;
      },
    }
  },
  components: {
    Light
  },
  data: function () {
    return {
      limit: -1,
      isGreen: false,
      isYellow: false,
      isRed: false
    };
  },
  mounted() {

    this.isGreen = this.color == "green";
    this.isYellow = this.color == "yellow";
    this.isRed = this.color == "red";
    
    this.startTimer()
    this.$store.commit('setCurrentColor', this.color)

    this.limit = this.$store.state.restTime
  },
  methods: {
    async next() {
      const path = await this.$store.dispatch('nextLight')
      this.$router.push({ path })
    },
    tick() {
      this.limit -=1
      if (this.limit > 0) {
        setTimeout(this.tick, 1000)
        localStorage.setItem('state', JSON.stringify( {
            color: this.color,
            prevColor: this.$store.state.prevColor,
            restTime: this.limit
          })
        )
      }else {
        this.next()
      }
    },
    startTimer() {
      setTimeout(this.tick, 1000)
    }
  }
}
</script>

