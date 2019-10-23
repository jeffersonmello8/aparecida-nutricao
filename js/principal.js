var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i ++) {
    
    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; 

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 200) {
        console.log("O peso do paciente é inválido!");
        pesoEhValido = false;
        tdImc.textContent = ("Peso inválido!")
        paciente.classList.add("paciente-invalido")
    } 

    if (altura <= 0 || altura >= 3.00) {
        console.log("A altura do paciente é inválida");
        alturaEhValida = false;
        tdImc.textContent = ("Altura inválida!")
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
