<template>
    <div class="counter-container">
        <button class="btn btn-light btn-sm" @click="onSubClick">-</button>
        <input type="number" name id class="count" v-model.number.lazy="number" />
        <button class="btn btn-light btn-sm" @click="onAddClick">+</button>
    </div>
</template>
<script>
export default {
  name: 'EsCount',
  emits: ['numChange'],
  data() {
    return {
      //data 可读可写
      number: this.num
    }
  },
  props: {
    //props 只读 需转存到data中才能修改
    num: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      //默认值为NaN 表示不限制最小值
      default: NaN
    }
  },
  methods: {
    onSubClick() {
      if (!isNaN(this.min) && this.number - 1 < this.min) return
      this.number--
    },
    onAddClick() {
      this.number++
    }
  },
  watch: {
    // 监听number数值的变化
    number(newVal) {
      // 1.将输入的新值化为整数
      const parseResult = parseInt(newVal)
      // 2.如果转换的结果不是数字，或者小于1，则强制number的值等于1
      if (isNaN(parseResult) || parseResult < 1) {
        this.number = 1
        return
      }
      // 3.如果新值为小数，则把转换的结果赋值给number
      // 找不到 . = -1 即
      if (String(newVal).indexOf('.') !== -1) {
        this.number = parseResult
      }
      this.$emit('numChange', this.number)
    }
  }
}
</script>
<style lang="less" scoped>
.counter-container {
  display: flex;
  justify-content: space-around;
  .btn {
    background-color: #fff;
    border: none;
    outline: none;
    width: 35px;
  }
  .count {
    width: 35px;
    height: 30px;
    text-align: center;
    border: 1px solid #ccc;
  }
}
</style>