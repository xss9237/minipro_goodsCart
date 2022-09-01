<template>
    <div class="app-container">
        <h1>APP根组件</h1>
        <es-header title="购物车案例"></es-header>
        <es-goods v-for="item in goodlist" :key="item.id" :id="item.id" :thumb="item.goods_img" :title="item.goods_name" :price="item.goods_price" :count="item.goods_count" :checked="item.goods_state" @stateChange="onGoodsStateChange" @countChange="onGoodsCountChange"></es-goods>
        <div class="bottom"></div>
        <es-footer :amount="amount" :total="total" @fullChange="onFullStateChange"></es-footer>
    </div>
</template>

<script>
import EsHeader from './components/EsHeader/EsHeader.vue'
import EsFooter from './components/EsFooter/EsFooter.vue'
import EsGoods from './components/EsGoods/EsGoods.vue'

export default {
  name: 'App',
  components: {
    EsHeader,
    EsGoods,
    EsFooter
  },
  data() {
    return {
      // 商品列表的数据
      goodlist: []
    }
  },
  //组件实例创建完毕之后的生命周期函数
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/cart')
      if (res.status !== 200) return alert('请求商品列表数据失败！')
      this.goodlist = res.list
    },
    onFullStateChange(isFull) {
      this.goodlist.forEach((x) => (x.goods_state = isFull))
    },
    onGoodsStateChange(state) {
      const findResult = this.goodlist.find((x) => x.id === state.id)
      if (findResult) {
        findResult.goods_state = state.value
      }
    },
    onGoodsCountChange(a) {
      const findResult = this.goodlist.find((x) => x.id === a.id)
      if (findResult) {
        findResult.goods_count = a.value
      }
    }
  },
  computed: {
    amount() {
      let a = 0
      this.goodlist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          a += x.goods_count * x.goods_price
        })
      return a
    },
    total() {
      let a = 0
      this.goodlist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          a += x.goods_count
        })
      return a
    }
  }
}
</script>
<style lang="less" scoped>
.app-container {
  .bottom {
    height: 49px;
  }
}
</style>
