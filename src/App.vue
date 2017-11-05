<template>
  <div id="app">
    <header>
      <nav>
        <a href="/#">Log in / Sign up</a>
        <a href="/#">About</a>
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

  header {
    position: fixed;
    z-index: 40;
    top: 0;
    background-color: #C6DAE6;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height:60px;
    width: 100%;
    border-radius: 3px;

    -webkit-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
    box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
  }

  nav {
    padding: 0 10px;
  }

  nav > a {
    border: 2px solid slategray;
    background-color: #FFFEFD;
    border-radius: 3px;
    padding: 10px 50px;
    color: #333;
    text-decoration: none;
  }

  body {
    background-image: url('./assets/bg.jpg');
    background-repeat: repeat;
    background-size: 300px;
    margin:0;
    margin-top: 60px;
  }

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
