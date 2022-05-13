<template>
  <Menu />
  <router-view id="menuView"></router-view>
</template>

<script>
// import reactApp from '../react_app/reactApp.jsx';
import Menu from "./components/menu/Menu";
export default {
  name: "App",
  components: {
    Menu,
    // ReactApp: applyReactInVue(reactApp)
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#menuView {
}
</style>
