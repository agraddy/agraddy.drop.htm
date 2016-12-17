var tap = require('agraddy.test.tap')(__filename);
var response = require('agraddy.test.res');

var drop = require('../');

// Create a fake response stream
var res = response();

process.chdir('test');
drop('views/test.htm')(null, {}, res);

res.on('finish', function() {
	console.log('finish');
	tap.assert.equal(res._body, 'test\n', 'Body should match contents.');
});

