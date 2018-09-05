<template>
<div class="wrapper" ref="scroller">
<div class="content">
<router-link
v-for="item in batterScroll"
class="item"
:to="'/'+ item.id"
:key="item.id"
tag="div">
<img class="item-img" v-lazy="item.imgUrl"  />
<div class="item-content">
<p class="item-title">{{item.title}}</p>
<p class="item-desc">{{item.desc}}</p>
<p class="item-pric">
<span class="pric-tag">&yen;</span>
{{item.pric}}
<span class="pric-start">起</span>
</p>
</div>
</router-link>
</div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'indexScroll',
  props: {
    batterScroll: Array
  },
  data () {
    return {}
  },
  methods: {
    createScroll () {
      this.scroller = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
    }
  },
  mounted () {
    this.createScroll()
    // this.$nextTick(() => { this.scroll = new Bscroll(this.$refs.wrapper, {}) })
  }
}
</script>
<style lang="stylus" scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
  height: 10rem;
  margin-bottom: 1rem;

  .content {
    margin-bottom: rem;

    .item {
      display: flex;
      padding: 0.2rem;

      .item-img {
        width: 1.4rem;
        height: 1.4rem;
        margin-right: 0.2rem;
      }

      .item-content {
        flex: 1;

        .item-title {
          margin: 0.04rem 0 0.2rem 0;
          font-size: 0.3rem;
          color: $fontColor;
        }

        .item-desc {
          margin-bottom: 0.2rem;
          font-size: 0.26rem;
          color: $lightFontColor;
        }

        .item-pric {
          margin-top: 0.2rem;
          font-size: 0.36rem;
          color: $enlightFontColor;

          .pric-tag {
            font-size: 0.24rem;
          }

          .pric-start {
            font-size: 0.24rem;
            color: $lightFontColor;
          }
        }
      }
    }
  }
}
</style>
