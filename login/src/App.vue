<template>
    <div id="app">

      <headerr></headerr>
      <!--<mfoot></mfoot>-->
      <!--<router-link to="/">hello</router-link>-->
          <!--&lt;!&ndash;<span v-if="$store.state.username">{{$store.state.username}}&ndash;&gt;-->
        <!--&lt;!&ndash;<span v-on:click="logout">注销</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</span>&ndash;&gt;-->

          <!--&lt;!&ndash;<span v-else>&ndash;&gt;-->
        <!--&lt;!&ndash;<router-link :to="{path:'/login',query:{next:$route.path}}">login</router-link>&ndash;&gt;-->
      <!--&lt;!&ndash;</span>&ndash;&gt;-->
          <!--&lt;!&ndash;<router-link to="/course_list">course_list</router-link>&ndash;&gt;-->
          <router-view/>
</div>
</template>

<script>
  import headerr from '@/header/head'
  import mfoot   from '@/footer/myfoot'
  export default {
  name: 'app',
//    methods:{
//    logout:function () {
//      this.$store.commit('clearToken');
//    }
//    },
    components:{
      headerr,
//      mfoot,

    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>
