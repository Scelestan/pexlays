
var sss = sssss;

var resolvedPromise = typeof Promise == 'undefined' ? null : Promise.resolve();
var nextTick = resolvedPromise ? function(fn) { resolvedPromise.then(fn); } : function(fn) { setTimeout(fn); };
var connectionEnter = 0;
var beforeConnect = 0;
var idpersonn = 0;
var socket;
var loadPrems3 = true;
var equipes = [["1"],["2"],["3"],["4"]];
var ecu = -1;
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}



$(document).ready(function() {
socketL();
 });

 if ("WebSocket" in window) {
	 
	 function Manivelle2(ick, vall, ppro) {
		 if (hhbb) {

	hhbb = false;
	var dessinGeoJson = "zombies%" + ppro.toString() + "/" +
idpersonn + "/" + ick + "/" + sss.toString();


if (loadPrems3 == false) {
	socket.send(dessinGeoJson, function(response){
	
//console.log(response);
//map.fitBounds(L.latlngs(ick).getBounds());
});
}

		 } else {
			/*
					
				rotationXX= -(360*(Math.atan2(h/2 - clientY , w/2  - clientX)))/(2*Math.PI)- 90;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/6.11/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				
			*/
				}
				
}
	 function Manivelle(ick, vall, Meta) {

	var dessinGeoJson = document.querySelector('h1').innerHTML + "%" + Meta.toString() + "/" +
idpersonn + "/" + ick + "/" + sss.toString();
//if (socket.bufferedAmount == 0) {
if (loadPrems3 == false) {
	socket.send(dessinGeoJson, function(response){
	
//console.log(response);
//map.fitBounds(L.latlngs(ick).getBounds());
});
}
//}

}

 }

function socketL() {  

 if ("WebSocket" in window) {
               console.log("WebSocket is supported by your Browser!");
socket = new WebSocket("wss://4321-cs-ffa3f9c4-71ad-498d-bb23-ef3e70b65703.cs-europe-west1-haha.cloudshell.dev/"+sss.toString());
//192.168.1.111 localhost

var IDENTT = 0;
console.log("web");

socket.onerror=function (e) {
console.log(e.toString());
};
socket.onclose=function (e) {

};

socket.onopen=function (event) {
console.log("web socket");

    //if (socket.bufferedAmount == 0) {
      socket.send(document.querySelector('h1').innerHTML + "%0/-1"+
"/Connect/1/1/"+sss.toString());
	 //}
document.getElementById('selection').addEventListener('click', function() {


var blabla = document.querySelector('h1').innerHTML + "%0/"+ IDENTT + "/" + document.querySelector('#xv').value + "/Adjyru/0/0";
console.log(blabla);
      socket.send(blabla);


 },{passive: false});


};


var UNO;
function unefois() {
	clearInterval(UNO);
	 if (initts == "0") {initts = "1";
	 
	 Lliesorti = setInterval(ploukiize, 850);
	 }

 }



document.querySelector('#pourcent').innerHTML = "super chat sockets :";
//document.querySelector('#pourcentaa').style.backgroundColor = "white";

var positionpourcent = 0;
var premier5 = 5;
var loadPrems = true;
var loadPrems2 = false;

socket.onmessage=function (event) {
    

var parser, xmlDoc;

parser = new DOMParser();
xmlDoc = parser.parseFromString(event.data.toString(),"text/xml");
//console.log(xmlDoc);
event = sleep(40);
beforeConnect = xmlDoc.getElementsByTagName("personne").length;
if (loadPrems && beforeConnect > 0) {



for (var ddf2 = 0; ddf2 < beforeConnect; ddf2 ++) {
	if (xmlDoc.getElementsByTagName("nom")[ddf2].childNodes[0].nodeValue == document.querySelector('h1').innerHTML && xmlDoc.getElementsByTagName("Xavier")[ddf2].childNodes[0].nodeValue == 'Connect') {
	loadPrems = false;
	
	Muraille = [];
	var calculMuraille = xmlDoc.getElementsByTagName("Volant")[ddf2].childNodes[0].nodeValue.split(",");
	var fj = 0;
	for (var f=0; f <= 151; f++) {
			for (var j=0; j <= 144; j++) {
				if (j == 0) {
					Muraille.push([-3]);
				} else {
				Muraille[f].push(-3);
				}
				Muraille[f][j] = calculMuraille[fj];
				
				fj += 1;
			}
		}
		PageLoadingInitial();
		//createjs.Ticker.interval = 50;
//createjs.Ticker.framerate = 20;
		perso(xmlDoc.getElementsByTagName("nom")[ddf2].childNodes[0].nodeValue);
	connectionEnter += 1;
	loadPrems2 = true;
	
	UNO = setInterval(unefois, 1750);
	
	}
}
}
if (xmlDoc.getElementsByTagName("nom")[0].childNodes[0].nodeValue == "zombies") {
	
	var setys = setInterval(prrt, 50);
	
	
	function prrt() {
		if (loadPrems2) {
			
			clearInterval(setys);
		if (xmlDoc.getElementsByTagName("bool")[0].childNodes[0].nodeValue == "0") {
			hit(xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue);
			hhbb = true;
			
		} else if (xmlDoc.getElementsByTagName("bool")[0].childNodes[0].nodeValue == "1") {
			
			if (!page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue)) {
				hhbb = true;
				
			} else {
				/*
		page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue).vitalite -= 1;
		page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue+"vitalite").text = page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue).vitalite.toString();
			*/
			if (page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue).vitalite < 1) {
				zombiez[Number(xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue)] = "dead";
				
			page.removeChild(page.getChildByName("zombie/" + Number(xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue).toString()));
			page.removeChild(page.getChildByName("zombie/" + Number(xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue).toString()+"vitalite"));
			
			
			
				/*
				zombiez[Number(xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue)] = "dead";
				hhbb = true;
				Manivelle2("zzz/"+ xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue +"/dead", false, 6);
				*/
			}
			}
			hhbb = true;
			
		} else if (xmlDoc.getElementsByTagName("bool")[0].childNodes[0].nodeValue == "2") {
			
			
			var spl = xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue.split("*");
			for (var moz2 = 0; moz2 < spl.length; moz2 ++) {
				if (!zombiez[moz2] || !page.getChildByName("zombie/"+moz2.toString())) {
						 
		 } else if (spl[moz2] != "dead") {
			 zombieznm = Number(xmlDoc.getElementsByTagName("option")[0].childNodes[0].nodeValue);
				page.getChildByName("zombie/" + moz2.toString()).y = Number(spl[moz2].split("_")[1]);
				page.getChildByName("zombie/" + moz2.toString()).x = Number(spl[moz2].split("_")[0]);
				
		 } else {
			 zombiez[moz2] = "dead";
			 
			page.removeChild(page.getChildByName("zombie/" + moz2.toString()));
			page.removeChild(page.getChildByName("zombie/" + moz2.toString()+"vitalite"));
			 
		 }
			}
			
			
		}  else if (xmlDoc.getElementsByTagName("bool")[0].childNodes[0].nodeValue == "dead") {
			zombiez[Number(xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue)] = "dead";
			
			page.removeChild(page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue));
			page.removeChild(page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue+"vitalite"));
		} else {
			vague = Math.abs(Number(xmlDoc.getElementsByTagName("bool")[0].childNodes[0].nodeValue));
			zombiez = [];
			//console.log(xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue);
			var spl = xmlDoc.getElementsByTagName("numm")[0].childNodes[0].nodeValue.split("*");
			for (var moz = 0; moz < Math.abs(Number(xmlDoc.getElementsByTagName("bool")[0].childNodes[0].nodeValue))*10; moz ++) {
				
				if (spl[moz] == "dead") {
					
				
				zombiez.push("dead");
			} else {
				zomb(moz.toString(), xmlDoc.getElementsByTagName("option")[0].childNodes[0].nodeValue.split("_")[moz]);
				zombiez.push(1);
				
			}
			
			ZZZ = true;
		}
		}
		}
	}
	

} else if (loadPrems2) {
	//console.log(xmlDoc);
if (beforeConnect > 0 && loadPrems3) {
			for (var ddf = 0; ddf < beforeConnect; ddf ++) {
				if (xmlDoc.getElementsByTagName("nom")[ddf].childNodes[0].nodeValue != document.querySelector('h1').innerHTML) {
				perso(xmlDoc.getElementsByTagName("nom")[ddf].childNodes[0].nodeValue);
				connectionEnter += 1;
				}
			}
			loadPrems3 = false;
		}

for (var i = 0; i < xmlDoc.getElementsByTagName("personne").length; i ++) {
	var numerat = -1;
	
	for (var i2 = 0; i2 < mesh.length; i2 +=2) {
		
		if (mesh[i2] == xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue) {
			//numerat = Number(mesh[i2+1]);
			numerat = i2/2;
			nummeerat = numerat;
		}
		
	}
	
if (xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'Connect') {
	if (xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue != document.querySelector('h1').innerHTML) {
	perso(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue);
	hT = true
	connectionEnter += 1;
	} /*else {
		
		for (var ddee = 0; ddee < beforeConnect; ddee ++) {
			ecu += 1;
				equipes[ecu].push(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue);
				if (ecu == 0) {
				page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).x = 100;
				page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).y = 100;
				} else if (ecu == 1) {
				page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).x = 100;
				page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).y = 100;
				} else if (ecu == 2) {
				page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).x = 100;
				page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).y = 100;
				} else if (ecu == 3) {
				page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).x = 100;
				page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).y = 100;
				}
				if (ecu == 3) {
					ecu = -1;
				}
			}
	}*/
} 
if (xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue == "Disconnect") {
	if (!page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue)) {
	} else {
		if (page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).attaque == 0) {
			
		} else {
	for (n = 0; n < page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).attaque; n++) {
				if (!page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue+"ccecL*"+n.toString())) {
			
		} else {
				page.removeChild(page.getChildByName(numerat.toString() + xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue + n.toString()));
		
		page.removeChild(page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue + "ccecL*" + n.toString()));
		}
			}
		}
			for (numo = 0; numo < mesh.length; numo+=2) {
				if (mesh[numo] == xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue) {
					joueurs[numo/2] = joueurs[joueurs.length-1];
					joueurs.pop();
					joueurs.length = joueurs.length;
					connectionEnter -= 1;
					mesh[numo+1] = numo/2;
					mesh[numo] = mesh[mesh.length-2];
					mesh.pop();
					mesh.pop();
					mesh.length = mesh.length;
					break;
				}
			}
			
			page.removeChild(page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue));
			page.removeChild(page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue+"vitalite"));
	}
	}
if (initts == "2" && connectionEnter == joueurs.length && xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue != 'refresh' && xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue != 'Disconnect') {
	if (!joueurs[numerat]) {
	} else {
	
	}
	if (!joueurs[numerat]) {
		
	} else if (xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == "cec") {
		if (xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue == "deleteAll") {
		if (!page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).attaque) {
			
		} else {
			joueurs[numerat][3] = "deleteAll";
			for (n = 0; n < page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).attaque; n++) {
				if (!page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue+"ccecL*"+n.toString())) {
			Manivelle("cec/deleteAll/0/0/0", false, Math.round(Math.random()*50+2));
		} else {
				page.removeChild(page.getChildByName(numerat.toString() + xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue + n.toString()));
		
		page.removeChild(page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue + "ccecL*" + n.toString()));
		}
			}
			joueurs[numerat][0][2] = "deleteAll";
		
		}
			joueurs[numerat][0][0] = false;
		
		}
		if (!page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue+"ccecL*"+xmlDoc.getElementsByTagName("PosY")[i].childNodes[0].nodeValue)) {
			
		} else {
		page.removeChild(page.getChildByName(numerat.toString() + xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("PosY")[i].childNodes[0].nodeValue));
		
		page.removeChild(page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue+"ccecL*"+xmlDoc.getElementsByTagName("PosY")[i].childNodes[0].nodeValue));
		
		joueurs[numerat][0][0] = false;
		
		
		
		}
		if (joueurs[numerat][1] == document.querySelector('h1').innerHTML) {
		
		hbol = true;
		}
		
		if (xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue != "none" && xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*").length == 1) {
		hit(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue);
		} else if (xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*").length == 2) {
			//console.log(page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]));
			if (!page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]) || zombiez[Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1])] == "dead") {
				hhbb = true;
				
			} else {
				/*if (page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]).vitalite < 1) {
				zombiez[Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1])] = "dead";
			}*/
		page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]).vitalite -= 1;
		page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]+"vitalite").text = page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]).vitalite.toString();
			if (page.getChildByName("zombie/" + xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]).vitalite < 1 && joueurs[numerat][1] == document.querySelector('h1').innerHTML) {
				zombiez[Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1])] = "dead";
				hhbb = true;
				
			 var oX2 = Math.round((((page.getChildByName("zombie/" + Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]).toString()).x))/(32)));//-0.5
		var oY2 = Math.round((((page.getChildByName("zombie/" + Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]).toString()).y))/(32)));//-0.5
		
							var cartes = -1;
							if (Number(page.muraille[(oX2)][(oY2)]) == -2) {
							Manivelle(("muraille/"+ oX2.toString() + "*" + oY2.toString() +"/Open/"+(Math.random()*9999999).toString()+"/0"), false, 17);
							} else if (Number(page.muraille[(oX2)][(oY2)]) > -3) {
							Manivelle(("muraille/"+ oX2.toString() + "*" + oY2.toString() +"/"+ cartes.toString() +"/0/0"), false, 7);
							}
				
				Manivelle2("zzz/"+ Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue.split("*")[1]) +"/dead", false, 6);
				
			}
			}
			hhbb = true;
			
			
		}
		
	} /*else if (joueurs[numerat][2] == "ccecL") {
		if (joueurs[numerat][2] == "ccecL") {
			
		rotationXX= (360*(Math.atan2(window.innerHeight/2 - clientY , window.innerWidth/2  - clientX)))/(2*Math.PI)- radToDeg(rotat2);//sensitive*((window.innerWidth/2 - clientX)/(window.innerWidth))
				Manivelle("none/0.21/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).position.x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).position.y.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).position.z.toString()+"/0", true);
				joueurs[numerat][2] = "none";
				if (joueurs[numerat][1] == document.querySelector('h1').innerHTML) {
				zqsd = 0;
				}
		}
	}*/ else if (xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == "ce") {
		
					 // if (joueurs[numerat][2] != "ccec" && joueurs[numerat][2] != "ccecL") {
					if (xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue == document.querySelector('h1').innerHTML) {	
		//zqsd2 = true;
					}
				 if (joueurs[numerat][0] != false) {
					 
		joueurs[numerat][0] = [joueurs[numerat][0][0]];
	joueurs[numerat][0].push(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue, "ceccc3", 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, 0, xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	
			 hhy(numerat);
				 } else {
					 
					 /*
					 joueurs[numerat] = [false];
	joueurs[numerat].push(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue, "ceccc", 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, 0, xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	hhy(numerat);*/
	
				 }	 	
					
					// }
	} else if ((xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'z' || xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'q'
|| xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 's' || xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'd') &&
xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue != document.querySelector('h1').innerHTML) {
	page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).Vitess = parseFloat(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue);
	joueurs[numerat] = [joueurs[numerat][0]];
	joueurs[numerat].push(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue, 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, mesh[numerat*2+1], xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	
	Bouger(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue, 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, numerat, xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	
} else if (xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'none' && xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue != document.querySelector('h1').innerHTML) {
	joueurs[numerat] = [joueurs[numerat][0]];
	
	joueurs[numerat].push(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue, 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, mesh[numerat*2+1], xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	
	Bouger(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue, 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, numerat, xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	
} else if ((xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'z' || xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'q'
|| xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 's' || xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'd') &&
xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue == document.querySelector('h1').innerHTML) {
				
	page.getChildByName(xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue).Vitess = parseFloat(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue);
	joueurs[numerat] = [joueurs[numerat][0]];
	joueurs[numerat].push(document.querySelector('h1').innerHTML, xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue, 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, mesh[numerat*2+1], xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	
	Bouger(document.querySelector('h1').innerHTML, xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue, 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, numerat, xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	
} else if (xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'none' && xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue == document.querySelector('h1').innerHTML) {
	joueurs[numerat] = [joueurs[numerat][0]];
	//cccc2 = 0;
	
	
	joueurs[numerat].push(document.querySelector('h1').innerHTML, xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue, 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, mesh[numerat*2+1], xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	
	Bouger(document.querySelector('h1').innerHTML, xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue, 
	xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue, numerat, xmlDoc.getElementsByTagName("PosX")[i].childNodes[0].nodeValue);
	//BBBo = true;
} else if (xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'muraille') {
	if (xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue == document.querySelector('h1').innerHTML) {
	//setTimer = setInterval(setTime, 10);
	}
	
	if (Number(page.muraille[Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[0])][(Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[1]))]) != 99) {
		if (Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue) >= 9) {
	page.muraille[Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[0])][(Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[1]))] = "5";	
		} else {
	page.muraille[Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[0])][(Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[1]))] = xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue;
		}
		var mapping;
		if (xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue == "Open") {
			var gotot = -2;
			page.muraille[Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[0])][(Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[1]))] = "-22";
		} else {
		var gotot = Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue);
		}
		if (gotot <= -1) {
			mapping = fondTree();
		} else {
	mapping = fondMap3();
		}
				mapping.x = Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[0])*32;
				mapping.y = Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[1])*32;
				
				if (gotot <= -1) {
			mapping.gotoAndStop(Math.abs(Number(gotot)+1));
		} else {
	mapping.gotoAndStop(gotot);
		}
				
				
	
				mapping.alpha = 1;
				page.getChildByName("MAP").addChild(mapping);
				//console.log(mapping);
				page.getChildByName("MAP").setChildIndex(mapping, -58);
	//page.getChildByName("MAP").getChildByName("map" + Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[0]).toString() + Number(xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue.split("*")[1]).toString()).gotoAndStop(Number(xmlDoc.getElementsByTagName("Volant")[i].childNodes[0].nodeValue));
	
	
	}
	
} else if (xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue == 'winner') {
	if (xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue == document.querySelector('h1').innerHTML) {
	alert("tu as gagné score : " + score.toString());
	} else {
		alert("tu as perdu");
	}
	document.querySelector('#finishGame').click();
}
	
}
if (xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue == document.querySelector('h1').innerHTML) {
IDENTT = Number(xmlDoc.getElementsByTagName("personne")[i].getAttribute('id'));
idpersonn = IDENTT;
}

if (xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue == 'refresh') {
/*if (xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue == 'disconnect') {
//IDENTT -= 1;
}*/

document.querySelector('#pourcentaa').style.top = positionpourcent.toString() + "px";
premier5 -= 1;
if (premier5 < 0) {
positionpourcent -= 25;
}
document.querySelector('#xv').value = "";
document.querySelector('#pourcent').innerHTML += "<br/>__" + xmlDoc.getElementsByTagName("nom")[i].childNodes[0].nodeValue + ", dis : " + xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue;
}
}


}



}
}

}
