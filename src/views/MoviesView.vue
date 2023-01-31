<template>
<div class="movies">
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div v-for="movie in listMovie" :key="movie.id" class="my-3 py-3">
        <h2 href="#" @click="goTo(movie.id)"   class="display-5">{{ movie.name }} </h2>
        <p class="lead">{{movie.description}} </p>
        <img :src="movie.poster" height="480" width="720">
      </div>
      <div class="bg-light shadow-sm mx-auto" id="sss" ></div>
    </div>

</div>
</div>
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

</style>