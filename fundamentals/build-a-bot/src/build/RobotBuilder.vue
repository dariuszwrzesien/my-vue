<script lang="ts" setup>
import {
  ref, onMounted, onUnmounted, onUpdated,
} from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { parts as availableParts, type PartType } from '../data/parts';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

type Robot = {
  head: PartType | null,
  leftArm: PartType | null,
  torso: PartType | null,
  rightArm: PartType | null,
  base: PartType | null,
}

type Cart = Robot & {totalCost: number}

let addedToCard = false;

const cart = ref([] as Cart[]);
const selectedRobot = ref({
  head: null,
  leftArm: null,
  torso: null,
  rightArm: null,
  base: null,
} as Robot);

const addToCard = (robot: Robot) => {
  const totalCost = [
    robot.head,
    robot.leftArm,
    robot.torso,
    robot.rightArm,
    robot.base,
  ].reduce((acc, curr) => acc + (curr?.cost ?? 0), 0);
  cart.value.push({ ...robot, totalCost });
  addedToCard = true;
};

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
onBeforeRouteLeave((to, from, next) => {
  if (addedToCard) {
    next(true);
  } else {
    /* eslint no-alert: 0 */
    const confirmResponse = window.confirm('You have not added your robot to your cart, are you sure you want to leave?');
    next(confirmResponse);
  }
});

</script>

<template>
  <div class="container">
    <div class="part-info" id="partInfo"></div>
    <div class="robot">
    <div class="top-row">
     <PartSelector
      :parts="availableParts.heads"
      position="top"
      @partSelected="(part) => selectedRobot.head = part"
    />
    </div>
    <div class="middle-row">
      <PartSelector
      :parts="availableParts.arms"
      position="left"
      @partSelected="(part: PartType) => {selectedRobot.leftArm = part}"
    />
      <PartSelector :parts="availableParts.torsos"
      position="center"
      @partSelected="(part: PartType) => selectedRobot.torso = part"
    />
      <PartSelector :parts="availableParts.arms"
      position="right"
      @partSelected="(part: PartType) => selectedRobot.rightArm = part"
    />
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.base"
      position="bottom"
      @partSelected="(part: PartType) => selectedRobot.base = part"
    />
    </div>
    </div>
    <div class="cart">
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
            <td>{{robot?.head?.title}}</td>
            <td class="cost">{{ robot.totalCost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img alt="head" :src="selectedRobot.head?.src"/>
          </div>
          <div class="middle-row">
            <img alt="left" :src="selectedRobot.leftArm?.src" class="rotate-left"/>
            <img alt="center" :src="selectedRobot.torso?.src"/>
            <img alt="right" :src="selectedRobot.rightArm?.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img alt="base" :src="selectedRobot.base?.src"/>
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCard(selectedRobot)">Add to Cart</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 20px;
}
.part-info {
  flex-grow: 0;
  width: 210px;
  padding: 5px;
}
.robot {
  flex-grow: 2;
  padding-bottom: 20px;
  border-left: 2px solid #aaa
}
.cart {
  order: 1;
  width: 400px;
}

.preview {
  order: 2;
  width: 210px;
  height: 210px;
}
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
  width: 210px;
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
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
