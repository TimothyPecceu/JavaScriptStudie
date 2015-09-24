var aTeksten = [["Alle schermen tonen", "Alle schermen verbergen"],["Toon","Verberg"]];
//var aTeksten = [["Show all screens", "Hide all screens"],["Show","Hide"]];

window.onload = function () {
    var eToggle = document.getElementsByClassName("toggle");
    var nAantal = eToggle.length;
    var eHoofdKnop = document.getElementById("hoofdknop");
    eHoofdKnop.innerHTML = aTeksten[0][1];
    eHoofdKnop.value = "verberg";

    eHoofdKnop.addEventListener("click", function () {
        var eImages = document.getElementsByClassName('screenshot');
        var nImages = eImages.length;
        if (this.value === "verberg") {
            for (var i = 0; i < nImages; i++) {
                toggleOff(eImages[i]);
            } 
            this.innerHTML = aTeksten[0][0];
            this.value = "toon";
        }else if(this.value === "toon"){
             for (var i = 0; i < nImages; i++) {
                toggleOn(eImages[i]);
            } 
            this.innerHTML = aTeksten[0][1];
            this.value = "verberg";
        }
    });

    for (var i = 0; i < nAantal; i++) {
        var eButton = document.createElement('button');
        eButton.innerHTML = aTeksten[1][1];
        eButton.style.display = "block";
        eToggle[i].insertBefore(eButton, eToggle[i].firstChild);
        eButton.addEventListener('click', function () {
            toggle(this.parentNode);
        });
    }
};

function toggle(e) {
    var eImage = e.getElementsByTagName("img");
    if (eImage[0].style.display !== "none") {
        toggleOff(eImage[0]);
    } else {
        toggleOn(eImage[0]);
    }
}

function toggleOff(e) {
    e.style.display = "none";
    e.parentNode.firstChild.innerHTML = aTeksten[1][0];
}

function toggleOn(e) {
    e.style.display = "inline";
    e.parentNode.firstChild.innerHTML = aTeksten[1][1];
}

