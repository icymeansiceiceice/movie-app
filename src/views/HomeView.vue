<template>
  <div class="home">
    <NavBar></NavBar>
    <dev id="main-section">
      <SideBar></SideBar>
      <MovieList></MovieList>
    </dev>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import MovieList from '../components/MovieList.vue';

export default {
    components:{
      NavBar,
      SideBar,
      MovieList
    }
 
}
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;

		#main-section {
			display: flex;
			margin-top: 50px;
		}
	}
</style>
