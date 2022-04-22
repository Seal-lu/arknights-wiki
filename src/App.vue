<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/MenuBar.vue'
export default {
  components:{
    Menu
  }
}
</script>

<style lang="scss" scoped>
</style>
