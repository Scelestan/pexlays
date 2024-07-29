


var page;// var du canvas du jeu
var ih=Number(document.innerHeight)*0.95; //taille de la fenêtre en hauteur
var iw=Number(document.innerWidth)*0.95; //taille de la fenêtre en largeur
var skelete;
var loadMesh = 0;//nbre de joueur connecté dans le front.
var score = 1;// possibilité d'ajouté un score avec ceci.

// les anthitées à affiché
	var mesh2;
         var mesh3;       
	var mesh1;
	
// variable de vérification de déclancheur d'attaque.
	var bOUle = false;
	var mattt;
	var attaquer = 0;
	var verifAttaquer = 0;
	var hbol = true;
	
// les rotations et colision de déclanchement.
	var rotat2 = 0;
	var ccecfalse = true;
	var hbolwin = true;
	
// les ia du jeu.
	var ZZZ = false;
	var zombieznm = 0;
	var zombiez = [];
	var hhbb = true;
	var zedd = false;
	
//les tirs des ia.
	var Lliesorti;
	var zonezz = [];
	var boulii = true;
	var vague = 0;
	
// fenêtre dimention
	var clientissX;
	var clientissY;
	

//Les click souris et clavier...
	var keyevent = -1;
	var kekey = 0;
	var keykeyremove = 0;
	
// le joueur est soit dans le camps de l'herbe soit dans le clan de la terre
	var camps = Math.round((Math.random()*1.48)+1.51);
	
	//Voici un set timer et celà est utile a copier collé pour try des nouveau truc
	var setTimer;
		var tiimer2 = true;
		function setTime() {
			clearInterval(setTimer);
			tiimer2 = true;
		}
		
//function de tir des zombies_ yhh : numero du zombie, numm5 : numero du joueur ciblé par l'attaque.
	function hhyIA(yhh, numm5) {
		//console.log("hit");
		var linksorti;
		var linksss = true;
		var lourdt = true;
		function plouki2() {
		
			
		clearInterval(linksorti);	
		var bty = false;
		if (!page.getChildByName("zombie/"+yhh.toString())) {// si le zombie n'existe pas on le supprime, logiquement il ne peux pas tiré si il n'existe plus au moment ou il tir.
			page.removeChild(page.getChildByName("attaque/zombie/"+yhh.toString()+trouducul2));
			boulii = true;// permer d'indiqué qu'un changement à été effectué sur tout les fronts.
		} else {
		// on cherche la rotation de l'attaque
		var rote = ((Math.atan2(page.getChildByName("zombie/"+yhh.toString()).y - page.getChildByName(joueurs[numm5][1]).y , page.getChildByName("zombie/"+yhh.toString()).x  - page.getChildByName(joueurs[numm5][1]).x)))/(2*Math.PI);
			//on avance l'attaque du zombie si celle ci existe ..
		if (!page.getChildByName("attaque/zombie/"+yhh.toString()+page.getChildByName("zombie/"+yhh.toString()).attaque.toString())) {
			//linksorti = setInterval(plouki2, 100);
			linksortiOn3 = setInterval(plouki3, 80);// si elle n'existe pas on réinitialise boulii.
			boulii = true;
		} else {
		page.getChildByName("attaque/zombie/"+yhh.toString()+page.getChildByName("zombie/"+yhh.toString()).attaque.toString()).Rotationne = rote; 
		// rotation de l'attaque du zombie sur le zombie et le nom de son attaque.
		page.getChildByName("attaque/zombie/"+yhh.toString()+page.getChildByName("zombie/"+yhh.toString()).attaque.toString()).Vitess = 9.54;
		// vitess de l'attaq
		page.getChildByName("attaque/zombie/"+yhh.toString()+page.getChildByName("zombie/"+yhh.toString()).attaque.toString()).attbool = true;
		// l'attaque peut touché
		zonezz.push([yhh, page.getChildByName("zombie/"+yhh.toString()).attaque]);
		// le zone de vision de l'attaque...
		page.getChildByName("attaque/zombie/"+yhh.toString()+page.getChildByName("zombie/"+yhh.toString()).attaque.toString()).rotation = rote*360;
		// la rotation final
		page.getChildByName("zombie/"+yhh.toString()).attaque = page.getChildByName("zombie/"+yhh.toString()).attaque+1;
		// on augmente de 1 le nombre d'attaque en symultanée..
		boulii = true;
		// on a rien changer sur tout les fronts par les sockets donc cette valeure est sur true.
		}
		}
			
		}
		
		//function d'affichage d'une attaque.
		function plouki3() {
			boulii = false;
			linksorti = setInterval(plouki2, 10);
		
			clearInterval(linksortiOn3);
		
		
	}
	
	

	
		 function Sortil2() {
			var data = {
        images: ["sortia.png"],
        frames: {width:200, height:200},
        animations: {
            anim:[0, 1]
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.85;
	animation.scaleY = 0.85;
	animation.regX = 12;
	animation.regY = 35;
	animation.gotoAndPlay("anim");
	return animation;
		}
		var trouducul2 = page.getChildByName("zombie/"+yhh.toString()).attaque.toString();
			 var sorti = Sortil2();
			 // on nommes l'attaque du zombie + le numéros de l'attaque sur le zombie en question
			 sorti.name = "attaque/zombie/"+yhh.toString()+page.getChildByName("zombie/"+yhh.toString()).attaque.toString();
			sorti.attbool = false;
			sorti.x = parseFloat(page.getChildByName("zombie/"+yhh.toString()).x);
			sorti.y = parseFloat(page.getChildByName("zombie/"+yhh.toString()).y);
			sorti.attaque = 0;
			sorti.regX = 50;
			sorti.regY = 50;
			sorti.scaleX = 0.18;
			sorti.scaleY = 0.1;
			page.addChild(sorti);
		
	 // plouki2();
			var linksortiOn3 = setInterval(plouki3, 15);
			
		
			
			
			//************CreateJS**************//
		
			
		
		
		
		
	
	}
	
	
document.addEventListener("mousedown", function(event) {
	event = sleep(10);
	if (tiimer && BBBo && cccc2 == 0) {//page.getChildByName(document.querySelector('h1').innerHTML).attaque == 0 && verifAttaquer == 0
		if(zedd == false){
            
				clientissX = clientX;
				clientissY = clientY;
			
		zedd = true;
			
		}
	}
	},{passive: true});
	document.addEventListener("mouseup", function(event) {
		event = sleep(10);
		if (zedd == true) {
			
			var rotat = 90;
			var setiis;
			//if (verifAttaquer == attaquer && page.getChildByName(document.querySelector('h1').innerHTML).attaque == verifAttaquer && hbol && tiimer && BBBo && cccc2 == 0 && zqsd2 && hhbb ) {
			setiis = setInterval(iise, 20);
			
			//}
			function iise() {
				
		   if (tiimer && BBBo) {
	
	
	
			if (tiimer && BBBo) {
				
				
			//page.getChildByName(document.querySelector('h1').innerHTML).attaque = 0;
			
				
				
				if (zqsd == 0) {
					/*
				dd2 = 0;
				ss2 = 0;
				qq2 = 0;
				zz2 = 0;
				*/
				zedd = false;
					cccc2 = 1;
					BBBo = false;
					clearInterval(setiis);
				rotationXX= -(360*(Math.atan2(h/2 - clientY , w/2  - clientX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				for (var numm = 0; numm < joueurs.length; numm ++) {
			 
		
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 if (joueurs[numm][1] == document.querySelector('h1').innerHTML)
				joueurs[numm][2] = "ceccc3";
			zz2 = 0;
					 }
				}
				zqsd = 1;
				} else {
					clearInterval(setiis);
				}
			
				
				
			} else {
				if (hbol) {
					if ((dd2 == 1 || ss2 == 1 || qq2 == 1 || zz2 == 1 || zqsd == 0 || cc2 == 1) && attaquer == verifAttaquer) {
						/*
				dd2 = 0;
				ss2 = 0;
				qq2 = 0;
				zz2 = 0;
				*/
					cccc2 = 1;
				BBBo = false;
				rotationXX= -(360*(Math.atan2(h/2 - clientY , w/2  - clientX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				clearInterval(setiis);
				zedd = false;
				for (var numm = 0; numm < joueurs.length; numm ++) {
			 
		
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 if (joueurs[numm][1] == document.querySelector('h1').innerHTML)
				joueurs[numm][2] = "ceccc3";
				zz2 = 0;
					 }
				}
				}
				
				} else {
					clearInterval(setiis);
				}
			
				
			}
			
} else {
	zqsd2 = false;
	clearInterval(setiis);
	var setiis2 = setInterval(iise2, 10);
			function iise2() {
				if (tiimer && BBBo) {
					if (tiimer && BBBo) {
						/*
				dd2 = 0;
				ss2 = 0;
				qq2 = 0;
				zz2 = 0;
				*/
					cccc2 = 1;
				BBBo = false;
				rotationXX= -(360*(Math.atan2(h/2 - clientY , w/2  - clientX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				clearInterval(setiis2);
				zedd = false;
				for (var numm = 0; numm < joueurs.length; numm ++) {
			 
		
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 if (joueurs[numm][1] == document.querySelector('h1').innerHTML)
				joueurs[numm][2] = "ceccc3";
				zz2 = 0;
					 }
				}
				}
				
				} else {
					clearInterval(setiis2);
				}
			
			}
}
			}
		
		
		
		}
	});
function ploukiize() {
	for (var nummmoz2 = 0; nummmoz2 < zombiez.length; nummmoz2 ++) {
		if (!page.getChildByName("zombie/"+nummmoz2.toString())) {
			
		} else {
	 var Rotations = zombieznm*page.getChildByName("zombie/"+nummmoz2.toString()).roote;
   var namae = "zombie/"+nummmoz2.toString();
   
		page.getChildByName(namae).gotoAndPlay("h");
		
		/*if (Rotations <= 30 && Rotations >= -30) {
			page.getChildByName(namae).gotoAndPlay("h");
		} else if (Rotations <= -30 && Rotations >= -70) {
			page.getChildByName(namae).gotoAndPlay("b");
		} else if (Rotations <= 70 && Rotations >= 30) {
			page.getChildByName(namae).gotoAndPlay("d");
		} else if (Rotations <= -140 && Rotations >= -200) {
			page.getChildByName(namae).gotoAndPlay("b");
		} else if (Rotations <= -200 && Rotations >= -240) {
			page.getChildByName(namae).gotoAndPlay("h");
		} else if (Rotations <= -110 && Rotations >= -140) {
			page.getChildByName(namae).gotoAndPlay("g");
		} else if (Rotations <= -70 && Rotations >= -110) {
			page.getChildByName(namae).gotoAndPlay("d");
		} else {
			page.getChildByName(namae).gotoAndPlay("g");
		}*/
		
		}
	}
}
		
	window.addEventListener("focus", function(event) {
		event = sleep(1140);
		ccecfalse = true;
	},{passive: true});
	
	window.addEventListener("blur", function(event) {
		event = sleep(1140);
		ccecfalse = false;
		
var liesorti;		
if (verifAttaquer != 0 && attaquer == verifAttaquer && hbol) {
	Manivelle("cec/deleteAll/0/0/0", false, 2);
} else if (verifAttaquer != 0) {
	
	liesorti = setInterval(ploukize, 250);
}
function ploukize() {
		clearInterval(liesorti);
		Manivelle("cec/deleteAll/0/0/0", false, 2);
	}
	},{passive: true});
	function hit(nananere) {
		//document.querySelector('#pourcent').innerHTML += "<br/>__" + nananere + " à été touché...";
		
			if (!page.getChildByName(nananere)) {
			} else {
		page.getChildByName(nananere).vitalite -= vague/2+0.5;
		page.getChildByName(nananere+"vitalite").text = page.getChildByName(nananere).vitalite.toString();
		if (page.getChildByName(nananere).vitalite <= 0) {
			if (nananere == document.querySelector('h1').innerHTML) {
			page.getChildByName(nananere).x = Math.trunc(Math.random()*100+(Math.round(Math.random()*1)*1400))+50;
			page.getChildByName(nananere).y = Math.trunc(Math.random()*100+(Math.round(Math.random()*1)*1200))+50;
			var rotat = 90;
			//BBBo = false;
			var rotationXX= -(360*(Math.atan2(h/2 - clientY , w/2  - clientX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				/*Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);*/
		}
			page.getChildByName(nananere).vitalite = 250;
			page.getChildByName(nananere+"vitalite").text = page.getChildByName(nananere).vitalite.toString();
			page.getChildByName(nananere+"vitalite").x = page.getChildByName(nananere).x;
			page.getChildByName(nananere+"vitalite").y = page.getChildByName(nananere).y-51;
			if (nananere == document.querySelector('h1').innerHTML) {
page.x = -(page.getChildByName(nananere).x*scalex)+(w/(2));
page.y = -(page.getChildByName(nananere).y*scaley)+(h/(2));
		}
			
		}
			}
		
	}
 
		var zqsd2 = true;		
function personnOne(initt) {
			

		var directionsX = "stand";
		var directionsY = "stand";
		
		//var camera = AdobeAn.VirtualCamera.getCamera(exportRoot).pinCameraToObject(personn);
		
		
		var kekey2 = "0";
		document.addEventListener("keypress", function(event2) {
			//event = sleep(5);
			/*
			document.addEventListener("keydown", function(event1) {
			
				
			 if (event1.key != "d" && event1.key != "s" && event1.key != "q" && event1.key != "z") {
			   kekey2 = "0";
		   } else
			   if (event1.key == "z") {
			   kekey2 = "z";
		   } else if (event1.key == "q") {
			   kekey2 = "q";
		   } else if (event1.key == "s") {
			   kekey2 = "s";
		   } else if (event1.key == "d") {
			   kekey2 = "d";
		   }
		   
		   },{passive: true});
		   */
		   
		   var kekee = 0;
			document.addEventListener("keyup", function(event) {
				//event = sleep(10);
			var rotat = 90;
			var setiis;
			
			if (kekee == event.key) {
				kekee = 0;
			}
				/*
		  
	*/
	
	
			if (tiimer && (event.key == "d" || event.key == "s" || event.key == "q" || event.key == "z") && BBBo) {
				
				
			//page.getChildByName(document.querySelector('h1').innerHTML).attaque = 0;
			var clientisX;
			var clientisY;
			if (event.key == "d") {
				clientisX = w;
				clientisY = h/2;
			}
			else if (event.key == "z") {
				clientisX = 0;
				clientisY = h/2;
			}
			else if (event.key == "s") {
				clientisX = w/2;
				clientisY = h;
				}
			else if (event.key == "q") {
				clientisX = w/2;
				clientisY = 0;
				
			}
				if (zedd) {
		var rotat = 90;
			var setiis;
			//if (verifAttaquer == attaquer && page.getChildByName(document.querySelector('h1').innerHTML).attaque == verifAttaquer && hbol && tiimer && BBBo && cccc2 == 0 && zqsd2 && hhbb ) {
			setiis = setInterval(iise, 10);
			iise();
			//}
			function iise() {
				
				
		  
				
				
			//page.getChildByName(document.querySelector('h1').innerHTML).attaque = 0;
			
				
				
				
					/*
				dd2 = 0;
				ss2 = 0;
				qq2 = 0;
				zz2 = 0;
				*/
				if (event.key == "d" || event.key == "s" || event.key == "q" || event.key == "z") {
			kekey = 0;
			clearInterval(setiis);
			}
				if (kekey == 0) {
				zedd = false;
					cccc2 = 1;
					BBBo = false;
					
					
				rotationXX= -(360*(Math.atan2(h/2 - clientisY , w/2  - clientisX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				
				for (var numm = 0; numm < joueurs.length; numm ++) {
			 
		
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 if (joueurs[numm][1] == document.querySelector('h1').innerHTML)
				joueurs[numm][2] = "ceccc3";
			zz2 = 0;
					 }
				}
				zqsd = 1;
				if (kekey2 == event.key) {
				kekey2 = "0";
				} else if (kekey2 != "0") {
				document.dispatchEvent(new KeyboardEvent('keydown', {'key':kekey2} ));
				kekee = 0;
				}
				}
				
			
				
				
			
			}
		
		
			
} else if (event.keyCode != 69) {
	clearInterval(setiis);
}
			} else if (event.keyCode == keyevent) {
				zedd = false;
			}
			
			},{passive: true});
		document.addEventListener("keydown", function(event) {
			
			var rotat = 90;
		rotat2 = rotat;
		var rotationX;
		var rotationXX;
			
			if(event.key == "s"){
				if (kekee != "s") {
			kekee = "s";
			kekey = 2;
		}
			if ((kekey == 1 && event.keyCode != keykeyremove)) {
			BBBo = true;
			cccc2 = 0;
			
		}
             if (tiimer && BBBo && cccc2 == 0) {//page.getChildByName(document.querySelector('h1').innerHTML).attaque == 0 && verifAttaquer == 0
			 if (kekey == 0) {
					keyevent = 83;
					keykeyremove = 83;
					kekey = 1;
					zedd = false;
				}
			if (kekey == 1 && keyevent == keykeyremove && keyevent != 83 && keykeyremove != 83) {
				
				 var clientisX;
			var clientisY;
			if (event.key == "d") {
				clientisX = w;
				clientisY = h/2;
			}
			else if (event.key == "z") {
				clientisX = 0;
				clientisY = h/2;
			}
			else if (event.key == "s") {
				clientisX = w/2;
				clientisY = h;
				}
			else if (event.key == "q") {
				clientisX = w/2;
				clientisY = 0;
				
			}
			if (kekey == 1) {
				zedd = false;
					cccc2 = 1;
					BBBo = false;
					
					
				rotationXX= -(360*(Math.atan2(h/2 - clientisY , w/2  - clientisX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				
				for (var numm = 0; numm < joueurs.length; numm ++) {
			 
		
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 if (joueurs[numm][1] == document.querySelector('h1').innerHTML)
				joueurs[numm][2] = "ceccc3";
			zz2 = 0;
					 }
				}
				zqsd = 1;
				}
			keyevent = 83;
				 keykeyremove = keyevent;
				 //kekey = 2;
				}
		if(zedd == false){
           if (kekey == 2) {
				
				kekey = 1;
			}
				clientissX = w/2;
				clientissY = h;
				
		zedd = true;
		
		}
	}
        } else if (kekey == 1 && kekee == "s") {
			
			kekey2 = "s";
		}
			
		
			
			
			
			 if(event.key == "q"){
				 if (kekee != "q") {
			kekee = "q";
			kekey = 2;
		}
			if ((kekey == 1 && event.keyCode != keykeyremove)) {
			BBBo = true;
			cccc2 = 0;
			
		}
			 if (tiimer && BBBo && cccc2 == 0) {//page.getChildByName(document.querySelector('h1').innerHTML).attaque == 0 && verifAttaquer == 0
			 if (kekey == 0) {
					keyevent = 81;
					keykeyremove = 81;
					kekey = 1;
					zedd = false;
				}
			if (kekey == 1 && keyevent == keykeyremove && keyevent != 81 && keykeyremove != 81) {
				 var clientisX;
			var clientisY;
			if (event.key == "d") {
				clientisX = w;
				clientisY = h/2;
			}
			else if (event.key == "z") {
				clientisX = 0;
				clientisY = h/2;
			}
			else if (event.key == "s") {
				clientisX = w/2;
				clientisY = h;
				}
			else if (event.key == "q") {
				clientisX = w/2;
				clientisY = 0;
				
			}
			if (kekey == 1) {
				zedd = false;
					cccc2 = 1;
					BBBo = false;
					
					
				rotationXX= -(360*(Math.atan2(h/2 - clientisY , w/2  - clientisX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				
				for (var numm = 0; numm < joueurs.length; numm ++) {
			 
		
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 if (joueurs[numm][1] == document.querySelector('h1').innerHTML)
				joueurs[numm][2] = "ceccc3";
			zz2 = 0;
					 }
				}
				zqsd = 1;
				}
			keyevent = 81;
				 keykeyremove = keyevent;
				//kekey = 2;
				}
		if(zedd == false){
            
				if (kekey == 2) {
				
				kekey = 1;
			}
				
			clientissX = 0;
				clientissY = h/2;
				
		zedd = true;
		
		}
	}
        } else if (kekey == 1 && kekee == "q") {
			
			kekey2 = "q";
		}
			
		
			
			
		
			
		if (event.key == "z") {
			if (kekee != "z") {
			kekee = "z";
			kekey = 2;
		}
		if ((kekey == 1 && event.keyCode != keykeyremove)) {
			BBBo = true;
			cccc2 = 0;
			
		}
		if (tiimer && BBBo && cccc2 == 0) {
			if (kekey == 0) {
					keyevent = 90;
					keykeyremove = 90;
					kekey = 1;
					zedd = false;
				}
				
			if (kekey == 1 && keyevent == keykeyremove && keyevent != 90 && keykeyremove != 90) {
				
				var clientisX;
			var clientisY;
			if (event.key == "d") {
				clientisX = w;
				clientisY = h/2;
			}
			else if (event.key == "z") {
				clientisX = 0;
				clientisY = h/2;
			}
			else if (event.key == "s") {
				clientisX = w/2;
				clientisY = h;
				}
			else if (event.key == "q") {
				clientisX = w/2;
				clientisY = 0;
				
			}
			
			if (kekey == 1) {
				zedd = false;
					cccc2 = 1;
					BBBo = false;
					
					
				rotationXX= -(360*(Math.atan2(h/2 - clientisY , w/2  - clientisX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				
				for (var numm = 0; numm < joueurs.length; numm ++) {
			 
		
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 if (joueurs[numm][1] == document.querySelector('h1').innerHTML)
				joueurs[numm][2] = "ceccc3";
			zz2 = 0;
					 }
				}
				zqsd = 1;
				}
			keyevent = 90;
			keykeyremove = keyevent;
				//kekey = 2;
				}
				
		if (zedd == false){
			if (kekey == 2) {
				
				kekey = 1;
			}
           
				clientissX = w/2;
				clientissY = 0;
			
		zedd = true;
		
		}
	}
        } else if (kekey == 1 && kekee == "z") {
			
			kekey2 = "z";
		}
			
			
			
		
			
			
		
		if (event.key == "e"){// && attaquer < 3
			 if (tiimer && verifAttaquer == attaquer && verifAttaquer < (25*(Endurance/2)) && page.getChildByName(document.querySelector('h1').innerHTML).attaque == verifAttaquer) {
				 
				cc2 = 1;
				//zz2 = 1;
				qq2 = 1;
				dd2 = 1;
				ss2 = 1;
				//cccc2 = 1;
				//zqsd2 = false;
				var nombrFlech = Math.round(Math.random()*Force+(2*(Force/2)));
				verifAttaquer = verifAttaquer+nombrFlech;
				var vitessFlech = parseFloat(Math.random()*Portee+3*(Portee/4));
				rotationX= -(360*(Math.atan2(h/2 - clientY , w/2  - clientX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("ce/"+ vitessFlech.toString() + "*" + nombrFlech.toString() +"/"+rotationX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/"+attaquer.toString(), false, verifAttaquer+10);
			}
        }
			
			
			
		
		
		
			
		
		/*if(zedd){
            if (zz2 == 0 && zqsd2 && hhbb ) {
				zz2 = 1;
				cccc2 = 1;
				cc2 = 1;
				rotationX= -(360*(Math.atan2(h/2 - clientY , w/2  - clientX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("z/"+ Math.abs(((h/2 - clientY) + (w/2  - clientX))/(((w/2)+(h/2))/10)).toString() +"/"+rotationX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", false);
			}
        } */
        
        
        if(event.key == "d"){
			  if (kekee != "d") {
			kekee = "d";
			kekey = 2;
		}
			if ((kekey == 1 && event.keyCode != keykeyremove)) {// && kekey == 0
			BBBo = true;
			cccc2 = 0;
			
		}
			 if (tiimer && BBBo && cccc2 == 0) {//page.getChildByName(document.querySelector('h1').innerHTML).attaque == 0 && verifAttaquer == 0
			  if (kekey == 0) {
					keyevent = 68;
					keykeyremove = 68;
					kekey = 1;
					zedd = false;
				}
			if (kekey == 1 && keyevent == keykeyremove && keyevent != 68 && keykeyremove != 68) {
				var clientisX;
			var clientisY;
			if (event.key == "d") {
				clientisX = w;
				clientisY = h/2;
			}
			else if (event.key == "z") {
				clientisX = 0;
				clientisY = h/2;
			}
			else if (event.key == "s") {
				clientisX = w/2;
				clientisY = h;
				}
			else if (event.key == "q") {
				clientisX = w/2;
				clientisY = 0;
				
			}
				 
			if (kekey == 1) {
				zedd = false;
					cccc2 = 1;
					BBBo = false;
					
					
				rotationXX= -(360*(Math.atan2(h/2 - clientisY , w/2  - clientisX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("none/5.55/"+rotationXX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);
				
				for (var numm = 0; numm < joueurs.length; numm ++) {
			 
		
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 if (joueurs[numm][1] == document.querySelector('h1').innerHTML)
				joueurs[numm][2] = "ceccc3";
			zz2 = 0;
					 }
				}
				zqsd = 1;
				}
			keyevent = 68;
				 keykeyremove = keyevent;
				 //kekey = 2;
				}
		if(zedd == false){
            if (kekey == 2) {
				
				kekey = 1;
			}
				clientissX = w;
				clientissY = h/2;
			
		zedd = true;
		
		}
	}
        } else if (kekey == 1 && kekee == "d") {
			
			kekey2 = "d";
		}
		
		var speed = 10;


		
			},{passive: true});
		},{passive: true});
		
		}
	
	var BBBo = true;
	var joueurs = [];
	
	function Bouger(namae, lettre, vitess, Rotations, numm, posi) {
		if (namae != document.querySelector('h1').innerHTML) {
		page.getChildByName(namae).x = parseFloat(posi.split("*")[0]);
		page.getChildByName(namae).y =  parseFloat(posi.split("*")[1]);
		
		}
		page.getChildByName(namae+"vitalite").x = page.getChildByName(namae).x;
		page.getChildByName(namae+"vitalite").y = page.getChildByName(namae).y-51;
		
		
		var bbBool;
		var bbBol = 0;
	Rotations = parseFloat(Rotations);
	try {
		
		
		if (Rotations <= 30 && Rotations >= -30) {
			page.getChildByName(namae).gotoAndPlay("b");
		} else if (Rotations <= -30 && Rotations >= -70) {
			page.getChildByName(namae).gotoAndPlay("bg");
		} else if (Rotations <= 70 && Rotations >= 30) {
			page.getChildByName(namae).gotoAndPlay("bd");
		} else if (Rotations <= -140 && Rotations >= -200) {
			page.getChildByName(namae).gotoAndPlay("h");
		} else if (Rotations <= -200 && Rotations >= -240) {
			page.getChildByName(namae).gotoAndPlay("hd");
		} else if (Rotations <= -110 && Rotations >= -140) {
			page.getChildByName(namae).gotoAndPlay("hg");
		} else if (Rotations <= -70 && Rotations >= -110) {
			page.getChildByName(namae).gotoAndPlay("g");
		} else {
			page.getChildByName(namae).gotoAndPlay("d");
		}
				
	//page.getChildByName(namae).rotation = -Rotations;
	} catch (e) {
		console.log(namae);
	}
	//page.getChildByName(namae).rotation = -Rotations;
	
	
	if (lettre == 'none' && namae == document.querySelector('h1').innerHTML) {
		BBBo = true;
			zqsd2 = true;
			
				cccc2 = 0;
				
			Sensitivation(true);
	
	} else if (namae == document.querySelector('h1').innerHTML) {
		
	
	} else if (lettre != 'none') {
		
	}
	if (namae == document.querySelector('h1').innerHTML) {
		//bOUle = true;
		//camera.setTarget(page.getChildByName(namae));
	
	}
	
	function onBR() {
		
		bbBol += 1;
		
		if (bbBol == 5) {
		
		}
		
		if (bbBol > 5 && namae == document.querySelector('h1').innerHTML && hbol && hhbb && tiimer) {
			clearInterval(bbBool);
			
			
			
		}
		
		};
		
		}
		function Sensitivation(ttr) {
			
	
		
	
		
	
	zqsd = 0;
	dd2 = 0;
	ss2 = 0;
	qq2 = 0;
	zz2 = 0;
	cc2 = 0;
		
	
	
}
var camera;
var mesh = [];
var zqsdTIMER;
var zz = 0;
var dd = 0;
var ss = 0;
var qq = 0;
var aa = 0;
var zz2 = 0;
var dd2 = 0;
var ss2 = 0;
var qq2 = 0;
var aa2 = 0;
var zqsd = 0;
var cc2 = 0;
var cccc2 = 0;

var scene;
var initts = "0";
var engine;

$( document ).ready(function() {
    
var mesh2;
var mesh3;
var mesh4;
var memesh;



var mz = 0;
var rrr = 0;
            
            
				var rooot = 0;
				
				
              
			
				
    
				var hT = true;
				
				
				createjs.Ticker.addEventListener("tick", handleTick55,{passive: true});
		 function handleTick55(event) {
			// event = sleep(10);
			 //nextTick(function() {
				 
				 if (hT) {
					 displayAtt(hT);
					 hT = false;
				 }
				 }
				 
				 
				 function displayAtt(hT) {
					 createjs.Ticker.addEventListener("tick", handleTick5599,{passive: true});
		 function handleTick5599(event) {
			 if (bOUle) {
				 if (!page.getChildByName(document.querySelector('h1').innerHTML) || hT == false) {
						 
					 } else {
			 var rotat = 90;
			 if (tiimer && BBBo && cccc2 == 0) {//page.getChildByName(document.querySelector('h1').innerHTML).attaque == 0 && verifAttaquer == 0
		if(zedd) {
            if (zz2 == 0) {
				
				zz2 = 1;
				cccc2 = 1;
				cc2 = 1;
				rotationX= -(360*(Math.atan2(h/2 - clientissY , w/2  - clientissX)))/(2*Math.PI)- rotat;//sensitive*((w/2 - clientX)/(window.innerWidth))
				Manivelle("z/"+ Math.abs(9.55+(Agilitee/3)).toString() +"/"+rotationX.toString()+"/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", false, 1);
				
		
		
			}
        } 
			 }
			 }
			 }
		if (bOUle) {
			
			 var dea = -1;
		for (var pom = 0; pom < zonezz.length; pom ++) {
displayAll(pom, dea);			
		}
		if (dea == zonezz.length-1 && dea != -1 && boulii) { 
		for (var pom2 = 0; pom2 < zonezz.length; pom2 ++) {
			if (!page.getChildByName("zombie/"+zonezz[pom2][0].toString())) {
				
			} else {
				page.getChildByName("zombie/"+zonezz[pom2][0].toString()).attaque = 0;
				page.getChildByName("zonezombie/"+zonezz[pom2][0].toString()).attaque = 0;
			}
				
			}
		
			
			zonezz = []; 
			}
		
		 for (var numm = 0; numm < joueurs.length; numm ++) {
			 
			var tyBool = 0;
					
				 
			 
	if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
						 for (var z2z = 0; z2z < zombiez.length; z2z++) {
							 if (!page.getChildByName("zombie/"+z2z.toString())) {
								 
							 } else if (Math.round(page.getChildByName("zombie/"+z2z.toString()).roote) == 2) {
								 
	if (hitTestObject(page.getChildByName("zonezombie/"+z2z.toString()), page.getChildByName(joueurs[numm][1]))) {
		if (page.getChildByName("zonezombie/"+z2z.toString()).attaque < vague) {
			if (page.getChildByName("zonezombie/"+z2z.toString()).attaque == page.getChildByName("zombie/"+z2z.toString()).attaque && boulii) {
				// boulii doit existé pour que l'attaque s'acrémente, boulii étant l'existance de l'ia quand elle tir.
			page.getChildByName("zonezombie/"+z2z.toString()).attaque = page.getChildByName("zonezombie/"+z2z.toString()).attaque+1;
	hhyIA(z2z, numm);
			}
		} else {
			 for (var z3z = zonezz.length-1; z3z >= 0 ; z3z--) {
				 if (zonezz[z3z][0] == z2z) {
					 if (zonezz[z3z][1] == "fin") {
			page.getChildByName("zonezombie/"+z2z.toString()).attaque = 0;
			page.getChildByName("zombie/"+z2z.toString()).attaque = 0;
			break;
					 } else {
					break;
					 }					
					 }
			 
		}
		
	}
	
	}
						 }
						 }
					var vitess = page.getChildByName(joueurs[numm][1]).Vitess;
					 var Rotations = joueurs[numm][4];
					 
			
				  for (var numu = 0; numu < page.getChildByName(joueurs[numm][1]).attaque; numu ++) {
				if (!page.getChildByName(joueurs[numm][1]+"ccecL*"+ (numu).toString()) && !page.getChildByName(joueurs[numm][1]+"ccecL*"+ (page.getChildByName(joueurs[numm][1]).attaque-1).toString())) {	 
			
			if (document.querySelector('h1').innerHTML == joueurs[numm][1]) {
			tyBool += 1;//page.getChildByName(joueurs[numm][1]).attaque >= 3 && attaquer >= 3 && joueurs[numm][2] == "none" &&
			
			if (tyBool == page.getChildByName(joueurs[numm][1]).attaque && page.getChildByName(joueurs[numm][1]).attaque == attaquer && attaquer == verifAttaquer) {
				page.getChildByName(joueurs[numm][1]).attaque = 0;
			attaquer = 0;
			//zqsd = 0;
			//joueurs[numm][2] = "none";	
			verifAttaquer = 0;
			Manivelle("cec/deleteAll/0/0/0", false, Math.round(Math.random()*50+2));
			//cccc2 = 0;
			//Sensitivation(true);
			
		//zqsd2 = true;
					
			}
			} else {
				tyBool += 1;
			if (tyBool == page.getChildByName(joueurs[numm][1]).attaque) {
				
			//joueurs[numm][2] = "none";	
			if (!page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString())) {
				
			} else {
			page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attbool = false;
				 Manivelle("cec/none/0/0/"+(numu).toString(), false, numu+111);
				page.getChildByName(joueurs[numm][1]).attaque = 0;
			}
			}
			}
			
		
			 
				
			} else if (!page.getChildByName(joueurs[numm][1]+"ccecL*"+ (numu).toString())) {

			} else if (page.getChildByName(joueurs[numm][1]+"ccecL*"+ (numu).toString()).attbool) {
			/*
					 sambaAnim = scene.animationGroups[((Number(numm)+1)*5)-4];
			 sambaAnim2.stop(true);
		sambaAnim.start(true);
    sambaAnim2 = sambaAnim;
				*/	 
			var positionorigin = page.getChildByName(joueurs[numm][1]).x;
			var positionorigin2 = page.getChildByName(joueurs[numm][1]).y;
			
			var positioncar = page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).x;
				var positioncar2 = page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).y;
			
			
			if (!joueurs[numm] || !page.getChildByName(joueurs[numm][1])) {
						 
					 } else {
			
			if (!page) {
				 
			 } else {
		var posimgX10 = false;
		var posimgY10 = false;
		var posimgX01 = false;
		var posimgY01 = false;
				var ptt = false;
	 //var Rotations = page.getChildByName("zombie/"+numm.toString()).roote;
			var mathPosPersoX = Math.round(((page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).x)-24)/32);
						var mathPosPersoY = Math.round(((page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).y)-24)/32);
						if (!page.muraille[(mathPosPersoX)] || !page.muraille[(mathPosPersoX)][(mathPosPersoY)]) {
			
		} else {
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY)]) == -1) {
							posimgX01 = true;
						} else if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY)]) <= -1) {
							posimgX01 = true;
							ptt = true;
						}
						if (camps == 3) {
							if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY)]) == 2) {
								posimgX01 = true;
								var herbe = 1;
								for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == "herbe") {
										Qinv[zr][zr2] = Qinv[zr][zr2].split("%")[0] + "%" + (Number(Qinv[zr][zr2].split("%")[1])+1).toString();
										herbe = 2;
										break;
									}
								}
								if (herbe == 2) {
									break;
								}
								}
								if (herbe == 1) {
									var caillou = 1;
									for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == "VIDE") {
										Qinv[zr][zr2] = "LoadImage~build.png*herbe%" + (Number(Qinv[zr][zr2].split("%")[1])+1).toString();
										caillou = 2;
										break;
									}
								}
								if (caillou == 2) {
									break;
								}
								}
								}
								//score += 1;
								document.querySelector('#pourcent').innerHTML = score.toString();
							}
						}
						if (camps == 2) {
							if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY)]) == 3) {
								posimgX01 = true;
								
								var herbe = 1;
								for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == "caillou") {
										Qinv[zr][zr2] = Qinv[zr][zr2].split("%")[0] + "%" + (Number(Qinv[zr][zr2].split("%")[1])+1).toString();
										herbe = 2;
										break;
									}
								}
								if (herbe == 2) {
									break;
								}
								}
								if (herbe == 1) {
									var caillou = 1;
									for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == "VIDE") {
										Qinv[zr][zr2] = "LoadImage~build.png*caillou%" + (Number(Qinv[zr][zr2].split("%")[1])+1).toString();
										caillou = 2;
										break;
									}
								}
								if (caillou == 2) {
									break;
								}
								}
								}
								document.querySelector('#pourcent').innerHTML = score.toString();
							}
							
						}
						//vitess = page.getChildByName("zombie/"+numm.toString()).Vitess;
						/*
						if (page.muraille[(mathPosPersoX)][(mathPosPersoY)] == "3") {
							vitess -= 0;
						}
						*/
						
						
		}
			 }
		if((posimgX01) && (document.querySelector('h1').innerHTML == joueurs[numm][1]) && (page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attbool) && hbol && tiimer && BBBo) {
			
             var cartes = Math.round((Math.random()*1.48)+1.51);//Math.round(Math.random()*6.97+0.51);
							if (cartes == 1) { cartes = Math.round(Math.random()*-5.97-1.51); }
							cartes = camps;
							page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attaque = 21;
							hbol = false;
							if (ptt) { } else {
   Manivelle(("muraille/"+ mathPosPersoX.toString() + "*" + mathPosPersoY.toString() +"/"+ cartes.toString() +"/0/0"), false, 0);
							}
			Manivelle("cec/none/0/0/"+(numu).toString(), false, numu+111);
			hbol = true;
        }
			
			
			}
			
			
			
			
			
var bbcolli = -2;
var bbcoul = -1;

			  
	
for (var zz = 0; zz < zombiez.length; zz++) {
	
	if (!zombiez[zz] || !page.getChildByName("zombie/"+zz.toString()) || !page.getChildByName(document.querySelector('h1').innerHTML+"ccecL*"+(numu).toString())) {
						 
		 } else if (zombiez[zz] != "dead" && hbol && hhbb && (page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attbool)) {
			
if (document.querySelector('h1').innerHTML == joueurs[numm][1]) {
if (hitTestObject(page.getChildByName("zombie/"+zz.toString()), page.getChildByName(document.querySelector('h1').innerHTML+"ccecL*"+(numu).toString()))) {
	
	
	bbcolli = -1;
	bbcoul = zz;
	
    
   } 
}
		 }
}


for (var colliderIndex = 0; colliderIndex < joueurs.length; colliderIndex++) {
	
	
   if (joueurs[colliderIndex][1] != joueurs[numm][1] && document.querySelector('h1').innerHTML == joueurs[numm][1]) {
	   //joueurs[colliderIndex][1] ==  && 
   //console.log(joueurs[colliderIndex][1] + "test");
    //console.log(page.getChildByName(joueurs[numm][1]+"ccecL*").intersectsMesh(page.getChildByName(joueurs[colliderIndex][1]), false));
	
   if (hitTestObject(page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()), page.getChildByName(joueurs[colliderIndex][1]))) {
    bbcolli = colliderIndex;
    break;
   } 
   }
}
if (bbcolli != -2 && bbcolli != -1) {
	
		
	if (document.querySelector('h1').innerHTML == joueurs[numm][1] && (page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attbool) && hbol && tiimer && BBBo) {
		hbol = false;
		
		page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attbool = false;
		Manivelle("cec/"+joueurs[bbcolli][1]+"/0/0/"+(numu).toString(), false, numu+111);
		hbol = true;
	//cc2 = 0;
	//Sensitivation(true);
}
	
	
	
//page.getChildByName(joueurs[numm][1]+"ccecL*").dispose();
//joueurs[numm][2] = 'none';
} else if (bbcolli == -1) {
	if (document.querySelector('h1').innerHTML == joueurs[numm][1] && (page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attbool) && hbol && tiimer && BBBo) {
	hbol = false;
	page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attbool = false;
	
	Manivelle("cec/none/zombie*"+ bbcoul.toString() +"/"+bbcoul.toString()+"/"+(numu).toString(), false, numu+111);
	hbol = true;
	}
} else if ((page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attaque >= 14) && hbol && zqsd2 && tiimer && BBBo){
	if (joueurs[numm][1] == document.querySelector('h1').innerHTML && hbol) {//&& verifAttaquer == attaquer
				 //cc2 = 0;
				 hbol = false;
				 
				 page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attbool = false;
				 Manivelle("cec/none/0/0/"+(numu).toString(), false, numu+111);
				 hbol = true;
				 //Sensitivation(true);
	}
		//joueurs[numm][2] = 'none';		 
	} else {
		vitess = page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).Vitess/1.7;
		page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attaque = Number(page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).attaque)+1;
		page.getChildByName(numm.toString() + joueurs[numm][1] + numu.toString()).rotation = -page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).Rotationne;
			page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).x += (vitess*(Math.sin(2*Math.PI*(page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).Rotationne/360))));
			page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).y += (vitess*(Math.cos(2*Math.PI*(page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).Rotationne/360))));
			page.getChildByName(numm.toString() + joueurs[numm][1] + numu.toString()).x = page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).x;
			page.getChildByName(numm.toString() + joueurs[numm][1] + numu.toString()).y = page.getChildByName(joueurs[numm][1]+"ccecL*"+(numu).toString()).y;
				  }
				 }
		}
   
					 	
					 
		if (joueurs[numm][2] == 'none' && joueurs[numm][1] == document.querySelector('h1').innerHTML) {
		
		
		page.getChildByName(joueurs[numm][1]).gotoAndStop("stand");
	
	} 
		if (joueurs[numm][0] == false && joueurs[numm][1] == document.querySelector('h1').innerHTML) {
			
			page.getChildByName(joueurs[numm][1]).gotoAndStop("stand");
			
		} else if (joueurs[numm][0] == false) {
			
			page.getChildByName(joueurs[numm][1]).gotoAndStop("stand");
			
		}
		if (joueurs[numm][2] == 'ccec') {
		
		page.getChildByName(joueurs[numm][1]).gotoAndPlay("b");
		
		}
		
		if (joueurs[numm][1] == document.querySelector('h1').innerHTML) {
			
			
		} else {
			
			
			
		}
		
		
		var posimgX10 = false;
		var posimgY10 = false;
		var posimgX01 = false;
		var posimgY01 = false;
		
			 if (!page) {
				 
			 } else {
				 var mathPosPersoX = Math.round(((page.getChildByName(joueurs[numm][1]).x)-24)/32);
						var mathPosPersoY = Math.round(((page.getChildByName(joueurs[numm][1]).y)-24)/32);
				 function decr(xc, yc) {
					 if (Number(page.muraille[(mathPosPersoX)+xc][(mathPosPersoY)+yc]) <= -1) {
							if (initts == "2" && tiimer2) {
				
       var mathPosPersoX2 = Math.round(mathPosPersoX+xc);//-0.5
		var mathPosPersoY2 = Math.round(mathPosPersoY+yc);//-0.5
		//console.log(page.muraille[(mathPosPersoX)+xc][(mathPosPersoY)+yc]);
		if (!page.muraille[(mathPosPersoX2)]) {
			
		} else if (page.muraille[(mathPosPersoX2)][(mathPosPersoY2)] == "-2") {
							tiimer2 = false;
							var cartes = Math.round((Math.random()*1.48)+1.51);//Math.round(Math.random()*6.97+0.51);
							if (cartes == 1) { cartes = Math.round(Math.random()*-5.97-1.51); }
							Manivelle(("muraille/"+ mathPosPersoX2.toString() + "*" + mathPosPersoY2.toString() +"/"+ cartes.toString() +"/0/0"), false, 0);
							setTimer = setInterval(setTime, 30);
							if (joueurs[numm][1] == document.querySelector('h1').innerHTML) {
							var herbe = 1;
							var itemvar = "Terre%2%build.png*Argile%3%vita.png";
							var itemL = Math.round(Math.random()*0.65);
								for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == itemvar.split("*")[itemL].split("%")[0]) {
										Qinv[zr][zr2] = Qinv[zr][zr2].split("%")[0] + "%" + (Number(Qinv[zr][zr2].split("%")[1])+Math.round(Number(itemvar.split("*")[itemL].split("%")[1])*Math.random()+1)).toString();
										herbe = 2;
										break;
									}
								}
								if (herbe == 2) {
									break;
								}
								}
								if (herbe == 1) {
									var caillou = 1;
									for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == "VIDE") {
										Qinv[zr][zr2] = "LoadImage~"+itemvar.split("*")[itemL].split("%")[2]+"*"+itemvar.split("*")[itemL].split("%")[0]+"%" + (Number(Qinv[zr][zr2].split("%")[1])+Math.round(Number(itemvar.split("*")[itemL].split("%")[1])*Math.random()+1)).toString();
										caillou = 2;
										break;
									}
								}
								if (caillou == 2) {
									break;
								}
								}
								}
							}
							
						}  else if (page.muraille[(mathPosPersoX2)][(mathPosPersoY2)] == "-22") {
							document.getElementById("name").value = document.getElementById("h1").innerHTML;
							
							document.getElementById("windo").click();
							
						} else if (page.muraille[(mathPosPersoX2)][(mathPosPersoY2)] == "-1") {
							tiimer2 = false;
							var cartes = Math.round((Math.random()*1.48)+1.51);//Math.round((Math.random()*6.44)+1);
							if (cartes == 1) { cartes = Math.round(Math.random()*-5.97-1.51); }
							Manivelle(("muraille/"+ mathPosPersoX2.toString() + "*" + mathPosPersoY2.toString() +"/"+ cartes.toString() +"/0/0"), false, 0);
							setTimer = setInterval(setTime, 30);
							if (joueurs[numm][1] == document.querySelector('h1').innerHTML) {
							var herbe = 1;
							var itemvar = "10+20+10+1+3++épée%0%vita.png*3+5+10+2+15++arc%0%vita.png*30+5+20+1+5++hache%0%vita.png*15+15+50+1+10++pioche%0%build.png*30+50+1+3+15++Vulbis%0%build.png";
							var itemL = Math.round(Math.random()*0.85+(Chance/200));
							if (itemL == 1) {
								itemL += Math.round(Math.random()*0.85+(Chance/200));
							}
							if (itemL == 2) {
								itemL += Math.round(Math.random()*0.75+(Chance/200));
							}
							if (itemL == 3) {
								itemL += Math.round(Math.random()*0.65+(Chance/200));
							}
								for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == itemvar.split("*")[itemL].split("%")[0]) {
										Qinv[zr][zr2] = Qinv[zr][zr2].split("%")[0] + "%" + (Number(Qinv[zr][zr2].split("%")[1])+Math.round(Number(itemvar.split("*")[itemL].split("%")[1])*Math.random()+1)).toString();
										herbe = 2;
										break;
									}
								}
								if (herbe == 2) {
									break;
								}
								}
								if (herbe == 1) {
									var caillou = 1;
									for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == "VIDE") {
										Qinv[zr][zr2] = "LoadImage~"+itemvar.split("*")[itemL].split("%")[2]+"*"+itemvar.split("*")[itemL].split("%")[0]+"%" + (Number(Qinv[zr][zr2].split("%")[1])+Math.round(Number(itemvar.split("*")[itemL].split("%")[1])*Math.random()+1)).toString();
										caillou = 2;
										break;
									}
								}
								if (caillou == 2) {
									break;
								}
								}
								}
							}
						}
						
			}
							
						}
				 }
			
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY-1)]) <= 8 && Number(page.muraille[(mathPosPersoX)][(mathPosPersoY-1)]) >= 4) {
							posimgY10 = true;
						} else {
							if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY-1)]) == camps) {
								posimgY10 = true;
							} else {
							posimgY10 = false;
							
							decr(0,-1);
							}
						}
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY+1)]) <= 8 && Number(page.muraille[(mathPosPersoX)][(mathPosPersoY+1)]) >= 4) {
							posimgY01 = true;
						} else {
							if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY+1)]) == camps) {
								posimgY01 = true;
							} else {
							posimgY01 = false;
							
							decr(0,1);
							}
						}
						if (Number(page.muraille[(mathPosPersoX-1)][(mathPosPersoY)]) <= 8 && Number(page.muraille[(mathPosPersoX-1)][(mathPosPersoY)]) >= 4) {
							posimgX10 = true;
						} else {
							if (Number(page.muraille[(mathPosPersoX-1)][(mathPosPersoY)]) == camps) {
								posimgX10 = true;
							} else {
							posimgX10 = false;
							
							decr(-1,0);
							}
						}
						//console.log(Number(page.muraille[(mathPosPersoX)][(mathPosPersoY)]));
						if (Number(page.muraille[(mathPosPersoX+1)][(mathPosPersoY)]) <= 8 && Number(page.muraille[(mathPosPersoX+1)][(mathPosPersoY)]) >= 4) {
							posimgX01 = true;
						} else {
							if (Number(page.muraille[(mathPosPersoX+1)][(mathPosPersoY)]) == camps) {
								posimgX01 = true;
							} else {
							posimgX01 = false;
							
							decr(1,0);
							}
						}
						vitess = page.getChildByName(joueurs[numm][1]).Vitess;
						
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY)]) == 0 && hbolwin && joueurs[numm][1] == document.querySelector('h1').innerHTML) {
							hbolwin = false;
							document.getElementById("name").value = document.getElementById("h1").innerHTML;
							document.getElementById("windo").click();
							//Manivelle(("winner/"+ mathPosPersoX.toString() + "*" + mathPosPersoY.toString() +"/0/0/0"), false, 4);
							
						}
						
			 }
		if(joueurs[numm][2] == "z"){
            if ((((Rotations <= 90 && Rotations >= 0) || (Rotations >= -270 && Rotations <= -180)) && posimgX01) || ((Rotations >= -180 && Rotations <= 0) && posimgX10)) {
			page.getChildByName(joueurs[numm][1]).x +=
			(vitess*(Math.sin(2*Math.PI*(Rotations/360))));
			}
			if (((Rotations >= -270 && Rotations <= -90) && posimgY10) || ((Rotations >= -90 && Rotations <= 90) && posimgY01)) {
			page.getChildByName(joueurs[numm][1]).y +=
			(vitess*(Math.cos(2*Math.PI*(Rotations/360))));
			}
			if (joueurs[numm][1] == document.querySelector('h1').innerHTML) {
//camera.setTarget(page.getChildByName(joueurs[numm][1]));
			}
        } 
        if(joueurs[numm][2] == "q"){
			/*
			if ((((Rotations <= 90 && Rotations >= 0) || (Rotations >= -270 && Rotations <= -180)) && posimgX01) || ((Rotations >= -180 && Rotations <= 0) && posimgX10)) {
			page.getChildByName(joueurs[numm][1]).x +=
			(vitess*(Math.sin(2*Math.PI*((Rotations+90)/360))));
			}
			if (((Rotations >= -270 && Rotations <= -90) && posimgY01) || ((Rotations >= -90 && Rotations <= 90) && posimgY10)) {
			page.getChildByName(joueurs[numm][1]).y +=
			(vitess*(Math.cos(2*Math.PI*((Rotations+90)/360))));
			}
			*/
			if (joueurs[numm][1] == document.querySelector('h1').innerHTML) {

			}
        } 
        if(joueurs[numm][2] == "s"){
			if ((((Rotations <= 90 && Rotations >= 0) || (Rotations >= -270 && Rotations <= -180)) && posimgX10) || ((Rotations >= -180 && Rotations <= 0) && posimgX01)) {
            page.getChildByName(joueurs[numm][1]).x -=
			(vitess*(Math.sin(2*Math.PI*(Rotations/360))));
			}
			if (((Rotations >= -270 && Rotations <= -90) && posimgY01) || ((Rotations >= -90 && Rotations <= 90) && posimgY10)) {
			page.getChildByName(joueurs[numm][1]).y -=
			(vitess*(Math.cos(2*Math.PI*(Rotations/360))));
			}
			if (joueurs[numm][1] == document.querySelector('h1').innerHTML) {

			}
        } 
        if(joueurs[numm][2] == "d"){
			/*
			if ((((Rotations <= 90 && Rotations >= 0) || (Rotations >= -270 && Rotations <= -180)) && posimgX10) || ((Rotations >= -180 && Rotations <= 0) && posimgX01)) {
			page.getChildByName(joueurs[numm][1]).x -=
			(vitess*(Math.sin(2*Math.PI*((Rotations-90)/360))));
			}
			if (((Rotations >= -270 && Rotations <= -90) && posimgY10) || ((Rotations >= -90 && Rotations <= 90) && posimgY01)) {
			page.getChildByName(joueurs[numm][1]).y -=
			(vitess*(Math.cos(2*Math.PI*((Rotations-90)/360))));
			}
			*/
			if (joueurs[numm][1] == document.querySelector('h1').innerHTML) {

			}
        }
		
		


			
        
		
			

        if(joueurs[numm][2] == "z" || joueurs[numm][2] == "q" || joueurs[numm][2] == "s" || joueurs[numm][2] == "d"){
			/*
for (var a = 0; a < 3; a++) {
		page.getChildByName(joueurs[numm][1]).moveWithCollisions(page.getChildByName(joueurs[numm][1]).gravity);
		}
		*/
		if (joueurs[numm][1] == document.querySelector('h1').innerHTML) {
page.x = -(page.getChildByName(joueurs[numm][1]).x*scalex)+(w/(2));
page.y = -(page.getChildByName(joueurs[numm][1]).y*scaley)+(h/(2));
		}
		page.getChildByName(joueurs[numm][1]+"vitalite").x = page.getChildByName(joueurs[numm][1]).x;
		page.getChildByName(joueurs[numm][1]+"vitalite").y = page.getChildByName(joueurs[numm][1]).y-51;
		
		}
		 } 
		 }
		}
			 
				 }
		//});
		 }
		 var truline;
		 var lined = true;
		 function trlni() {
			 clearInterval(truline);
			 lined = true; 
			 
			 //
		 }
		createjs.Ticker.addEventListener("tick", handleTick5500,{passive: true});
		 function handleTick5500(event) {
			 event = sleep(5);
		nextTick(function() {
		if (bOUle && ZZZ) {
			
		 for (var numm = 0; numm < zombiez.length; numm ++) {
			 
			var tyBool = 0;
					
				 
			 //hhbb = true;
	if (!zombiez[numm] || !page.getChildByName("zombie/"+numm.toString()) || !page.getChildByName(document.querySelector('h1').innerHTML)) {
						 
		 } else if (zombiez[numm] != "dead" && hhbb) {
					hhbb = true;
		//lined = true;
	   
  if (hitTestObject(page.getChildByName("zombie/"+numm.toString()), page.getChildByName(document.querySelector('h1').innerHTML)) && lined) {
	   lined = false;
			//hbol = false;
			truline = setInterval(trlni, 40);
			Manivelle2("zzz/"+ document.querySelector('h1').innerHTML +"/0", false, 5);
		
		hhbb = true;
   } 
  
			
        
		
			

       
		
		page.getChildByName(("zombie/"+numm.toString()) + "vitalite").x = page.getChildByName("zombie/"+numm.toString()).x;
		page.getChildByName(("zombie/"+numm.toString()) + "vitalite").y = page.getChildByName("zombie/"+numm.toString()).y-51;
		 page.getChildByName("zombie/"+numm.toString()).rotation = (zombieznm*page.getChildByName("zombie/"+numm.toString()).roote);
		 if (Math.round(page.getChildByName("zombie/"+numm.toString()).roote) == 2) {
		 //page.getChildByName("zonezombie/"+numm.toString()).rotation = (zombieznm*page.getChildByName("zombie/"+numm.toString()).roote);
		 page.getChildByName("zonezombie/"+numm.toString()).x = page.getChildByName("zombie/"+numm.toString()).x-(210*(Math.sin(2*Math.PI*((zombieznm*page.getChildByName("zombie/"+numm.toString()).roote)/360))));
		 page.getChildByName("zonezombie/"+numm.toString()).y = page.getChildByName("zombie/"+numm.toString()).y+(210*(Math.cos(2*Math.PI*((zombieznm*page.getChildByName("zombie/"+numm.toString()).roote)/360))));
		page.getChildByName("zonezombie/"+numm.toString()).rotation = (zombieznm*page.getChildByName("zombie/"+numm.toString()).roote);
		 }
		
		 } else if (!zombiez[numm] || !page.getChildByName("zombie/"+numm.toString()) || !page.getChildByName(document.querySelector('h1').innerHTML)) {
						 
		 } else {
			 /*
			  if (!page) {
				 
			 } else {
			 var Rotations = zombieznm*page.getChildByName("zombie/"+numm.toString()).roote;
			var mathPosPersoX = Math.round(((page.getChildByName("zombie/"+numm.toString()).x)-24)/32);
						var mathPosPersoY = Math.round(((page.getChildByName("zombie/"+numm.toString()).y)-24)/32);
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY-1)]) <= 8 && Number(page.muraille[(mathPosPersoX)][(mathPosPersoY-1)]) >= 0) {
							posimgY10 = true;
						} else {
							posimgY10 = false;
						}
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY+1)]) <= 8 && Number(page.muraille[(mathPosPersoX)][(mathPosPersoY+1)]) >= 0) {
							posimgY01 = true;
						} else {
							posimgY01 = false;
						}
						if (Number(page.muraille[(mathPosPersoX-1)][(mathPosPersoY)]) <= 8 && Number(page.muraille[(mathPosPersoX-1)][(mathPosPersoY)]) >= 0) {
							posimgX10 = true;
						} else {
							posimgX10 = false;
						}
						if (Number(page.muraille[(mathPosPersoX+1)][(mathPosPersoY)]) <= 8 && Number(page.muraille[(mathPosPersoX+1)][(mathPosPersoY)]) >= 0) {
							posimgX01 = true;
						} else {
							posimgX01 = false;
						}
						vitess = page.getChildByName("zombie/"+numm.toString()).Vitess;
						if (page.muraille[(mathPosPersoX)][(mathPosPersoY)] == "3") {
							vitess -= 0;
						}
			 }
		if((posimgY10 && posimgY01) || (posimgX10 && posimgX01)){
			
            if ((((Rotations <= 90 && Rotations >= 0) || (Rotations >= -270 && Rotations <= -180)) && posimgX01) || ((Rotations >= -180 && Rotations <= 0) && posimgX10)) {
			page.getChildByName("zombie/"+numm.toString()).x +=
			(vitess/1.2*(-Math.cos(2*Math.PI*((zombieznm*page.getChildByName("zombie/"+numm.toString()).roote)/360))));
			}
			if (((Rotations >= -270 && Rotations <= -90) && posimgY10) || ((Rotations >= -90 && Rotations <= 90) && posimgY01)) {
			page.getChildByName("zombie/"+numm.toString()).y +=
			(vitess/1.2*(Math.sin(2*Math.PI*((zombieznm*page.getChildByName("zombie/"+numm.toString()).roote)/360))));
			}
			
        }
			 page.getChildByName(("zombie/"+numm.toString()) + "vitalite").x = page.getChildByName("zombie/"+numm.toString()).x;
		page.getChildByName(("zombie/"+numm.toString()) + "vitalite").y = page.getChildByName("zombie/"+numm.toString()).y-51;
		 page.getChildByName("zombie/"+numm.toString()).rotation = -Rotations;
		  page.getChildByName("zonezombie/"+numm.toString()).rotation = -Rotations;
		
		 */
		 }
		}
		}
		});
		 }
		 
        });
			
			
						
		
		
           	
            
			
			
			window.addEventListener("mousemove", function(evt) {
    //event = sleep(5);
        clientX = evt.clientX;
			clientY = evt.clientY;
        
		
    
},{passive: true});

			

            
           

			
			var angularSensibility = 360;
			
			

var rotationY = 0;
var rotatt = 90;

			
			
        
		function degToRad(deg)
{
   return (Math.PI*deg)/180
}


function radToDeg(rad)
{

   return (rad*180)/Math.PI
}


	function hhy(yhh) {
		var linksorti;
		var linksss = true;
		var lourdt = true;
		function plouki2() {
		
			if (linksss) {
		clearInterval(linksorti);	
		var bty = false;
		if (linksss) {
		for (var aff = 0; aff < joueurs[yhh][0][3].split("*")[1]; aff ++) {
			
			
			if (!page.getChildByName(joueurs[yhh][0][1]+"ccecL*"+ (Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString())) {
				bty = true;
			} else {
				if (joueurs[yhh][0][1] == document.querySelector('h1').innerHTML) {
			if (aff == 0) {
			attaquer = verifAttaquer-Number(joueurs[yhh][0][3].split("*")[1])+1;
			} else 
			if (aff < joueurs[yhh][0][3].split("*")[1]) {
			
			
			attaquer = attaquer+1;
			
		}
		
			
		}
		page.getChildByName(joueurs[yhh][0][1]+"ccecL*"+ (Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString()).Rotationne = (joueurs[yhh][0][4] - (((aff)-(joueurs[yhh][0][3].split("*")[1]/2))*9));
		page.getChildByName(joueurs[yhh][0][1]+"ccecL*"+ (Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString()).Vitess = joueurs[yhh][0][3].split("*")[0]*1.5;
		page.getChildByName(joueurs[yhh][0][1]+"ccecL*"+ (Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString()).attbool = true;
			clearInterval(linksortiOn3);
			}
		}
		}
		joueurs[yhh][0][2] = "ceccc2";
		if (joueurs[yhh][0][1] == document.querySelector('h1').innerHTML) {
			
			
		zqsd2 = true;

			cccc2 = 0;
			
		    Sensitivation(true);
		}
		
		}
			
		}
		function plouki3() {
			linksorti = setInterval(plouki2, 50);
		for (var aff = 0; aff < joueurs[yhh][0][3].split("*")[1]; aff ++) {
			
		if (!page.getChildByName(joueurs[yhh][0][1]+"ccecL*"+ (Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString()) && lourdt) {
			//if (page.getChildByName(joueurs[yhh][0][1]+"ccecL*"+ (Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString()).attbool == false) {
			clearInterval(linksortiOn3);
			
			//}
		} else if (page.getChildByName(joueurs[yhh][0][1]+"ccecL*"+ (Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString()).attbool == false && lourdt) {
			
			hbol = false;
			
			
			clearInterval(linksortiOn3);
				 
				// page.getChildByName(joueurs[yhh][1]+"ccecL*"+(Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString()).attbool = false;
				// Manivelle("cec/none/0/0/"+(Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1)).toString(), false, (Number(attboul)-(joueurs[yhh][0][3].split("*")[1] - aff - 1))+111);
				 hbol = true;
		
		}
		}
		
	}
	function plouki() {
		clearInterval(linksortiOn);
		
		if (joueurs[yhh][0][1] == document.querySelector('h1').innerHTML) {
			
		//attaquer = page.getChildByName(joueurs[yhh][0][1]).attaque+1;
			//page.getChildByName(joueurs[yhh][0][1]).attaque = attaquer;
		//console.log(attaquer.toString() + verifAttaquer.toString());
		
		
		}
		lourdt = false;
	}
	
	if (joueurs[yhh][0][3] != "deleteAll" && ccecfalse)  {
	//joueurs[yhh][0][2] = "none";
	if (joueurs[yhh][0][1] == document.querySelector('h1').innerHTML) {
	zqsd2 = false;
	} 
	function Sortil() {
			var data = {
        images: ["sort.png"],
        frames: {width:400, height:794},
        animations: {
            anim:[0, 1, 2, 3, 4, 5]
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.071;
	animation.scaleY = 0.071;
	animation.regX = 12;
	animation.regY = 35;
	animation.gotoAndPlay("anim");
	return animation;
		}
		 function Sortil2() {
			var data = {
        images: ["sort.png"],
        frames: {width:400, height:794},
        animations: {
            anim:0
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.071;
	animation.scaleY = 0.071;
	animation.regX = 12;
	animation.regY = 35;
	animation.gotoAndStop("anim");
	return animation;
		}
		var attboul;
		for (var af = 0; af < joueurs[yhh][0][3].split("*")[1]; af ++) {
						 
			attboul = (page.getChildByName(joueurs[yhh][0][1]).attaque).toString();
			 var sorti = Sortil2();
			 sorti.name = joueurs[yhh][0][1]+"ccecL*"+(page.getChildByName(joueurs[yhh][0][1]).attaque).toString();
			sorti.attbool = false;
			sorti.x = parseFloat(joueurs[yhh][0][6].split("*")[0]);
			sorti.y = parseFloat(joueurs[yhh][0][6].split("*")[1]);
			sorti.attaque = 0;
			sorti.visible = false;
			page.addChild(sorti);
		
	  var particleSystem = Sortil();
	particleSystem.name = yhh.toString() + joueurs[yhh][0][1] + attboul;
    particleSystem.x = page.getChildByName(joueurs[yhh][0][1]).x;
	particleSystem.y = page.getChildByName(joueurs[yhh][0][1]).y;
	particleSystem.alpha = 0.1;
	
	

	
	
	
	
	
		page.addChild(particleSystem);
	
			partt(yhh, attboul);
		if (joueurs[yhh][0][1] != document.querySelector('h1').innerHTML) {
			
			//page.getChildByName(joueurs[yhh][0][1]).attaque = page.getChildByName(joueurs[yhh][0][1]).attaque+1;
			joueurs[yhh][0][2] = "ceccc3";
		}
		
			if (af == 0) {
			page.getChildByName(joueurs[yhh][0][1]).attaque = page.getChildByName(joueurs[yhh][0][1]).attaque+1;
			} else 
			if (af < joueurs[yhh][0][3].split("*")[1]) {
			
			//attaquer = page.getChildByName(joueurs[yhh][0][1]).attaque+1;
			page.getChildByName(joueurs[yhh][0][1]).attaque = page.getChildByName(joueurs[yhh][0][1]).attaque+1;
			
		}
		
			
			//attaquer = page.getChildByName(joueurs[yhh][0][1]).attaque+1;
		
		
		
		
		}
		var linksortiOn3 = setInterval(plouki3, 50);
		//var linksortiOn = setInterval(plouki, 5550);
		
		
		
		} else if (joueurs[yhh][0][3] != "deleteAll" && joueurs[yhh][0][2] != "none" && ccecfalse) {
			
		
		}
	
	}
		var sensitive = -0.036;
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function partt(yhh, attboul) {
	page.getChildByName(yhh.toString() + joueurs[yhh][0][1] + attboul).alpha = 1;
		function parttt() {
			if (!page.getChildByName(yhh.toString() + joueurs[yhh][0][1] + attboul)) {
				clearInterval(partfunc);
			} else {
	page.getChildByName(yhh.toString() + joueurs[yhh][0][1] + attboul).alpha -= 0.15;
	if (page.getChildByName(yhh.toString() + joueurs[yhh][0][1] + attboul).alpha < 0.15) {
		clearInterval(partfunc);
	}
			}
	
	}
	var partfunc = setInterval(parttt, 510);
		}
		
		
		var clientX = 0;
			var clientY = 0;
		var scalex;
		var scaley;
		var w;
		var h;
		var tiimer = true;
		
function PageLoadingInitial() {
	
	page = new createjs.Stage("canvas");
	page.enableDOMEvents(true);
	createjs.Ticker.interval = 50;
	createjs.Ticker.framerate = 125;
	var maps = Maps();
		maps.x = 0;
		maps.y = 0;
		maps.name = "MAP";
		page.addChild(maps);
		
		document.body.addEventListener("mouseup", function(evt) {
				event = sleep(40);
			
						
    },{passive: true});
	window.addEventListener("resize", handleResize,{passive: true});
function handleResize() {
	
	event = sleep(140);
	nextTick(function() {
    w = window.innerWidth*0.95;
    h = window.innerHeight*0.95;
    
    scalex = (w)/(960);
	scaley = (h)/(640);
    
    document.getElementById("canvas").width = w;
	document.getElementById("canvas").height = h;
    page.scaleX = scalex; 
	page.scaleY = scaley; 
    
        
    page.update();
	});
}
       
handleResize();
	createjs.Ticker.addEventListener("tick", handleTick,{passive: true});
 function handleTick(event) {
	 event = sleep(10);
	 nextTick(function() {
     if (initts == "1") {
				initts = "2";
             personnOne(document.querySelector('h1').innerHTML);
			 BBBo = false;
			 Manivelle("none/5.55/0/"+
				page.getChildByName(document.querySelector('h1').innerHTML).x.toString()+"*"+
				page.getChildByName(document.querySelector('h1').innerHTML).y.toString()+"/0", true, 0);

page.x = -(page.getChildByName(document.querySelector('h1').innerHTML).x*scalex)+(w/(2));
page.y = -(page.getChildByName(document.querySelector('h1').innerHTML).y*scaley)+(h/(2));
		

			 
	}
     
	 });
	 page.update();
 }
	window.onresize = function () { 
	ih=Number(document.innerHeight)*0.95;
	iw=Number(document.innerWidth)*0.95; 
	
	
		
	}
	
	
 
};

	

		

		
		function PersonnVita() {
			 var data = {
        images: ["vita.png"],
        frames: {width:300, height:90},
        animations: {
            vie:0
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    return new createjs.BitmapText("30", spriteSheet);
	//return animation;
		}
		function Personn() {
			 var data = {
        images: ["perso.png"],
        frames: {width:36, height:48.25},
         animations: {
            stand:0,
            b:[0,2],
            h:[3,5],
			g:[6,8],
			d:[9,11],
			bg:[6,8],
            bd:[0,2],
			hg:[3,5],
			hd:[9,11]
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.05;
	animation.scaleY = 0.05;
	return animation;
		}
		function perso(initt) {
		if (mesh.hasOwnProperty(initt)) {
			console.log("error : " + initt);
		} else {
			mesh.push(initt, joueurs.length);
function addNew(inittss) {
	
joueurs.push([ ["", "", "","","","",""] ]);
		 joueurs[joueurs.length-1].push(inittss,"none",0,0,0,joueurs.length-1);
		 
     
			
			
			
		var personn = Personn();
		personn.vrai = true;
		if (inittss == document.querySelector('h1').innerHTML) {
		personn.x = Math.trunc(Math.random()*100+(Math.round(Math.random()*1)*1400))+50;
		personn.y = Math.trunc(Math.random()*100+(Math.round(Math.random()*1)*1200))+50;
		} else {
			personn.x = 100;
			personn.y = 100;
		}
		personn.scaleX = 1;
		personn.scaleY = 1;
		
		personn.gotoAndStop("stand");
		personn.name = inittss;
		page.addChild(personn);
		personn.regX = 36/2;
		personn.regY = 49/2;
		mesha = personn;
			
			
			
				groll();
    
    }
			var mesha;
			addNew(initt);
			function groll () {
				
			
	mesha.vitalite = 333;
	
	var planee = new createjs.Text("Hello World", "20px Arial", "#ff7700");
	
	planee.name = initt+"vitalite";
	planee.font = "bold 36px Arial";
	planee.text = mesha.vitalite.toString();
			planee.scaleY = 1;
			planee.scaleX = 1;
			planee.x = mesha.x;
		planee.y = mesha.y-51;
			page.addChild(planee);
			
			mesha.Vitess = 5.11/2;
			mesha.attaque = 0;
			if (initt == document.querySelector('h1').innerHTML) {
				//BBBo = false;
				
			//personnOne(initt);
			bOUle = true;
			}
			
			
				}
			
			
			}
			
    
		}
              
				
	
		function fondTree() {
			var data = {
        images: ["trees.png"],
        frames: {width:2000/10, height:712/2},
        animations: {
            exact:0
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.25;
	animation.scaleY = 0.15;
	return animation;
		}
		function fondMapping() {
			var data = {
        images: ["build.png"],
        frames: {width:306, height:318},
        animations: {
            exact:0
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.25;
	
	animation.scaleY = 0.25;
	return animation;
		}
		function fondMap() {
			var data = {
        images: ["fond.png"],
        frames: {width:1500/10, height:1500/5},
        animations: {
            exact:0
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.5;
	
	animation.scaleY = 0.3;
	return animation;
		}
		function fondMap3() {
			var data = {
        images: ["v1fond.png"],
        frames: {width:96/3, height:64/2},
        animations: {
            exact:0
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 1;
	
	animation.scaleY = 1;
	return animation;
		}
		 function Maps() {
var containerMapping = new createjs.Container();
		containerMapping.x = 0;
		containerMapping.y = 0;
		
		
		
		
		for (var f=0; f <= 51; f++) {
			for (var j=0; j <= 44; j++) {
				/*
				var mapping = fondMapping();
				mapping.name = "map" + f.toString() + j.toString();
				mapping.x = f*32-0;
				mapping.y = j*32-0;
				var gotot = Math.round(Math.random()*5+2);
				
				mapping.gotoAndStop(0);
				
				mapping.alpha = Math.random()*0.2+0.2;
				var saac = Math.random()*0.25+0.25;
					mapping.scaleX = saac;
	
	mapping.scaleY = 0.6;
				containerMapping.addChild(mapping);
				containerMapping.setChildIndex(mapping, Math.round(Math.random()*500+200));
				*/
				var mapping = fondMap();
				mapping.name = "map" + f.toString() + j.toString();
				mapping.x = f*32-100;
				mapping.y = j*32-0;
				gotot = Math.round(Math.random()*5+2);
				
				mapping.gotoAndStop(gotot);
				
				mapping.alpha = Math.random()*0.1+0.01;
				saac = Math.random()*0.55+0.45;
					mapping.scaleX = saac+1;
	
	mapping.scaleY = saac;
				containerMapping.addChild(mapping);
				containerMapping.setChildIndex(mapping, Math.round(Math.random()*500+900));
				
			}
		}
		page.muraille = [];
		var eau = -2;
		var h2o = -2;
		for (var fi=0; fi <= 51; fi++) {
			for (var ji=0; ji <= 44; ji++) {
				if ((ji == 0 || ji == 44) || (fi == 51 || fi == 0)) {
					var mapping = fondTree();
				mapping.name = "bord" + fi.toString() + ji.toString();
					mapping.x = fi*32-0;
				mapping.y = ji*32-0;
			
					mapping.gotoAndStop(Math.abs(Number(Muraille[fi][ji])));
					containerMapping.addChild(mapping);
					if (ji == 0) {
						page.muraille.push([]);
				page.muraille[fi].push(Muraille[fi][ji]);
					} else {
						page.muraille[fi].push(Muraille[fi][ji]);
					}
				containerMapping.setChildIndex(mapping, -100);
				} else {
					
				var gotot = Number(Muraille[fi][ji]);
					
					/*
					if (eau == fi-1 || h2o == ji-1) {
						gotot = Math.round(Math.random()*7)+2;
						if (gotot > 4) {
						if (eau == -2) {
							h2o = -2;
						} else {
							eau = -2;
						}
					}
					}
				if (gotot == 2) {
					gotot = Math.round(Math.random()*81);
				}
				if ((gotot < 4) && eau == -2) {
					eau = fi;
					h2o = ji;
				}
				*/
				
				if (((ji >= 1 && ji <= 4) || (ji <= 43 && ji >= 39)) || ((fi <= 50 && fi >= 46) || (fi >= 1 && fi <= 4))) {
				var mapping;
				
				var gototo = Number(Muraille[fi][ji]);
				if (gototo <= -1) {
					 mapping = fondTree();
				mapping.name = "mur" + fi.toString() + ji.toString();
				if (gototo == -1 || gototo == -2) {
					Muraille[fi][ji] = -3;
				}
					page.muraille[fi].push(Muraille[fi][ji]);
				} else {
					 mapping = fondMap();
				mapping.name = "mur" + fi.toString() + ji.toString();
					page.muraille[fi].push(Muraille[fi][ji]);
				}
				mapping.x = fi*32-0;
				mapping.y = ji*32-0;
				
				
				if (gototo > -1) {
					var saac = Math.random()*0.75+0.5;
					mapping.scaleX = saac;
	
	mapping.scaleY = saac;
				mapping.gotoAndStop(gototo);
				containerMapping.addChild(mapping);
				containerMapping.setChildIndex(mapping, Math.round(Math.random()*500-50));
				mapping.alpha = Math.random()*0.3+0.1;
				} else {
				mapping.gotoAndStop(Math.abs(gototo));
				containerMapping.addChild(mapping);
				containerMapping.setChildIndex(mapping, -57);
				}
				
				
				} else {
					
					
					var gototo = Number(Muraille[fi][ji]);
					//page.muraille[fi].push(gototo.toString());
					var mapping;
				
				if (gototo < -1) {
					 mapping = fondTree();
				mapping.name = "mur" + fi.toString() + ji.toString();
					page.muraille[fi].push(gototo.toString());
				} else if (gototo == -1 || gototo == 0) {
				mapping = fondMap3();
				mapping.name = "mur" + fi.toString() + ji.toString();
				
					page.muraille[fi].push(gototo.toString());
					if (gototo == -1) {
						page.muraille[fi][ji] = "-2";
					}
				} else {
					 mapping = fondMap();
				mapping.name = "mur" + fi.toString() + ji.toString();
					page.muraille[fi].push(gototo.toString());
				}
				mapping.x = fi*32-0;
				mapping.y = ji*32-0;
				//containerMapping.setChildIndex(mapping, -3);
				if (gototo == -1 || gototo == 0) {
					mapping.gotoAndStop(Math.abs(gototo));
				containerMapping.addChild(mapping);
				containerMapping.setChildIndex(mapping, -77);
				} else if (gototo > -1) {
					var saac = Math.random()*0.75+0.5;
					mapping.scaleX = saac;
	
	mapping.scaleY = saac;
				mapping.gotoAndStop(gototo);
				containerMapping.addChild(mapping);
				containerMapping.setChildIndex(mapping, Math.round(Math.random()*500+50));
				mapping.alpha = Math.random()*0.3+0.1;
				} else {
				mapping.gotoAndStop(Math.abs(gototo));
				containerMapping.addChild(mapping);
				containerMapping.setChildIndex(mapping, -57);
				}
				
				
				/*
				if (Number(Muraille[fi][ji]) == 0 || Number(Muraille[fi][ji]) == 1) {
						//page.muraille[fi].push("1");
						console.log(fi*32);
					containerMapping.getChildByName("map" + fi.toString() + ji.toString()).scaleX = 1;
					containerMapping.getChildByName("map" + fi.toString() + ji.toString()).scaleY = 1;
					//containerMapping.getChildByName("map" + fi.toString() + ji.toString()).gotoAndStop(0);
					containerMapping.getChildByName("map" + fi.toString() + ji.toString()).alpha = 1;
					
					containerMapping.getChildByName("map" + fi.toString() + ji.toString()).gotoAndStop(1);
					containerMapping.setChildIndex(mapping, -56);
						
					} else*/ if (Number(Muraille[fi][ji]) == -1) {
					//page.muraille[fi].push("-1");
					console.log(fi*32);
					containerMapping.getChildByName("map" + fi.toString() + ji.toString()).scaleX = 1;
					containerMapping.getChildByName("map" + fi.toString() + ji.toString()).scaleY = 1;
					containerMapping.getChildByName("map" + fi.toString() + ji.toString()).gotoAndStop(0);
					containerMapping.getChildByName("map" + fi.toString() + ji.toString()).alpha = 1;
					containerMapping.setChildIndex(mapping, -56);
				}
				}
					
				
			}
		}
		}
		//containerMapping.getChildByName(
		console.log(page.muraille);
		return containerMapping;
		 }
//}        


 var Muraille;

   
    function hitTestObject(mc1, mc2) {
if (!mc1.getBounds() || !mc2.getBounds()) {
	return false;
} else {
    m1x = mc1.x;
    m1y = mc1.y;
    m1w = mc1.getBounds().width*mc1.scaleX;
    m1h = mc1.getBounds().height*mc1.scaleY;

    m2x = mc2.x;
    m2y = mc2.y;
    m2w = mc2.getBounds().width*mc2.scaleX;
    m2h = mc2.getBounds().height*mc2.scaleY;

    if (    m1x >= m2x + m2w
        ||  m1x + m1w <= m2x
        ||  m1y >= m2y + m2h
        ||  m1y + m1h <= m2y) {
        return false;
    } else {
        return true;
    }
}
  }
  function ZoneIA2() {
			 var data = {
        images: ["header.jpg"],
        frames: {width:500, height:500},
        animations: {
            stand:0
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.5;
	animation.scaleY = 0.5;
	return animation;
		}
 function Zombie() {
			 var data = {
        images: ["zombie.png"],
        frames: {width:281, height:299},
        animations: {
            stand:0
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet);
	animation.scaleX = 0.03;
	animation.scaleY = 0.03;
	return animation;
		}
 function zomb(initt, rend) {
		
function addNew(inittss) {
	
	
			console.log(rend);
			
		var personn = Zombie();
		personn.roote = rend;
		personn.attaque = 0;
		
		if (Math.round(rend) == 2) {
			var zone = ZoneIA2();
			zone.regX = 500*(rend-1);
			zone.regY = 500*(rend-1);
			zone.x = 22*32;
			zone.y = 26*32;
		zone.alpha = 0;
		zone.scaleX = rend-1;
		zone.scaleY = rend-1;
		zone.attaque = 0;
		zone.gotoAndStop("stand");
		zone.name = "zone" + inittss;
		page.addChild(zone);
			page.setChildIndex(zone, 2500)
		}
			personn.x = 22*32;
			personn.y = 26*32;
		
		personn.scaleX = 0.13;
		personn.scaleY = 0.13;
		
		personn.gotoAndStop("stand");
		personn.name = inittss;
		page.addChild(personn);
		personn.regX = 281/2;
		personn.regY = 299/2;
		mesha = personn;
			
			
			
				groll();
    
    }
			var mesha;
			addNew("zombie/" + initt);
			function groll () {
				
			
	mesha.vitalite = vague*Math.trunc(5);
	
	var planee = new createjs.Text("Hello World", "20px Arial", "#ff7700");
	
	planee.name = "zombie/" + initt +"vitalite";
	planee.font = "bold 36px Arial";
	planee.text = mesha.vitalite.toString();
			planee.scaleY = 1;
			planee.scaleX = 1;
			planee.x = mesha.x;
		planee.y = mesha.y-51;
			page.addChild(planee);
			
			mesha.Vitess = 1.152;
			mesha.attaque = 0;
			
			
				}
			
			
			
			
    
		}
  
  function displayAll(pom, dea) {
	  
	  
		
			if (!page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString())) {
			dea += 1;
			} else 
			if (page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).attbool == true) {
				page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).attaque += 1;
				
				page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).x -=
			(page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).Vitess/0.42*(-Math.sin(2*Math.PI*((page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).Rotationne)-90/360))));
				page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).y -=
			(page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).Vitess/0.42*(Math.cos(2*Math.PI*((page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).Rotationne)-90/360))));
			
			
			if (hitTestObject(page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()), page.getChildByName(document.querySelector('h1').innerHTML))) {
			Manivelle2("zzz/"+ document.querySelector('h1').innerHTML +"/0", false, 5);
			}
			
			 if (!page) {
				 
			 } else {
				 
				 function decr(xc, yc) {
					 if (Number(page.muraille[(mathPosPersoX)+xc][(mathPosPersoY)+yc]) <= -1) {
							if (initts == "2" && tiimer2) {
				var mathPosPersoX = Math.round(((page.getChildByName(joueurs[numm][1]).x)-24)/32);
						var mathPosPersoY = Math.round(((page.getChildByName(joueurs[numm][1]).y)-24)/32);
       var mathPosPersoX2 = Math.round(mathPosPersoX+xc);//-0.5
		var mathPosPersoY2 = Math.round(mathPosPersoY+yc);//-0.5
		//console.log(page.muraille[(mathPosPersoX)+xc][(mathPosPersoY)+yc]);
		if (!page.muraille[(mathPosPersoX2)]) {
			
		} else if (page.muraille[(mathPosPersoX2)][(mathPosPersoY2)] == "-1") {
							tiimer2 = false;
							var cartes = Math.round((Math.random()*1.48)+1.51);//Math.round(Math.random()*6.97+0.51);
							if (cartes == 1) { cartes = Math.round(Math.random()*-5.97-1.51); }
							//Manivelle(("muraille/"+ mathPosPersoX2.toString() + "*" + mathPosPersoY2.toString() +"/"+ cartes.toString() +"/0/0"), false, 0);
							setTimer = setInterval(setTime, 30);
						} else if (page.muraille[(mathPosPersoX2)][(mathPosPersoY2)] == "-2") {
							tiimer2 = false;
							var cartes = -1;//Math.round((Math.random()*6.44)+1);
							if (cartes == 1) { cartes = Math.round(Math.random()*-5.97-1.51); }
							//Manivelle(("muraille/"+ mathPosPersoX2.toString() + "*" + mathPosPersoY2.toString() +"/"+ cartes.toString() +"/0/0"), false, 0);
							setTimer = setInterval(setTime, 30);
							/*var herbe = 1;
							var itemvar = "flèche%50%vita.png*lame%100%vita.png";
							var itemL = Math.round(Math.random()*1);
								for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == itemvar.split("*")[itemL].split("%")[0]) {
										Qinv[zr][zr2] = Qinv[zr][zr2].split("%")[0] + "%" + (Number(Qinv[zr][zr2].split("%")[1])+Math.round(Number(itemvar.split("*")[itemL].split("%")[1])*Math.random()+1)).toString();
										herbe = 2;
										break;
									}
								}
								if (herbe == 2) {
									break;
								}
								}
								if (herbe == 1) {
									var caillou = 1;
									for (var zr = 0; zr < Qinv.length; zr ++) {
								for (var zr2 = 0; zr2 < Qinv[zr].length; zr2 ++) {
									if (Qinv[zr][zr2].split("*")[1].split("%")[0] == "VIDE") {
										Qinv[zr][zr2] = "LoadImage~"+itemvar.split("*")[itemL].split("%")[2]+"*"+itemvar.split("*")[itemL].split("%")[0]+"%" + (Number(Qinv[zr][zr2].split("%")[1])+1).toString();
										caillou = 2;
										break;
									}
								}
								if (caillou == 2) {
									break;
								}
								}
								}*/
						}
						
						
						
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY-1)]) <= 8 && Number(page.muraille[(mathPosPersoX)][(mathPosPersoY-1)]) >= 4) {
							posimgY10 = true;
						} else {
							if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY-1)]) == camps) {
								posimgY10 = true;
							} else {
							posimgY10 = false;
							
							decr(0,-1);
							}
						}
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY+1)]) <= 8 && Number(page.muraille[(mathPosPersoX)][(mathPosPersoY+1)]) >= 4) {
							posimgY01 = true;
						} else {
							if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY+1)]) == camps) {
								posimgY01 = true;
							} else {
							posimgY01 = false;
							
							decr(0,1);
							}
						}
						if (Number(page.muraille[(mathPosPersoX-1)][(mathPosPersoY)]) <= 8 && Number(page.muraille[(mathPosPersoX-1)][(mathPosPersoY)]) >= 4) {
							posimgX10 = true;
						} else {
							if (Number(page.muraille[(mathPosPersoX-1)][(mathPosPersoY)]) == camps) {
								posimgX10 = true;
							} else {
							posimgX10 = false;
							
							decr(-1,0);
							}
						}
						console.log(Number(page.muraille[(mathPosPersoX)][(mathPosPersoY)]));
						if (Number(page.muraille[(mathPosPersoX+1)][(mathPosPersoY)]) <= 8 && Number(page.muraille[(mathPosPersoX+1)][(mathPosPersoY)]) >= 4) {
							posimgX01 = true;
						} else {
							if (Number(page.muraille[(mathPosPersoX+1)][(mathPosPersoY)]) == camps) {
								posimgX01 = true;
							} else {
							posimgX01 = false;
							
							decr(1,0);
							}
						}
						vitess = page.getChildByName(joueurs[numm][1]).Vitess;
						
						if (Number(page.muraille[(mathPosPersoX)][(mathPosPersoY)]) == 0 && hbolwin && joueurs[numm][1] == document.querySelector('h1').innerHTML) {
							hbolwin = false;
							Manivelle(("winner/"+ mathPosPersoX.toString() + "*" + mathPosPersoY.toString() +"/0/0/0"), false, 4);
							
						}
						
			 }
						
						
						
			}
							
						}
				 }
			
						
			
			
			//page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).rotation = zombieznm*page.getChildByName("zombie/"+zonezz[pom][0].toString()).roote;
			if (page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).attaque > 20) {
					page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()).attbool = false;
					page.removeChild(page.getChildByName("attaque/zombie/"+zonezz[pom][0].toString()+zonezz[pom][1].toString()));
					zonezz[pom][1] = "fin";
					//page.getChildByName("zonezombie/"+zonezz[pom][0].toString()).attaque -= 1;
					//page.getChildByName("zombie/"+zonezz[pom][0].toString()).attaque -= 1;
					
				}
			}
		
		
  }