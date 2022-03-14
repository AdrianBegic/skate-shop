<template>
    <div>
        <img id="logo" src="@/assets/logo.webp"> 
    <div class="nav">
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
  width:40vw;
}

.nav{
  display: block;
  margin: 0 auto;
  padding-top: 50px;
  align-content: center;
  text-align: center;
  width: 50vw;
}

.menu{
  position: relative;
  z-index:3;
  text-align: center;
  font-size: 2.5em;
  padding: 0 80px;
}
</style>