<template>


  <header class="site-header sticky-top py-1">
    <nav class="container d-flex flex-column flex-md-row justify-content-between">
      <a class="py-2" href="#" aria-label="Product">
        <svg @click="$router.push('/')" xmlns="http://www.w3.org/2000/svg" id="sss" width="24" height="24" fill="none"
             stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title>
          <circle cx="12" cy="12" r="10"/>
          <path
              d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
        </svg>
      </a>

      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/')">Главная</my-button>
      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/movie/')"> Фильмы</my-button>
      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/serials/')"> Сериалы</my-button>
      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/oauth3/')"> Oauth</my-button>
      <my-button class="py-2 d-none d-md-inline-block" @click="$router.push('/oauth2/')"> Oauth test</my-button>
      <my-button class="py-2 d-none d-md-inline-block" :src="user_data">  {{ user_data }}</my-button>

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