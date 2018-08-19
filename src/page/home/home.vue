<template>
  <div>
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
      sliders:[]
    }
  },
  created () {
    this.handeIndexSwiperData()
  },
  methods: {
    getIndexSwiper () {
      axios.get('./index.json')
      .then(this.handeIndexSwiperData.bind(this))
      .catch(this.handeIndexSwiperDataErr.bind(this))
    },
    handeIndexSwiperData (res) {
      if(res){
        console.log('成功')
      }else{
        this.handeIndexSwiperDataErr()
      }
    },
    handeIndexSwiperDataErr (error) {
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
<style scoped>
  .home{
    font-size: 0.12rem;
  }
</style>
