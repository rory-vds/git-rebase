<template>
  <div class="hellow">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h3>Lorem Ipsum</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet neque vitae nisl lobortis ullamcorper.
      Cras ornare malesuada tellus eu sodales. Curabitur dictum metus mollis rhoncus pharetra. Curabitur pellentesque mi
      et porttitor placerat. Nullam vestibulum feugiat ex, vel porta velit hendrerit pulvinar. Proin vestibulum, ipsum
      et eleifend suscipit, justo quam blandit sem, id pellentesque augue dui interdum eros. Phasellus vitae orci
      sagittis, dignissim dui id, lobortis erat. Phasellus interdum ex quis feugiat accumsan. Praesent porttitor iaculis
      sem, et consectetur tellus ultrices eget. Phasellus eget sagittis nisl. Cras non sagittis lacus. Integer non
      maximus eros. Mauris mollis, felis nec molestie ullamcorper, augue tortor rutrum augue, nec ullamcorper mauris
      risus non odio. In auctor finibus quam at viverra.
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
