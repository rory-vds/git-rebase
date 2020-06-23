<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h3>Bacon Ipsum</h3>
    <p>
      Bacon ipsum dolor amet ham hock salami tongue, pork kielbasa spare ribs filet mignon turducken venison. Shoulder
      bresaola ham sirloin spare ribs, fatback landjaeger alcatra corned beef burgdoggen ham hock rump pork loin.
      Shankle ham meatloaf biltong meatball porchetta cupim drumstick landjaeger kevin bresaola frankfurter. Fatback
      chislic tongue salami porchetta, short loin flank shankle shoulder pork loin pork pork belly burgdoggen leberkas.
      Flank turducken corned beef capicola ham hock pancetta. Bresaola hamburger brisket, frankfurter turducken shoulder
      pork loin ball tip fatback. Alcatra cupim meatball burgdoggen.
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
