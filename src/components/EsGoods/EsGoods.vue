<template>
    <div class="esgoods-container">
        <!-- 左侧图片 -->
        <div class="left">
            <div class="form-check">
                <!-- 复选框 -->
                <input class="form-check-input" type="checkbox" value :id="id" :checked="checked" @Change="onCheckBoxChange" />
                <label class="form-check-label" :for="id">
                    <!-- 图片 -->
                    <img :src="thumb" alt />
                </label>
            </div>
        </div>
        <!-- 右侧图片 -->
        <div class="right ml-3">
            <!-- 标题部分 -->
            <div class="top">{{title}}</div>
            <!-- 价格数量 -->
            <div class="bottom">
                <div class="price">￥{{price.toFixed(2)}}</div>
                <div class="btncount">
                    <es-count :num="count" :min="1" @numChange="getNumber"></es-count>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EsCount from '../EsCounter/EsCount.vue'
export default {
  name: 'EsGoods',
  emits: ['stateChange', 'countChange'],
  components: {
    EsCount
  },
  props: {
    // 商品的key值
    id: {
      type: Number,
      required: true
    },
    //商品的链接
    thumb: {
      type: String,
      required: true
    },
    //商品的标题
    title: {
      type: String,
      required: true
    },
    //商品的价格
    price: {
      type: Number,
      required: true
    },
    //商品的数量
    count: {
      type: Number,
      required: true
    },
    // 商品的状态
    checked: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onCheckBoxChange(e) {
      this.$emit('stateChange', {
        id: this.id,
        value: e.target.checked
      })
    },
    //监听input输入数量变化的事件
    getNumber(num) {
      // console.log(num)
      this.$emit('countChange', {
        id: this.id,
        value: num
      })
    }
  }
}
</script>
<style lang="less" scoped>
.esgoods-container {
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #ccc;
  .left {
    .form-check-input {
      margin-top: 60px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .top {
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: 700;
        font-size: 14px;
      }
    }
  }
}
</style>