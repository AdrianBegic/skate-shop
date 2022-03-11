<template>
  <div class="wrapper-main-about">
    <NavBar />
    <BackGround />
    <img id="splash-about" src="@/assets/splash.jpg">
    <p class="about-text-one">
      Serving the uptown skate community since 2004. I'm actually not open 24hrs
      a day: its an at home business so I'm open from when I wake up til I fall
      asleep. Keep in mind, I skate just like you so please call or text to make
      sure that I am around and book an appointment. If you'd like to know more
      about the shop(and me), please feel free to check the shop IG.
    </p>
  </div>
</template>

<script>
import BackGround from '@/components/background.vue'
import NavBar from '@/components/nav.vue'

export default {
  name: 'AboutPage',
  components: {
    BackGround,
    NavBar,
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
    width: 60vw;
    text-align: center;
    margin: 0 auto;
    font-size: 2em;
    padding: 5%;
    line-height: 1.5;
}

#splash-about{
  position: relative;
  z-index: 3;
  width: 70vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
