<template>
	<div id="app">
	  
    <router-view/>
	
	<van-tabbar v-show="$route.meta.show==true" v-model="active">
		<van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
		<van-tabbar-item to="/Category" icon="search">分类</van-tabbar-item>
		<van-tabbar-item v-if="this.$store.state.showa" to="/Carts" icon="shopping-cart-o">购物车</van-tabbar-item>
		<van-tabbar-item v-if="this.$store.state.showa" to="/about" icon="friends-o">我的</van-tabbar-item>
		<van-tabbar-item v-if="!this.$store.state.showa" to="/Carts1" icon="shopping-cart-o">购物车</van-tabbar-item>
		<van-tabbar-item v-if="!this.$store.state.showa" to="/Login1" icon="friends-o">我的</van-tabbar-item>
	</van-tabbar>
	
	
	
	
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 0
			}
		}
	}
</script>
<style lang="less">
#app {
	
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
