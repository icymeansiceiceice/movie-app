<template>
  <div id="movie-preview">
    <NavBar/>
    <div id="movie-container">
        <div id="movie-poster">
            <img :src="movie.poster" alt="Movie Poster">
        </div>
        <div id="movie-info">
            <div>
                <h1>{{ movie.name }}</h1>
                <h3>{{ movie.year }}</h3>
                <h3>{{ movie.genre }}</h3>
                <h3><span :style="{'background-color': getRatingColor()}">{{ movie.rating }}</span></h3>
                <h3>Budget : {{ movie.budget }}</h3>
                <h3>Box office : {{ movie.boxOffice }}</h3>
                <h3>Actors: 
                    <span v-for="(item, index) in movie.actors" :key="index">
                        {{ item.actors.name }}
                    </span>
                </h3>
                <h3>
                    <strong>StoryLine: </strong>
                    {{ movie.storyline }}
                </h3>
            </div>
            <div id="options">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import { useStore } from 'vuex';

export default {
    components:{
        NavBar
    },
    props:[
        'id'
    ],
    setup(props) {
        let id = props.id;
        let movie = ref({});
        const store = useStore();

        let getRatingColor = ()=>{
		if(movie.rating >7){
			return "#5eb85e";
		}
		if(movie.rating > 4){
			return "#ffa809";
		}
		return "#e10505"; 
	};

    onMounted(() => {
        console.log(id);
        movie = store.getters.getMovieById(parseInt(id));
    });


    return {
		getRatingColor,
        movie
	}
    }

}
</script>

<style lang='scss' scoped>
	#movie-preview {
		display: flex;
		overflow: auto;

		#movie-container {
			display: flex;
			justify-content: center;
			flex-grow: 1;
			margin-top: 90px;
			padding: 0 1rem;

			#movie-poster {
				flex-grow: 1;
				min-width: 400px;

				img {
					max-width: 300px;
					box-shadow: 0 14px 28px rgba(0, 0, 0, 0.473),
						0 10px 10px rgba(0, 0, 0, 0.473);
					margin-bottom: 7px;
					border-radius: 15px;
				}
			}

			#movie-info {
				display: flex;
				flex-grow: 2;
				text-align: left;
				flex-direction: column;
				justify-content: space-between;

				h1 {
					color: white;
					margin-bottom: 2rem;
				}

				h3 {
					color: rgb(143, 143, 143);

					#movie-rating {
						display: flex;
						justify-content: center;
						border-radius: 10px;
						font-size: 20px;
						width: 53px;
						color: white;
					}

					span {
						margin-right: 5px;
					}
				}

				#options {
					max-width: 180px;
					display: flex;
					justify-content: space-between;
					margin-top: 1rem;

					.edit {
						height: 30px;
						width: 80px;
						background-color: #5eb85e;
						border: none;
						text-transform: uppercase;
						font-weight: 600;
						border-radius: 10px;
						outline: none;
						cursor: pointer;
					}

					.delete {
						height: 30px;
						width: 80px;
						background-color: #e10505;
						border: none;
						text-transform: uppercase;
						font-weight: 600;
						border-radius: 10px;
						outline: none;
						cursor: pointer;
					}
				}
			}
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

		#update-movie {
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