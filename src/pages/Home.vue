<template>
  <div class="home">
    <router-link to="/">首页</router-link>
    <router-link to="/hello">go to hello</router-link>
    <router-link to="/es6">go to es6</router-link>
    <router-link to="/vuex">go to vuex</router-link>
    <router-link to="/elem">go to elemmentUi</router-link>
    <div class="content" style="border: 1px solid #ccc; padding: 20px; margin: 50px auto;">

      <div id="demo" v-bind:class="{ active: isActive, 'text-danger': hasError }">{{ fullName }}</div>
      <div style="border: 1px solid #ccc; padding: 10px; margin: 10px;">
        <h2>vuex-test</h2>
        <vuex-test></vuex-test>
      </div>
      <div style="border: 1px solid #ccc; padding: 10px; margin: 10px;">
        <h2>mockjs</h2>

      </div>
    </div>
  </div>
</template>

<script>
  import VuexTest from './Vuex.vue'
  import {mapState} from 'vuex';
  export default {
    name: 'home',
    components: {
      VuexTest
    },
    data () {
      return {
        msg: '首页',
        firstName: 'liu',
        lastName: 'wei',
        isActive: true,
        hasError: true
      }
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    },
    methods: {
    },
    mounted() {

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
  .active { color: #f00;}
  .text-danger { background: #ccc;}
</style>
