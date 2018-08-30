<template>
   <swiper class="banner index-banner" :options="swiperOption">
    <swiper-slide class="swipper" v-for="item of sliders" :key='item.id'>
      <img class="slider_img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination">1</div>
  </swiper>
</template>
<script>
export default {
  name: 'swipper',
  props: {
    sliders: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  float left
  width: 100%
  overflow: hidden
  height: 0
  padding-bottom: 31.25%
  .swipper
    float left
    .slider_img
      float left
      width: 100%
</style>
<style lang="stylus">
  .index-banner
    .swiper-pagination-bullet
      background: #fff
</style>
