<template>
  <div class="hellow">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h3>Cheese Ipsum</h3>
    <p>
      Cheese slices brie cut the cheese. Red leicester caerphilly swiss who moved my cheese manchego cauliflower cheese
      when the cheese comes out everybody's happy parmesan. Cheeseburger st. agur blue cheese fromage frais emmental the
      big cheese smelly cheese stilton edam. Fromage say cheese st. agur blue cheese macaroni cheese danish fontina
      bavarian bergkase fromage frais lancashire. Pepper jack fondue gouda.
    </p>
    <p>
      Chalk and cheese cheese slices airedale. Cheese and biscuits manchego cut the cheese monterey jack melted cheese
      cheese strings cheese on toast swiss. Cheddar brie mozzarella boursin the big cheese jarlsberg cheese slices hard
      cheese. Croque monsieur bavarian bergkase cheese strings.
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
