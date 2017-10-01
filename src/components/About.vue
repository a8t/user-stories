<template>
  <div class="hello">
    <h1> Welcome to your simple user story organizer! </h1>
    <p>
      Created using <a href="https://vuejs.org/">Vue.js</a> and the <a href="https://github.com/SortableJS/Vue.Draggable">Vue.Draggable</a> component.
    </p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
