<template>
  <div class="container">
    <div
      class="light"
      :class="{ green: isGreen, yellow: isYellow, red: isRed, active: active}"
    ></div>
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
    }
  },
  data: function () {
    return {
      isGreen: false,
      isYellow: false,
      isRed: false,
    };
  },
  mounted() {
    this.isGreen = this.color == "green";
    this.isYellow = this.color == "yellow";
    this.isRed = this.color == "red";
  },
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

</style>