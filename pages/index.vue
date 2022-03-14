<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <img id="logo" src="../assets/logo.webp">
    <NuxtLink id="enter" to="/home">ENTER</NuxtLink>
    <div class="footer">
      <a  id="ig" href="https://www.instagram.com/terminalnyc/"><img id="ig" src="../assets/87390.png"></a>
<a href="https://www.instagram.com/terminalnyc/" id="ig-text">TERMINAL NYC</a>
</div>
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
  color: #fff;
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

 #ig {
  z-index: 5;
 position: relative;
  width: 2.5vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

#ig:hover{
filter: contrast(200%);
transition: .3s ease-in-out;
}


#ig-text {
  font-size: 1em;
  z-index: 5;
  position: relative;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;
  padding: 20px;
}

.footer {
  position: relative;
  margin: 10%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
