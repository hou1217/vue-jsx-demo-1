<template>
  <div id="app">
    <a-comp>
      <el-button>trigger A</el-button>
    </a-comp>
    <b-comp>
      <el-button>trigger B</el-button>
    </b-comp>
  </div>
</template>

<script>
import AComp from './components/A'
import BComp from './components/B'

export default {
  name: 'app',
  components: {
    AComp,
    BComp,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
