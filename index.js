const http = require('http');
const fs = require('fs');
const express = require('express');
var apps = express();
var Routerer = express.Router();
var sock = require('./logSock.js')
const Routerers = require('./routeOfLog.js');


process.on('uncaughtException', function (err) {
 console.log(err);
});


/*

const electron = require('electron');
const { app, BrowserWindow } = require('electron');
var teubet = 0;
function createWindow () {
teubet += 1;

 const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "/favicon.ico",
	title: "ClientGame",
    show: false,
    autoHideMenuBar: true,
webPreferences: {
	nativeWindowOpen: true,
	nodeIntegration: false
  }
  });

  win.setMenu(null);
  if (teubet == 1) {
win.maximize();
  }
  win.loadURL('https://localhost:4321');
win.once('ready-to-show', () => {
  win.show();
});
}

app.on('ready', () => {
  console.log('Ready');
createWindow();
});

app.on('window-all-closed', () => {
  process.exit(0);
    app.quit();
});
*/
function routes () {
function rangeRoutes (Str, extActive) {
	var initdoss = Str.split("*")[0];
	var initext = Str.split("*")[1];
	var initlistenRes = Str.split("*")[2].split("%");
	console.log(initlistenRes);
	for (var iL = 0; iL < initlistenRes.length; iL++) {
		CreateRoutes(initlistenRes[iL], initdoss, initext);
	}
function CreateRoutes (listenRes, doss, ext) {	
	if (extActive) {
	Routerer.get("/"+listenRes, function (req, res, next) {
res.sendFile(__dirname + "/" + doss + "/" + listenRes + ext, function() {
 });
});
} else {
	Routerer.get("/"+listenRes + ext, function (req, res, next) {
res.sendFile(__dirname + "/" + doss + "/" + listenRes + ext, function() {
 });
});	
}
}
}
Routerer.get("/importModules", function (req, res, next) {
	var sock = new Buffer.from(fs.readFileSync(__dirname + "/Game/importModules.js").toString().replace("MAPPING", req.query.map));

	res.send(sock);
	res.end();

});
Routerer.get("/scriptSock/Wsocket.js", function (req, res, next) {
	var sock = new Buffer.from(fs.readFileSync(__dirname + "/Game/scriptSock/WsocketCopie.js").toString().replace("sssss", req.query.map));

	res.send(sock);
	res.end();


});
var Manivelle = "Manivelle*.js*importModules%createjs%jquery";
rangeRoutes(Manivelle, true);//en front true veut dire que l'on appel sans .js
//en front false veut dire que l'on appel avec .js
var objects = "Game*.js*script";
rangeRoutes(objects, false);
var pngLoad = "Graphisme*.png*fond%perso%trees%sortia%zombie%vita%sort%build%v1fond";
rangeRoutes(pngLoad, false);
var jpgLoad = "Graphisme*.jpg*ground%header%menu%zonedefia";
rangeRoutes(jpgLoad, false);
var cssLoad = "Graphisme*.css*feuille";
rangeRoutes(cssLoad, false);
// soit "pur" = true ou false
return Routerer;
}

Routerers.LoadLog_("", "inscription", "done", true, 1);
Routerers.LoadLog_("", "connexion", "", false, 0);
apps.use(Routerers.SlaSh_("", "inscription", "connexion", "/"));
apps.use(routes());

var server = http.createServer({ 
cert: fs.readFileSync("cert.pem"),
key: fs.readFileSync("key.pem"),
requestCert: false,
rejectUnauthorized: false },
 apps );

sock.Init__Socklog(apps, server, Routerer, "");

server.listen(8080, "127.0.0.1");
	

          
