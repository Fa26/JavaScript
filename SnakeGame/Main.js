/*
*Main donde se ejecuta el programa
* Venegas Guerrero Fatima Alejandra
* 
*/


var score= 0; //variable que guardara la puntuacion
const tablero = []; //arreglo que nos ayudara a dibujar el tablero
const anchoT=64; //ancho del tablero
const altoT=48; // alto del tablero
var sY; //coordenada de posicion de la serpiente
var sX; //coordenada de posicion de la serpiente
var sDireccion;
var sLongitud;
var audioElement;
    
/*Carga la pagina dibujando el tablero primero*/
window.onload= function(){
 document.getElementById("mensaje").style.display='none';
 //Ccreamos el objeto audio
 audioElement= document.createElement("audio");
 //le damos la cancion
 audioElement.setAttribute('src','Common Fight.ogg');
 //para que se reprodusca solo
 audioElement.setAttribute('autoplay','autoplay');
 
  dibujaTablero();
  document.addEventListener("keydown",teclado);

  


   
  
}




/*Funcion que dibujara el tablero con los divs requeridos
*/
function dibujaTablero(){
  
 var contenedor = document.getElementById("grid");
 
 //Vamos a crear nuestro tablero como si fuera una matriz
  for (var i=0; i < altoT; ++i) {
  		 var  row=[];
    
  	for(var j=0; j<anchoT ;++j){
         var new_div={snake : 0};//nos creo el div de la serpiente
         //crea un nuevo div
  	    new_div = document.createElement("div");
        //inserta el nuevo div en el contendor
        contenedor.appendChild(new_div);

        //añade la lista el nuevo div
        row.push(new_div);
  		}
  		tablero.push(row);
	}

  empieza();
  loop();


}


/* Funcion quedibuja las manzanas de forma aleatoria en el tablero
*/
function dibujaManzanas(){

   var appleX = Math.floor(Math.random() * anchoT);
   var appleY = Math.floor(Math.random() * altoT);

     tablero[appleY][appleX].apple=1;
      
}



/* Funcion que dibujara la pocision inicial de la serpiente
* en el tablero*/
function empieza(){
audioElement.play();
  sX = Math.floor(anchoT / 2);
  sY = Math.floor(altoT / 2);
  sLongitud=1;
  sDireccion='Up';

  tablero[sY][sX].snake =sLongitud;
  dibujaManzanas();

}

/*funcion que hara que el programa siempre "funcione"*/
function loop(){
audioElement.play();
  switch(sDireccion){
    case 'Up' : sY--; break;
    case 'Down': sY++; break;
    case 'Left' : sX--; break;
    case 'Right' : sX++; break;
  }

//Cuando la serpiente choque con el borde del tablero
  if(sX < 0 || sY < 0 || sX >= anchoT || sY >= altoT){

      audioElement.pause();
      document.getElementById("mensaje").style.display='block';
  //si chocamos con nuestra cola   
  }else if(tablero[sY][sX].snake > 0){
  	 audioElement.pause();
     document.getElementById("mensaje").style.display='block';
  
  }else if(tablero[sY][sX].apple ===1){ //recolectando manzanas
    sLongitud++;
    score++;
    tablero[sY][sX].apple =0;
    //aumnetamos el puntaje
    document.getElementById("score").innerHTML="Score: " + score;
    dibujaManzanas();
  }

  tablero[sY][sX].snake=sLongitud;

  //vamos a recorrer todo el tablero 
  for(var y=0; y < altoT; ++y){
    for(var x = 0; x < anchoT; x++){
      var casilla = tablero[y][x];

      //vamos a ir disminuyendo la longitud de la cola de
      //la serpiente para que no se agrande.solo hasta que 
      //coma
      if(casilla.snake > 0){
        casilla.className='snake';
        casilla.snake -=1;
      }else if(casilla.apple === 1){
        casilla.className='apple';
      }else{
        casilla.className='';
      }
    }
  }
  //velocidad de la serpiente
  setTimeout(loop,290/sLongitud);
}

/* Funcion que reconoce que se a precionado 
*alguna tecla y avance a esa direccion
*
*/
function teclado(evt) {

//Cada tecla tiene un numero
  const keyPressed=evt.keyCode;
/*Tenemos que:
  arriba = 38, abajo=40, izquierda=37, derecha=39
*/
  if(evt.keyCode === 38){sDireccion='Up'}
  if(evt.keyCode === 37){sDireccion='Left'}
  if(evt.keyCode === 39){sDireccion='Right'}
  if(evt.keyCode == 40){sDireccion='Down'}
  
}





























