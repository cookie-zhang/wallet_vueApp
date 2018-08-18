<template>
  <div class="header">
    <div class="header_location">
      <i class="header_iconfont_location iconfont">&#xe6d1;</i>
      正义路北京市人民政府
      <i class="header_iconfont_triangle iconfont">&#xe65a;</i>
    </div>
    <div class="header_search">
      <a class="header_search_a">
        <i class="header_search_iconfont iconfont">&#xe633;</i>
        搜索饿了么商家、商品名称
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexheader',
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '../assets/base/publishStyle.styl'
  .header
    width: 100%;
    height: 1.6rem;
    background: $bgColor
    .header_location
      width: 100%;
      height: .6rem;
      font-size: .3rem;
      line-height .6rem;
      color: $fontColor;
      .header_iconfont_location
        font-size: .35rem;
        color: $fontColor;
      .header_iconfont_triangle
        font-size: .35rem;
        color: $fontColor;
    .header_search
      width: 90%;
      height: .7rem;
      margin: .1rem auto;
      background: #fff;
      .header_search_a
        float left
        width 100%
        height .7rem
        color #999
        line-height .7rem
        text-align center
        .header_search_iconfont
          font-size .35rem
        
</style>
