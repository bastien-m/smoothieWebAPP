module.exports = function(grunt) {

	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					base: './'
				} 
			}
		},
		jshint: {
			all: ['app.js', 'directives/*.js', 'filters/*.js','services/*.js', 'controllers/*.js']
		},
		uglify: {
			build: {
				options: {
					sourceMap: true,
					sourceMapName: 'sourcemap.map'
				},
				files: {
					'build/smoothie-app.min.js': ['app.js', 'directives/*.js', 'filters/*.js','services/*.js', 'controllers/*.js']
				}
			}
		},
		concat: {
			options: {
				separator: ';\n'
			},
			javascript: {
				src: [ 'bower_components/jquery/dist/jquery.min.js',
					 	'bower_components/angular/angular.min.js',
						'bower_components/angular-flash-messages/angular-flash.js',
						'bower_components/angular-route/angular-route.min.js',
						'bower_components/materialize/dist/js/materialize.min.js'],
				dest: 'build/vendor.min.js'
			},
			css: {
				src: ['bower_components/materialize/dist/css/materialize.min.css',
						'css/app.css'
					 ],
				dest: 'build/smoothie-app.min.css'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/app.css': 'css/app.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['css/**/*.scss'],
				tasks: ['sass', 'concat:css'],
				options: {
					livereload: {
						port: 9000
					}
				}
			}, 
			js: {
				 files: ['app.js', 'directives/*.js', 'filters/*.js','services/*.js', 'controllers/*.js'],
				 tasks: ['jshint:all', 'uglify:build'],
				 options: {
				 	livereload: {
				 		port: 9000
				 	}
				 }
			},
			html: {
				files: ['partials/*.html', 'index.html'],
				options: {
					livereload: {
						port: 9000
					}
				}
			},
			build: {
				files: ['bower_components/**'],
				tasks: ['concat:javascript'],
				options: {
					livereload: {
						port: 9000
					}
				}
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', ['connect', 'watch']);

}