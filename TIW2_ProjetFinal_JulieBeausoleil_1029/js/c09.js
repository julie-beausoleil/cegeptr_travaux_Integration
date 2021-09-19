'use strict'

var donneesRemplies = document.forms["prenom"]["nom"]["foyer"]["courriel"]["nomenclature"]["format"]["dimension"]["profil"].value;
var regexNomPrenom = /^([A-Za-z]{1,})$/;
var regexEmail1 = /^([a-z])+\@([a-z])+\.([a-z]{2,4})$/;
var emailAddr = document.getElementById("courriel");

function validerForms() {

    if (donneesRemplies == "" || regexNomPrenom == false ) {
        alert("Remplir tous les champs du formulaire.");
        return false;
    } else {
        return true;
    };

    }

    function validerCourriel() {
        if (courriel.value.match(regexEmail1)) {
            return true;
        }


    };


    


    