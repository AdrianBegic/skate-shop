<template>
  <section class="section-gallery">
    <div class="grid">
      <div class="item item--large"></div>

      <div class="item item--large"></div>

      <div class="item item--large"></div>

      <div class="item item--large"></div>

      <div class="item item--large"></div>

      <div class="item item--large"></div>

      <div class="item item--large"></div>

      <div class="item item--large"></div>


    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryComponent',
}
</script>

<style scoped>
body {
  margin: 0;
}


.section-gallery {
  padding: 30px;
   z-index: 5;
   position: relative;
   width: 50vw;
   margin: 0 auto;
}


@supports (display: grid) {
  display: block;
}



@media screen and (min-width: 768px) {
  .section {
    padding: 4rem;
  }
}

@supports (display: grid) {
  display: block;
}

h1 {
  font-size: 2rem;
  margin: 0 0 1.5em;
}

.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-auto-rows: 600px;
  grid-auto-flow: row dense;
}

.item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  background: url('../assets/pic_1.png');
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;
  counter-increment: item-counter;
}

.item:nth-of-type(2n) {
  background-image: url('../assets/pic_2.png');
}

.item:nth-of-type(3n) {
  background-image: url('../assets/pic_3.png');
}

.item:nth-of-type(4n) {
  background-image: url('../assets/pic_4.png');
}

.item:nth-of-type(5n) {
  background-image: url('../assets/pic_5.png');
}

.item:nth-of-type(6n) {
  background-image: url('../assets/pic_6.png');
}

.item:nth-of-type(7n) {
  background-image: url('../assets/pic_7.png');
}

.item:nth-of-type(8n) {
  background-image: url('../assets/pic_8.png');
}




.item-large {
  grid-row-end: span 3;
}

.item-full {
  grid-column-end: auto;
}

@media screen and (max-width: 768px) {
  .item-full {
    grid-column: -1;
    grid-row-end: span 1;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 500px;
    grid-auto-flow: row dense;
  }
}


</style>
