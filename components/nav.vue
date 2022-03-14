<template>
    <div>
        <img id="logo" src="@/assets/logo.webp"> 
    <div class="nav">
    <nuxt-link to="/about"></nuxt-link>
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
  width:20vw;
}

.nav{
  display: block;
  margin: 0 auto;
  padding-top: 50px;
  align-content: center;
  text-align: center;
  width: 50vw;
  font-size: 3em;
}


</style>