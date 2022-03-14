<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <img id="logo" src="../assets/logo.webp">
    <NuxtLink id="enter" to="/home">ENTER</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "SplashPage",
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}



#enter {
  font-size: 3em;
}

.loader {
  background-color: #fff;
  bottom: 0;
  color: white;
  display: block;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 999;
}



@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

 #logo {
  position: relative;
  z-index:2;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:40vw;
  padding: 50px;
}


</style>
