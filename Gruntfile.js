var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
	lambda_invoke: {
    	default: {
        	options: {
            	file_name: 'CreateThumbnail.js'
        	}
    	}
	},
	lambda_deploy: {
    	default: {
    		arn: 'arn:aws:lambda:us-east-1:115372451355:function:CreateThumbnail'
    	}
    },
	lambda_package: {
    	default: {
                options: {
                    include_time: false,
                    include_version: false
            }
    	}
	}
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])
