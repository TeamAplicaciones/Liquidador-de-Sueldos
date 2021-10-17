

function Aguinaldo() {

	var PSem = [];
	var SSem = [];
	var MAYPS = 0, MAYSS = 0;

	PSem[0] = parseInt(document.getElementById("ENERO").value);
	PSem[1] = parseInt(document.getElementById("FEBRERO").value);
	PSem[2] = parseInt(document.getElementById("MARZO").value);
	PSem[3] = parseInt(document.getElementById("ABRIL").value);
	PSem[4] = parseInt(document.getElementById("MAYO").value);
	PSem[5] = parseInt(document.getElementById("JUNIO").value);
	SSem[0] = parseInt(document.getElementById("JULIO").value);
	SSem[1] = parseInt(document.getElementById("AGOSTO").value);
	SSem[2] = parseInt(document.getElementById("SEPTIEMBRE").value);
	SSem[3] = parseInt(document.getElementById("OCTUBRE").value);
	SSem[4] = parseInt(document.getElementById("NOVIEMBRE").value);
	SSem[5] = parseInt(document.getElementById("DICIEMBRE").value);

	for (var i = 0; i < 6; i++) {
		if (PSem[i] > MAYPS) {
			MAYPS = PSem[i];
		}
		if (SSem[i] > MAYSS) {
			MAYSS = SSem[i];
		}
	}

	MAYPS = MAYPS / 2;//Aguialdo Primer Semestre
	MAYSS = MAYPS / 2;//Aguialdo Segundo Semestre

	document.getElementById("AGUINALDO_1").value = MAYPS; //Aguialdo Primer Semestre
	document.getElementById("AGUINALDO_2").value = MAYPS; //Aguialdo Primer Semestre
	document.getElementById("AGUINALDO_MAS_MES_1").value = PSem[5] + MAYPS; //Total en junio
	document.getElementById("AGUINALDO_MAS_MES_2").value = SSem[5] + MAYSS; //Total en diciembre
}

/*para camviar de clase*/
/*document.getElementById("MyElement").className = "MyClass";*/

