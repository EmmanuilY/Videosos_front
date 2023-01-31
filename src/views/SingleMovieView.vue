<template>
<div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
  <h1> {{movie.name}} </h1>
  <a href="#" class="highslide  " target="_blank"></a>


<vue-plyr >
  <video
    controls
    crossorigin
    playsinline
    :data-poster=movie.poster
  >
    <source
      size="720"
      :src=movie.video
      type="video/mp4"
    />
    <source
      size="1080"
      :src=movie.video
      type="video/mp4"
    />
    <track
      default
      kind="captions"
      label="English captions"
      :src=movie.subtitle
      srclang="en"
    />
  </video>
</vue-plyr>





  </div>
</template>


<script>
import axios from "axios";


export default {
  name: "Singlemovie",
  components: {
  },

  props: ['id'],
  data(){
    return {
      movie: {}
    }
  },
  created() {
    this.loadMovie()
  },
  methods: {
    async loadMovie(){
        axios
          .get(
          `${this.$store.getters.getServerUrl}/movie/${this.id}/`)
          .then(response => {
            this.movie = response.data
            console.log(this.movie)
          })


    },

  },
}

</script>

<style scoped>

</style>