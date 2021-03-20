<template>
  <div id="app">
    <div>
      <h1>Welcome To the Online Library</h1>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/comments">Find a Book</router-link>
    </div>
    <router-view/>
    <footer>
      <a href="https://github.com/Epicreader/Library-app">https://github.com/Epicreader/Library-app</a>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: right;
}

#nav a {
  font-weight: bold;
  color: #07a007;
  text-decoration: none;
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: #0b5204;
}
footer {
  display: flex;
  justify-content: center;
  width: 100%;
  align-content: center;
  text-decoration: none;
}
</style>

