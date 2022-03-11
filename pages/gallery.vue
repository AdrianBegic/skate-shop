<template>
    <div class="wrapper-main-gallery">
    <NavBar/>
    <BackGround/>
    
    </div>
</template>

<script>
import BackGround from '@/components/background.vue'
import NavBar from '@/components/nav.vue'

export default {
    name: "GalleryPage",
    components: {
        BackGround,
        NavBar,
    },
}
</script>

<style scoped>
    .wrapper-main-gallery{
         width:100%;
        height: 200vh;
    }
</style>