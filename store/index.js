import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		progress:0
	},
	getters: {

		progress:(state) => {
			return state.progress
		}
	},
	mutations: {
		setProgress:(state,num)=>{
			state.progress = state.progress + num;
		},
		resetProgress:(state)=>{
			state.progress = 0;
		}
	},
	actions: {
		set_progress:(state,num)=>{
			context.commit('setProgress', num);
		}
	}
})



export default store;