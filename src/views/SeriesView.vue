<template>
<!--<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">-->
<!--    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">-->
<!--      <div v-for="seria in listSeries" :key="seria.id" class="my-3 py-3">-->
<!--        <h2 href="#"  @click="goTo(seria.url)"  class="display-5">{{seria.name }} </h2>-->
<!--        <p class="lead">{{seria.url}} серия </p>-->
<!--        <a href="#"  @click="goTo(seria.url)">-->
<!--        <img :src="seria.poster" height="480" width="720">-->
<!--          </a>-->
<!--      </div>-->
<!--      <div class="bg-light shadow-sm mx-auto" id="sss" ></div>-->
<!--    </div>-->
<!--</div>-->
  <div v-for="seria in listSeries" :key="seria.id">
    <div class="serial" @click="goTo(seria.url)">
      <img :src="seria.poster">
      <h2>{{ seria.name }}</h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "SeriesView",
  props: ['id', 'number'],
  data(){
    return {
      listSeries: []
    }
  },
  components: {},
  created() {
    this.loadlistSeries()
  },
  methods: {
    async loadlistSeries(){
      this.listSeries = await fetch(
          `${this.$store.getters.getServerUrl}/serial/${this.id}/${this.number}/`
      ).then(response => response.json())
      console.log(this.listSeries)
    },
    goTo(url){
      this.$router.push({name: 'SingleSeria', params: {url:url}})
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  margin: 20px 0;
}

.serial {
  margin: 20px;
  padding: 20px;
  border: 1px solid #028181;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.serial img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 10px;
}

.serial h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
}

.serial p {
  font-size: 16px;
  text-align: justify;
}

@media screen and (max-width: 768px) {
  .serial {
    margin: 10px;
    padding: 10px;
  }

  .serial img {
    max-width: 100%;
  }

  .serial h2 {
    font-size: 20px;
  }

  .serial p {
    font-size: 14px;
  }
}
</style>