<template>
  <main>
    <!-- <RouterLink to="/second">second</RouterLink>
    <RouterLink class="pl-2" to="/three">three</RouterLink> -->
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo">
      <h2>My favorite Movies</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]" @click="setTab(1)">Favorite</button>
      <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]" @click="setTab(2)">Search</button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <RouterLink to="/three">three</RouterLink>
        <button @click="getMovies">получить</button>
        <h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
      <Movie v-for="movie of movieStore.watchedMovies" :key="movie.id" :movie="movie" />
      </div>
      <h3>All Movies (count: {{ movieStore.totalCountMovies }})</h3>
      <Movie v-for="movie of movieStore.movies" :key="movie.id" :movie="movie" />
    </div>
    <div class="search" v-if="movieStore.activeTab === 2">
      <Search />
    </div>
  </main>
</template>

<script setup>
import { useMovieStore } from '../stores/MovieStore';
import { useSearchStore } from '../stores/SearchStore';

import Movie from '../components/Movie.vue';
import Search from '../components/Search.vue';

const movieStore = useMovieStore()
const searchStore = useSearchStore()

const getMovies = () => {
  console.log(searchStore.movies)
}

const setTab = (id) => {
  movieStore.setActiveTab(id)
}
</script>

<style scoped>

</style>