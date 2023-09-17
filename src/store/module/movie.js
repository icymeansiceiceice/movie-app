import movieList from '../../assets/movie-list'


const state ={
    movies : movieList,
    search : '',
    filter : {
        key: 'rating',
        order : 'desc'
    }
};


const mutations = {
    searchMovie(state,search){
        state.search = search
    },
    filter(state,filter){
        state.filter = filter
    },
    addMovie(state,movie){
        state.movies.push(movie);
    },
    deleteMovie(state,id){
        state.movies.splice(state.movies.findIndex(movie => movie.id === id),1);
    },
    updateMovie(state,movie){
        state.movies = state.movies.map(oldMovie=>{
            if(movie.id === oldMovie.id){
                return movie;
            }
            return oldMovie;
        });
    }
};

const actions = {
    search({commit},search){
        commit('searchMovie',search);
    },
    filter({commit},filter){
        commit('filter',filter);
    },
    addMovie({commit,state},movie){
        movie.id =state.movies.length +1
        commit('addMovie',movie);
    },
    deleteMovie({commit},id){
        commit('deleteMovie',id);
    },
    updateMovie({commit,state},movie){
        movie.id =state.movies.length +1
        commit('updateMovie',movie);
    }
};

const getters = {
    getMovies: state =>{
        return state.movies.filter(movie =>{
            return movie.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1;
        }).sort(compare(state.filter))  ;
    },
    getMovieById: state => id => {
        return state.movies.find(movie => movie.id === id);
    }
};

const compare = ({key,order})=>{
    return (a,b) => {
        let result = 0;
        if(a[key] > b[key]){
            result = 1;
        };
        if(a[key] < b[key]){
            result = -1;
        };
        if(order == 'asc'){
            return result;
        };
        return result*-1;
    }
};


export default{
    state,
    mutations,
    actions,
    getters
};
