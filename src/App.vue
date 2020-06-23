<template>
  <div id="app">
    <HelloWorld msg="Hello World - Codezilla Knowledge Session" />
    <div class="how-to">
      <h2>How to use git bisect and git rebase:</h2>
      <ol>
        <li>Use git rebase</li>
        <li>Create bug</li>
        <li>Use git bisect</li>
        <li>Fix bug</li>
        <li>????????</li>
        <li>Profit</li>
      </ol>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
ul li {
  margin: 0;
}
.how-to {
  list-style: inside;
  list-style-type: decimal;
  text-align: center;
  ol {
    padding: 0;
  }
}
</style>
