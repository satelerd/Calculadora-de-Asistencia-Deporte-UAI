// Calculadora de asistencias de Deporte

function CalculoDeportes(asistenciasInput, asistenciasMesActualInput) {
    // Datos del usuario, input en la pagina
    var asistencias = asistenciasInput;
    var asistenciasMesActual = asistenciasMesActualInput;

    // Fechas
    const dateTime = new Date()
    const day = dateTime.getDate();     // Hay un problema que se habla mas adelante, cuando el numero del dia es "muy alto"
    const month = dateTime.getMonth() + 1;      // datetime.datetime.now().month;
    var months = {"enero": 31 - 10, "febrero": 28 - 8, "marzo": 31 - 8, "abril": 30 - 8, "mayo": 31 - 10, "junio": 30 - 8, "julio": 13 - 4};    // Las restas son los fin de semana (que no cuentan como dia para tomar ramos de deporte)
    
    // Requisitos deportes
    var asistenciasTotales = 26;
    var asistenciasMaxMes = 8;

    var asistenciasFaltantes = asistenciasTotales - asistencias;
    var cont = 1;
    var dias = 0;

    
    for (let element of Object.keys(months)) {

        // Para llegar al mes que corresponde
        if (month > cont) {
            cont += 1;
            continue;
        }

        // Restarle los dias del mes que ya llevamos
        else if (cont === month) { 
            cont++;

            // Si esta resta da negativa, significa que quedan muy pocos dias habiles en ese mes (pero como no puedo poner que dias son los fin de semana, y por tanto los resto de months... qda el cague) y mejor asumir que qdan 0 dias habiles ese mes
            if (months[element] - day < 0) {
                continue;
            }

            else {
                dias = dias + (months[element] - day);
                continue;
            }
        }

        // Se suman los dias de los meses que quedan
        else {
            dias = dias + months[element];
        }
    };

    var mesesSobrantes = Object.keys(months).length - cont + 1;
    var asistenciasPosibles = (mesesSobrantes * asistenciasMaxMes) + (asistenciasMaxMes - asistenciasMesActual)   // La cantidad de asistencias maximas que puedes hacer tomando en cuenta que solo se contabilizan 8 asistencias al mes

    // Posibles output's
    
    // Tamo de pana
    if (asistenciasPosibles >= asistenciasFaltantes) {
        return ("Te quedan " + dias + " días hábiles del semestre de deporte, para tomar " + asistenciasFaltantes + " asistencias... Pero dado que solo cuentan 8 asistencias al mes, tienes " + asistenciasPosibles + " asistencias posibles en los " + dias + " días que te quedan.")
    }

    // Efe en el chat
    else {
        return ("Lamento informarte que estas pa la cagada... Necesitas hacer " + asistenciasFaltantes + " asistencias en tan solo " + asistenciasPosibles + " asistencias posibles :(")
    }

}

export default CalculoDeportes