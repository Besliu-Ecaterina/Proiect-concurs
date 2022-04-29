new SimpleLightbox({ elements: '.galerie a' });

function transmite() {
    let text = document.getElementById("mesaj").value;
    window.open("mailto:avecom-net@mail.ru?subject=Mesaj&body=" + text);
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}