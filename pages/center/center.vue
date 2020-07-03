<template>
	<view class="personal_center">
		<view class="message">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onUnload(){
			console.log("center unload")
		},
		onShow(){
			console.log("center onshow")
		},
		onHide(){
			console.log("center onHide")
		}
	}
</script>

<style scoped>
	page{
		width: 100%;
		height: 100%;
		
	}
</style>
