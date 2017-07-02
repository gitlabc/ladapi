var gulp = require('gulp'),
    exec = require('child_process').exec;

gulp.task('phpunit', function () {
    exec('vendor/bin/phpunit', function (error, stdout) {
        console.log(stdout);
    });
});

gulp.task('test', function () {
    gulp.watch(['app/**/*.php', 'tests/**/*.php'], { debounceDelay: 2000 }, function(event){
        exec('clear && vendor/bin/phpunit --color=always', function (error, stdout) {
            console.log(stdout);
        });
    });
});
