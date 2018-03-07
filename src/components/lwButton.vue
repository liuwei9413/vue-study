<template>
  <button class="lw-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot>
    <span :title="title">{{msg}}</span>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '下载'
      },
      title: {
        default: '默认title'
      }
    },
    methods: {    //绑定事件的关键代码
      btnClickEvent: function(){
        alert("先弹出默认的文案");
        this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
      }
    }
  }
</script>
<style scoped>
    .lw-btn { position:relative; display: block; width: 100px; height: 30px; line-height: 30px; text-align: center; font-size: 16px; color: #000; background: #4db3ff;}
    .lw-btn img { width:20px; height:20px; position:absolute; left:0; }
</style>
