<template>
  <div class="home">
    <HelloWorld
      msg="Ich bin ein Text, der als Prop an die HelloWorld-Komponente übergeben wurde"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
