<template>
  <el-select v-model="value">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: 'a',
          label: 'a'
        }, {
          value: 'b',
          label: 'b'
        }, {
          value: 'c',
          label: 'c'
        }, {
          value: 'd',
          label: 'd'
        }, {
          value: 'e',
          label: 'e'
        }],
        value: ''
      }
    }
  }
</script>