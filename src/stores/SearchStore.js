import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { useMovieStore } from './MovieStore';

// Option API

// export const useSearchStore = defineStore('searchStore', {
//     state: () => ({
//         loader: false,
//         movies: []
//     }),
//     actions: {
//         async getMovies(search) {
//             this.loader = true
//             const response = await axios.get(`https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=${search}`)
//                 .catch(function (error) {
//                     console.log(error);
//                 })

//             this.movies = response.data.results
//             console.log(this.movies)
//             this.loader = false
//         },
//         addToUseMovies(object) {
//             const movieStore = useMovieStore()
//             movieStore.movies.push({ ...object, isWatched: false })
//             console.log(movieStore.movies)
//             movieStore.activeTab = 1
//         }
//     }
// })

// Composition API

export const useSearchStore = defineStore('searchStore', () => {
    const loader = ref(false)
    const movies = ref([])

    const getMovies = async(search) => {
        loader.value = true
        const response = await axios.get(`https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=${search}`)
            .catch(function (error) {
                console.log(error);
            })

        movies.value = response.data.results
        console.log(movies.value)
        loader.value = false
    }

    const addToUseMovies = (object) => {
        const movieStore = useMovieStore()
        movieStore.movies.push({ ...object, isWatched: false })
        console.log(movieStore.movies)
        movieStore.activeTab = 1
    }

    return {
        loader, movies, getMovies, addToUseMovies
    }
})