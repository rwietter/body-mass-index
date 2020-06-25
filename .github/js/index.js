(() => {
  const form = document.getElementById("formulary")
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const getInputPeso = e.target.querySelector(".peso")
    const getInputAltura = e.target.querySelector(".altura")
    
    const peso = Number(getInputPeso.value)
    const altura = Number(getInputAltura.value)
    
    if (!peso) {
      setResult("Peso não encontrado", true);
      return;
    }
    
    if (!altura) {
      setResult("Altura não encontrada", true);
      return;
    }

    const getIndiceMassaCorporal = setImc(peso, altura).toFixed(2);
    const levelIndiceMassaCorporal = setLevelImc(getIndiceMassaCorporal);

    const mensagem = `Seu índice IMC é ${getIndiceMassaCorporal}, a faixa é: <b>${levelIndiceMassaCorporal}</b>`
    setResult(mensagem)
  })

  function setImc(peso, altura) {
    return peso && altura ? peso / (altura ** 2) : false;
  }

  function setLevelImc(levelImcValue) {
    const levelIMC = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]
    if (levelImcValue < 18.5) return levelIMC[0];
    else if (levelImcValue >= 18.5 && levelImcValue <= 24.9) return levelIMC[1];
    else if (levelImcValue >= 25 && levelImcValue <= 29.9) return levelIMC[2];
    else if (levelImcValue >= 30 && levelImcValue <= 34.9) return levelIMC[3];
    else if (levelImcValue >= 35 && levelImcValue <= 39.9) return levelIMC[4];
    else if (levelImcValue >= 40) return levelIMC[5];
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
