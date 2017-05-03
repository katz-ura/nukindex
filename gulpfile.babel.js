import gulp from "gulp";
import webserver from "gulp-webserver";
import minifyHTML from "gulp-htmlmin";
import cleanCSS from "gulp-clean-css";
import uglify from "gulp-uglify";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import transform from "vinyl-transform";
import buffer from "vinyl-buffer";
import cssModulesify from "css-modulesify";

gulp.task("server", () => {
  gulp.src(["build"])
      .pipe(webserver());
});

gulp.task("build", () => {
  buildAssets();
  buildHTML();
  buildCSS();
  buildRenderer();
});

function buildAssets() {
  gulp.src([
    "source/**/*",
    "!source/renderer/**/*",
    "!source/**/*.html",
    "!source/**/*.css"
  ]).pipe(gulp.dest("build"));
}

function buildHTML() {
  gulp.src(["source/**/*.html", "!source/renderer/**/*"])
      .pipe(minifyHTML({
        "collapseWhitespace": true
      }))
      .pipe(gulp.dest("build"));
}

function buildCSS() {
  gulp.src(["source/**/*.css", "!source/renderer/**/*"])
      .pipe(cleanCSS())
      .pipe(gulp.dest("build"));
}

function buildRenderer() {
  browserify({
    "entries": ["source/renderer/renderer.js"],
    "extensions": ["", ".js", ".jsx", ".css"]
  }).plugin(cssModulesify, {
    "output": "./build/styles/bundle.css"
  }).transform(babelify).bundle()
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest("build/renderer"));
}
