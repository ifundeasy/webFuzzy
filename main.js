/**
 * Created by rappresent on 4/2/14.
 */

var bower = 'bower/';

'use strict';
require.config({
	paths: {
		/**
		 * bower avaiable library
		 */
		'requirejsDomReady': bower + 'requirejs-domready/domReady',
		'modernizr': bower + 'modernizr/modernizr',
		'jquery'   : bower + 'jquery/dist/jquery.min',
		'bootstrap': bower + 'bootstrap/dist/js/bootstrap.min',

		/**
		 * non bower library
		 */
		'babylonjs': 'lib/js/babylonjs/babylon.1.10.0',
		'handjs'   : 'lib/js/hand-1.3.8',

		/**
		 * custom library from myself
		 */
		'config': 'res/js/config',
		'debug' : 'res/js/debug',

		'webFuzzy': 'application/app'
	},

	/**
	 * todo : your preparation script, and dependencies one to other each (specific)
	 */
	shim: {
		/**
		 * todo : basic crucial librrary, angular no need jQuery, belive it!
		 */
		'bootstrap': {
			'deps'   : ['modernizr', 'requirejsDomReady', 'jquery', 'handjs'],
			'exports': 'bootstrap'
		},

		/**
		 * todo : your custom library dependencies
		 */
		'webFuzzy': {
			'deps'   : ['bootstrap', 'babylonjs', 'debug', 'config'],
			'exports': 'webFuzzy'
		}
	},

	/**
	 * todo : kick start! your application
	 */
	deps: ['webFuzzy']
});

/*
require(['bootstrap', 'babylonjs', 'debug', 'config'], function(){
	log(arguments)
});
*/
