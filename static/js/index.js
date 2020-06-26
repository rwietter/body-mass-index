function imc() {
  const form = document.getElementById("formulary");
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const getPeso = document.querySelector(".peso")
    const getAltura = document.querySelector(".altura")
    
    const peso = Number(getPeso.value)
    const altura = Number(getAltura.value);

    setData(peso, altura);

    const getIMC = setImc(peso, altura).toFixed(2);
    const getLevelIMC = setLevelImc(getIMC);

    const mensagem = `Seu índice IMC é ${getIMC}, a faixa é: <b>${getLevelIMC}</b>`
    setResult(mensagem)
  })

  function setData(peso, altura) {
    if (!peso && !altura) {
      setResult("Peso e Altura não encontrados, por favor insira os dados no local acima!", true);
      return;
    }

    if (!peso) {
      setResult("Peso não encontrado", true);
      return;
    }
    
    if (!altura) {
      setResult("Altura não encontrada", true);
      return;
    }
  }

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

  function setResult(msg, isValid) {
    const createElementP = document.createElement('p');
    
    const toResult = document.getElementById("resultado")
    toResult.innerHTML = ''

    let paragraph = createElementP;

    if (!isValid) {
      paragraph.classList.add("successful-result")
    } else {
      paragraph.classList.add("bad")
    }

    paragraph.innerHTML = msg
    toResult.appendChild(paragraph)
  }
}
imc();
