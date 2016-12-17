var fs = require('fs');

var mod;

mod = function(input) {
	var rs = fs.createReadStream(input);

	function out(err, req, res, lug) {
		res.writeHead(200, {'Content-type': 'text/html'});
		rs.pipe(res);
	};

	return out;
}

module.exports = mod;
