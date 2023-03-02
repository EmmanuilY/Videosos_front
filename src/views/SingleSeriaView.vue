<template>
<div>
  <h1 class = "title_seria"> {{seria.name}} </h1>

<vue-plyr >
  <video
    controls
    crossorigin
    playsinline
    :data-poster=seria.poster
  >
    <source
      size="720"
      :src=seria.video
      type="video/mp4"
    />
    <source
      size="1080"
      :src=seria.video
      type="video/mp4"
    />
    <track
      default
      kind="captions"
      label="English captions"
      :src=seria.subtitle
      srclang="en"
    />
  </video>
</vue-plyr>


</div>
</template>

<script>
export default {
  name: "SingleSeriaView",
  props: ['id','number', 'url'],
  data(){
    return {
      seria: {}
    }
  },
  created() {
    this.loadSeria()
  },
  methods: {
    async loadSeria(){
      this.seria = await fetch(
          `${this.$store.getters.getServerUrl}/serial/${this.id}/${this.number}/${this.url}/`
      ).then(response => response.json())
      console.log(this.seria)
      console.log(this.url)

    }
  }
}
</script>

<style scoped>
.title_seria{
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  color: white;
}
</style>