var crypto = require('crypto');
var fs = require('fs');
const Cube = require('olap-cube-js');
var ipLOGey = fs.readFileSync(__dirname + "/" + "lien.txt").toString();
var conectik = 1;
var nameOf = [];
var randOpen = "";
let facts = [
    { id: conectik, name: 'olap-cube-js', mdp: 'impossible' }
];
 
// This is the data schema we need to obtain
let dimensionHierarchies = [
    {
        dimensionTable: {
                    dimension: 'names',
                    keyProps: ['name'],
					otherProps: ['mdp']
                }
		}
];
 

let cube = new Cube({dimensionHierarchies});
cube.addFacts(facts);

function Proto(id, item) {
  Proto[item] = id;
  //console.log(item);
}


for (var id = 0; id < cube.getDimensionMembers('names').length; id ++) {
var P = new Proto(cube.getDimensionMembers('names')[id].id, cube.getDimensionMembers('names')[id].name);
}

module.exports = {
	

PageInscription : function () {

return fs.readFileSync(__dirname + "/" + "logina/inscription.txt").toString();


},
PageLogin : function () {

return fs.readFileSync(__dirname + "/" + "logina/login.html").toString();


},
ipcalcul : function () {

return fs.readFileSync(__dirname + "/" + "ip.txt").toString();


},
ipcalcul2 : function () {

return fs.readFileSync(__dirname + "/" + "lien.txt").toString();


},

firstLogs : function (userName) {

var userBool = true;
var isUserExist = "";
var lockUser = 0;
if (!Proto[userName]) {
lockUser += 1;
userBool = false;
isUserExist = "Valid";
} else {
if (userBool == false && cube.dice({ names: { id: Proto[userName] } }).getDimensionMembers('names').length-1 == 0) {

lockUser = 2;
isUserExist = "Multiple";
} else if (cube.dice({ names: { id: Proto[userName] } }).getDimensionMembers('names')[0].name == userName && userBool == true) {
lockUser += 1;
userBool = false;
isUserExist = "Exist";

} 
}
/*
  if (lockUser == 0 && userBool == true) {
userBool = false;
isUserExist = "Valid";


  }
*/
if (lockUser > 2) {
	return "NULL";
} else {
return isUserExist;
}





},







enregistUser : function (isUserExist, userName, cryptPass) {



if (isUserExist == "Valid" && userName != "Badrequest" && userName != "") {

var addInConectik = [userName, cryptPass];
conectik += 1;
 var conn = [
    { id: conectik, name: userName, mdp: cryptPass }
];
cube.addFacts(conn);
var P = new Proto(cube.getDimensionMembers('names')[cube.getDimensionMembers('names').length-1].id, cube.getDimensionMembers('names')[cube.getDimensionMembers('names').length-1].name);
conn = 0;
P = 0;
addInConectik = "plus_rien_dedans";

} else {
console.log("lockUser manquant");
}

},




































authAccept : function (lockUser, userName, cryptPass) {


var lastUserBool = true;

  

if ((lockUser == "Valid" && lockUser != "Exist" && lastUserBool)) {
lastUserBool = false;
console.log("bonjours le lockUser");

var ceci = '<!DOCTYPE html>' +
"<html>" +
"<head>" +
'<meta https-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
"<title>Connect not load for a reason</title>" +
"</head>" +
"<body>" +
'<form action="' +
"https://"+ipLOGey+"/"+ 
'" method="get">' +
'<input type="submit" value="return"/>'+
'</form>' +
"</body>" +
"</html>";
return ceci;
}
//console.log(cube.dice({ names: { id: Proto[userName] } }).getDimensionMembers('names')[0].mdp);
//console.log(Proto[userName]);
if (!Proto[userName]) {
	return "Valid";
	
} else if (cube.dice({ names: { id: Proto[userName] } }).getDimensionMembers('names')[0].name == userName) {

if (lastUserBool == false || !cube.dice({ names: { id: Proto[userName] } }).getFacts()[0].mdp) {
lockUser = 3;
}
if (lockUser == "Exist") {
      
	 
     
	 
      
    if (cube.dice({ names: { id: Proto[userName] } }).getDimensionMembers('names')[0].name == userName && sha256(cube.dice({ names: { id: Proto[userName] } }).getFacts()[0].mdp) == sha256(cryptPass)) {
	//console.log("+1");
	return "authAccept";
} else {
userName = "";
Badrquest("1");
}

} else {
userName = "";
Badrquest("2");
}


} else if (lastUserBool == false) {
lastUserBool = true;
userName = "";
Badrquest("3");
}



},
slUse : function(lecteur) {


var SITE = fs.readFileSync(__dirname + lecteur);



var html = SITE;

return html;





},




confirmPostUser : function(userN, valueOf) {


if (valueOf == 0) {


var html = new Buffer.from('<!DOCTYPE html>' +
"<html>" +
"<head>" +
"<title>Accueil</title>" +
'<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />' +
"<script src ='jquery'></script>" +
fs.readFileSync(__dirname + "/Doss/head.html").toString() +
"</head>" +
"<body>" +
"<div style='z-index:1; width   : 100%; height  : 100%; position:absolute'>" +
fs.readFileSync(__dirname + "/Doss/body.html").toString().replace(/MAPPING/g, "0") +
`<div style='z-index:10; position:absolute; width   : 100px; height  : 100px;' onclick='function youaish() {
	
	if (document.getElementById("canvas").style.zIndex == 9) {
	document.getElementById("canvas").style.zIndex = -9;
	} else {
	document.getElementById("canvas").style.zIndex = 9;
	}
} youaish()' >Value=CHAt</div>" +
"<div style='z-index:2; position:absolute'>` +
"<h1 id='h1'>" +
userN +
"</h1><br/><input type='text' id='xv' row='15'/><div id='pourcentaa' style='top:0px; left:250px; width   : 350px; height  : 500px; position:absolute;'><div id='pourcent' style='line-height:25px; background-color:rgba(1,1,1,0); font-size: 24px;'></div></div><br/>" +
"<div style='margin:left; position:relative'>Bonjour, " +
userN +
"__</div>" +
"<input type='button' value='Chat send' id='selection'/>" +
"</div>" +
"</div>" +
"</body>" +
"</html>");

return html;


} else {
	
var html = "impossible";
return html;

}

}




};







/*
'<form action="' +
line + 
'" method="post" style="margin:right; position:relative">' +
'<div type="text" name="name" style="visibility:hidden; position:absolute">' +
sha256(userN) + 
'</div>' +
'<input type="submit" value="Paramètre"/>'+
'</form>' +
*/











function sha1( data ) {
     var generator = crypto.createHash('sha1');
     generator.update( data )  ;
     return generator.digest('hex') ;
};
function sha256( data ) {
     var generator = crypto.createHash('sha256');
     generator.update( data )  ;
     return generator.digest('hex') ;
};
function Badrquest(Nann) {


//console.log("importance(1=forte,3=faible) : " + Nann + "____ECHOUECO!");

var html = '<!DOCTYPE html>' +
"<html>" +
"<head>" +
'<meta https-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
"<title>tentative</title>" +
"</head>" +
"<body>" +
'<form action="' +
"https://"+ipLOGey+"/"+ 
'" method="get">' +
'<input type="submit" value="BAD"/>'+
'</form>' +
"</body>" +
"</html>";

return html;

};