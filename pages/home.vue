<template>
  <div>
    <div class="wrapper-main-home">
      <NavBar />
      <p class="about-text-one">
      Serving the uptown skate community since 2004. I'm actually not open 24hrs
      a day: its an at home business so I'm open from when I wake up til I fall
      asleep. Keep in mind, I skate just like you so please call or text to make
      sure that I am around and book an appointment. If you'd like to know more
      about the shop(and me), please feel free to check the shop IG.
    </p>
      </div>
      <InstaGram />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/nav.vue'
import InstaGram from '../components/InstaGram.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
   
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
  z-index: -999;
}

.about-text-one{
    position:relative;
    z-index: 3;
    width: 80vw;
    text-align: center;
    margin: 0 auto;
    font-size: 3em;
    padding: 5%;
    line-height: 1.5;
}


/* notes - new logo - cleaner text - more images - "contact" page */
</style>
