<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h3>Cupcake Ipsum</h3>
    <p>
      Jelly-o oat cake tart pie halvah bonbon. Caramels sweet roll soufflé fruitcake candy sweet roll croissant pie
      sesame snaps. Sweet roll caramels wafer sugar plum tiramisu tart danish tootsie roll pastry. Lemon drops lollipop
      jujubes croissant dragée lemon drops. Sesame snaps tootsie roll carrot cake. Gummies oat cake pastry caramels
      fruitcake tootsie roll apple pie chupa chups.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  text-align: center;
}
p {
  padding: 0 2em;
}
h3 {
  margin: 40px 0 0;
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
