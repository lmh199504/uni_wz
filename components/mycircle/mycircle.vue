<template>
	<view class="mycircle">
		<cmdProgress type="circle" :percent="progress" stroke-color="#f60" :width="40"></cmdProgress>
		<view class="money" :class="{'money_active':show}">
			+{{money}}
		</view>
	</view>
</template>

<script>
	import {
	    mapGetters
		
	} from 'vuex'
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	
	export default {
		data() {
			return {
				money:20,
				show:false
			};
		},
		computed:{
			...mapGetters(['progress'])
		},
		components:{
			cmdProgress
		},
		watch:{
			progress(newValue){
				// console.log(newValue)
				if(newValue >= 100){
					this.$store.commit('resetProgress')
					this.show = true;
					setTimeout(()=>{
						this.show = false
					},1000)
				}
			}
		}
	}
</script>

<style scoped>
	.money{
		position: absolute;
		top:40%;
		left: 50%;
		transform: translate(-50%,-50%);
		/* background-color: #FFFFFF; */
		/* #ifndef APP-PLUS */
		display: none;
		/* #endif */
		width: 30px;
		height: 30px;
		/* #ifndef APP-PLUS */
		animation: fadeIn 0.4s ease;
		/* #endif */
		border-radius:50% ;
		text-align: center;
		line-height: 30px;
		transform: scale(1);
		color: #f60;
	}
	.money_active{
		/* #ifndef APP-PLUS */
		display: block;
		/* #endif */
	}
	.mycircle{
		position: fixed;
		right: 30rpx;
		bottom: 200rpx;
	}
	@keyframes fadeIn{
		from{
			top:60%;
			transform: scale(1);
		}
		to{
			top:40%;
			transform: scale(0.7);
		}
	}
</style>
