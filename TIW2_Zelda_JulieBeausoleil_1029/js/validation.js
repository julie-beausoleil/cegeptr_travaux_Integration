// Validation pour date de naissance minimum 
/*
var auj = new Date();
var mois = (auj.getMonth() + 1).toString();
var nulle = "0";

function mois2digit() {
    
    if (mois < 10) {
        return nulle + mois;
       
       
    } else {
        return mois;
    }}

var mois2digits = mois2digit();


var dateAuj = (auj.getFullYear()).toString() + "-" + mois2digits + "-" + (auj.getDate()).toString();

function test() {
    console.log(dateControl);
}
document.querySelector('#dateNaissance').value;


/*
var dateNais; 
function dateNais() {
    if (dateControl > dateAuj) {
        alert("Vous avez découvert le voyage dans le temps?");
        return false;
    }
}

var comparaison = dateNais();

*/

// FONCTION POUR TESTER //



/*    


*/
/*



*/

'use strict'

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;

var x = document.getElementById("dateNaissance").value;

function dateControl() {
    if (x > today && x != "") {
        alert("Vous voyagé dans le temps?")
        return false;
    }
}
var y = dateControl();

function validation() {
    
    return true;
}