<script setup>
import { ref, onMounted } from 'vue';

// Импортируем изображения
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.jpg';
import pic8 from '../assets/pic8.jpg';

const images = ref([
  { src: pic1, text: 'апывапрыаыпраы' },
  { src: pic2, text: 'аааааааааа' },
  { src: pic3, text: 'пермь прекрасна' },
  { src: pic4, text: 'чебупели' },
  { src: pic5, text: 'маинкрафт нуб против про' },
  { src: pic6, text: 'какой то чел' },
  { src: pic7, text: 'хуйня полная' },
  { src: pic8, text: 'никогда не смотри это в 6:66 ночи' }
]);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

onMounted(() => {
  images.value = shuffleArray(images.value);
});
</script>

<template>
  <div>
    <div>
      <img src="../assets/harosh.jpg" alt="Youtube Logo" class="main_logo" />
      <h1>MyTube</h1>
    </div>
    <div class="header">
      <input type="text" placeholder="Search..." class="search-bar" />
    </div>
    <div class="video_pic_container">
      <div v-for="(image, index) in images" :key="index" class="image_container" @click="console.log(image)">
        <img :src="image.src" alt="Video" class="video_pic" />
        <p>{{ image.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.main_logo {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
  left: 15px;
}
h1 {
  font-size: 2rem;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 23px;
  left: 75px;
  font-family: sans-serif;
}
.search-bar {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 100px;
}
.header {
  margin-top: -300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.video_pic_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}
.video_pic{
  width: 256px;
  height: 144px;
  margin: 10px;
}
.image_container {
  margin: 10px;
  text-align: center;
}
</style>