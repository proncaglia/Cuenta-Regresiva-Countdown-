function CuentaRegresiva() 
{
	ahora = new Date();
	evento = new Date("Apr 7 2017 23:59:59");
	dias = (evento - ahora) / 1000 / 60 / 60 / 24;
	diasround = Math.floor(dias);
	horas = (evento - ahora) / 1000 / 60 / 60 - (24 * diasround);
	horasround = Math.floor(horas);
	minutos = (evento - ahora) / 1000 /60 - (24 * 60 * diasround) - (60 * horasround);
	minutosround = Math.floor(minutos);
	segundos = (evento - ahora) / 1000 - (24 * 60 * 60 * diasround) - (60 * 60 * horasround) - (60 * minutosround);
	segundosround = Math.round(segundos);
	document.getElementById("dias").innerHTML = diasround;
	document.getElementById("horas").innerHTML = horasround;
	document.getElementById("minutos").innerHTML = minutosround;
	document.getElementById("segundos").innerHTML = segundosround;
	
	nuevotiempo = window.setTimeout("CuentaRegresiva();", 1000);
}

function ingreso()
{
	var marco = document.getElementById('marco');
	var ventana = document.getElementById('ventana');
	var formulario = document.getElementById('formulario');
	formulario.style.marginTop = (parseInt(screen.height / 2) - 200) + "px";
	ventana.style.visibility='visible';
}