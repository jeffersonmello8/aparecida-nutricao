var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i ++) {
    
    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; 

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!validaPeso(peso)) {
        console.log("O peso do paciente é inválido!");
        tdImc.textContent = ("Peso inválido!")
        paciente.classList.add("paciente-invalido")
    } 

    if (!validaAltura(altura)) {
        console.log("A altura do paciente é inválida");
        tdImc.textContent = ("Altura inválida!")
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 200) {
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 2.50){
        return true;
    }else {
        return false;
    }
}