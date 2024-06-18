import { verificarTema, trocarTema } from "../../helpers/tema-helper";

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})


verifivarTema (body, botaoTema)

function alterarAssunto() {
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assents/images/icon-${assunto.}`)
}