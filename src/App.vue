<template>
	<main class="main">
		<header class="header">
			<img class="header-logo" src="/logo.svg" alt="logo" />
			<h1 class="header-title">My Favorite Movies</h1>
		</header>

		<div class="tabs">
			<button :class="['btn', { btn_green: movieStore.activeTab === 1 }]" 
			@click="setActiveTab(1)">
				Favorite
			</button>
			<button :class="['btn', { btn_green: movieStore.activeTab === 2 }]" 
			@click="setActiveTab(2)">
				Search
			</button>
		</div>

		<div class="movies" v-if="movieStore.activeTab === 1">
			<div class="movies-list">
				<h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
				<Movie
					v-for="movie in movieStore.watchedMovies"
					:key="movie.id"
					:movie="movie"
				/>
			</div>
			<div class="movies-list">
				<h3>All Movies (count: {{ movieStore.totalMoviesCount }})</h3>
				<Movie
					v-for="movie in movieStore.movies"
					:key="movie.id"
					:movie="movie"
				/>
			</div>
		</div>

		<div class="search" v-else="movieStore.activeTab === 2">Search</div>
	</main>
</template>

<script setup>
	import Movie from './components/Movie.vue';
	import { useMovieStore } from './stores/MovieStore';

	const movieStore = useMovieStore();

	const setActiveTab = (id) =>{
		movieStore.setActiveTab(id);
	}
</script>

<style scoped>
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
	.header-logo {
		max-width: 50px;
		margin-right: 10px;
	}
	.btn {
		border: none;
		width: 100px;
		height: 40px;
		font-size: 14px;
		margin: 0 10px;
		border-radius: 10px;
		cursor: pointer;
		background: #efefef;
	}
	.btn:hover {
		opacity: 0.7;
	}
	.btn_green {
		background: #37df5c;
	}

	.tabs {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
	}
</style>
