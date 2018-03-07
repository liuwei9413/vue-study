<template>
  <div class="lw-nav">
    <ul>
      <li v-for="(item, index) in items" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)">
        <span class="nav-txt">{{item.title}}</span>
      </li>
    </ul>
    <div class="boxs">
      <div class="box" v-for="(item, index) in items" :class="[item.active ? 'disblock' : 'disnone']">
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        commonClass:'nav-item',
        activeClass:'active'
      }
    },
    props: ['items'],
    methods:{
      navClickEvent:function(items,index){
        /*默认切换类的动作*/
        items.forEach(function(el){
          el.active = false;
        });
        items[index].active = true;
        /*开放用户自定义的接口*/
        this.$emit('navClickEvent',items,index);
      }
    }
  }
</script>

<style scoped>
  ul { overflow: hidden;}
  li { float: left; margin-right: 20px;}
  .box { width: 300px; height: 200px; border: 1px solid #ccc;}
  .active { color: #f00;}
  .disnone { display: none;}
  .disblock { display: block;}
</style>
