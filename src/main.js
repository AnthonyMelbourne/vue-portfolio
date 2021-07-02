import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import MusicReviews from './pages/MusicReviews.vue'
import MovieReviews from './pages/MovieReviews.vue'
import GameReviews from './pages/GameReviews.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/music/reviews', component: MusicReviews }, 
    { path: '/movies/reviews', component: MovieReviews },
    { path: '/game/reviews', component: GameReviews },
  ]
})

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
