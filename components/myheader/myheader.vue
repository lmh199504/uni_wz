<template>
	<view class="mk_top">
		<view class="mk_top_left">
			<view class="mk_top_item head_img positionImg">
				<image src="../../static/w-imgs/w-logo.png" alt=""></image>
			</view>
			<view class="mk_top_item mymoney">
				<view class="gold"><image src="../../static/w-imgs/gold.png" mode=""></image><text>1000</text></view>
				<view class="money"><image src="../../static/w-imgs/money.png" mode=""></image><text>1000</text></view>
			</view>
			<view class="mk_top_item">
				<button type="default">提现</button>
			</view>
		</view>
		<view class="mk_top_right">
			<view class="mk_top_item positionImg">
				<image src="../../static/w-imgs/lingdan.png" mode=""></image>
			</view>
			<view class="mk_top_item positionImg">
				<image src="../../static/w-imgs/search.png" mode=""></image>
			</view>
			<view class="mk_top_item positionImg">
				<image src="../../static/w-imgs/redpack.png" mode=""></image>
				<view class="countdown">00:20</view>
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
		flex-direction: unset;
	
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
	.mk_top_right .mk_top_item,.head_img{
		width: 90rpx;
		height: 90rpx;
	}
	
	.positionImg image{
		width: 90rpx;
		height: 90rpx;
		border-radius: 45rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	
	.gold image{
		margin-top: 30rpx;
		
	}
	.money image{
		margin-top: 20rpx;
	}
	.gold image,.money image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
	.mymoney .gold{
		height: 75rpx;
		line-height: 100rpx;
		display: flex;
		flex-direction: row;
	}
	.mymoney .money{
		height: 75rpx;
		line-height: 70rpx;
		display: flex;
		flex-direction: row;
	}
	
	.mk_top_item button{
		height: 40rpx;
	/* 	width: 93rpx; */
		line-height: 40rpx;
		text-align: center;
		font-size: 26rpx;
		border-radius: 20rpx;
		color: #FFFFFF;
		background-color: #FF484D;
		margin-top: 82rpx;
	}
	.countdown{
		text-align: center;
		color: #FFFFFF;
		background-color:rgba(0,0,0,0.5);
		height: 30rpx;
		border-radius: 15rpx;
		line-height: 30rpx;
		transform: scale(0.7);
		margin-top: 60rpx;
		font-size: 15rpx;
	}
</style>
