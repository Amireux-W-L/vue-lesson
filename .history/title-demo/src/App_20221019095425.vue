<template>
  <div id="app">
    <ArticleDemo />
  </div>
</template>

<script>
import ArticleDemo from './components/ArticleDemo.vue';

export default {
  components: {
    ArticleDemo
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
