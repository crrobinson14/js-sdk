module.exports = function(grunt) {

	var shared = require("../lib.js").init(grunt);
	var _ = grunt.utils._;

	grunt.registerInitTask("check", "Different checks (versions, pre-release, post-release, ...)", function(target) {
		var done = this.async();
		if (!target) target = "config";
		if (target === "config") {
			checkConfigVersion(this.args[1] === "all", done);
		} else if (target === "uploaded") {
			checkUploadedFiles(done);
		}
	});

	function checkConfigVersion(checkAll, done) {
		var cfg = grunt.config("envConfig");
		if (_.isEmpty(cfg)) {
			grunt.fail.fatal("Environment config files are absent. Execute `" + "grunt generate:config".cyan + "`");
		}
		var sample = grunt.file.readJSON("config/environments/sample.json");
		if (sample.version > cfg.version) {
			grunt.fail.fatal("Environment config files are outdated. Execute `" + "grunt generate:config".cyan + "`");
		}
		var check = function(env) {
			var filename = "config/environments/" + env + ".json";
			var content = grunt.file.read(filename);
			if (content.indexOf("[PLACEHOLDER]") !== -1) {
				grunt.fail.fatal("There are unfilled fields in the file " + filename.cyan + " . Find [PLACEHOLDER] string and replace it with the corresponding value.".yellow);
			}
		};
		if (!checkAll) {
			check(shared.config("env"));
		} else {
			_.each(shared.config("environments"), check);
		}
		grunt.log.ok("Environment config files are good.");
		done();
	}

	function checkUploadedFiles(done) {
		var http = require("http");
		var async = require("async");
		var url = require("url");
		if (shared.config("env") !== "production") {
			grunt.fail.fatal("This check can be performed only in \"production\" environment.");
		}
		var i = 0, URLs = [];
		var headersByType = {
			"js": {
				"content-type": "application/javascript; charset=utf-8",
				"content-encoding": "gzip"
			},
			"css": {
				"content-type": "text/css",
				"content-encoding": "gzip"
			},
			"html": {
				"content-type": "text/html",
				"content-encoding": "gzip"
			},
			"png": {
				"content-type": "image/png"
			},
			"gif": {
				"content-type": "image/gif"
			},
			"jpg": {
				"content-type": "image/jpeg"
			}
		};
		var expectedHeaders = function(type, URL) {
			var headers = headersByType[type];
			if (!headers) {
				grunt.fail.fatal("Expected headers are not specified for " + type + " files");
			}
			headers["cache-control"] = "max-age=86400";
			// we might want to check the URL to set different headers for different files
			return headers;
		};
		var collectURLs = function(uploads) {
			_.each(uploads, function(upload) {
				var baseSrcPath = grunt.template.process(upload.baseSrcPath);
				var dest = grunt.template.process(upload.dest);
				var src = grunt.file.expandFiles(baseSrcPath + upload.src);
				_.each(src, function(srcName) {
					URLs.push("http:" + grunt.config("envConfig.baseURLs.cdn") + dest + srcName.replace(baseSrcPath, ""));
				});
			});
		};
		_.each(grunt.config("envConfig.release.targets"), function(uploads) {
			if (_.isArray(uploads)) {
				collectURLs(uploads);
			} else {
				_.each(uploads, function(upload) {
					collectURLs(upload);
				});
			}
		});
		URLs.sort();
		async.eachSeries(URLs, function(URL, next) {
			var type = URL.match(/\.([^\.]+)$/)[1];
			var urlOptions = url.parse(URL);
			urlOptions.headers = {
				"Accept-Encoding": "gzip,deflate"
			};
			grunt.log.write("[" + ++i + "/" + URLs.length + "] " + URL.yellow + " ... ");
			http.get(urlOptions, function(response) {
				var headers = {};
				if (response.statusCode === 404) {
					grunt.log.writeln("missing".red);
					next();
					return;
				}
				_.each(expectedHeaders(type, URL), function(expected, name) {
					var received = response.headers[name];
					if (!received || received !== expected) {
						headers[name] = {
							"expected": expected,
							"received": received || "[UNDEFINED]"
						};
					}
				});
				if (!_.isEmpty(headers)) {
					grunt.log.writeln("wrong headers".red);
					grunt.log.writeln(JSON.stringify(headers, null, "\t"));
					next();
					return;
				}
				grunt.log.ok();
				next();
			}).on("error", function(e) {
				grunt.log.writeln("download error: ".red + e.message);
				next();
			});
		}, function(err) {
			err && grunt.warn(err);
			done();
		});
	}
};
