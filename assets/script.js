function jogo() {
    const matrizJogo = document.querySelector("#jogo");
    const winner = document.querySelector(".winner");
    const xO = document.querySelector(".x-o");
    const currentPlayer = document.querySelector(".current-player")
    let simbolo = "✕";
    let vencedor = false;

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6], [0, 3, 6],
        [1, 4, 7], [2, 5, 8]
    ]
    matrizJogo.addEventListener("click", function (e) {
        if (vencedor) return;
        const element = e.target;
        if (element.classList.contains("elemento") && !element.innerText) {
            element.innerText = simbolo;
            simbolo = xO.innerText = simbolo === "◯" ? "✕" : "◯";
        }

        //verifica se ganhou
        const elementos = [...document.querySelectorAll(".elemento")];
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            console.log([a, b, c]);
            if (
                elementos[a].innerText &&
                elementos[a].innerText === elementos[b].innerText &&
                elementos[a].innerText === elementos[c].innerText
            ) {
                winner.style.display = "block";
                winner.innerText += ` ${elementos[a].innerText}`;
                currentPlayer.style.display = "none";
                
                vencedor = true;
                return;
            }
        }
    });
}

jogo();