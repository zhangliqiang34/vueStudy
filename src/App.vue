<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/demo1">Demo1</router-link> |
      <router-link to="/demo2">Demo2</router-link> |
      <router-link to="/demo3">Demo3</router-link> |
      <router-link to="/demo4">Demo4</router-link> |
      <router-link to="/demo5">Demo5</router-link> |
      <router-link to="/demo6">Demo6</router-link> |
      <router-link to="/demo7">Demo7</router-link> |
      <router-link to="/demo8">Demo8</router-link> |
      <router-link to="/demo9">Demo9</router-link> |
      <router-link to="/demo10">Demo10</router-link> |
      <router-link to="/demo11">Demo11</router-link> |
      <router-link to="/demo12">Demo12</router-link> |
      <router-link to="/demo13">Demo13</router-link> |
      <router-link to="/demo14">Demo14</router-link> |
      <router-link to="/demo15">Demo15</router-link> |
      <router-link to="/demo16">Demo16</router-link> |
      <router-link to="/demo17">Demo17</router-link> |
      <router-link to="/demo18">Demo18</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
