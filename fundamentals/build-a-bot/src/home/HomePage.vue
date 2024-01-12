<script lang="ts" setup>
import { defineProps } from 'vue';

export type HomePageProps = {
  msg: string
}

const props = defineProps<HomePageProps>();

</script>

<template>
  <div class="home">
    <div>
      <img alt="robot" class="robot" src="../assets/robot-home.png" aria-hidden="true" />
    </div>
    <div class="get-started">
      <p>{{ props.msg }}</p>
      <a href="">Get started</a> building your first robot!
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px
}
</style>
