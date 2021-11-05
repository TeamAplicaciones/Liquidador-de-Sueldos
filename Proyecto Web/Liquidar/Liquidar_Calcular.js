
function obtencion_procesamiento()
{
    /*ACTIVAR FORM OUTPUT*/
    document.getElementById('OUTPUT').className = "OUTPUT_activado";
    
    var SEGVID = 0.0, HSXD, ANT, JUB, HSEX50 = 0.0, HSEX100 = 0.0, HSEX50R = 0.0, HSEX100R = 0.0, INAS = 0.0, INASR = 0.0, MAL, MALR = 0.0, JUBR = 0.0, PAMIR, SINDR, OBSOCR, FACR, ARTER = 0.0, SEGVIDR = 0.0, VIATR;
    
    var nomb=document.getElementById("NOMBRE").value;
	var SB=parseFloat(document.getElementById("SB").value);
	var APELL=document.getElementById("APELLIDO").value;
	var DNI=parseFloat(document.getElementById("DNI").value);
	
    MAL=document.getElementById("MAL").value;
	
    var CUIL=parseFloat(document.getElementById("CUIL").value);
	var SB=parseFloat(document.getElementById("SB").value);
	
    ANT=parseFloat(document.getElementById("ANT").value);
	
    var PORC=parseFloat(document.getElementById("PORAN").value);
	var TIT=document.getElementById("TIT").value;
	var VDT=parseFloat(document.getElementById("VDT").value);
	var HAB=parseFloat(document.getElementById("HAB"));
	
    HSXD=parseFloat(document.getElementById("HSXD").value);
	HSEX100=parseFloat(document.getElementById("HSEX100").value);
    HSEX50=parseFloat(document.getElementById("HSEX50").value);
    
    var VAC=parseFloat(document.getElementById("VAC").value);
    
    INAS=parseFloat(document.getElementById("INAS").value);
    
    var PRES=parseFloat(document.getElementById("PRES").value);
    var VIAT=parseFloat(document.getElementById("VIAT").value);
    var IED=parseFloat(document.getElementById("IED"));
    var DPD=parseFloat(document.getElementById("DPD"));
    var APOR=parseFloat(document.getElementById("APOR"));
    
    JUB=parseFloat(document.getElementById("JUB").value);
    
    var OBSOC=parseFloat(document.getElementById("OBSOC").value);
    var PAMI=parseFloat(document.getElementById("PAMI").value);
    var SIND=parseFloat(document.getElementById("SIND").value);
    var FAC=parseFloat(document.getElementById("FAC").value);
    var ASIGFAC=parseFloat(document.getElementById("ASIGFAC"));
    
    SEGVID=parseFloat(document.getElementById("SEGVID").value);
    
    var ART=parseFloat(document.getElementById("ART").value);   
    var ASIGFANPRE=parseFloat(document.getElementById("ASIGFANPRE"));   
    var FONNACEMP=parseFloat(document.getElementById("FONNACEMP"));   
    var CAMAPOR=parseFloat(document.getElementById("CAMAPOR"));   
    var DESCO=parseFloat(document.getElementById("DESCO"));   
    var PORCO=parseFloat(document.getElementById("PORCO"));   
    var CAMCOS=parseFloat(document.getElementById("CAMCOS"));
    var GANAN=parseFloat(document.getElementById("GANAN"));      
    var PORC1=parseFloat(document.getElementById("PORC1"));   
    var DESC1=parseFloat(document.getElementById("DESC1"));
    
    var ANTR, ANTRR, SBNH, SBRU=0.0, JUB, PAMI, OS, SIND, FAC, VIAT, SNET, TOTAP, SNETAC, HSD;
    
    ANTR=2021-ANT;
    ANTR=ANTR*PORC;
    ANTRR=(SB*ANTR)/100;
    SBNH=SB+ANTRR+VDT;
    HSEX50R=((SBNH/200)+((SBNH/200)/2))*HSEX50;
    HSEX100R=((SBNH/200)+(SBNH/200))*HSEX100;
    
    switch(MAL){
        case "Enero":
        MALR=25;
        break;
        case "Febrero":
        MALR=22;
        break;
        case "Marzo":
        MALR=24;
        break;
        case "Abril":
        MALR=24;
        break;
        case "Mayo":
        MALR=21;
        break;
        case "Junio":
        MALR=24;
        break;
        case "Julio":
        MALR=25;
        break;
        case "Agosto":
        MALR=24;
        break;
        case "Septiembre":
        MALR=23;
        break;
        case "Octubre":
        MALR=24;
        break;
        case "Noviembre":
        MALR=24;
        break;
        case "Diciembre":
        MALR=24;
            break;
    }
    
    INASR = (SBNH * INAS) / MALR;
    
    var cp=1;
    
    if (INAS > 0) {
        cp = 0;
        PRES = PRES * 0.0;
    }

    SBRU = SBNH + PRES + HSEX50R + HSEX100R - INASR;
    JUBR = (SBRU * JUB) / 100.0;
    PAMIR = (SBRU * PAMI) / 100;
    OBSOCR = (SBRU * OBSOC) / 100;
    SINDR = (SBRU * SIND) / 100;
    FACR = (SBRU * FAC) / 100;
    ARTER = (SBRU * ART) / 100;
    SEGVIDR = (SBRU * SEGVID) / 100;
    TOTAP = JUBR + PAMIR + OBSOCR + SINDR + FACR + SEGVIDR + ARTER;
    SNET = SBRU - TOTAP;
    VIATR = VIAT * MALR;
    SNETAC = SNET + VIATR;
    HSD = ANTRR + VDT + PRES + HSEX50R + HSEX100R + VIATR;
    
    document.getElementById('NOMBRE_OU').value=nomb;
    document.getElementById('APELLIDO_OU').value=APELL;
    document.getElementById('DNI_OU').value=DNI;
    document.getElementById('CUIL_OU').value=CUIL;
    document.getElementById('ANT_OU').value=ANT;
    document.getElementById('SB_OU').value=SB;
    document.getElementById('JUB_OU').value=JUB;
    document.getElementById('JUBR_OU').value=JUBR;
    document.getElementById('PAMI_OU').value=PAMI;
    document.getElementById('PAMIR_OU').value=PAMIR;
    document.getElementById('OBSOC_OU').value=OBSOC;
    document.getElementById('OBSOCR_OU').value=OBSOCR;
    document.getElementById('SIND_OU').value=SIND;
    document.getElementById('SINDR_OU').value=SINDR;
    document.getElementById('FAC_OU').value=FAC;
    document.getElementById('FACR_OU').value=FACR;
    document.getElementById('ANT_OU').value=ANTR;
    document.getElementById('ANTR_OU').value=ANTRR;
    document.getElementById('VDT_OU').value= 1;
    document.getElementById('VDTR_OU').value=VDT;
    document.getElementById('PRES_OU').value=cp;
    document.getElementById('PRESR_OU').value=PRES;
    document.getElementById('HSEX50_OU').value=HSEX50;
    document.getElementById('HSEX100_OU').value=HSEX100;
    document.getElementById('HSEX50R_OU').value=HSEX50R;
    document.getElementById('HSEX100R_OU').value=HSEX100R;
    document.getElementById('VIAT_OU').value=1;
    document.getElementById('VIATR_OU').value=VIATR;
    document.getElementById('INAS_OU').value=INAS;
    document.getElementById('INASR_OU').value=INASR;
    document.getElementById('SBRU_OU').value=SBRU;
    document.getElementById('SNETAC_OU').value=SNETAC;
    document.getElementById('APOR_OU').value=TOTAP;
    document.getElementById('SEGVID_OU').value=SEGVID;
    document.getElementById('SEGVIDR_OU').value=SEGVIDR;
    document.getElementById('HSD_OU').value = HSD;    
}
