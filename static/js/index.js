(function () {
  const form = document.getElementById("formulary")
  form.addEventListener("submit", function (e) {
    e.preventDefault()

    let getInputPeso = e.target.querySelector(".peso")
    let getInputAltura = e.target.querySelector(".altura")
    
    let peso = Number(getInputPeso.value)
    let altura = Number(getInputAltura.value)

    
    if (!peso) {
      setResult("Peso não encontrado", true);
      return;
    }
    
    if (!altura) {
      setResult("Altura não encontrada", true);
      return;
    }

    const getIndiceMassaCorporal = getImc(peso, altura).toFixed(2);
    const levelIndiceMassaCorporal = getLevelImc(getIndiceMassaCorporal);

    const mensagem = `Seu índice IMC é ${getIndiceMassaCorporal}, a faixa é: (${levelIndiceMassaCorporal})`
    setResult(mensagem)
  })

  function getImc(peso, altura) {
    return peso && altura ? peso / (altura ** 2) : false;
  }

  function getLevelImc(levelImcValue) {
    const levelIMC = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]
    if (levelImcValue < 18.5) return levelIMC[0];
    if (levelImcValue >= 18.5 && levelImcValue <= 24.9) return levelIMC[1];
    if (levelImcValue >= 25 && levelImcValue <= 29.9) return levelIMC[2];
    if (levelImcValue >= 30 && levelImcValue <= 34.9) return levelIMC[3];
    if (levelImcValue >= 35 && levelImcValue <= 39.9) return levelIMC[4];
    if (levelImcValue >= 40) return levelIMC[5];
  }

  const createInnerHTMLElement = () => document.createElement('p');

  function setResult(msg, isValid) {
    const setUIResult = document.getElementById("resultado")
    setUIResult.innerHTML = ''

    let getCreateInnerHTMLElement = createInnerHTMLElement();

    if (!isValid) {
      getCreateInnerHTMLElement.classList.add("successful-result")
    } else {
      getCreateInnerHTMLElement.classList.add("bad")
    }

    getCreateInnerHTMLElement.innerHTML = msg
    setUIResult.appendChild(getCreateInnerHTMLElement)
  }
})()
