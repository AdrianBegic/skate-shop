<template>
  <div class="wrapper-main-home">
    <NavBar/>
    <BackGround/>
    <img id="splash" src="@/assets/shop.png">
  </div>
</template>

<script>
import BackGround from '../components/background.vue'
import NavBar from '../components/nav.vue'

export default {
  name: 'HomePage',
  components: {
    BackGround,
    NavBar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Syne+Mono&display=swap');


*{
  font-family: 'Special Elite', cursive;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
}

a:hover {
  color: #555;
}

.wrapper-main-home {
  height: 200vh;
  width: 100%;
}

#splash{
  position: relative;
  z-index: 3;
  width: 70vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* notes - new logo - cleaner text - more images - "contact" page */

</style>
