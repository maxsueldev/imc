let titulo = document.querySelector(".titulo");
titulo.textContent = "Praticar";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;

    let infoImc = paciente.querySelector(".info-imc");
    
    let pesoEValido = true;
    let alturaEValida = true;

    if(peso <= 0 || peso >= 1000) {
        pesoEValido = false;
        infoImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");  
    }

    if(altura <= 0 || altura >= 3) {
        alturaEValida = false;
        infoImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");  
    }
    
    if(pesoEValido && alturaEValida) {
        let imc = peso / (altura * altura);
        infoImc.textContent = imc.toFixed(2);
    }
}






