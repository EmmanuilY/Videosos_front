<template>
    <div class="container">



        <div class="block">
      <img src="https://cs13.pikabu.ru/post_img/big/2021/04/30/8/1619786540187069101.jpg" alt="Block 1 Image">
      <h2>Block 1</h2>
      <button @click="$router.push('/movie/')"> Фильмы </button>
    </div>
    <div class="block">
      <img src="https://cs14.pikabu.ru/post_img/big/2022/01/16/10/16423552051040044.jpg" alt="Block 2 Image">
      <h2>Block 2</h2>
      <button @click="$router.push('/serials/')"> Сериалы </button>
    </div>

    </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.block {
  margin: 20px;
  padding: 20px;
  border: 2px solid teal;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 100%; /* Added to prevent block from overflowing */
  box-sizing: border-box; /* Added to include padding in width */
  position: relative; /* Added to make the image container relative */
}

.block img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.block h2 {
  font-size: 1.5rem; /* Increased font size for readability */
  margin-top: 1rem; /* Added space between image and heading */
  margin-bottom: 0; /* Removed margin bottom */
  position: absolute; /* Added to make the heading absolute */
  top: 50%; /* Added to center the heading */
  left: 50%; /* Added to center the heading */
  transform: translate(-50%, -50%); /* Added to center the heading */
  z-index: 1; /* Added to place the heading above the image */
}

.block button {
  margin-top: auto;
  padding: 15px 30px; /* Increased padding to make the button bigger */
  border: none;
  border-radius: 5px;
  background-color: teal;
  color: white;
  font-size: 1rem; /* Decreased font size for readability */
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute; /* Added to make the button absolute */
  bottom: 50%; /* Added to center the button */
  left: 50%; /* Added to center the button */
  transform: translate(-50%, 50%); /* Added to center the button */
  white-space: nowrap; /* Added to prevent button from wrapping to multiple lines */
  overflow: hidden; /* Added to hide button text when it overflows */
  text-overflow: ellipsis; /* Added to show ellipsis when button text overflows */
  z-index: 1; /* Added to place the button above the image */
}

.block button:hover {
  background-color: #3e8e41;
}

</style>
<script>

import MyButton from "@/components/UI/MyButton";
export default {
  name: 'HomeView',
  components: {MyButton},
}
</script>
