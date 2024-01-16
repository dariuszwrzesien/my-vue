<script setup lang="ts">
import { ref } from 'vue';

const open = ref(true);
</script>
<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
            <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
        </div>
    </div>
    <slot v-if="open"></slot>
</template>
<style scoped>
    .header{
        background-color: #bbb;
        padding: 3px;
        cursor: pointer;
    }
</style>
