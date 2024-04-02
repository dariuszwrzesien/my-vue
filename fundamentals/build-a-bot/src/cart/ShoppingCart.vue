<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store';

const store = useStore(key);

const cart = computed(() => store.state.cart);
const cartSaleItems = computed(() => store.getters.cartSaleItems);

</script>
<template>
<div>
    <h1>Cart</h1>
    <table>
    <thead>
        <tr>
        <th class="robot-title">
            Robot
        </th>
        <th class="cost">
            Cost
        </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
        <td class="robot-title">
            {{robot.head?.title || 'No title provided'}}
        </td>
        <td class="cost">
            {{robot.totalCost}}
        </td>
        </tr>
    </tbody>
    </table>
    <h1>You saved money on these robots:</h1>
    <table>
    <thead>
        <tr>
        <th class="robot-title">
            Robot
        </th>
        <th class="cost">
            Cost
        </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
        <td class="robot-title">
            {{robot.head?.title || 'No title provided'}}
        </td>
        <td class="cost">
            {{robot.totalCost}}
        </td>
        </tr>
    </tbody>
    </table>
</div>
</template>

  <style scoped>
    td, th {
      padding: 5px;
    }
    .robot-title {
      text-align: left;
      padding-right: 200px;
    }
    .cost {
      text-align: right;
    }
  </style>
