<template>
  <div id="app">
    
    <router-view></router-view> 


  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        activeNames: ['1']
      };
    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
    list-style:none;
  }
</style>
