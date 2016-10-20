<template>
  <div id="app">
    <element-select></element-select>
    <img src="./assets/logo.png">
    <hello></hello>
    <element-table></element-table>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ElementSelect from './components/ElementSelect'
import ElementTable from './components/ElementTable'
export default {
  name: 'app',
  components: {
    Hello,
    ElementSelect,
    ElementTable
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
