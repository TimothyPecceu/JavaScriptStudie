var aFeatures = [document.images
, document.layers
, document.all
, document.getElementById
, document.querySelector
, document.styleSheets
, document.createElement
, document.createNodeIterator
, document.implementation.createDocument
, window.walkTheDog
, window.focus
, window.ActiveXObject
, window.XMLHttpRequest
, window.localStorage
, [].push
, [].filter
, Object.prototype
, navigator.geolocation
, document.documentElement.classList];

window.onload = function(){
    var eKop = document.getElementById("kop");
    var sBrowser = "Browser: " + navigator.appName + " Versie: " + navigator.appVersion;
    eKop.innerHTML = sBrowser;
    var eContainer = document.getElementById("container");
    
    var eLijst = document.createElement('ul');
    var nAantal = aFeatures.length;
    
    for(var i=0; i <nAantal; i++){
        var eItem = document.createElement('li');
        eItem.innerHTML = aFeatures[i];
        if(aFeatures[i]){
            eItem.className = "ja";
            eItem.innerHTML += "ja";
        }else{
            eItem.className = "nee";
            eItem.innerHTML += "nee";
        }
        eLijst.appendChild(eItem)
    }     
    eContainer.appendChild(eLijst);
};


