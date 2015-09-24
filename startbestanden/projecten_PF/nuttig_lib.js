// JavaScript library

/******************************** DOM functies ********************************/

function leegNode(oNode) {
    /*
     * verwijderd all inhoud/children van een Node
     * @oNode: node, verplicht, de node die geleegd wordt
     */

    while (oNode.hasChildNodes()) {
        oNode.removeChild(oNode.firstChild);
    }
}

/**************************** Datum, tijd functies ****************************/

//globale datum objecten
var vandaag = new Date();
var huidigeDag = vandaag.getDate(); //dag vd maand
var huidigeWeekDag = vandaag.getDay(); //weekdag
var huidigeMaand = vandaag.getMonth();
var huidigJaar = vandaag.getFullYear();

function getVandaagStr() {
    //returnt een lokate datumtijdstring

    var sNu = "Momenteel: " + vandaag.toLocaleDateString() + ", ";
    sNu += vandaag.toLocaleTimeString();
    return sNu;
}

//----------------------------------------------------------
function isSchrikkeljaar(jaar){
    /*
     * test voor schrikkeljaar
     * jaar: number, verplicht
     * return: boolean
     */
    eindwaarde=false;
    
    if(!isNaN(jaar)){
        if(jaar%4 === 0){
            eindwaarde = true;
            if(jaar%100 === 0){
                eindwaarde = false;
                if(jaar%400 === 0){
                    eindwaarde = true;
                }
            }
        }
    }
    return eindwaarde;
}
//-----------------------datum arrays-----------------------

//dagen volgens getDay() volgorde

var aWeekdagen = new Array("zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag");

//vervang feb dagen voor een schrikkeljaar

var aMaanden = new Array(['januari', 31], ['februari', 28], ['maart', 31], ['april', 30], ['mei', 31], ['juni', 30], ['juli', 31], ['augustus', 31], ['september', 30], ['oktober', 31], ['november', 30], ['december', 31]);