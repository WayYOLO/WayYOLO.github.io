var gulp            = require('gulp');
var del             = require('del');//文件清理
var sass            = require('gulp-ruby-sass'); // CSS预处理/Sass编译
var sourcemaps      = require('gulp-sourcemaps'); // CSS来源地图
var autoprefixer    = require('gulp-autoprefixer');//自动处理浏览器前缀
var filter          = require('gulp-filter');//获取过滤到文件，后续操作会对应过滤文件进行
var cleanCSS        = require('gulp-clean-css');//压缩CSS
var rename          = require('gulp-rename');//重命名

/* = 全局变量
-------------------------------------------------------------- */
//开发环境
var srcPath = {
    css     : 'src/sass/*.scss'
};
//发布环境
var destPath = {
    css     : 'dist/css'
}
// 应当兼容的浏览器版本
var compatBrowser = ['last 2 versions'];

/* = 具体设置
-------------------------------------------------------------- */
// 删除生成的样式文件
gulp.task('clean', function() {
    del(destPath.css);
});
// 编译sass样式
gulp.task('sass',['clean'], function () {
    return sass( srcPath.css, { style: 'expanded', sourcemap: true }) //compressed压缩,compact简洁格式
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(autoprefixer({
            browsers: compatBrowser,
            cascade: true, //是否美化属性值 默认：true
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destPath.css))
        .pipe(filter(destPath.css+'/*.css'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(destPath.css))
});
// 默认任务：监听变化并自动编译
gulp.task('default', ['sass'], function() {
    gulp.watch('src/**/*.scss', ['sass']);
});
