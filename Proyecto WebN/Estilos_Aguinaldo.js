/*function Activar_Input_1er_Semestre() {

    document.getElementById('BOTON_INPUT').class();
}
*/

function Activar_Input_1er_Semestre() {

    /*DESACTIVAR OUTPUTS SEMESTRE 2*/
    document.getElementById('ID_OUTPUT_AGUINALDO_2').className = "OUTPUT_SEM_02_desactivado";

    /*DESACTIVAR BOTON SEMESTRE 2*/
    document.getElementById('BOTON_2DO_SEM').className = "INPUT_BOTON";
    /*ACTIVAR BOTON SEMESTRE 2*/
    document.getElementById('BOTON_1ER_SEM').className = "INPUT_BOTON_activado";

    document.getElementById('FORM').className = "FORMULARIO_activado";

    /*DESACTIVAR INPUTS SEMESTRE 2*/
    document.getElementById('ID_INPUT_SEMESTRE_2').className = "CL_INPUT_SEMESTRE_2_desactivado";
    /*ACTIVAR INPUTS SEMESTRE 1*/
    document.getElementById('ID_INPUT_SEMESTRE_1').className = "CL_INPUT_SEMESTRE_1_activado";

    /*DESACTIVAR BOTON CALCULAR SEMESTRE 2*/
    document.getElementById('ID_BOTON_2').className = "CL_BOTON_desactivado";
    /*ACTIVAR BOTON CALCULAR SEMESTRE 1*/
    document.getElementById('ID_BOTON_1').className = "CL_BOTON_activado";
}

function Activar_Input_2do_Semestre() {

    /*DESACTIVAR OUTPUTS SEMESTRE 1*/
    document.getElementById('ID_OUTPUT_AGUINALDO_1').className = "OUTPUT_SEM_01_desactivado";

    /*DESACTIVAR BOTON 1 SEMESTRE*/
    document.getElementById('BOTON_1ER_SEM').className = "INPUT_BOTON";
    /*ACTIVAR BOTON 2 SEMESTRE*/
    document.getElementById('BOTON_2DO_SEM').className = "INPUT_BOTON_activado";

    document.getElementById('FORM').className = "FORMULARIO_activado";

    /*DESACTIVAR BOTON 1 SEMESTRE*/
    document.getElementById('ID_INPUT_SEMESTRE_1').className = "CL_INPUT_SEMESTRE_2_desactivado";
    /*ACTIVAR BOTON 2 SEMESTRE*/
    document.getElementById('ID_INPUT_SEMESTRE_2').className = "CL_INPUT_SEMESTRE_2_activado";

    /*DESACTIVAR BOTON CALCULAR SEMESTRE 1*/
    document.getElementById('ID_BOTON_1').className = "CL_BOTON_desactivado";
    /*ACTIVAR BOTON CALCULAR SEMESTRE 2*/
    document.getElementById('ID_BOTON_2').className = "CL_BOTON_activado";
}

