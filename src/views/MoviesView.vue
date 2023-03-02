<template>
<!--<div class="movies">-->
<!--    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">-->
<!--    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">-->
<!--      <div v-for="movie in listMovie" :key="movie.id" class="my-3 py-3">-->
<!--        <h2 href="#" @click="goTo(movie.id)"   class="display-5">{{ movie.name }} </h2>-->
<!--        <p class="lead">{{movie.description}} </p>-->
<!--        <img :src="movie.poster" height="480" width="720">-->
<!--      </div>-->
<!--      <div class="bg-light shadow-sm mx-auto" id="sss" ></div>-->
<!--    </div>-->

<!--</div>-->
<!--</div>-->

<main>

<section class="films">

  <div v-for="movie in listMovie" :key="movie.id">
			<div class="film" >
				<img :src="movie.poster" alt="Film Poster">
				<h3>{{ movie.name }}</h3>
        <button class="watch-now" @click="goTo(movie.id)">Watch Now</button>
			</div>
			</div>
		</section>
  </main>


</template>

<script>
export default {

  name: "MoviesView",
  data(){
    return {
      listMovie: []
    }
  },
  created(){
    this.loadListMovies()
  },
  methods: {
  async loadListMovies(){
      this.listMovie = await fetch(
          `${this.$store.getters.getServerUrl}/movie/`
      ).then(response => response.json())
    },
    goTo(id){
      this.$router.push({name: 'SingleMovieView', params: {id:id}})
    }
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-color: #000;
  color: #fff;
}

header {
  display: none;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Film Styles */

.films {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
}

.film {
  background-color: #222;
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000;
  text-align: center;
  width: 250px;
  height: 350px;
  margin-top: 100px;
}

.film img {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.film h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #fff;
}

.film p {
  font-size: 0.8rem;
  color: #ccc;
  margin-bottom: 10px;
}

.watch-now {
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.watch-now:hover {
  background-color: #900;
}
</style>