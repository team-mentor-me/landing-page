/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: "_1600",
            quality: 60
          },
		  {
			  width: 1200,
			  suffix: "_1200",
			  quality: 60
		  },
          {
			  width: 800,
			  suffix: "_800",
			  quality: 60
		  },{
			  name: '500',
			  width: 500,
			  suffix: '_500',
			  quality: 60
		  },{
			  name: '300',
			  width: 300,
			  suffix: '_300',
			  quality: 60
		  }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/img_src/not-fixed',
          dest: 'docs/images'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    // clean: {
    //   dev: {
    //     src: ['docs/images'],
    //   },
    // },

    /* Generate the images directory if it is missing */
    // mkdir: {
    //   dev: {
    //     options: {
    //       create: ['docs/images']
    //     },
    //   },
    // },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'src/images_src/fixed/*.{gif,jpg,png}',
          dest: 'docs/images/',
          flatten: true
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-mkdir');
  //grunt.registerTask('default', ['clean', 'mkdir', 'copy']);
  // grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
  grunt.registerTask('default', [ 'copy', 'responsive_images']);

};


/*
module.exports = function(grunt){
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {},
				sizes: [{
					width: 320,
					height: 240
				},{
					name: 'large',
					width: 640
				},{
					name: "large",
					width: 1024,
					suffix: "_x2",
					quality: 0.6
				}],
				files: [{
					expand: true,
					src: ['app/img/!**!/!*.{jpg,gif,png}'],
					cwd: 'src/',
					dest: 'dist/'
				}]
			}
		},
		copy: {
			dev: {
				files: [{
					expand: true,
					src: ['**!/!*', '!app/img/!**!/!*.*'],
					cwd: 'src/',
					dest: 'dist/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['copy','responsive_images']);
	
}
*/
