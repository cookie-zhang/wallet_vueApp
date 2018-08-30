<template>
    <div class="footer">
      <ul class="footer_ul">
        <li><router-link class="links" exact to="/"><i class="iconfont">&#xe722;</i><span>首页</span></router-link></li>
        <li><router-link class="links" to="/find"><i class="iconfont">&#xe63b;</i><span>发现</span></router-link></li>
        <li><router-link class="links" to="/order"><i class="iconfont">&#xe68d;</i><span>订单</span></router-link></li>
        <li><router-link class="links" to="/my"><i class="iconfont">&#xe657;</i><span>我的</span></router-link></li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'allFooter',
  data () {
    return {

    }
  }

}
</script>
<style lang="stylus" scoped>
.footer
  position fixed
  widows 100%
  height 1rem
  left 0
  right 0
  bottom 0
  background #fff
  border-top .01rem solid #ccc
  .footer_ul
    display flex
    flex-direction row
    width 100%
    height 100%
    li
      width 25%
      height 100%
      .links
        display flex
        flex-direction column
        width 100%
        height 100%
        color #8e8e93
        i
          width 100%
          height 60%
          text-align center
          font-size .5rem
          font-weight 1rem
          padding-top .1rem
        span
          width 100%
          text-align center
          line-height 200%
          font-size .26rem
      .router-link-active
        color #00f!important
</style>
