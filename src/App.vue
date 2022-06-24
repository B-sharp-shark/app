<template>
  <div class="main">
    <div class="bg-white nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Logout</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
.main {
  background-color: rgb(240, 240, 255);
}
a {
  text-decoration: none;
  margin-right: 10px;
}
.nav {
  padding: 20px;
}
</style>
