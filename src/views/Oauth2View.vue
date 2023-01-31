<template>
<div>

 <button @click="login">Login Using Google</button>
  </div>
</template>

<script setup >
import { googleAuthCodeLogin } from "vue3-google-login"

const token = ''

const login = () => {
  googleAuthCodeLogin().then((response) => {
    console.log("Handle the response", response)
  })
}
</script>
<script>

import {googleTokenLogin} from "vue3-google-login";

export default {
  name: "Oauth2View",
  data(){
    return {
    token : '',
    name: '',
    }
  },
  methods(){
    googleTokenLogin().then((response) => {

    console.log("Handle the response", response)
  })
  }

}
</script>


<style scoped>

</style>