<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PartType, PartsType, parts } from '../data/parts';

const route = useRoute();

const part = computed(() => {
  const { id, partType } = route.params;
  return parts[partType as keyof PartsType].find((item: PartType) => item.id === Number(id));
});

</script>
<template>
    <div>
        <h1>{{ part?.title }}</h1>
        <div>{{ part?.description }}</div>
    </div>
</template>
