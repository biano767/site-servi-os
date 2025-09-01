const form = document.querySelector(".form-orcamento");
const mascara = document.querySelector(".mascara-form");



function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharForm() {
    form.style.left = "-300px"
    mascara.style.visibility = "hidden"
    form.style.transform = "translateX(0)"
}