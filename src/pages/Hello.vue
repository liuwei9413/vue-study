<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h2>按钮组件</h2>
      <lw-btn :msg="msg" :title="title" v-on:btnClickEvent="doSth">
        <img src="../assets/logo.png" slot="icon">
      </lw-btn>
    </div>
    <div>
      <h2>选项卡组件</h2>
      <lw-tab v-on:navClickEvent="doSth2" :items="items"></lw-tab>
      <h2>选项卡组件2</h2>
      <lw-tab v-on:navClickEvent="doSth2" :items="items2"></lw-tab>
    </div>
    <!--<firstChild></firstChild>-->
    <first-child></first-child>
    <second-child></second-child>
    <!--<secondChild></secondChild>-->
  </div>
</template>

<script>
  import lwBtn from '../components/lwButton.vue'
  import lwTab from '../components/lwTab.vue'
  import firstChild from '../components/firstChild.vue'
  import secondChild from '../components/secondChild.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Hello Vue',
        title: '我是按钮',
        items:[
          {
            title: '首页',
            text: '我是首页内容',
            active : true
          },
          {
            title: '列表页',
            text: '我是列表页内容',
            active : false
          },{
            title: '内容页',
            text: '我是内容页内容',
            active : false
          }
        ],
        items2:[
          {
            title: '首页222',
            text: '我是首页内容222',
            active : true
          },
          {
            title: '列表页222',
            text: '我是列表页内容222',
            active : false
          },{
            title: '内容页222',
            text: '我是内容页内容222',
            active : false
          }
        ]
      }
    },
    components: {
      'lw-btn': lwBtn,
      'lw-tab': lwTab,
      firstChild,
      secondChild
    },
    methods: {
      doSth: function() {
        alert('你点击了组件的click:btnClickEvent');
      },
      doSth2: function(items, index) {
        console.log('length: ' + items.length + ' index: ' + index)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
