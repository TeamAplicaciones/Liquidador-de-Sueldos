	var DIAS_PREAVISO = 0;
	var ANT = 0;
	var SBRUTO = 0;

	var INDEM_PRE = 0;

function Calcular()
{
	DIAS_PREAVISO = parseInt(document.getElementById('DIAS_PREAVISO').value);
	ANT = 2021 - parseInt(document.getElementById('ANT').value);
	SBRUTO = parseInt(document.getElementById('SBRUTO').value);

	Validar();

	if ((ANT < 5)&&(DIAS_PREAVISO < 30)) INDEM_PRE = SBRUTO;

	else if ((ANT >= 5)&&(DIAS_PREAVISO < 60)) INDEM_PRE = 2 * SBRUTO;
	
	else INDEM_PRE = 0;

	document.getElementById('INDEM_PRE').value = INDEM_PRE;
	document.getElementById('INDEM_ANT').value = SBRUTO * ANT;
	document.getElementById('TOTAL').value = ((SBRUTO * ANT) + INDEM_PRE);
}

function Estilisar_1() {

	document.getElementById('CON_JUSTA_CAUSA').style.display = 'none';
	document.getElementById('SIN_JUSTA_CAUSA').style.display = 'grid';
	
	document.getElementById('INPUT_SIN').style.display = 'grid';
}
function Estilisar_0(){
	document.getElementById('CON_JUSTA_CAUSA').style.display = 'grid';

	document.getElementById('SIN_JUSTA_CAUSA').style.display = 'none';
	document.getElementById('INPUT_SIN').style.display = 'none';
	document.getElementById('OUTPUT_SIN').style.display = 'none';
}

function Validar() {
	if((SBRUTO >= 0)&&(DIAS_PREAVISO >= 0)&&(ANT >= 0))
	{
		document.getElementById('OUTPUT_SIN').style.display = 'grid';
	}

	else 
		alert('Complete correctamente todos los campos.');
}
