<template>
    <div id="sidebar">
        <Filter></Filter>
        <button>Add Movie</button>
    </div>

</template>

<script>
import Filter from './Fliter.vue';
export default {
    components:{
        Filter
    }
}
</script>

<style lang='scss' scoped>
	#sidebar {
		display: flex;
		flex-direction: column;
		padding: 10px;
		min-height: 100vh;
		min-width: 150px;
		max-width: 150px;
		flex-grow: 1;
		background-color: #191c1f;
		justify-content: left;

		& > button {
			margin-top: 20px;
			height: 30px;
			background-color: #5eb85e;
			border: none;
			text-transform: uppercase;
			font-weight: 600;
			border-radius: 10px;
			outline: none;
			cursor: pointer;
		}

		#movie-form {
			display: flex;
			flex-direction: column;
			text-align: left;

			& > div {
				display: flex;
				flex-direction: column;

				#actor-input {
					display: flex;
					justify-content: space-between;
				}
			}

			.add-actor {
				background-color: green;
				text-align: center;
				color: white;
				margin-left: 5px;
				height: 100%;
				padding: 2px 10px;
				font-size: 20px;
				padding: 1re;
				align-self: center;
				cursor: pointer;
			}
		}

		#add-movie {
			background-color: #5eb85e;
			border: none;
			padding: 5px;
			width: 70px;
			color: white;
			border-radius: 10px;
			cursor: pointer;
			text-transform: uppercase;
			outline: none;
		}
	}
</style>