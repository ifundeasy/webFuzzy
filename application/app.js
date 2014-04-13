/**
 * Created by rappresent on 4/13/14.
 */

$('section').ready(function(){
	config.initView('home.html', function(plain){
		$(plain).appendTo('section');
		require(['application/controllers/home'], function(someModule) {
			log(arguments)
		});
	})
});