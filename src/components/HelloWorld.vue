<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h3>Cat Ipsum</h3>
    <p>
      Plays league of legends stare out the window. Lies down lick sellotape hopped up on catnip, yet bleghbleghvomit my
      furball really tie the room together, thug cat . Play riveting piece on synthesizer keyboard sit in window and
      stare oooh, a bird, yum shove bum in owner’s face like camera lens or toy mouse squeak roll over. Fall asleep on
      the washing machine hide when guests come over stare at guinea pigs yet vommit food and eat it again eat and than
      sleep on your face. Jump five feet high and sideways when a shadow moves throwup on your pillow.
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
