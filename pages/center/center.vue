<template>
	<view class="personal_center">
		<view class="user_message">
			<image src="../../static/w-imgs/hx.png" mode=""></image>
			消息
		</view>	
		<view class="message">
			<view class="user_header">
				<image src="../../static/999.png" mode=""></image>
			</view>
			<view class="user_info">
				<view class="user_name">
					方可战胜罗志祥
				</view>
				<view class="user_code">
					我的邀请码：A8884444
					<!-- <image src="../../static/w-imgs/code_right.png" mode=""></image> -->
				</view>
			</view>
			
			<view class="user_sign">
				<image src="../../static/w-imgs/gold.png" mode=""></image>
				签到
			</view>
				
			
		</view>
		<view class="user_money">
			<view class="money_item">
				<view class="money_num">123456</view>
				<view class="money_title">我的金币</view>
			</view>
			<view class="money_item">
				<view class="money_num">999999</view>
				<view class="money_title">今日金币</view>
			</view>
			<view class="money_item">
				<view class="money_num" style="text-align: center;">66666</view>
				<view class="money_title">今日阅读（分钟）</view>
			</view>
		</view>
		
		<view class="invite">
			<text>去填写邀请码，获得</text>
			<text class="invite_gold">1000金币</text>
			<text>哦</text>
			<image src="../../static/w-imgs/center_back.png" mode=""></image>
		</view>
		
		<view class="center_app">
			<view class="app_item">
				<view>
					<image src="../../static/w-imgs/center_code.png" mode=""></image>
				</view>
				<view class="app_title">面对面红包</view>
			</view>
			<view class="app_item">
				<view>
					<image src="../../static/w-imgs/center_invite.png" mode=""></image>
				</view>
				<view class="app_title">邀请赚钱</view>
			</view>
			<view class="app_item">
				<view>
					<image src="../../static/w-imgs/center_bag.png" mode=""></image>
				</view>
				<view class="app_title">我的钱包</view>
			</view>
			
		</view>
		
		<view class="center_banner">
			<image src="../../static/w-imgs/center_banner.png" mode=""></image>
		</view>
		
		<view class="center_menu">
			<view class="menu_item">
				<view class="menu_item_left">
					<image src="../../static/w-imgs/center_manage.png" mode=""></image>
					<text>账号管理</text>
				</view>
				<view class="menu_item_right">
					<image src="../../static/w-imgs/right.png" mode=""></image>
				</view>
			</view>
			
			<view class="menu_item">
				<view class="menu_item_left">
					<image src="../../static/w-imgs/center_fk.png" mode=""></image>
					<text>反馈与帮助</text>
				</view>
				<view class="menu_item_right">
					<image src="../../static/w-imgs/right.png" mode=""></image>
				</view>
			</view>
			
			
			<view class="menu_item">
				<view class="menu_item_left">
					<image src="../../static/w-imgs/center_set.png" mode=""></image>
					<text>设置</text>
				</view>
				<view class="menu_item_right">
					<image src="../../static/w-imgs/right.png" mode=""></image>
				</view>
			</view>
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
		background-color: #EEEEEE;
	}
	.personal_center{
		
		padding: 30rpx;
	}
	.message{
		width: 100%;
		display: flex;
		position: relative;
		justify-content: space-between;
	}
	.user_header{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
	}
	.user_header image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.user_name{
		margin-top: 10rpx;
	}
	.user_code{
		font-size: 30rpx;
		color: #333333;
		margin-top: 10rpx;
	}
	.user_code image{
		width: 30rpx;
		height: 30rpx;
	}
	.user_sign image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
		vertical-align: -5rpx;
	}
	.user_sign{
		background-color: #FF484D;
		/* height: fit-content; */
		height: 60rpx;
		padding: 5rpx 5rpx 5rpx 30rpx;
		margin-top: 20rpx;
		margin-right: -30rpx;
		border-radius: 30rpx 0 0 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		color: #FFFFFF;
		line-height:50rpx ;
	}
	.user_message{
		text-align: right;
		color: #333333;
		font-size: 30rpx;
	}
	.user_message image{
		width: 30rpx;
		height: 40rpx;
		margin-right: 10rpx;
		vertical-align: -10rpx;
	}
	.user_money{
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
	}
	.money_item{
		flex: 1;
		color: #333333;
		font-size: 30rpx;
		/* text-align: center; */
		font-weight: 500;
	}
	.money_title{
		white-space: nowrap;
	}
	.invite{
		margin-top: 30rpx;
		text-align: center;
		background-image: url(../../static/w-imgs/invit_b.png);
		background-size: 100% 100%;
		font-size: 30rpx;
		padding: 10rpx 0;
		color: #FFFFFF;
	}
	.invite image{
		margin-left: 15rpx;
		width: 20rpx;
		height: 30rpx;
		vertical-align: -6rpx;
		/* height: 20rpx; */
	}
	.invite .invite_gold{
		color: #FFE486;
	}
	.center_app{
		border-radius: 10rpx;
		background-color: #FFFFFF;
		display: flex;
		margin-top: 30rpx;
	}
	.app_item{
		flex: 1;
		/* pad: ; */
		padding: 30rpx;
		text-align: center;
	}
	.app_item image{
		width: 60rpx;
		height: 60rpx;
	}
	.app_title{
		font-size: 30rpx;
	}
	
	.center_banner image{
		margin-top: 30rpx;
		width: 100%;
		height: 180rpx;
	}
	.center_menu{
		background-color: #FFFFFF;
		border-radius: 10rpx;
		padding: 30rpx;
	}
	.menu_item{
		display: flex;
		margin-bottom: 40rpx;
		justify-content: space-between;
	}
	.menu_item:last-child{
		margin-bottom: 0;
	}
	.menu_item_left{
		font-size: 30rpx;
		color: #333;
		line-height: 45rpx;
	}
	.menu_item_left image{
		width: 45rpx;
		height: 45rpx;
		margin-right: 15rpx;
		vertical-align: -10rpx;
	}
	.menu_item_right image{
		width: 30rpx;
		height: 40rpx;
	}
</style>
