<script>
export default {

	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	
	onLaunch: function() {
		console.log('App Launch');
		
		
		//#ifdef APP-PLUS
		//app启动时打开启动广告页
		var w = plus.webview.open(
			'hybrid/html/advertise/advertise.html',
			'本地地址',
			{ top: 0, bottom: 0, zindex: 999 },
			'fade-in',
			500
		);
		//设置定时器，4s后关闭启动广告页
		setTimeout(function() {
			plus.webview.close(w);
		}, 4000);
		//#endif
		
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
