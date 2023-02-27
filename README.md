# BuscaMinas
## pantallas

inicio: escoje nivel y piede ver las intrucciones
juego:puede jugar y volver al inicio
tabla de pociciones: se muestra el rankin
perdida de juego: se informa al usuario que perdio



## reglas del juego
----------------
inicia:cuando se selecciona una casilla
cronometreamos con https://codesandbox.io/s/5yi5k?file=/src/App.js
gana: si desmarca todas las ubicaciones que no tiene minas
se guarda en una tabla de pociciones
necesitamos nick y tiempo
y mostramos tabla de pocisiones

pierde: si toca una mina



## colores de numeros cercanos a la mina
-------------------------------------
1:celeste
2:verde
3:rojo
4:azul
5:verde obscuro
6:guindo
7:
8:

## logica del juego
-----------------
generamos 10 minas randomicas 
let tablero = Array(10).fill(0).map(row => new Array(10).fill(0))
let abierto = Array(10).fill(0).map(row => new Array(10).fill(false))
y agregamos en una tabla de 10*10 que pintaremos en en tablero
el tablero seran 10*10 butons y si se selecciona se vera el estado actual de la casilla

## logica del desmarcado
---------------------
-1:mina pierde el juego
0: es un espacio vacio y desmarca todos los espacios cercanos
1...n: se muestra el valor de la matris

## Banderita
-----------
colocamos banderita para marcarnos una mina