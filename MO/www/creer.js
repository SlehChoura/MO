/* function initiate ()
		 { 
		 var suivant= document.getElementById('suivant');
		 
		 suivant.addEventListener('click', save);
		 }
		 
		 
		 function save()
		 {
			var nom =document.getElementById('nom').value;
		  
            sessionStorage.setItem("nom",nom);
			
			alert('fgngffh');
		 
		 }
		 
		 
		 addEventListener("load", initiate);
		 
		 */
		 
		 
 function envoi(){
    var Nom = $("input[name=nom]").attr("value");
    var Prenom = $("input[name=prenom]").attr("value");
	var Ville =$('#ville option').filter(':selected').text();
	var Civilite =$('#civilite option').filter(':selected').text();
	var Tel = $("input[name=tel]").attr("value");
	var  Mdp= $("input[name=mdp]").attr("value");
	var Confirm = $("input[name=confirmation_mdp]").attr("value");
	var  Code_parrain= $("input[name=code_parrain]").attr("value");
		 
	
	if ((Nom == "") || (Prenom == "") || (Ville == "")){
        alert("Tous les champs requis n'ont pas été spécifiés")
    }
   else if (Mdp!=Confirm) {
       alert("Veillez vérifier le mot de passe") 
}	   
	
	
else{
	
	var storage = window.localStorage;
 
	window.localStorage.setItem("nom", Nom);
	window.localStorage.setItem("prenom", Prenom);
	window.localStorage.setItem("ville", Ville);
	window.localStorage.setItem("civilite", Civilite);
	window.localStorage.setItem("tel", Tel);
	window.localStorage.setItem("mdp", Mdp);
	window.localStorage.setItem("code_parrain",Code_parrain);
	//alert ( window.localStorage.getItem("nom"));
	
	$.mobile.changePage( "creer_compte2.html", { transition: "slideup", changeHash: false });

	}
	
}
		 
	
	