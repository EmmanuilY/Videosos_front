<template>
<!--<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">-->
<!--    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">-->
<!--      <div v-for="season in listSeasons" :key="season.id" class="my-3 py-3">-->
<!--        <h2 href="#"  @click="goTo(season.id)"  class="display-5">{{season.name }} </h2>-->
<!--        <p class="lead">{{season.number}} Сезон </p>-->
<!--        <a href="#"  @click="goTo(season.id)">-->
<!--        <img :src="season.poster" height="720" width="480">-->
<!--          </a>-->
<!--      </div>-->
<!--      <div class="bg-light shadow-sm mx-auto" id="sss" ></div>-->
<!--    </div>-->
<!--</div>-->
<section v-for="season in listSeasons" :key="season.id">
			<div class="seasons">
				<a href="#" @click="goTo(season.id)">
					<img :src="season.poster" alt="Game of Thrones Season 1">
					<span class="season-title">{{ season.number }} Сезон</span>
				</a>
      </div>
</section>
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
body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
	background-color: #f2f2f2;
}

main {
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
}

section {
	margin-bottom: 30px;
  margin-top: 50px;
}

h2 {
	font-size: 28px;
	font-weight: bold;
	margin-bottom: 15px;
}

.seasons {
	display: flex;
	flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
}

.seasons a {
	display: block;
	margin-right: 20px;
	margin-bottom: 20px;
	text-align: center;
	text-decoration: none;
	color: #000;
}

.seasons a:last-child {
	margin-right: 0;
}

.seasons a img {
	display: block;
	width: 300px;
	height:200px;
	object-fit: cover;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.seasons a .season-title {
	display: block;
	margin-top: 10px;
	font-size: 18px;
	font-weight: bold;
	color: #ffffff;
}
</style>