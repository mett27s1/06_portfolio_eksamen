window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#links1").classList.toggle("hidden");


    let erSkjult = document.querySelector("#links1").classList.contains("hidden");

    if (erSkjult == true){
        document.querySelector("#menuknap").textContent = "☰"
    } else {
        document.querySelector("#menuknap").textContent = "×"
    }
}
