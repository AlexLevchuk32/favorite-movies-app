<template>
	<form @submit.prevent="getMovie(searchMovie)">
		<input
			class="search-input"
			type="text"
			placeholder="Input movie name"
			v-model="searchMovie"
		/>
	</form>

	<Loader v-if="searchStore.loader" />
	<div v-else>
		<Movie
			v-for="movie in searchStore.movies"
			:key="movie.id"
			:movie="movie"
			:isSearch="true"
		/>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useSearchStore } from '../stores/SearchStore';
	import Loader from './Loader.vue';
	import Movie from './Movie.vue';

	const searchMovie = ref('');
	const searchStore = useSearchStore();

	const getMovie = (movie) => {
		searchStore.getMovies(movie);
	};
</script>

<style scoped>
	.search-input {
		border: 1px solid #e7e7e7;
		width: 100%;
		height: 40px;
		padding: 0 10px;
		margin-bottom: 20px;
		border-radius: 10px;
	}
</style>
