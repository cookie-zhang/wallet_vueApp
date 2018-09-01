<template>
  <div>
    <div class="order_header">订单</div>
    <index-footer></index-footer>
  </div>
</template>
<script>
import indexFooter from '../../components/footer.vue'
export default {
  name: 'Order',
  data () {
    return {}
  },
  components: {
    indexFooter
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/base/publishStyle.styl';
.order_header
  width 100%
  height 1rem
  font-size .4rem
  color $fontColor
  background $bgColor
  text-align center
  line-height 1rem
  font-weight 700
</style>
