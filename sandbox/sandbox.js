var readdir = require("../lib/readdir-plus");

if (false) {
	readdir("../tests/root", function (err, results) {
		console.log(err, results);
	});
}

if (false) {
	readdir("../tests/root", { details: true, recursive: true }, function (err, results) {
		console.log(err, results);
	});
}

if (false) {
	readdir("../tests/root/simple", {stat: true, filter: true}, function (err, results) {
		console.log(err,results);

	});
}

if (true) {
	var results = readdir("../tests/root/simple", {stat: true, sync: true});
	console.log(results);
}