<template>
   <swiper class="iconBanner" :options="swiperOption">
    <swiper-slide class="swipper" v-for="(page, index) of pages" :key='index'>
      <div class="icons-list">
        <div v-for="item in page" :key="item.id" class="icons-item">
          <img class="icon-img" :src="item.imgUrl" />
          <p class="icon-name">{{item.name}}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination">1</div>
  </swiper>
</template>
<script>
export default {
  name: 'iconswiper',
  props: {
    iconSwiper: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconSwiper.forEach((value, index) => {
        let page = Math.floor(index / 10) // 分页page为页数
        if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
      })
      return pages
    }
  },
  mounted () {
    console.log(this.iconSwiper)
  }
}
</script>
<style lang="stylus" scoped>
.iconBanner
  float left
  width: 100%
  overflow: hidden
  height: 0
  height 3.7rem
  .icons-list
    display: flex
    flex-wrap: wrap
    .icons-item
      display flex
      flex-direction column
      align-items center
      width 20%
      margin-top .2rem
      .icon-img
        width .9rem
        height .9rem
      .icon-name
        font-size .24rem
        margin-top .2rem
</style>
