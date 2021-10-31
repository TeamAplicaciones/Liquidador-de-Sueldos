	var DIAS_PREAVISO = 0;
	var ANT = 0;
	var SBRUTO = 0;
	
	var INDEM_ANT = 0;
	var INDEM_PRE = 0;

function Calcular()
{
	DIAS_PREAVISO = parseInt(document.getElementById('DIAS_PREAVISO').value);
	ANT = parseInt(document.getElementById('ANT').value);
	SBRUTO = parseInt(document.getElementById('SBRUTO').value);

	INDEM_ANT = SBRUTO * ANT;

	if(ANT < 5)
	{
		if(DIAS_PREAVISO < 30) INDEM_PRE = SBRUTO;
		else INDEM_PRE = 0;
	}

	else if(ANT >= 5)
	{
		if(DIAS_PREAVISO < 60) INDEM_PRE = 2 * SBRUTO;
		else INDEM_PRE = 0;
	}

	document.getElementById('INDEM_ANT').value = INDEM_ANT;
	document.getElementById('INDEM_PRE').value = INDEM_PRE;
}