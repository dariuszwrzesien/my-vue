<template>
  <div>
    <button class="add-to-cart" @click="addToCard()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">{{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :alt="selectedRobot.head.src"
       :src="selectedRobot.head.src" title="head" />
        <button class="prev-selector" @click="selectPrevHead()">&#9668;</button>
        <button class="next-selector" @click="selectNextHead()">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :alt="selectedRobot.leftArm.src"
       :src="selectedRobot.leftArm.src" title="left arm" />
        <button class="prev-selector" @click="selectPrevLeftArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextLeftArm()">&#9660;</button>
      </div>
      <div class="center part">
        <img :alt="selectedRobot.torso.src"
       :src="selectedRobot.torso.src" title="torso" />
        <button class="prev-selector" @click="selectPrevTorso()">&#9668;</button>
        <button class="next-selector" @click="selectNextTorso()">&#9658;</button>
      </div>
      <div class="right part">
        <img :alt="selectedRobot.rightArm.src"
       :src="selectedRobot.rightArm.src" title="right arm" />
        <button class="prev-selector" @click="selectPrevRightArm()">&#9650;</button>
        <button class="next-selector" @click="selectPrevRightArm()">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :alt="selectedRobot.base.src"
       :src="selectedRobot.base.src" title="bases" />
        <button class="prev-selector" @click="selectNextBases()">&#9668;</button>
        <button class="next-selector" @click="selectPrevBases()">&#9658;</button>
      </div>
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
<script lang="ts">
import { defineComponent } from 'vue';
import { parts as availableParts, type PartsType, type PartType } from '../data/parts';

const getPrevValidIndex = (index: number, length: number) => {
  const prevIndex = index - 1;
  return prevIndex < 0 ? length - 1 : prevIndex;
};

const getNextValidIndex = (index: number, length: number) => {
  const nextIndex = index + 1;
  return nextIndex > length - 1 ? 0 : nextIndex;
};

type Cart = {
  head: PartType,
  leftArm: PartType,
  torso: PartType,
  rightArm: PartType,
  base: PartType,
  totalCost: number
}

export default defineComponent({
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0,
    } as {
      availableParts: PartsType,
      cart: Cart[],
      selectedHeadIndex: number,
      selectedLeftArmIndex: number,
      selectedTorsoIndex: number,
      selectedRightArmIndex: number,
      selectedBaseIndex: number,

    };
  },
  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        base: availableParts.base[this.selectedBaseIndex],
      };
    },
  },
  methods: {
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectPrevHead() {
      this.selectedHeadIndex = getPrevValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length,
      );
    },
    selectPrevLeftArm() {
      this.selectedLeftArmIndex = getPrevValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length,
      );
    },
    selectNextTorso() {
      this.selectedTorsoIndex = getNextValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length,
      );
    },
    selectPrevTorso() {
      this.selectedTorsoIndex = getPrevValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length,
      );
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = getNextValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length,
      );
    },
    selectPrevRightArm() {
      this.selectedRightArmIndex = getPrevValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length,
      );
    },
    selectNextBases() {
      this.selectedBaseIndex = getNextValidIndex(
        this.selectedBaseIndex,
        availableParts.base.length,
      );
    },
    selectPrevBases() {
      this.selectedBaseIndex = getPrevValidIndex(
        this.selectedBaseIndex,
        availableParts.base.length,
      );
    },
    addToCard() {
      const robot = this.selectedRobot;
      const totalCost = [
        robot.head,
        robot.leftArm,
        robot.torso,
        robot.rightArm,
        robot.base,
      ].reduce((acc, curr) => acc + curr.cost, 0);
      this.cart.push({ ...robot, totalCost });
    },
  },
});
</script>
<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
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
  position: absolute;
  right: 30px;
  width: 220px;
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
</style>
