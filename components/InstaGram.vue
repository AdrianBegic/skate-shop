<template>
    <div>
        <a  id="ig" href="https://www.instagram.com/terminalnyc/"><img id="ig" src="../assets/87390.png"></a>
<a href="https://www.instagram.com/terminalnyc/" id="ig-text">TERMINAL NYC</a>
</div>
</template>

<script>
export default {
    name: "InstaGram",
}
</script>

<style scoped>
   #ig {
  z-index: 5;
  position: relative;
  width: 4vw;
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
  font-size: 3em;
  z-index: 5;
  position: relative;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
</style>