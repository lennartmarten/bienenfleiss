$(document).ready(function() {
    // Wenn der User scrollt, dann wird die Scroll fuction aktiviert
    // Die Funktion wird angesprochen und ausgeführt.
    function scrollFunction() {
        mybutton = document.getElementById("myBtn");
        // Wenn 94px erreicht werden ODER oder 60px nach oben scrollt
        if (document.body.scrollTop > 94 || document.documentElement.scrollTop > 60) {
            // Dieses Sytling soll die Navigation übernehmen
            document.getElementById("navbar").style.height = "54px";
            // Wenn nicht dann soll der Wert von ?px übernommen werden
        } else {
            document.getElementById("navbar").style.height = "94px";
        }
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }

    }

    // When the user clicks on the button, scroll to the top of the document
    $("#myBtn").on("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


    });

    window.onscroll = function() {
        scrollFunction()

    };

});