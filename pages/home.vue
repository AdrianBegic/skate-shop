<template>
  <div>
    <div class="wrapper-main-home">
      <NavBar />
      <div class="parallax-home"></div>
      <GalleryComponent />
      <InstaGram />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/nav.vue'
import GalleryComponent from '../components/gallery.vue'
import InstaGram from '../components/InstaGram.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    GalleryComponent,
    InstaGram,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Syne+Mono&display=swap');

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


html {
  /* background: url("../assets/concrete.jpg") no-repeat center center fixed; 
  background-size: cover; */
  background: #fff;
}

* {
  font-family: 'Special Elite', cursive;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
  text-align: center;
}

a:hover {
  color: #555;
}

.wrapper-main-home {
  height: fit-content;
  width: 100%;
}

.parallax-home {
  background-image: url('../assets/concrete.jpg');
  height: 50vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* notes - new logo - cleaner text - more images - "contact" page */
</style>
