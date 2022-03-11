<template>
    <div>
        <img id="logo" src="@/assets/logo.webp"> 
    <div class="nav">
    <NuxtLink class="menu" to="/about">ABOUT</NuxtLink>
    <NuxtLink class="menu" to="/">HOME</NuxtLink>
    <NuxtLink class="menu" to="/gallery">GALLERY</NuxtLink>
    </div>
</div>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style scoped>
    #logo {
  position: relative;
  z-index:2;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:50vw;
}

.nav{
  display: block;
  margin: 50px auto;
  align-content: center;
  text-align: center;
  width: 50vw;
}

.menu{
  position: relative;
  z-index:3;
  text-align: center;
  font-size: 2.5em;
  padding: 0 20px;
}
</style>