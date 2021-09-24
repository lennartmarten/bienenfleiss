// Wenn der User scrollt, dann wird die Scroll fuction aktiviert
window.onscroll = function() {
    scrollFunction()
};
// Die Funktion wird angesprochen und ausgeführt.
function scrollFunction() {
    // Wenn 94px erreicht werden ODER oder 60px nach oben scrollt
    if (document.body.scrollTop > 94 || document.documentElement.scrollTop > 60) {
        // Dieses Sytling soll die Navigation übernehmen
        document.getElementById("navbar").style.height = "54px";
        // Wenn nicht dann soll der Wert von ?px übernommen werden
    } else {
        document.getElementById("navbar").style.height = "94px";
    }
}