<template>
<!--<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">-->
<!--    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">-->
<!--      <div v-for="serial in listSerials" :key="serial.id" class="my-3 py-3">-->
<!--        <h2 href="#"  @click="goTo(serial.id)"  class="display-5">{{ serial.name }} </h2>-->
<!--        <p class="lead">{{serial.description}} </p>-->
<!--        <img :src="serial.poster" height="480" width="720">-->
<!--      </div>-->
<!--      <div class="bg-light shadow-sm mx-auto" id="sss" ></div>-->
<!--    </div>-->
<!--</div>-->
  <div v-for="serial in listSerials" :key="serial.id">
  <section class="serial" @click="goTo(serial.id)">
        <img :src="serial.poster" alt="Serial Title">
        <h2>{{ serial.name }}</h2>
      </section>
    </div>
</template>

<script>
export default {
  name: 'Serials',
  data(){
    return {
      listSerials: []
    }
  },
  components: {},
  created() {
    this.loadlistSerials()
  },
  methods: {
    async loadlistSerials(){
      this.listSerials = await fetch(
          `${this.$store.getters.getServerUrl}/serial/`
      ).then(response => response.json())
      console.log(this.listSerials)
    },
    goTo(id){
      this.$router.push({name: 'Seasons', params: {id:id}})
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

/* Main Content Styles */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

/* Main Content Styles */
main {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.serial {
  width: calc((100% / 3) - 40px);
  margin: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

.serial:hover {
  transform: translateY(-5px);
}

.serial img {
  flex-grow: 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.serial h2 {
  margin: 10px 0;
  color: #fff;
}

@media (max-width: 992px) {
  .serial {
    width: calc((100% / 2) - 40px);
  }
}

@media (max-width: 576px) {
  .serial {
    width: calc(100% - 40px);
  }
}
</style>