#%%
# Calculadora de asistencias de Deporte
import datetime

# Datos del usuario
asistencias = int(input("¿Cuantas asistencias llevas realisadas?"))
asistenciasMesActual = int(input("¿Cuantas asistencias llevas realisadas este mes?"))

# Fechas
day = datetime.datetime.now().day   # Hay un problema que se habla mas adelante, cuando el numero del dia es "muy alto"
month = datetime.datetime.now().month
months = {"enero": 31 - 10, "febrero": 28 - 8, "marzo": 31 - 8, "abril": 30 - 8, "mayo": 31 - 10, "junio": 30 - 8, "julio": 13 - 4}     # Las restas son los fin de semana (que no cuentan como dia para tomar ramos de deporte)

# Requisitos deportes
asisteciasTotales = 26
asistenciasMaxDia = 1
asistenciasMaxMes = 8


def CalculoDeporte():
    asistenciasFaltantes = asisteciasTotales - asistencias
    cont = 1
    dias = 0

    for i in months:
        if month > cont:    # Para llegar al mes que corresponde
            cont += 1
            continue
        elif cont == month:    # Restarle los dias del mes que ya llevamos
            cont += 1
            if (months[i] - day < 0):   # Si esta resta da negativa, significa que quedan muy pocos dias habiles en ese mes (pero como no puedo poner que dias son los fin de semana, y por tanto los resto de months... qda el cague) y mejor asumir que qdan 0 dias habiles ese mes
                continue
            else:
                dias += months[i] - day
                continue
        else:   # Se suman los dias de los meses que quedan
            dias += months[i]

    mesesSobrantes = len(months) - cont + 1
    asistenciasPosibles = (mesesSobrantes*8) + (8 - asistenciasMesActual)   # La cantidad de asistencias maximas que puedes hacer tomando en cuenta que solo se contabilizan 8 asistencias al mes

    # Posibles output's
    if asistenciasPosibles >= asistenciasFaltantes:
        return f"""Te quedan {dias} días hábiles del semestre de deporte, para tomar {asistenciasFaltantes} asistencias...
Pero dado que solo cuentan 8 asistencias al mes, tienes {asistenciasPosibles} asistencias posibles en los {dias} días que te quedan."""
    else:
        return f"""Lamento informarte que estas pa la cagada... 
Necesitas hacer {asistenciasFaltantes} asistencias en tan solo {asistenciasPosibles} asistencias posibles :("""


print(CalculoDeporte())