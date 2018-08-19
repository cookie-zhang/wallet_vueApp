<template>
  <div>
   <swiper class="banner" :options="swiperOption">
      <!-- slides -->
      <!-- <swiper-slide v-for="item of arrys" :key="item.id">
        <img class="swiper-img" :src="item.src"/>
      </swiper-slide> -->
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination">1</div>
      <div class="swiper-pagination"  slot="pagination">1</div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'swipper',
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner {
  width: 100%;
  height: 3.5rem;
  background: red;
  .swiper-img {
    float: left;
    width: 0.9rem;
    height: 0.9rem;
  }
}
</style>
