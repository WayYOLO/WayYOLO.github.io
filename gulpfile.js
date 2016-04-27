var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return sass( "src/scss/app.scss", { style: 'expanded', sourcemap: true }) //compressed压缩,compact简洁格式
		.on('error', function (err) {
			console.error('Error!', err.message); 
		})
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'Android >= 4.0'],
			cascade: true, //是否美化属性值 默认：true 
			remove:true //是否去掉不必要的前缀 默认：true 
		}))
		.pipe(sourcemaps.write("maps"))
		.pipe(gulp.dest( "css/")); 
});
gulp.task('default', ['sass'], function() {
	gulp.watch('./src/**/*.scss', ['sass']);
});