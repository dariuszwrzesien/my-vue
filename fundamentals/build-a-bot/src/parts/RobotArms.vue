<script setup lang="ts">
import { parts } from '../data/parts';

const data = { arms: parts.arms };

</script>

<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in data.arms" :key="idx">
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
    </div>
  </div>
</template>
