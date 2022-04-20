var janelaLogin = new bootstrap.Modal(document.getElementById("loginNegado"));
var janelaPromocao = new bootstrap.Modal(document.getElementById("promo1"));

function rotaCadastro() {
    window.location.href = "../registro.html";
}
function rotaRecuperar() {
    window.location.href = "../recuperar.html";
}
function rotaLogin() {
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    if (email === "pamela@gmail.com" && senha === "bola1234") {
        window.location.href = "../index.html";
    } else {
        janelaLogin.show();
    }
}
function alertaPromo() {
    let titulo = "Promoção 1 [Quebra da Banca]";
    let corpo = "Super legal <br> <img src='./img/4.png' width='160' height='160'>";
   // let lista = "<ul class='list-group' style='margin-top: 15px'>"
   // for(let i = 0; i < 10; i++) {
   //     lista +=`<li class='list-group-item'>(${(i * 5)})</li>`;
    //}
    //lista +="</ul>";
    janelaPromocao.show();

    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("corpo").innerHTML = corpo//+lista;
}