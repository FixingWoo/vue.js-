<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/databinding">Databinding</router-link> |
    <router-link to="/databindingHtml">DatabindingHtml</router-link> |
    <router-link to="/databindingInputText">DatabindingInputText</router-link> |
    <router-link to="/databindingInputNumber"
      >DatabindingInputNumber</router-link
    >
    |
    <router-link to="/databindingTextArea">DatabindingTextArea</router-link> |
    <router-link to="/databindingSelect">DatabindingSelect</router-link> |
    <router-link to="/databindingCheckbox">DatabindingCheckbox</router-link> |
    <router-link to="/databindingCheckbox2">DatabindingCheckbox2</router-link> |
    <router-link to="/databindingRadio">DatabindingRadio</router-link> |
    <router-link to="/databindingAttribute">DatabindingAttribute</router-link> |
    <router-link to="/databindingButton">DatabindingButton</router-link> |
    <router-link to="/databindingClass">DataBindingClass</router-link> |
    <router-link to="/databindingClass2">DataBindingClass2</router-link> |
    <router-link to="/databindingStyle">DataBindingStyle</router-link> |
    <router-link to="/databindingList">DatabindingList</router-link> |
    <router-link to="/renderingVIf">renderingVIf</router-link> |
    <router-link to="/eventClick">eventClick</router-link> |
    <router-link to="/eventChange">eventChange</router-link> |
    <router-link to="/eventChange">eventChange</router-link> |
    <router-link to="/myComputed">myComputed</router-link> |
    <router-link to="/myWatch">myWatch</router-link> | -->
    <router-link to="/databindingList2">ItemList</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
