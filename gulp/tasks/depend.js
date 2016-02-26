import config       from '../config';
import gulp         from 'gulp';
import uglify       from 'gulp-uglify';
import concat       from 'gulp-concat';

gulp.task('depend', function() {

  return gulp.src(config.dependencies.src)
   .pipe(concat(config.dependencies.name))
   .pipe(uglify())
   .pipe(gulp.dest(config.dependencies.dest));
});
