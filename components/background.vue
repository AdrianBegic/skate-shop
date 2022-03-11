<template>
    <div class="wrapper">
        
    </div>
</template>

<script>
export default {
    name: "BackGround",
}
</script>

<style scoped>

body {
  margin: 0;
}

    .wrapper {
        width: 100%;
        height: inherit;
        background-image: url("../assets/concrete.jpg");
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>