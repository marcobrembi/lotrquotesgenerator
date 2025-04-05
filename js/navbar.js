document.addEventListener("DOMContentLoaded", function() {
    fetch("../elements/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Errore nel caricamento della navbar:", error));
});
