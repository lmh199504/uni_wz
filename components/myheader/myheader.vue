<template>
	<view class="mk_top">
		<view class="mk_top_left">
			<view class="mk_top_item head_img">
				<image src="../../static/w-imgs/w-logo.png" alt="" class="head_img_image"></image>
			</view>
			<view class="mk_top_item mymoney">
				<view class="gold">
					<image src="../../static/w-imgs/gold.png" mode="" class="gold_image"></image>
					<text class="gold_text">1000</text>
				</view>
				<view class="money">
					<image src="../../static/w-imgs/money.png" mode="" class="money_image"></image>
					<text class="money_text">1000</text>
				</view>
			</view>
			<view class="mk_top_item">
				<button type="default" class="mk_top_item_button">提现</button>
			</view>
		</view>
		<view class="mk_top_right">
			<view class="mk_top_item positionImg mk_top_item_r">
				<image src="../../static/w-imgs/lingdan.png" mode="" class="positionImg_img"></image>
			</view>
			<view class="mk_top_item positionImg mk_top_item_r">
				<image src="../../static/w-imgs/search.png" mode=""  class="positionImg_img"></image>
			</view>
			<view class="mk_top_item positionImg mk_top_item_r" style="color: #FFFFFF;">
				<image src="../../static/w-imgs/redpack.png" mode="" class="positionImg_img"></image>
				<view class="countdown" style="color: #FFFFFF;">00:20</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.mk_top{
		height: 150rpx;
		background-color: #FFFFFF;
		padding:0 10rpx;
		position: relative;
	}
	.mk_top_left,.mk_top_right{
		display: flex;
		align-items: center;
		height: 100%;
		flex-direction: row;
	
	}
	.mk_top_item{
		height: 100%;
		line-height: 150rpx;
		margin: 10rpx;
		position: relative;
	}
	.mk_top_right{
		position: absolute;
		right: 10rpx;
		top: 0;
	}
	.mk_top_item_r,.head_img{
		width: 90rpx;
		height: 90rpx;
	}
	
	.head_img_image{
		width: 90rpx;
		height: 90rpx;
	}
	.positionImg_img{
		width: 90rpx;
		height: 90rpx;
		border-radius: 45rpx;
		position: absolute;
/* 		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%); */
	}
	
	.gold_image{
		margin-top: 30rpx;
	}
	.money_image{
		margin-top: 20rpx;
	}
	.gold_image,.money_image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
	.gold{
		height: 75rpx;
		line-height: 100rpx;
		/* #ifndef APP-PLUS */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.money{
		height: 75rpx;
		line-height: 70rpx;
		/* #ifndef APP-PLUS */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.money_text{
		line-height: 75rpx;
	}
	.gold_text{
		line-height: 90rpx;
	}
	.mk_top_item_button{
		height: 40rpx;
	/* 	width: 93rpx; */
		line-height: 40rpx;
		text-align: center;
		font-size: 26rpx;
		border-radius: 20rpx;
		color: #FFFFFF;
		background-color: #FF484D;
		margin-top: 90rpx;
	}
	.countdown{
		color: #FFFFFF;
		text-align: center;
		background-color:rgba(0,0,0,0.5);
		height: 30rpx;
		border-radius: 15rpx;
		line-height: 30rpx;
		transform: scale(0.7);
		margin-top: 50rpx;
		font-size: 30rpx;
	}
</style>
