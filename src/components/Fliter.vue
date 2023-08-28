<template>
    <div id="filters">
        <h3>Filter</h3>
		<p v-for="(item, index) in filter" :key="index" @click="applyFilter(item)">
			{{ item.name }}
		</p>
    </div>
</template>

<script>
import { ref } from 'vue';
import Filter from '../assets/filter-list';
import { useStore } from 'vuex';

export default {
	setup(props) {
			let filter = ref(Filter);
			const store = useStore();
			let applyFilter = (item)=>{
				store.dispatch("filter",item);
			};

		return {
			filter,
			applyFilter
		}
	}
}
</script>

<style lang='scss' scoped>
	#filters {
		text-align: left;
		color: rgb(143, 143, 143);
		cursor: pointer;

		p {
			margin-left: 10px;
		}
	}
</style>