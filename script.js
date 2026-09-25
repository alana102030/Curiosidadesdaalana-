```javascript
const botao = document.querySelector(".botao");
const curiosidade = document.querySelector(".curiosidade");
const contador = document.querySelector(".contador");

let numero = 0;

const curiosidades = [
    "Cabelos cacheados podem ter diferentes padrões de curvatura na mesma cabeça.",

    "A hidratação ajuda a manter os cachos mais macios e com aparência saudável.",

    "Evitar pentear o cabelo seco pode ajudar a reduzir o frizz em muitos tipos de cachos.",

    "O cabelo cacheado pode aparentar ser mais curto por causa do fator encolhimento.",

    "A definição dos cachos pode variar de acordo com a finalização utilizada.",

    "A quantidade de produto ideal pode variar conforme a textura e a densidade do cabelo.",

    "Dormir com uma fronha de cetim pode ajudar a diminuir o atrito entre o cabelo e o tecido.",

    "A fitagem é uma técnica de finalização que separa os fios em pequenas mechas para ajudar na definição.",

    "Cada cabelo cacheado possui necessidades diferentes, por isso conhecer os próprios fios é importante.",

    "Cuidar dos cachos envolve uma rotina que pode incluir limpeza, hidratação, nutrição e finalização."
];

function mostrarCuriosidade() {

    if (numero < curiosidades.length) {

        curiosidade.textContent = curiosidades[numero];

        numero++;

        contador.textContent = "Curiosidade " + numero + " de 10";

    } else {

        curiosidade.textContent =
            "✨ Você descobriu todas as 10 curiosidades sobre cachos! ✨";

        contador.textContent = "Fim das curiosidades!";

        botao.textContent = "Finalizado";

    }
}

botao.addEventListener("click", mostrarCuriosidade);
```
