var SphinxClient = require ("./sphinx/lib/sphinxapi"),
    util = require('util'),
    assert = require('assert');

var cl = new SphinxClient();
cl.SetServer('localhost', 9312);
cl.Status(function(err, result) {
        assert.ifError(err);
        console.log(util.inspect(result, false, null, true));
})
cl.Query('search nikhil', function(err, result) { 
        assert.ifError(err);
        console.log(util.inspect(result, false, null, true));
});
