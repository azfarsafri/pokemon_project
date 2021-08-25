<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 700;
}

.nav-color {
  background-color: red;
  color: white;
}

.btn-color {
  background-color: whitesmoke;
  color: red;
}

.btn-color2 {
  background-color: white;
  color: red;
}
</style>
