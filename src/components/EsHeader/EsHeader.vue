<template>
    <div :style="{backgroundColor:bgcolor,color:color,fontSize:fontSize+'px'}" class="esheader-container">{{title}}</div>
</template>
<script>
export default {
  name: 'EsHeader',
  props: {
    //标题内容
    title: {
      type: String,
      default: 'esHeader'
    },
    //背景颜色
    bgcolor: {
      type: String,
      default: '#007BFF'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    fontSize: {
      type: Number,
      default: 12
    }
  }
}
</script>
<style lang="less" scoped>
.esheader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  z-index: 999;
}
</style>