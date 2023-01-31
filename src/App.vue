<template>
  <navbar></navbar>
  <div class="app">
  <router-view/>
    </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  beforeCreate() {
    this.$store.commit('initializeStore')

    const access = this.$store.state.access
    if ( access ){
      axios.defaults.headers.common['Authorization'] = 'Token ' + access
    } else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  },
  mounted() {
    // setInterval(()=> {
    //   this.getAccess()
    //
    // }, 50000)
  },
  methods:{
    getAccess(e) {
      const accessData = {
        refresh: this.$store.state.refresh
      }
      axios
          .post('/api/token/refresh/', accessData)
          .then(response =>{
            const access = response.data.access
            console.log(access)
            localStorage.setItem('access', access)
            this.$store.commit('setAccess', access)
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  components: {Navbar}
}
</script>
<style>
@import "assets/css/bootstrap.min.css";
@import "assets/css/product.css";

</style>
