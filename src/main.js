import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import vue3GoogleLogin from 'vue3-google-login'
import axios from 'axios'



axios.defaults.baseURL = 'http://127.0.0.1:8000'
const app =createApp(App)

components.forEach( component =>{
    app.component(component.name, component)
})


app
    .use(VuePlyr, {
    plyr: {}
  })
    .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_GOOGLE
    })
    .use(router, axios)
    .use(store)
    .mount('#app')