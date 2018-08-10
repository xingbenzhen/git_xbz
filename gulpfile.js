var gulp = require("gulp")
var server = require("gulp-webserver")
var fs = require("fs")
var path = require("path")
var url = require("url")
    // var data = reequire("./mock/")
gulp.task("dev", function() {
    return gulp.src("src")
        .pipe(server({
            port: 8899,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === "/favicon.ico") {
                    return false
                }
                // if (pathname === "/api/reand") {
                //     res.end(JSON.stringify({ code: 1, msg: data }))
                // } else {
                pathname = pathname === "/" ? "index.html" : pathname;
                res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
                    // }

            }
        }))
})