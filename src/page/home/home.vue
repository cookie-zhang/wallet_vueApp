<template>
  <div class="main">
    <index-header></index-header>
    <index-swipper :sliders='sliders'></index-swipper>
  </div>
</template>
<script>
import indexHeader from '../../components/header.vue'
import indexSwipper from './swipper'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      sliders: []
    }
  },
  created () {
    this.getIndexSwiper()
  },
  methods: {
    getIndexSwiper () {
      axios.get('../../../static/index.json')
        .then(this.handeIndexSwiperData.bind(this))
        .catch(this.handeIndexSwiperDataErr.bind(this))
    },
    handeIndexSwiperData (res) {
      if (res) {
        this.sliders = res.data.data.swiper
      } else {
        this.handeIndexSwiperDataErr()
      }
    },
    handeIndexSwiperDataErr () {
      console.log('失败')
    }
  },
  components: {
    indexHeader,
    indexSwipper
  }
}
</script>
<!--scoped表示css样式只是在本个文件是使用，不会造成全局污染-->
<style scoped lang="stylus">
  .main
    display flex
    flex-direction column
    position absolute
    top 0
    left 0
    right 0
    bottom 0
</style>
