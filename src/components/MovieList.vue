<template>
    <div id="movie-container">
        movie list  
		<ul>
			<li v-for="(item, index) in getMovies" :key="index">
				{{ item.name }}
			</li>
		</ul>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex';


export default {
	setup(props) {
		let movie = [];
		const store = useStore();

		let getMovies = computed(()=>{
			return store.getters.getMovies;
		});


		return{
			movie,
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