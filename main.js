const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(“.aba-conteudo”);
const contadores = document.querySelectorAll(“.contador”);
const tempoObjetivo1 = new Date(“2024-10-05”);
contadores[0].textContent = tempoObjetivo1;
contadores[0].textContent = “contagem regressiva”;
const contadores = document.querySelectorAll(“.contador”);
const tempoObjetivo1 = new Date(“2024-10-05T00:00:00”);
contadores[0].textContent = tempoObjetivo1;
const contadores = document.querySelectorAll(“.contador”)
const tempoObjetivo1 = new Date(“2023-10-05T00:00:00”);
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;

document.getElementById(“dias”+i).textContent =
calculaTempo(tempos[0])[0];

document.getElementById(“horas”+i).textContent =

calculaTempo(tempos[0])[1];

document.getElementById(“min”+i).textContent =

calculaTempo(tempos[0])[2];

document.getElementById(“seg”+i).textContent =

calculaTempo(tempos[0])[3];








for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove(“ativo”);
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add(“ativo”);
  };
}webview