<template>
    <div>Логин</div>
    <button @click="getMovies">получить</button>

    <RouterLink to="/second">second</RouterLink>
</template>

<script setup>
import { useSearchStore } from '../stores/SearchStore';

const searchStore = useSearchStore()

const getMovies = () => {
  console.log(searchStore.movies)
}


</script>