<script lang="ts" setup>
import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobotBuilder.vue';
import SearchTerm from './search/SearchTerm.vue';

</script>

<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img alt="built-a-bot" class="logo" src="./assets/build-a-bot-logo.png" />
          Build-a-Bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <!-- <HomePage msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <RobotBuilder/>
    <!-- <SearchTerm /> -->
  </main>
</template>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
</style>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
