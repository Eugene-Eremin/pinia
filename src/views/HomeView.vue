<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo">
      <h2>My favorite Movies</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]">Favorite</button>
      <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]">Search</button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <h3>All Movies</h3>
      <Movie v-for="movie of movieStore.movies" :key="movie.id" :movie="movie" />
    </div>
    <div class="search" v-if="movieStore.activeTab === 2">
      Search
    </div>
  </main>
</template>

<script setup>
import { useMovieStore } from '../stores/MovieStore';

import Movie from '../components/Movie.vue';

const movieStore = useMovieStore()
</script>

<style scoped>

</style>