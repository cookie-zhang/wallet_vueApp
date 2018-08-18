<template>
  <div>
    <index-header></index-header>
    <div class='home'>
      {{msg}}
    </div>
  </div>
</template>
<script>
import indexHeader from '../../components/header.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home'
    }
  },
  components: {
    indexHeader
  }
}
</script>
<!--scoped表示css样式只是在本个文件是使用，不会造成全局污染-->
<style scoped>
  .home{
    font-size: 0.12rem;
  }
</style>
