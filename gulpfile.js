const { src, dest , watch , series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles(){
    return src(`sass-styling/**/*.scss`)
    .pipe(sass())
    .pipe(dest("css")) //folder where css will be compiled
}

//function to watch for changes in the sass files

function watchTask(){
    watch(['sass-styling/**/*.scss'], buildStyles);
}


//exporting
exports.defaults = series(buildStyles, watchTask);