import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// export const useMovieStore = defineStore('movieStore', {
// 	state: () => ({
// 		movies: [],
// 		activeTab: 2,
// 	}),

// 	getters: {
// 		watchedMovies() {
// 			return this.movies.filter((el) => el.isWatched);
// 		},
// 		totalMoviesCount() {
// 			return this.movies.length;
// 		},
// 	},
// 	actions: {
// 		setActiveTab(id) {
// 			this.activeTab = id;
// 		},
// 		toggleWatched(id) {
// 			const idx = this.movies.findIndex((el) => el.id === id);

// 			this.movies[idx].isWatched = !this.movies[idx].isWatched;
// 		},
// 		deleteMovie(id) {
// 			this.movies = this.movies.filter((el) => el.id !== id);
// 		},
// 	},
// });

//==========================================================================================================================================================
// Composition API
export const useMovieStore = defineStore('movieStore', () => {
	const movies = ref([]);
	const activeTab = ref(2);

	const watchedMovies = computed(() => {
		return movies.value.filter((el) => el.isWatched);
	});
	const totalMoviesCount = computed(() => {
		return movies.value.length;
	});

	const setActiveTab = (id) => {
		activeTab.value = id;
	};
	const toggleWatched = (id) => {
		const idx = movies.value.findIndex((el) => el.id === id);

		movies.value[idx].isWatched = !movies.value[idx].isWatched;
	};
	const deleteMovie = (id) => {
		movies.value = movies.value.filter((el) => el.id !== id);
	};

	return {
		movies,
		activeTab,
		watchedMovies,
		totalMoviesCount,
		setActiveTab,
		toggleWatched,
		deleteMovie,
	};
});
