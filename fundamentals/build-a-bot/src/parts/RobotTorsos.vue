<script setup lang="ts">
import { parts } from '../data/parts';

const data = { torsos: parts.torsos };

</script>
<template>
  <div>
    <h2>Torsos</h2>
    The torso is the central part of your robot that holds everything
    together. Choosing the right torso will help ensure your robot
    functions well with the parts you choose.
    <div v-for="(torso, idx) in data.torsos" :key="idx">
      <h4>{{torso.title}}</h4>
      <div>{{torso.description}}</div>
    </div>
  </div>
</template>
