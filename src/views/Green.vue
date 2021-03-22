<template>
  <div>
    <light color='green' active/>
    <light color='yellow'/>
    <light color='red'/>
  </div>
</template>

<script>
import Light from '../components/light.vue'

export default {
  name: 'Green',
  components: {
    Light
  }
}
</script>

