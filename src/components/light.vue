<template>
  <div class="container">
    <div
      class="light"
      :class="{ green: isGreen, yellow: isYellow, red: isRed, active: active, blink: isBlink()}"
      :data-time="time"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      validator: function (value) {
        return ["green", "yellow", "red"].indexOf(value) !== -1;
      },
    },
    active: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      require: false
    }
  },
  data: function () {
    return {
      isGreen: false,
      isYellow: false,
      isRed: false
    };
  },
  mounted() {
    this.isGreen = this.color == "green";
    this.isYellow = this.color == "yellow";
    this.isRed = this.color == "red";
  },
  methods: {
    isBlink() {
      return this.time <= this.$store.state.blink
    }
  }
};
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  margin: auto;
  height: 30vh;
  width: 30vh;
}
.light {
  display: block;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid black;
  text-align: center;
  color: black
}
.light::after{
  display: block;
  font-family: monospace;
  font-size: 10vh;
  font-weight: bold;
  content: attr(data-time);
  margin-top: 50%;
  transform: translateY(-50%)
}
.green {
  background-color: rgba(0, 255, 0, .2);
}
.yellow {
  background-color: rgba(255, 255, 0, .2);
}
.red {
  background-color: rgba(255, 0, 0, .2);
}
.green.active {
  background-color: rgb(0, 255, 0);
  box-shadow: 0 0 30px rgb(0, 255, 0);
}
.yellow.active {
  background-color: yellow;
  box-shadow: 0 0 30px yellow;
}
.red.active {
  background-color: red;
  box-shadow: 0 0 30px red;
}
.blink {
  animation-name: blink;
  animation-timing-function: linear;
  animation-duration: .7s;
  animation-iteration-count: infinite; 
}
@keyframes blink {
  50% {
    background-color: rgba(0, 0, 0, .3);
    box-shadow: 0 0 0px rgb(0, 0, 0);
  }
}
</style>