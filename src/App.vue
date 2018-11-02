<template>
  <div id="app">
    <Head/>
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
  import Head from './components/Head'
  import Foot from './components/Foot'
export default {
  name: 'App',
  components:{
    Head,
    Foot
  }
}
</script>

<style>
  #app{
    width:100%;
    margin:0;
    padding:0;
  }
</style>
