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
    }
};

const actions = {
    search({commit},search){
        commit('searchMovie',search);
    },
    filter({commit},filter){
        commit('filter',filter);
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
