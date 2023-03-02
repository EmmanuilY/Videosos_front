<template>


  <header class="site-header sticky-top py-1">
    <nav class="container d-flex flex-column flex-md-row justify-content-between">

      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/')">Главная</my-button>
      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/movie/')"> Фильмы</my-button>
      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/serials/')"> Сериалы</my-button>
      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/oauth3/')"> Oauth</my-button>
      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/oauth2/')"> Oauth test</my-button>
      <my-button class="py-2 d-none d-md-inline-block" :src="user_data" v-if="user_data != ''">  {{ user_data }}</my-button>

    </nav>

  </header>
</template>
<script>
import axios from "axios";
import MyButton from "@/components/UI/MyButton";

export default {
  name: 'Navbar',
  data() {
    return {
      user_data: '',
    }
  },
  mounted() {
    this.getMe()
  },
  methods: {
    getMe(e) {
      axios
          .get('/auth/me')
          .then(response => {
            console.log(response)
            this.user_data = response.data.email
          })
          .catch(error => {
            console.log(error)
          })
    }
  },

  components: {MyButton},

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: gray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>