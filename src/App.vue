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
  text-transform: uppercase;
  margin-right: 10px;
  font-weight: bold;
  color: black;
}
.nav {
  padding: 20px;
  padding-left: 70px;
}
</style>
