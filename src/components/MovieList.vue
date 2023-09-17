<template>
    <div id="movie-container">
       
		<Movie v-for="(item) in getMovies" :key="item.id" :movie = "item" />
			
    </div>
</template>

<script>
import { computed,ref } from 'vue'
import { useStore } from 'vuex';
import Movie from './Movie';


export default {
	components:{
		Movie
	},
	setup(props) {
		let movies = ref([]);
		const store = useStore();

		let getMovies = computed(()=>{
			return movies =  store.getters.getMovies;
		});
		

		return{
			movies,
			getMovies
			
		}
	}
}
</script>

<style lang='scss' scoped>
	#movie-container {
		padding-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		flex-grow: 2;
		justify-content: center;
	}
</style>