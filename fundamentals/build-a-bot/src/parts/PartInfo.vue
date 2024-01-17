<script setup lang="ts">
const part = {
  title: 'Part Title',
  description: 'Part Description',
};
</script>
<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>{{ part.description }}</div>
    </div>
</template>
