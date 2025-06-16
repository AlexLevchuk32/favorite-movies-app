import { defineStore } from 'pinia';
import { useMovieStore } from './MovieStore';
import { ref } from 'vue';

const url =
	'https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=';

// export const useSearchStore = defineStore('searchStore', {
// 	state: () => ({
// 		movies: [],
// 		loader: false,
// 	}),
// 	actions: {
// 		async getMovies(search) {
// 			this.loader = true;

// 			const res = await fetch(`${url}${search}`);
// 			const data = await res.json();

// 			this.movies = data.results;
// 			this.loader = false;
// 		},
// 		addToUserListMovies(object) {
// 			const movieStore = useMovieStore();

// 			movieStore.movies.push({ ...object, isWatched: false });
// 			movieStore.activeTab = 1;
// 		},
// 	},
// });

//==========================================================================================================================================================
// Composition API
export const useSearchStore = defineStore('searchStore', () => {
	const movies = ref([]);
	const loader = ref(false);

	const getMovies = async (search) => {
		loader.value = true;

		const res = await fetch(`${url}${search}`);
		const data = await res.json();

		movies.value = data.results;
		loader.value = false;
	};

	const addToUserListMovies = (object) => {
		const movieStore = useMovieStore();

		movieStore.movies.push({ ...object, isWatched: false });
		movieStore.activeTab = 1;
	};

	return { movies, loader, getMovies, addToUserListMovies };
});
