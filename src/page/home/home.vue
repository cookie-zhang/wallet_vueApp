<template>
  <div class="main">
    <index-header></index-header>
    <index-swipper :sliders='sliders'></index-swipper>
    <icon-swiper :iconSwiper="iconSwiper"></icon-swiper>
    <div class="busniss_seller">商家推荐</div>
    <batter-scroll class="scroll" :batterScroll='batterScroll'></batter-scroll>
    <index-footer></index-footer>
  </div>
</template>
<script>
import indexHeader from '../../components/header.vue'
import indexFooter from '../../components/footer.vue'
import indexSwipper from './swipper'
import iconSwiper from './iconSwiper'
import batterScroll from './batterScroll'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      sliders: [],
      iconSwiper: [],
      batterScroll: []
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
        this.iconSwiper = res.data.data.icons
        this.batterScroll = res.data.data.hotlist
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
    indexSwipper,
    iconSwiper,
    indexFooter,
    batterScroll
  }
}
</script>
<!--scoped表示css样式只是在本个文件是使用，不会造成全局污染-->
<style scoped lang="stylus">
  .main
    display flex
    flex-direction column
    .busniss_seller
      position relative
      width 100%
      height .5rem
      text-align center
      line-height .5rem
      &:before
        position absolute
        top .2rem
        left 33%
        text-align center
        display: inline-block;
        content: "";
        width: .533333rem;
        height: .026667rem;
        background-color: #999;
      &:after
        position absolute
        top .2rem
        right 33%
        text-align center
        display: inline-block;
        content: "";
        width: .533333rem;
        height: .026667rem;
        background-color: #999;
    .scroll
      flex: 1
      overflow: hidden
</style>
