const http = require('http');
const electron = require('electron')

electron.shell.openExternal("< example url >")

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Thank you, you can now close this page");
    console.log(req.url)
    res.end();
}).listen(8081);
