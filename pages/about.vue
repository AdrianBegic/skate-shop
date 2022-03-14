<template>
  <div class="wrapper-main-about">
    <NavBar />
    <img id="splash-about" src="../assets/shop.png">
    <p class="about-text-one">
      Serving the uptown skate community since 2004. I'm actually not open 24hrs
      a day: its an at home business so I'm open from when I wake up til I fall
      asleep. Keep in mind, I skate just like you so please call or text to make
      sure that I am around and book an appointment. If you'd like to know more
      about the shop(and me), please feel free to check the shop IG.
    </p>
    <InstaGram/>
  </div>
</template>

<script>
import NavBar from '@/components/nav.vue'
import InstaGram from '@/components/InstaGram.vue'

export default {
  name: 'AboutPage',
  components: {
    NavBar,
    InstaGram,
  },
}
</script>

<style scoped>
.wrapper-main-about {
  width: 100%;
  height: 200vh;
}

.about-text-one{
    position:relative;
    z-index: 3;
    width: 50vw;
    text-align: center;
    margin: 0 auto;
    font-size: 3em;
    padding: 5%;
    line-height: 1.5;
}

#splash-about{
  position: relative;
  z-index: 3;
  width: 50vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
}
</style>
