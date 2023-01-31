<template>
<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div v-for="season in listSeasons" :key="season.id" class="my-3 py-3">
        <h2 href="#"  @click="goTo(season.id)"  class="display-5">{{season.name }} </h2>
        <p class="lead">{{season.number}} Сезон </p>
        <a href="#"  @click="goTo(season.id)">
        <img :src="season.poster" height="720" width="480">
          </a>
      </div>
      <div class="bg-light shadow-sm mx-auto" id="sss" ></div>
    </div>
</div>
</template>

<script>
export default {
  name: "Seasons",
  props: ['id'],
  data(){
    return {
      listSeasons: []
    }
  },
  components: {},
  created() {
    this.loadlistSeasons()
  },
  methods: {
    async loadlistSeasons(){
      this.listSeasons = await fetch(
          `${this.$store.getters.getServerUrl}/serial/${this.id}/`
      ).then(response => response.json())
      console.log(this.listSeasons)
    },
    goTo(eee){
      this.$router.push({name: 'Series', params: {number:eee}})
    }
  }
}
</script>

<style scoped>

</style>