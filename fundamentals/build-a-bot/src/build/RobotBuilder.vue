<script lang="ts" setup>
import {
  computed, ref, onMounted, onUnmounted, onUpdated,
} from 'vue';
import { parts as availableParts, type PartType } from '../data/parts';
import PartSelector from './PartSelector.vue';

type Robot = {
  head: PartType,
  leftArm: PartType,
  torso: PartType,
  rightArm: PartType,
  base: PartType,
}

type Cart = Robot & {totalCost: number}

/**
 * Life cycle hooks
 */
onMounted(() => {
  console.log('the component is now mounted.');
});
onUpdated(() => {
  console.log('the component is now updated.');
});
onUnmounted(() => {
  console.log('the component is now unmounted.');
});

const cart = ref([] as Cart[]);
const selectedHeadIndex = ref(0);
const selectedLeftArmIndex = ref(0);
const selectedTorsoIndex = ref(0);
const selectedRightArmIndex = ref(0);
const selectedBaseIndex = ref(0);

const selectedRobot = computed(() => ({
  head: availableParts.heads[selectedHeadIndex.value],
  leftArm: availableParts.arms[selectedLeftArmIndex.value],
  torso: availableParts.torsos[selectedTorsoIndex.value],
  rightArm: availableParts.arms[selectedRightArmIndex.value],
  base: availableParts.base[selectedBaseIndex.value],
}));

const addToCard = () => {
  const robot = selectedRobot.value;
  const totalCost = [
    robot.head,
    robot.leftArm,
    robot.torso,
    robot.rightArm,
    robot.base,
  ].reduce((acc, curr) => acc + curr.cost, 0);
  cart.value.push({ ...robot, totalCost });
};

</script>

<template>
  <div>
    <button class="add-to-cart" @click="addToCard()">Add to Cart</button>
    <div class="top-row">
     <PartSelector />
    </div>
    <div class="middle-row">
      <PartSelector />
      <PartSelector />
      <PartSelector />
    </div>
    <div class="bottom-row">
      <PartSelector />
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index" >
            <td>{{robot?.head.title}}</td>
            <td class="cost">{{ robot.totalCost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width: 165px;
  }
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%
}
.sale {
  color: #F00
}
.add-to-cart {
  padding: 3px;
  font-size: 16px;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red
}
</style>
