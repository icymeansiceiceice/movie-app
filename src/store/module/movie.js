import movieList from '../../assets/movie-list'


const state ={
    movies : movieList,
    search : ''
};


const mutations = {
    searchMovie(state,search){
        state.search = search
    }
};

const actions = {
    search({commit},search){
        commit('searchMovie',search);
    }
};

const getters = {
    getMovies: state =>{
        return state.movies.filter(movie =>{
            return movie.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1;
        })  ;
    }
};

export default{
    state,
    mutations,
    actions,
    getters
};
