<template>
    <div id="movie-container">
        movie list  
		<ul>
			<li v-for="(item, index) in movie" :key="index">
				{{ item.name }}
			</li>
		</ul>
    </div>
</template>

<script>
export default {
	setup(props) {
		let movie = [
			{id:1,
			name : 'what'},
			{id:2,
			name : 'g'},
			{id:3,
			name : 'gg'},
		];
		return{
			movie
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