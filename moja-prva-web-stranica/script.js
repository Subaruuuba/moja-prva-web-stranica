const dugme = document.getElementById("dugme");
const naslov = document.getElementById("naslov");

dugme.addEventListener("click", function() {
    naslov.textContent = "Bravo! JavaScript radi!";
    document.body.style.backgroundColor = "lightblue";
    dugme.textContent = "Uspjelo je!";
});