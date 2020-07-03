<template>
	<view class="login">
		<view class="logo">
			<image src="https://weizhuan12.oss-cn-beijing.aliyuncs.com/w_logo.png" mode=""></image>
		</view>
		
		<view class="login_box">
			<view class="username">
				<input type="text" value="" placeholder="请输入账号" v-model="formData.username"/>
			</view>
			<view class="password">
				<input type="password" value="" v-model="formData.password" placeholder="请输入密码"/>
			</view>
			<view class="login_btn">
				<button type="default" @click="wxLogin">登录</button>
			</view>
		</view>
		<view class="other_box">
			<p class="title">其他登录方式</p>
			<view class="login_item" @click="wxLogin">
				<img src="https://weizhuan12.oss-cn-beijing.aliyuncs.com/wx_login.png" alt="">
				<p>微信登录</p>
			</view>
			<view class="agree">
				<text>登陆即同意</text>
				<text class="color_text">《用户协议》</text>
				<text>和</text>
				<text class="color_text">《隐私条款》</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData:{
					username:'',
					password:''
				}
			}
		},
		methods: {
			wxLogin(){
				console.log("login")
				 uni.switchTab ({
					url: '/pages/index/index',
					success: () => {
						console.log("success")
					},error:(err) => {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.login{
		padding: 40rpx;
	}
	.logo{
		width: 150rpx;
		height: 150rpx;
		margin: 180rpx auto 120rpx;
	}
	.logo image{
		width: 100%;
		height: 100%;
	}
	.username,.password{
		border-bottom: 1rpx solid #A0A0A0;
		height: 100rpx;
		line-height: 100rpx;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}
	.username input,.password input{
		background-color: transparent;
		height: 100rpx;
	}
	.login_btn button{
		height: 100rpx;
		width: 100%;
		border: none;
		outline: none;
		background:rgba(255,72,77,0.7);
		color: #FFFFFF;
		border-radius: 50rpx;
		margin-top: 64rpx;
	}
	.other_box{
		text-align: center;
		position: absolute;
		bottom: 34rpx;
		width: 100%;
		left: 50%;
		transform: translate(-50%,0);
	}
	.other_box .title{
		color: #666666;
		font-size: 24rpx;
		margin-bottom: 30rpx;
	
	}
	.other_box .login_item{
		margin-bottom: 60rpx;
	}
	.other_box .login_item img{
		width: 82rpx;
	}
	.other_box .login_item p{
		font-size: 18rpx;
		color: #333333;
	}
	.agree text{
		font-size: 24rpx;
		color: #333333;
	}
	.agree .color_text{
		color: #FF484D;
		
	}
</style>
