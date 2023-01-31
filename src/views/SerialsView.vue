<template>
<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div v-for="serial in listSerials" :key="serial.id" class="my-3 py-3">
        <h2 href="#"  @click="goTo(serial.id)"  class="display-5">{{ serial.name }} </h2>
        <p class="lead">{{serial.description}} </p>
        <img :src="serial.poster" height="480" width="720">
      </div>
      <div class="bg-light shadow-sm mx-auto" id="sss" ></div>
    </div>
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

</style>