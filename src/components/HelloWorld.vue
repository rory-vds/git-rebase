<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h3>Chuck Norris Ipsum</h3>
    <p>
      Chuck Norris can slam a revolving door. Chuck Norris can have his cake and eat it, too. Chuck Norris is currently
      suing NBC, claiming Law and Order are trademarked names for his left and right legs Chuck Norris can slice meat so
      thin is only has one side, When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture
      of himself, crouched and ready to attack. Chuck Norris has not had to pay taxes, ever Chuck Norris is the only man
      to ever defeat a brick wall in a game of tennis. Chuck Norris looks gift horses in the mouth. Chuck Norris doesn’t
      wear a watch. HE decides what time it is, The Great Wall of China was originally created to keep Chuck Norris out.
      It failed miserably.
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
