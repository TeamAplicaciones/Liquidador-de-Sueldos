	var DIAS_PREAVISO = 0;
	var ANT = 0;
	var SBRUTO = 0;

	var INDEM_PRE = 0;

function Calcular()
{
	DIAS_PREAVISO = parseInt(document.getElementById('DIAS_PREAVISO').value);
	ANT = parseInt(document.getElementById('ANT').value);
	SBRUTO = parseInt(document.getElementById('SBRUTO').value);

	if ((ANT < 5)&&(DIAS_PREAVISO < 30)) INDEM_PRE = SBRUTO;

	else if ((ANT >= 5)&&(DIAS_PREAVISO < 60)) INDEM_PRE = 2 * SBRUTO;
	
	else INDEM_PRE = 0;

	document.getElementById('INDEM_PRE').value = INDEM_PRE;
	document.getElementById('INDEM_ANT').value = SBRUTO * ANT;
}
