<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><a href="/">list</a></li>
          <li><a href="/#/about">about</a></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
nav li {
  list-style: none;
  display: inline;
}
</style>
