import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from "@/views/MoviesView";
import SingleMovieView from "@/views/SingleMovieView";
import SerialsView from "@/views/SerialsView";
import SeasonsView from "@/views/SeasonsView";
import SingleSeriaView from "@/views/SingleSeriaView";
import SeriesView from "@/views/SeriesView";
import Oauth3View from "@/views/Oauth3View";
import Oauth2View from "@/views/Oauth2View";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MoviesView
  },
    {
    path: '/movie/:id',
    name: 'SingleMovieView',
    component: SingleMovieView,
    props: true
  },
    {
    path: '/serials',
    name: 'Serials',
    component: SerialsView,

  },
   {
    path: '/serial/:id',
    name: 'Seasons',
    component: SeasonsView,
    props: true
  },
    {
    path: '/serial/:id/:number',
    name: 'Series',
    component: SeriesView,
    props: true
  },
    {
    path: '/Serial/:id/:number/:url',
    name: 'SingleSeria',
    component: SingleSeriaView,
    props: true
  },
    {
    path: '/oauth3',
    name: 'oauth3',
    component:Oauth3View,
    props: true
  },
    {
    path: '/oauth2',
    name: 'oauth2',
    component:Oauth2View,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
