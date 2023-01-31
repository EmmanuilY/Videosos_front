<template>
 <div>One-Tap prompt will be shown once this component is mounted</div>

</template>

<script>
import { onMounted } from "vue"
import { googleOneTap } from "vue3-google-login"
import { decodeCredential } from 'vue3-google-login'
import axios from "axios";

export default {
  name: "Oauth3View",
  data(){
    return{
      username: '',
      email:'',
      token:'',
      access: '',
      refresh: '',

    }
  },
  methods:{
    Sent_to_back() {
      const formData = {
        email: this.email,
        token: this.token,
      }
      axios
          .post('/auth/google/', formData)
          .then(response => {
            console.log(response)
            const access = response.data.access_token
            const refresh = response.data.access_token
            console.log(this.$data)
            this.$store.commit('setAccess', access)
            this.$store.commit('setRefresh', refresh)
            axios.defaults.headers.common['Authorization'] = 'Token ' + access
            localStorage.setItem('access', access)
            localStorage.setItem('refresh', refresh)
          })
          .catch(error => {

            console.log(error)
          })
    },
  },
  mounted() {
    googleOneTap()
    .then((response) => {
      // This promise is resolved when user selects an account from the the One Tap prompt
      const UserData = decodeCredential(response.credential)
      this.email = UserData.email
      this.username = UserData.email
      this.token = response.credential
      // console.log("Handle the email", this.email)
      // console.log("Handle the response", response)
      // console.log("Token", response.credential)

      console.log(this.email)
      console.log(this.token)
      this.Sent_to_back()

    })
    .catch((error) => {
      console.log("Handle the error", error)
    })
  }
}
onMounted(() => {
  googleOneTap()
    .then((response) => {
      // This promise is resolved when user selects an account from the the One Tap prompt
      console.log("Handle the response", response)
    })
    .catch((error) => {
      console.log("Handle the error", error)
    })
})
</script>

<style scoped>

</style>