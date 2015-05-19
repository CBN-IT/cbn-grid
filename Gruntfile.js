module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			options: {
				sourceMap: true,
				sourceComments: false
			},
			dist: {
				files: {
					'dist/flexgrid.css': 'src/flexgrid.scss',
					'dist/flexgrid-polymer.css': 'src/flexgrid-polymer.scss'
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/flexgrid.css': 'dist/flexgrid.css',
					'dist/flexgrid-polymer.css': 'dist/flexgrid-polymer.css'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compile']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['sass', 'cssmin'] );
};
