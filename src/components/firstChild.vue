<template>
  <div class="firstChild">
    <h2>firstChild组件</h2>
    <button v-on:click="sendMsg">向组件传值</button>
  </div>
</template>

<script>
  import bus from '../assets/eventBus';
  export default {
    methods: {
      sendMsg: function(){
        //$emit实例方法触发当前实例(这里的当前实例就是bus)上的事件,附加参数都会传给监听器回调。
        bus.$emit("userDefineEvent", "这条信息是从firstChild组件传过来的");
      }
    }
  }
</script>
<style scoped>

</style>
