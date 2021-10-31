	var PSem = [];
	var SSem = [];
	var MAYPS = 0, MAYSS = 0;

	var i;
	var VAL = "";

function Aguinaldo_Sem_1() {

	PSem[0] = parseInt(document.getElementById("ENERO").value);
	PSem[1] = parseInt(document.getElementById("FEBRERO").value);
	PSem[2] = parseInt(document.getElementById("MARZO").value);
	PSem[3] = parseInt(document.getElementById("ABRIL").value);
	PSem[4] = parseInt(document.getElementById("MAYO").value);
	PSem[5] = parseInt(document.getElementById("JUNIO").value);

	Validar_1();

	Calcular_Aguinaldo();
}

function Aguinaldo_Sem_2() {

	SSem[0] = parseInt(document.getElementById("JULIO").value);
	SSem[1] = parseInt(document.getElementById("AGOSTO").value);
	SSem[2] = parseInt(document.getElementById("SEPTIEMBRE").value);
	SSem[3] = parseInt(document.getElementById("OCTUBRE").value);
	SSem[4] = parseInt(document.getElementById("NOVIEMBRE").value);
	SSem[5] = parseInt(document.getElementById("DICIEMBRE").value);

	Validar_2();

	Calcular_Aguinaldo();
}

function Validar_1() {

	VAL = "true";

	for (i = 0; (i < 6) && (VAL == "true"); i++) {

		VAL = "false";

		if (PSem[i] >= 0) {
			VAL = "true";
		}
	}

	if (VAL == "true") {
		/*DESPLEGANDO INPUTS DE LOS RESULTADOS*/
		document.getElementById('ID_BOTON_1').className = "CL_BOTON_activado";
		Calcular_Aguinaldo();
		Desplegar_Outputs_Sem_1();
	}

	else alert("Complete correctamente todos los campos.");

}

function Validar_2() {
	
	VAL = "true";

	for (i = 0; (i < 6) && (VAL == "true"); i++) {

		VAL = "false";

		if (SSem[i] >= 0) {
			VAL = "true";
		}
	}

	if (VAL == "true") {
		/*DESPLEGANDO INPUTS DE LOS RESULTADOS*/
		document.getElementById('ID_BOTON_2').className = "CL_BOTON_activado";
		Calcular_Aguinaldo();
		Desplegar_Outputs_Sem_2();
	}
	
	else alert("Complete correctamente todos los campos.");
}

function Calcular_Aguinaldo() {

	for (var i = 0; i < 6; i++) {
		if (PSem[i] > MAYPS) {
			MAYPS = PSem[i];
		}
		if (SSem[i] > MAYSS) {
			MAYSS = SSem[i];
		}
	}

	MAYPS = MAYPS / 2;//Aguialdo Primer Semestre
	MAYSS = MAYSS / 2;//Aguialdo Segundo Semestre

	document.getElementById("AGUINALDO_1").value = MAYPS; //Aguialdo Primer Semestre
	document.getElementById("AGUINALDO_2").value = MAYSS; //Aguialdo Segundo Semestre
	document.getElementById("AGUINALDO_MAS_MES_1").value = PSem[5] + MAYPS; //Total en junio
	document.getElementById("AGUINALDO_MAS_MES_2").value = SSem[5] + MAYSS; //Total en diciembre
}

function Desplegar_Outputs_Sem_1() {

	/*DESACTIVAR OUTPUTS SEMESTRE 2*/
	document.getElementById('ID_OUTPUT_AGUINALDO_2').className = "OUTPUT_SEM_02_desactivado";
	/*ACTIVAR OUTPUTS SEMESTRE 1*/
	document.getElementById('ID_OUTPUT_AGUINALDO_1').className = "OUTPUT_SEM_01_activado";
}

function Desplegar_Outputs_Sem_2() {

	/*DESACTIVAR OUTPUTS SEMESTRE 1*/
	document.getElementById('ID_OUTPUT_AGUINALDO_1').className = "OUTPUT_SEM_01_desactivado";
	/*ACTIVAR OUTPUTS SEMESTRE 2*/
	document.getElementById('ID_OUTPUT_AGUINALDO_2').className = "OUTPUT_SEM_02_activado";
}

/*para camviar de clase*/
/*document.getElementById("MyElement").value;className = "MyClass";*/

