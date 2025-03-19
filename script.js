let interval;
let duration = 0;

//função para preencher os selects com opções
function populateSelect() {
  const hourSelect = document.getElementById("hourSelect");
  const minuteSelect = document.getElementById("minuteSelect");
  const secondSelect = document.getElementById("secondSelect");

  //Preencher horas
  for (let i = 0; i <= 24; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i.toString().padStart(2, "0");
    hourSelect.appendChild(option);
  }

  //Preencher minutos e segundos
  for (let i = 0; i <= 59; i++) {
    const optionMinute = document.createElement("option");
    optionMinute.value = i;
    optionMinute.textContent = i.toString().padStart(2, "0");
    minuteSelect.appendChild(optionMinute);

    const optionSecond = document.createElement("option");
    optionSecond.value = i;
    optionSecond.textContent = i.toString().padStart(2, "0");
    secondSelect.appendChild(optionSecond);
  }
}

//iniciar timer
function startTimer() {
  const hourSelect = document.getElementById("hourSelect");
  const minuteSelect = document.getElementById("minuteSelect");
  const secondSelect = document.getElementById("secondSelect");

  // capturando valores selecionados
  const hours = parseInt(hourSelect.value, 10);
  const minutes = parseInt(minuteSelect.value, 10);
  const seconds = parseInt(secondSelect.value, 10);

  //calcula tempo total em segundos
  duration = hours * 3600 + minutes * 60 + seconds;

  if (duration <= 0) {
    alert("Por favor, defina um tempo válido");
    return
  }

  clearInterval(interval);


  interval = setInterval(() => {
    const hoursDisplay = Math.floor(duration / 3600); //calcular a hora
    const minutesDisplay = Math.floor((duration % 3600) / 60); //calcular os minutos
    const secondsDisplay = duration % 60; //calcular segundos

    /* formatação */
    document.getElementById("hours").textContent = hoursDisplay.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutesDisplay.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = secondsDisplay.toString().padStart(2, "0");

    /* verificação de timer */
    if (duration <= 0) {
      clearInterval(interval);
      alert("Tempo esgotado");
    } else {
      duration--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  duration = 0;
  document.getElementById("hours").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
}


populateSelect();