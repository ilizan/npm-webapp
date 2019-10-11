<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
    outline: none;
    color: inherit;
}

a:link {
    text-decoration: none;
    color: inherit;
}

a:visited {
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: none;
    color: inherit;
}

a:active {
    text-decoration: none;
    color: inherit;
}

a:focus {
    outline: 0;
    color: inherit;
    text-decoration: none;
}
body *{
  // border:1px solid #ccc;
}
</style>