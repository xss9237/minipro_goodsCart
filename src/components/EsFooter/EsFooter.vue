<template>
    <div class="esfooter-container">
        <!-- 全选按钮 -->
        <div class="form-check">
            <input class="form-check-input mt-4" type="checkbox" value id="defaultCheck1" :checked="isFull" @change="onCheckBoxChange" />
            <label class="form-check-label" for="defaultCheck1">全选</label>
        </div>
        <!-- 合计价格 -->
        <div class="counts">
            <span>合计：</span>
            <span class="amount">￥{{amount.toFixed(2)}}</span>
        </div>
        <!-- 结算按钮 -->
        <button type="button" class="btn btn-primary rounded-pill">结算（{{total.toFixed(0)}}）</button>
    </div>
</template>
<script>
export default {
  name: 'EsFooter',
  emits: ['fullChange'],
  props: {
    amount: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    isFull: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onCheckBoxChange(e) {
      //e.target.checked 是复选框最新的选中状态
      // console.log(e.target.checked)
      this.$emit('fullChange', e.target.checked)
    }
  }
}
</script>
<style lang="less" scoped>
.esfooter-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  z-index: 999;
  background-color: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .counts {
    .amount {
      font-size: 13px;
      font-weight: 700;
      color: red;
    }
  }
  .btn {
    width: 100px;
    height: 40px;
  }
}
</style>