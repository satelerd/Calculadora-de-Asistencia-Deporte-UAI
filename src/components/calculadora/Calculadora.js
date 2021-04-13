import "./Calculadora.css"

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
    
    // ERROR Input fuera de rango
    if ( asistenciasInput > 26 || asistenciasInput < 0 ) {
        return (
            <div>
                <p>
                    <span>ERROR</span> <br></br> 
                    Debes ingresar un numero <span>entre 0 y 26</span> en la caja de asistencias <span>este semestre</span>
                </p>
            </div>
        )
    }

    // ERROR Input fuera de rango
    else if (asistenciasMesActualInput > 8 || asistenciasMesActualInput < 0) {
        return (
            <div>
                <p>
                    <span>ERROR</span> <br></br> 
                    Debes ingresar un numero entre <span>0 y 8</span> en la caja de asistencias <span>este mes</span>
                </p>
            </div>
        )
    }

    // DE PANA
    else if (asistenciasPosibles >= asistenciasFaltantes) {
        return (
            <div>
                <p>
                    Aun tienes tiempo 😅<br></br>
                    Debes tomar <span>{asistenciasFaltantes} asistencias</span>, y según los requisitos, te quedan <span>{asistenciasPosibles} posibles asistencias</span> dentro de este y los próximos {mesesSobrantes} meses que quedan para poder pasar el ramo.
                </p>
            </div>
        )
    }

    // Efe en el chat
    else {
        return (
            <div>
                <p>
                    Lamento informarte que estas pa la cagada 😬<br></br>
                    Debes tomar <span>{asistenciasFaltantes} asistencias</span>, y según los requisitos, solo quedan <span>{asistenciasPosibles} posibles asistencias</span> dentro de este y los próximos {mesesSobrantes} meses... F en el chat<br></br>
                    Partiste a enviarle un dm a <a href="https://www.instagram.com/uai_deportestgo/">@uai_deportestgo</a>
                </p>
            </div>
        )
    }

}

export default CalculoDeportes