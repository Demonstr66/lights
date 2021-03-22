<template>
  <div class="lights">
    <router-view/>
  </div>
</template>

<style scoped>
.lights {
  display: block;
  margin: auto;
  border: 3px solid black;
  border-radius: 2rem;
  background-color: grey;
  max-width: 30vh;
  min-width: 30vh;
  padding: 10px;
}
</style>
