<template>
    <div id="app">
      <headerr></headerr>
      <router-view/>
      <!--<mfoot></mfoot>-->
</div>
</template>

<script>
  import headerr from '@/header/head'
  import mfoot   from '@/footer/myfoot'
  export default {
  name: 'app',
    components:{
      headerr,
      mfoot
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
