
Swal.fire('Pasajero, se le recuerda que para abordar el avión debe tener a mano su pasaporte y su boleto de embarque.\nManténgase atento a los avisos mediante esta plataforma.')

function cambiarHora() {
    let hora = document.getElementById("insertTime")
    let horaActual = new Date();
    hora.innerText = horaActual.toLocaleTimeString() 
}

cambiarHora()

function cambiarFecha() {
    let fecha = document.getElementById("insertDate")
    let fechaActual = new Date();
    fecha.innerText = fechaActual.toLocaleDateString()
}

cambiarFecha()

var numeroAleatorioCuatroMil = Math.floor(Math.random() * 4000) + 1;

var numeroAleatorioOcho = Math.floor(Math.random() * 8) + 1;

document.getElementById("flightNumber").textContent = numeroAleatorioCuatroMil;
document.getElementById("terminalNumber").textContent = numeroAleatorioOcho;