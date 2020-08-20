<template>
	<view class="container">
		<myheader></myheader>
		<view class="content">
			<view class="nav">
				<view class="nav_item" :class="{'nav_item_active':index == 0}" @click="index = 0">推荐</view>
				<view class="nav_item" :class="{'nav_item_active':index == 1}" @click="index = 1">健康</view>
				<view class="nav_item" :class="{'nav_item_active':index == 2}" @click="index = 2">养生</view>
				<view class="nav_item" :class="{'nav_item_active':index == 3}" @click="index = 3">音乐</view>
			</view>
			
			<view class="">
				<swiper :indicator-dots="false" 
				:autoplay="false" 
				:interval="3000" 
				:duration="500" 
				@change="swiperChange" 
				:current="index" 
				class="swiper_group" 
				:style='{"height":height}'>
					<swiper-item class="swiper-item2">
						<suggest :height="scrollHeight"></suggest>
					</swiper-item>
					<swiper-item>
						<suggest :height="scrollHeight"></suggest>
					</swiper-item>
					<swiper-item>
						<suggest :height="scrollHeight"></suggest>
					</swiper-item>
					<swiper-item>
						<suggest :height="scrollHeight"></suggest>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	
	import suggest from '../../components/suggest/suggest.nvue'
	import myheader from '../../components/myheader/myheader.vue'
	import {
	    mapGetters
		
	} from 'vuex'
	export default {
		data() {
			return {
				index:0,
				scrollHeight:900,
				height:""
			}
		},
		onLoad() {
			this.inter = setInterval(()=>{
				this.$store.commit('setProgress',1)
			},500)
		},
		onHide() {
			clearInterval(this.inter)
		},
		onUnload(){
			
			clearInterval(this.inter)
		},
		async mounted() {
		    let info = uni.createSelectorQuery().in(this).select('.swiper_group').boundingClientRect()
			// console.log(info)
		    info.exec(res => {
				// console.log(res)
		        // this.scrollHeight = res[0].height
				
		    })
			
			// console.log(this.getHeight(".nav"))
			let navHeight =  await this.getHeight(".nav")
			let mk_topHeight = await this.getHeight(".mk_top")
			this.height = `calc(100vh - ${navHeight}px - ${mk_topHeight}px)`
			console.log(this.height)
		},

		methods: {
			swiperChange(e){
				this.index = e.detail.current
			},
			getHeight(element){
				return new Promise((resolve,reject) => {
					let height = 0
					let el = uni.createSelectorQuery().in(this).select(element).boundingClientRect()
					el.exec(res => {
						height = res[0].height
						resolve(height)
					})
				})
				
				// return height
			}
		},
		computed:{
			...mapGetters(['progress'])
		},
		components:{
			suggest
		}
	}
</script>

<style scoped>
	

	
	page{
		background-color: #EEEEEE;
		width: 100%;
		display:flex;
		min-height:100%;
	}
	.container {
		font-size: 14px;
		line-height: 24px;
		flex: 1;
		display: flex;

		flex-direction: column;
	}
	.swiper_group{
		flex: 1;
	}
	.content{
		margin-top: 20rpx;
		background-color: #FFFFFF;
		padding: 20rpx;
	}
	
	.nav{
		display: flex;
		border-bottom:1px solid #D2D2D2;
		flex-direction: row;
		
		padding-bottom: 20rpx;
	}
	.nav_item{
		margin-right: 30rpx;
		color: #333333;
		font-size: 32rpx;
	}

	.nav_item_active{
		color: #FF484D!important;
	}
</style>
