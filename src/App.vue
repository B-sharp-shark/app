<template>
  <div class="main">
    <div class="bg-white nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/login">Login</router-link>
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
