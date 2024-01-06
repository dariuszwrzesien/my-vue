<template>
  <div class="home">
    <div>
      <img alt="robot" class="robot" src="../assets/robot-home.png" aria-hidden="true" />
    </div>
    <div class="get-started">
      <a href="">Get started</a> building your first robot!
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px
}
</style>
