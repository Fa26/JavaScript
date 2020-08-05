/**
 * @author Venegas Guerreo Fatima Alejandra
 * @version 1.1
 * @date 8/06/19
 */

 /*
 *Llamara a todas las "funciones" cuando se carge la pagina
 */
  window.addEventListener("load", function(evt) {
    let btn_back = document.getElementById("atras");
    let btn_next = document.getElementById("adelante");
    let casa= document.getElementById("casa");
   

   document.getElementById("casa").addEventListener("click", home);
   document.getElementById("motivacion").addEventListener("click", motivacion);
   document.getElementById("desarrollo").addEventListener("click",desarrollo);
   document.getElementById("botonS").addEventListener("click",desarrollo2);
   document.getElementById("botonA").addEventListener("click",desarrollo);
   document.getElementById("inicio").addEventListener("click",inicio);
   document.getElementById("Si0").addEventListener("click",inicio_02);
   document.getElementById("Si02").addEventListener("click",inicio_03);
   document.getElementById("reI3").addEventListener("click",inicio_02);
   document.getElementById("reI2").addEventListener("click",inicio);
   document.getElementById("cierre_0").addEventListener("click",cierre_1);
   document.getElementById("Ci01").addEventListener("click",cierre_2);
   document.getElementById("Ci02").addEventListener("click",cierre_3);
   document.getElementById("cier3").addEventListener("click",cierre_2);
   document.getElementById("cier02").addEventListener("click",cierre_1);



document.getElementById("motivacion_3").style.display='none';
document.getElementById("desarrollo_1").style.display='none';
document.getElementById("desarrollo_2").style.display='none';

document.getElementById("inicio_0").style.display='none';
document.getElementById("inicio_2").style.display='none';
document.getElementById("inicio_3").style.display='none';
document.getElementById("cierre_01").style.display='none';
document.getElementById("cierre_02").style.display='none';
document.getElementById("cierre_03").style.display='none';
  });

/*
*Metodo inicio es la primera seccion Inicio
*/
function inicio(){
  
   document.getElementById("inicio_0").style.display='block';
   document.getElementById("motivacion_3").style.display='none';
   document.getElementById("desarrollo_1").style.display='none';
   document.getElementById("desarrollo_2").style.display='none';
   document.getElementById("principal_0").style.display='none';
   document.getElementById("inicio_2").style.display='none';
   document.getElementById("inicio_3").style.display='none';
   document.getElementById("cierre_01").style.display='none';
   document.getElementById("cierre_02").style.display='none';
   document.getElementById("cierre_03").style.display='none';

   document.getElementById("inicio_1").style.display='block';
   posicionI();
    
    var titulo="Recordemos algunas Operaciones Basicas";
    var nuevoH= document.getElementById("tituloI");
    nuevoH.textContent=titulo;
    nuevoH.style.fontFamily=" 'Comfortaa', cursive";
    nuevoH.style.left="290px";
    nuevoH.style.fontSize="20px";
    nuevoH.style.top="49px";
    informacion();
    Diavenn();
    

  
}
/**
 * Funcion auxiliar de Inicio,dibuja los diagramas de Venn y
 * los numeros
 */
function Diavenn(){

   document.getElementById("dos").addEventListener('dragstart',drag,false);
   document.getElementById("uno").addEventListener('dragstart',drag,false);
   document.getElementById("siete").addEventListener('dragstart',drag,false);
   document.getElementById("tres").addEventListener('dragstart',drag,false);
   document.getElementById("cuatro").addEventListener('dragstart',drag,false);
   document.getElementById("cinco").addEventListener('dragstart',drag,false);
   document.getElementById("seis").addEventListener('dragstart',drag,false);
   document.getElementById("cero").addEventListener('dragstart',drag,false);
   document.getElementById("ocho").addEventListener('dragstart',drag,false);
   document.getElementById("nueve").addEventListener('dragstart',drag,false);
   document.getElementById("cI").addEventListener('dragover',permitirDrop,false);
   document.getElementById("cI").addEventListener('drop',drop,false);
   document.getElementById("cC").addEventListener('dragover',permitirDrop,false);
   document.getElementById("cC").addEventListener('drop',drop,false);
   document.getElementById("cD").addEventListener('dragover',permitirDrop,false);
   document.getElementById("cD").addEventListener('drop',drop,false);
  

   document.getElementById("panel").addEventListener('dragover',permitirDrop,false);
   document.getElementById("panel").addEventListener('drop',drop,false);

}//fin del metodo Diavenn

//Metodo que toma el elemento a hacer  drag
function drag(ev){
   ev.dataTransfer.setData("Text/plain",ev.target.id);
}    
//Funcion que hace a el elemento parte del otro contenedor  
function drop(ev){
    ev.preventDefault();
    var dato=ev.dataTransfer.getData("Text/plain");
    ev.target.appendChild(document.getElementById(dato));
  
     verifica();      
}  

//Metodo que nos permite hacer drop
function permitirDrop(ev){
    ev.preventDefault();
}
  
/**
 * Funcion auxiliar que nos permite verfiicar si los
 * elementos estan bien posicionados en el diagrama de Venn
 */
function verifica(){
      
      var centro= document.getElementById("cC");
      var uno= document.getElementById("uno");
      var tres = document.getElementById("tres");
      var cuatro = document.getElementById("cuatro");
      var cinco = document.getElementById("cinco");
      var seis = document.getElementById("seis");
      var cero= document.getElementById("cero");
      var anuncio= document.getElementById("anuncio");
      var ocho= document.getElementById("ocho");
      var nueve = document.getElementById("nueve");
      var dos= document.getElementById("dos");
      var siete= document.getElementById("siete");
      var cI= document.getElementById("cI");
      cinco.style.left="10px";
      tres.style.left="96px";
      cuatro.style.left="60px";
      cuatro.style.top="210px";
     
      cero.style.left ="90px";
      cero.style.top="140px";
      dos.style.left="50px";
      siete.style.left="50px";
      siete.style.top="160px";
      

      var text="¡Correcto! ";
      var tex=" !Mal puesta!";
   
      
        if(centro.contains(cero) || centro.contains(tres) || centro.contains(ocho) || centro.contains(uno) || centro.contains(cuatro)
        || centro.contains(cinco)){

            //alert("posicion no valida");
            anuncio.textContent= tex;
            anuncio.style.color="#63B8D3";
            anuncio.style.left="100px";
            anuncio.style.top="8px";
            anuncio.style.fontSize="27px";
        }else{
             // alert("posicion correcta");
         anuncio.textContent= text;
         anuncio.style.color="#63B8D3";
         anuncio.style.left="100px";
         anuncio.style.top="8px";
         anuncio.style.fontSize="27px";

        }
        //verificaB();
            
      
   }//fin del metodo verifica

/**
 * Funcion auxiliar a Inicio que coloca los numeros los cuales
 * seran movidos
 */
function posicionI(){

  var uno= document.getElementById("uno");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var cero= document.getElementById("cero");
  var anuncio= document.getElementById("anuncio");
  var ocho= document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var dos= document.getElementById("dos");
  var siete= document.getElementById("siete");

  uno.style.left="10px";
  dos.style.left="35px";
  tres.style.left="193px";
  cuatro.style.left="343px";
  cuatro.style.top="80px";
  cinco.style.left="30px";
  cinco.style.top="160px";
  seis.style.left="240px";
  seis.style.top="160px";
  siete.style.left="343px";
  siete.style.top="160px";
  ocho.style.left="130px";
  ocho.style.top="160px";
  nueve.style.left="173px";
  nueve.style.top="250px";
  cero.style.left="320px";
  cero.style.top="240px";
  

  var text="Conjunto Universal";
  anuncio.textContent=text;
  anuncio.style.color="black";
 


}//fin de posicionI


/**
 * Metodo que da inicio a la segunda seccion de Inicio
 * colocando las instrucciones ,titulo e imagenes iniciales
 */
function inicio_02(){

   document.getElementById("inicio_0").style.display='none';
   document.getElementById("motivacion_3").style.display='none';
   document.getElementById("desarrollo_1").style.display='none';
   document.getElementById("desarrollo_2").style.display='none';
   document.getElementById("principal_0").style.display='none';
   document.getElementById("inicio_1").style.display='none';
   document.getElementById("inicio_3").style.display='none';
   document.getElementById("cierre_01").style.display='none';
   document.getElementById("cierre_02").style.display='none';
   document.getElementById("cierre_03").style.display='none';

  document.getElementById("inicio_2").style.display='block';

  var txt = document.getElementById("ti2");
  txt.style.fontSize="20px";
  txt.style.top="50px";
  txt.style.left="230px";

   var t="El diagrama de la izquierda, representa el complemento de la";
  var t2=" interseccion de los conjuntos A y B. A la derecha, observamos";
  var t3=" los complementos de A y B. Une estos dos ultimos y observa";
  var t4 =" que ocurre.";

  var t5= document.getElementById("i2panel");
  t5.textContent=t+t2+t3+t4;
  t5.style.fontFamily=" 'Comfortaa', cursive";
  t5.style.fontSize="17px";

  var img1= document.getElementById("img1");
  var img2= document.getElementById("img2");

  img1.style.top="0px";
  img1.style.width="330px";
  img1.style.height="190px";
 

  img2.style.top="194px";
  img2.style.width="330px";
  img2.style.height="190px";
  img2.style.backgroundSize="89%";
  img2.style.backgroundImage="url(img/Brayita.png)";


  document.getElementById("unir").addEventListener("click",mover);
  document.getElementById("regresa").addEventListener("click",inicio_02);
 
}

/**
 * Funcion auxiliar a inicio_02 nos muestra  el resultado de la "animacion"
 */
function mover(){
  var pos=0;
  var pos2=120;
  var img1= document.getElementById("img1");
  var img2= document.getElementById("img2");
  var t5= document.getElementById("i2panel");
  var txt="Conluimos que el complemento de la interseccion de";
  var txt2=" A y B es igual a la union de los componentes de ";
  var txt3=" los dos conjuntos.";
  var id= setInterval(frame,2);
  
    function frame(){
      if(pos == 60){
        clearInterval(id);
        img2.style.backgroundImage="url(img/AunionBR.png)";
        img2.style.width ="330px";
        img2.style.height="286px";
        img2.style.top=pos2;
        img2.style.left="57px";
        img2.style.backgroundSize="100%";
        t5.textContent=txt+txt2+txt3;
        t5.style.paddingLeft="20px";
        t5.style.paddingTop="14px";
        t5.style.paddingLeft="2px";  
      }else{
        pos++;
        pos2--;
        img1.style.top = pos +"px";
        img2.style.top = pos2 + "px";
        
      }
    }
}

/**
 * Funcion que da incio a la tercera seccion de inicio
 */
function inicio_03(){
   document.getElementById("inicio_0").style.display='none';
   document.getElementById("motivacion_3").style.display='none';
   document.getElementById("desarrollo_1").style.display='none';
   document.getElementById("desarrollo_2").style.display='none';
   document.getElementById("principal_0").style.display='none';
   document.getElementById("inicio_1").style.display='none';
   document.getElementById("inicio_2").style.display='none';
   document.getElementById("cierre_01").style.display='none';
   document.getElementById("cierre_02").style.display='none';
   document.getElementById("cierre_03").style.display='none';

   document.getElementById("inicio_3").style.display='block';

  document.getElementById("une3").addEventListener("click",mueve_2);
  document.getElementById("re3").addEventListener("click",inicio_03);

  var img1= document.getElementById("img1_3");
  var img2=document.getElementById("img2_3");

  img1.style.width="290px";
  img1.style.height="197px";
  img1.style.top="0px";
  
  img2.style.width="290px";
  img2.style.height="204px";
  img2.style.top="204px";
  img2.style.backgroundImage="url(img/Roji3.png)";
  img2.style.backgroundSize="102%";


}
/**
 * Funcion auxiliar a inicio_03 que "realiza" la animacion
 */
function mueve_2(){
  var pos=0;
  var pos2=204;
  var img1_3= document.getElementById("img1_3");
  var img2_3= document.getElementById("img2_3");

  var id= setInterval(frame,3);
  
  function frame(){
    if(pos == 99){
      clearInterval(id);
      img2_3.style.backgroundImage="url(img/AYB.png)";
      img2_3.style.width ="290px";
      img2_3.style.height="197px";
      img2_3.style.top=pos2;
      img2_3.style.left="60px";
      img2_3.style.backgroundSize="100%";
      
    }else{
      pos++;
      pos2--;
      img1_3.style.top = pos +"px";
      img2_3.style.top= pos2 + "px";
      
      
    }
  }

}//fin de mueve2

/**
 * Funcion que dibuja la Portada principal de la Pagina
 */
function home(){

   document.getElementById("motivacion_3").style.display='none';
    document.getElementById("desarrollo_1").style.display='none';
    document.getElementById("desarrollo_2").style.display='none';
    document.getElementById("inicio_0").style.display='none';
    document.getElementById("inicio_2").style.display='none';
    document.getElementById("inicio_3").style.display='none';
    document.getElementById("cierre_01").style.display='none';
    document.getElementById("cierre_02").style.display='none';
    document.getElementById("cierre_03").style.display='none';
   
   document.getElementById("principal_0").style.display='block';

    var titulo="Diagramas de Venn";
    var nuevoH= document.getElementById("tituloP");
    nuevoH.textContent=titulo;
    nuevoH.style.fontSize="40px";
    nuevoH.style.top="190px";
    nuevoH.style.left="330px";
    
}

/**
 * Funcion que da inicio a las instrucciones de la primera seccion de Inicio
 */
function informacion(){
   
    var texto="Sean los conjuntos A={0,2,3,7,8} y B={1,2,4,5,7}.";
    var texto1="Arrastra los numeros del conjunto universal al diagrama,";
    var texto3="de acuerdo a los conjuntos dados.";

    var nuevoText=document.getElementById("informacion");
    nuevoText.textContent=texto + "\n" +texto1 + texto3;
    nuevoText.style.fontFamily=" 'Comfortaa', cursive";
    nuevoText.style.fontSize="17px";
    nuevoText.style.height="50px";

    var t= document.getElementById("anuncio");
    t.style.fontSize="18px";
    t.style.left="38px";
    t.style.top="20px";

}

/**
 * Funcion de que despliega la seccion de motivacion
 */
function motivacion(){
  document.getElementById("cierre_03").style.display='none';
  document.getElementById("principal_0").style.display='none';
  document.getElementById("desarrollo_2").style.display='none'; 
 
  document.getElementById("inicio_0").style.display='none';
   document.getElementById("inicio_2").style.display='none';
   document.getElementById("inicio_3").style.display='none';
   document.getElementById("cierre_01").style.display='none';
   document.getElementById("cierre_02").style.display='none';
  document.getElementById("motivacion_3").style.display='block';

}

/**
 * Funcion que da inicio a la primera parte de desarrollo
 */
function desarrollo(){
 
   document.getElementById("motivacion_3").style.display='none';
   document.getElementById("principal_0").style.display='none';
   document.getElementById("desarrollo_2").style.display='none'; 
  
   document.getElementById("inicio_0").style.display='none';
    document.getElementById("inicio_2").style.display='none';
    document.getElementById("inicio_3").style.display='none';
    document.getElementById("cierre_01").style.display='none';
    document.getElementById("cierre_02").style.display='none';
    document.getElementById("cierre_03").style.display='none';

   document.getElementById("desarrollo_1").style.display='block';

    var titulo= "Diagramas de Venn para dos Conjuntos";
    var nuevoH= document.getElementById("titulo");
    nuevoH.textContent=titulo;
    nuevoH.style.fontFamily=" 'Comfortaa', cursive";
    nuevoH.style.left="290px";
    nuevoH.style.fontSize="20px";
    nuevoH.style.top="49px";
    
    var nuevoText=document.getElementById("info");
    var texto="Dos conjuntos, no disyuntos, presentan cuatro regiones que";
    var text2= " como se indica en las siguientes expresiones,generan 16";
    var text3=" posibles combinaciones.";
    var text4=" Haz click sobre una de ellas.";
    nuevoText.textContent=texto + text2 + text3 + text4 ;
    nuevoText.style.height="48px";
    nuevoText.style.width="879px";
    nuevoText.style.left="80px";
    nuevoText.style.fontFamily="'Comfortaa', cursive";
    nuevoText.style.fontSize="17px";

    var panel1= document.getElementById("imagenes");
    panel1.style.width="450px";
    panel1.style.top="160px";
    panel1.style.position="absolute";
    //panel1.style.border="solid black";
    panel1.style.left="64px";
    panel1.style.height="358px";

   imagenD();
    
}
/**
 * Funcion auxiliar a desarrollo dibuja las diversas imagenes en el canvas
 */
function imagenD(){
  
    var canvas = document.getElementById("miCanvas");
    var ctx = canvas.getContext("2d");
    let img1=document.getElementById("op1");
    let img2=document.getElementById("op2");
    let img3=document.getElementById("op3");
    let img4=document.getElementById("op4");
    let img5=document.getElementById("op5");
    let img6=document.getElementById("op6");
    let img7=document.getElementById("op7");
    let img8=document.getElementById("op8");
    let img9=document.getElementById("op9");
    let img10=document.getElementById("op10");
    let img11=document.getElementById("op11");
    let img12=document.getElementById("op12");
    let img13=document.getElementById("op13");
    let img14=document.getElementById("op14");
    let img15=document.getElementById("op15");
    let img16=document.getElementById("op16");
    var img = new Image();

  
    img.src = "img/ven.jpg";
    img.onload = function(){
    ctx.drawImage(img, 0, 0,300,150);
  
    }

    img1.addEventListener("click", function(evt) {
        img.src = "img/opcero.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img2.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op1.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });

      img3.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op2.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });

      img4.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op4.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img5.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op5.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img6.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op6.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img7.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op7.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img8.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/img8.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img9.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op9I.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img10.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/Ca10.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img11.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/b111I.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img12.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op11IMG.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img13.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op13.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img14.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op14.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img15.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op15.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });
      img16.addEventListener("click", function(evt) {
        ctx.clearRect(0,0,300,150);
        img.src = "img/op16I.png";
        img.onload = function(){
        ctx.drawImage(img, 0, 0,300,150);
      
        }
      });

}//fin del metodo imagenD

/**
 * Funcion que inicia la segunda parte de desarrollo
 */
function desarrollo2(){

document.getElementById("motivacion_3").style.display='none';
document.getElementById("principal_0").style.display='none';
document.getElementById("desarrollo_1").style.display='none';
document.getElementById("inicio_0").style.display='none';
document.getElementById("inicio_1").style.display='none';
document.getElementById("cierre_01").style.display='none';
document.getElementById("inicio_2").style.display='none';
document.getElementById("inicio_3").style.display='none';
document.getElementById("cierre_02").style.display='none';
document.getElementById("cierre_03").style.display='none';

document.getElementById("desarrollo_2").style.display='block';

document.getElementById("parraP4").style.display='none';

   var titulo= "Diagramas de Venn para tres Conjuntos";
    var nuevoH= document.getElementById("tituloD2");
    nuevoH.textContent=titulo;
    nuevoH.style.fontFamily=" 'Comfortaa', cursive";
    nuevoH.style.left="290px";
    nuevoH.style.fontSize="20px";
    nuevoH.style.top="49px";

    var text= "Tres conjuntos, no disyuntos,presentan";
    var text2= " ocho regiones que generan 256 posibles";
    var text3= " combinaciones,algunas de las cuales se muestran ";
    var text4=" a continuacion.Haz click sobre una de ellas.";
    var nuevoHT= document.getElementById("infoD2");
    nuevoHT.textContent=text+text2+text3+text4;
    nuevoHT.style.fontFamily= " 'Comfortaa', cursive";
    nuevoHT.fontSize="10px";
    dibujaD2();
}
/**
 * Funcion auxiliar a desarrollo2 que dibuja las diversas imagenes en el canvas
 */

function dibujaD2(){

  var canvas = document.getElementById("canvasP1");
  var ctx = canvas.getContext("2d");

  var canvas3 = document.getElementById("cP3");
  var ctx3= canvas3.getContext("2d");

  var canvas4 = document.getElementById("cP4");
  var ctx4= canvas4.getContext("2d");
  var img = new Image();
  var img2 = new Image();
  var img3 = new Image();
  var img4= new Image();


  let img1=document.getElementById("op1_2");
  let img2_2=document.getElementById("op2_2");
  let img2_3=document.getElementById("op2_3");
  let img2_4=document.getElementById("op2_4");
  let img2_5=document.getElementById("op2_5");
  let img2_6=document.getElementById("op2_6");
  let img2_7=document.getElementById("op2_7");
  let img2_8=document.getElementById("op2_8");
  let img2_9=document.getElementById("op2_9");
  let img2_10=document.getElementById("op2_10");
  let img2_11=document.getElementById("op2_11");
  let img2_12=document.getElementById("op2_12");
  let img2_13=document.getElementById("op2_13");
  let img2_14=document.getElementById("op2_14");
  let img2_15=document.getElementById("op2_15");
  let img2_16=document.getElementById("op2_16");
 

 
    img.src = "img/venTres.jpg";
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
  
    }
  

  img1.addEventListener("click", function(evt) {
    document.getElementById("parraP4").style.display='block';
    img.src = "img/D2_Op1.png";
    img2.src= "img/D2_P3.png";
    img4.src="img/D2_p4.png";
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 0, 0,299,150);
  
    }
  });
  img2_2.addEventListener("click", function(evt) {
    document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O2_p1.png";
    img2.src= "img/D2O2_p3.png";
    img4.src="img/D2O2_p4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });

  img2_3.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2OP3_P1.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);

  
    }
  });
  img2_4.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O4_P1.png";
    img2.src= "img/D2O4_P3.png";
    img4.src="img/D2O4_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_5.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O5_P1.png";
    img2.src= "img/D2O5_P3.png";
    img4.src="img/D2O5_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_6.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O6_P1.png";
    img2.src= "img/D2O6_P3.png";
    img4.src="img/D2O6_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_7.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O7_P1.png";
    img2.src= "img/D2O7_P3.png";
    img4.src="img/D2O7_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_8.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O8_P1.png";
    img2.src= "img/D2O8_P3.png";
    img4.src="img/D2O8_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_9.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O9_P1.png";
    img2.src= "img/D2O9_P3.png";
    img4.src="img/D2O9_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_10.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O10_P1.png";
    img2.src= "img/D2O10_P3.png";
    img4.src="img/D2010_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_11.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O11_P1.png";
    img2.src= "img/D2O11_P3.png";
    img4.src="img/D2O11_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_12.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O12_P1.png";
    img2.src= "img/D2O12_P3.png";
    img4.src="img/D2O12_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_13.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O13_P1.png";
    img2.src= "img/D2O13_P3.png";
    img4.src="img/D2O13_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_14.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O14_P1.png";
    img2.src= "img/D2O14_P3.png";
    img4.src="img/D2O14_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_15.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O15_P1.png";
    img2.src= "img/D2O15_P3.png";
    img4.src="img/D2O15_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
  img2_16.addEventListener("click", function(evt) {
        document.getElementById("parraP4").style.display='block';
    img.src = "img/D2O16_P1.png";
    img2.src= "img/D2O16_P3.png";
    img4.src="img/D2O16_P4.png";
    ctx.clearRect(0,0,299,150);
    ctx3.clearRect(0,0,299,150);
    ctx4.clearRect(0,0,299,150);
    img.onload = function(){
    ctx.drawImage(img, 0, 0,299,150);
    ctx3.drawImage(img2, 0, 0,299,150);
    ctx4.drawImage(img4, 50, 0,199,150);
  
    }
  });
}//fin del metodo dibujaD2

/**
 * Funcion que dibuja la primera parte de cierre,dibujando las
 * diversas imagenes
 */
function cierre_1(){
  document.getElementById("inicio_0").style.display='none';
  document.getElementById("motivacion_3").style.display='none';
  document.getElementById("desarrollo_1").style.display='none';
  document.getElementById("desarrollo_2").style.display='none';
  document.getElementById("principal_0").style.display='none';
  document.getElementById("inicio_1").style.display='none';
  document.getElementById("inicio_3").style.display='none';
  document.getElementById("cierre_01").style.display='none';
  document.getElementById("inicio_2").style.display='none';
  document.getElementById("cierre_02").style.display='none';
  document.getElementById("cierre_03").style.display='none';
  

  document.getElementById("cierre_01").style.display='block';
  
let bD=document.getElementById("der");
let bI=document.getElementById("izq");
let img= document.getElementById("canvasF");
let indice=0;

img.style.backgroundImage="url(img/VennsFlour.png)";
img.style.backgroundSize="30%";
img.style.backgroundRepeat="no-repat";
img.style.backgroundPositionX="240px";
img.style.backgroundPositionY="198px";  

bD.addEventListener("click",function(evt){
  indice++;
  if(indice == 1){
    img.style.backgroundImage="url(img/ImgC1.png)";
    img.style.backgroundSize="101%";
    img.style.backgroundRepeat="no-repat";
    img.style.backgroundPositionX="0px";
    img.style.backgroundPositionY="10px";
  }
  if(indice == 2){
    img.style.backgroundImage="url(img/ImgC2.png)";
    img.style.backgroundSize="99%";
    img.style.backgroundRepeat="no-repat";
    img.style.backgroundPositionX="0px";
    img.style.backgroundPositionY="0px";

  }
  if(indice == 3){
    img.style.backgroundImage="url(img/ImgC3.png)";
    img.style.backgroundSize="87%";
    img.style.backgroundRepeat="no-repat";
    img.style.backgroundPositionX="48px";
    img.style.backgroundPositionY="0px";

  }

});

bI.addEventListener("click",function(evt){
  indice--;

  if(indice == 2){
    img.style.backgroundImage="url(img/ImgC2.png)";
    img.style.backgroundSize="99%";
    img.style.backgroundRepeat="no-repat";
    img.style.backgroundPositionX="0px";
    img.style.backgroundPositionY="0px";

  }

  if(indice == 1){
    img.style.backgroundImage="url(img/ImgC1.png)";
    img.style.backgroundSize="101%";
    img.style.backgroundRepeat="no-repat";
    img.style.backgroundPositionX="0px";
    img.style.backgroundPositionY="10px";
  }

  if(indice == 0){
    img.style.backgroundImage="url(img/VennsFlour.png)";
    img.style.backgroundSize="30%";
    img.style.backgroundRepeat="no-repat";
    img.style.backgroundPositionX="240px";
    img.style.backgroundPositionY="198px";  
  }

});

}//fin del metodo cierre_1

/**
 * Funcion que inicia la seguna parte de cierre
 */
function cierre_2(){

  document.getElementById("inicio_0").style.display='none';
  document.getElementById("motivacion_3").style.display='none';
  document.getElementById("desarrollo_1").style.display='none';
  document.getElementById("desarrollo_2").style.display='none';
  document.getElementById("principal_0").style.display='none';
  document.getElementById("inicio_1").style.display='none';
  document.getElementById("inicio_3").style.display='none';
  document.getElementById("cierre_01").style.display='none';
  document.getElementById("inicio_2").style.display='none';
  document.getElementById("cierre_01").style.display='none';
  document.getElementById("cierre_03").style.display='none';

  document.getElementById("cierre_02").style.display='block';
  document.getElementById("res").innerText=" ";
  var num= numRandom();
var ver= document.getElementById("verifica02");
var resp=document.getElementById("resD");
var otro= document.getElementById("otroE");

checkBox.checked=false;
checkBoxA.checked=false;
checkBoxB.checked=false;
checkBoxC.checked=false;  
ver.addEventListener("click",function(evt){
  verificaD(num);

});
resp.addEventListener("click",function(evt){
  respuestaD(num);
});
otro.addEventListener("click",function(evt){

checkBox.checked=false;
checkBoxA.checked=false;
checkBoxB.checked=false;
checkBoxC.checked=false;  
cierre_2();
});

ponerImagen(num);
limpia();
circuloA();
circuloB();
ovalo();

}

/**
 * Funcion que genera un numero aleatorio
 */
function numRandom(){
  var max=11;
  var min=0;
  return Math.floor(Math.random()*(max - min) + min);
}
/**
 *Funcion que  Coloca la imagen del ejercicio 
 *@param numero aleatorio
 */
function ponerImagen(num){
  
  var imagen= document.getElementById("imagenEjer");
  var imagenes=[
    "Img2.png","img3.png","img4.png","img5.png","img6.png",
    "img7.png","img8.png","img9.png","img10.png","img11.png","img12.png",
  ];
  imagen.style.backgroundImage="url(imgC2/"+ imagenes[num]+")";
  imagen.style.backgroundRepeat="no-repeat";
  imagen.style.backgroundSize="96%";
  imagen.style.backgroundPositionX="8px";
  imagen.style.backgroundPositionY="35px";



}
/**
 * Funcion que da la respuesta al ejericio
 * @param {numero aleatorio de la imagen} num 
 */
function respuestaD(num){
 
  circuloA();
  circuloB();
  ovalo();
  
  switch(num){
    case 0:
    coloreaU();
    coloreaA();
    circuloB();
    coloreaC();
    break;

    case 1:
    coloreaU();
    coloreaC();
    coloreaB();
    circuloA();
    break;

    case 2:
    limpia();
    circuloA();
    circuloB();
    ovalo();
    break;

    case 3:
    coloreaU();
    circuloA();
    circuloB();
    ovalo();
    break;

    case 4:
    coloreaU();
    circuloA();
    coloreaB();
    coloreaC();
    break;
    case 5:
    circuloB()
    circuloA();
    coloreaB();
    ovalo();
    break;

    case 6:
    coloreaU();
    coloreaA();
    coloreaB();
    ovalo();
    break;

    case 7:
    limpia();
    circuloA();
    circuloB();
    ovalo();
    coloreaC();
    break;

    case 8:
    coloreaU();
    coloreaA();
    coloreaB();
    coloreaC(); 
    circuloB();
    break;

    case 9:
    limpia();
    ovalo();
    circuloB();
    coloreaA();
    break;

    case 10:
    limpia();
    coloreaA();
    coloreaB();
    coloreaC();
    break;

  }//fin del switch

}//fin de la funcion

/**
 * Funcion que verificara si el diagrama es correcto
 * @param numero de la imagen a verificar
 */
function verificaD(num){
  
  var chek =  checkBox.checked;
  var chekA= checkBoxA.checked;
  var chekB= checkBoxB.checked;
  var checkC= checkBoxC.checked;
  
  
  switch(num){
     case 0:
     if(chek && chekA && checkC){
       document.getElementById("res").innerText="Muy Bien :) ";
     }else{document.getElementById("res").innerText="Error  :( ";
     }
     break;

     case 1:
        if(chek && chekB && checkC){
          document.getElementById("res").innerText="Muy Bien :) ";
        }else{document.getElementById("res").innerText="Error  :( ";}
     break;

     case 2:
        if(chek || chekA||chekB|| checkC){
          document.getElementById("res").innerText="Error :( ";
        }else{document.getElementById("res").innerText="Muy Bien :) ";}
     break;

     case 3:
     if(chek){
      document.getElementById("res").innerText="Muy Bien :) ";

     }else{document.getElementById("res").innerText="Error  :( ";}
     break;

     case 4:
     if(chek && chekB && checkC){
      document.getElementById("res").innerText="Muy Bien :) ";

     }else{document.getElementById("res").innerText="Error  :( ";}
     break;
     //corregir
     case 5:
     if(chekB){  
       document.getElementById("res").innerText="Muy Bien :) ";
      }
     else{
       document.getElementById("res").innerText="Error  :( ";
    }
     break;

     case 6:
     if(chek && chekA && chekB){
      document.getElementById("res").innerText="Muy Bien :) ";

     }else{
      document.getElementById("res").innerText="Error  :( ";
     }
     break;
//arreglar
     case 7:
     if(checkC){
      document.getElementById("res").innerText="Muy Bien :) ";

     }else{
      document.getElementById("res").innerText="Error  :( ";
     }
     break;
     
     case 8:
      if(chek && chekA && checkC){
        document.getElementById("res").innerText="Muy Bien :) ";

      }else{
        document.getElementById("res").innerText="Error  :( ";
      }
     break;

     case 9:
     if(chekA){
      document.getElementById("res").innerText="Muy Bien :) ";
     }else{
      document.getElementById("res").innerText="Error  :( ";
     }
     break;

     case 10:
     if(chekA && chekB && checkC){
      document.getElementById("res").innerText="Muy Bien :) ";

     }else{
      document.getElementById("res").innerText="Error  :( ";
     }
     break;

  }//fin del switch

}//fin de la funcion

/**
 * Funcion que limpia el canvas
 */
function limpia(){
var canvas = document.getElementById("ven");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.clearRect(0,0,540,330)
ctx.stroke();

ctx.font="bold 22px Comfortaa";
ctx.strokeText("U",10,30);

}
var canvas = document.getElementById("ven");
var ctx = canvas.getContext("2d");

/**
 * Variables que nos diran cuando sean seleccionadas las
 * casillas
 */
var checkBox = document.getElementById("Uc");
checkBox.addEventListener("change",OpcionU,false);
var checkBoxA = document.getElementById("Oa");
checkBoxA.addEventListener("change",OpcionU,false);
var checkBoxB = document.getElementById("Ob");
checkBoxB.addEventListener("change",OpcionU,false);
var checkBoxC = document.getElementById("Oc");
checkBoxC.addEventListener("change",OpcionU,false);


/**
 * Funcion que indica a que funcion llamar al 
 * oprimir alguna opcion de la casilla
 */
function OpcionU(){
  
  var chek =  checkBox.checked;
  var chekA= checkBoxA.checked;
  var chekB= checkBoxB.checked;
  var checkC= checkBoxC.checked;

  if(chek){
   coloreaU();
   circuloA();
   circuloB();
   ovalo();
   
  }else{
    limpia();
  }
  if(chekA){coloreaA();
  }else{circuloA();}
  if(chekB){coloreaB();
  }else{circuloB();}
  if(checkC){coloreaC();
  }else{ovalo();}
}



/**
 * Funcion auxiliar a cierre__2 ,dibuja las diferentes figuras 
 * en el canvas
 */

 //Dibuja un ovalo
function ovalo(){
var canvas = document.getElementById("ven");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.save();
ctx.scale(1,2);
var radio=28;
ctx.arc(140,37,radio,0,2*Math.PI);
ctx.restore();
ctx.lineWidth=1;
ctx.fillStyle="#E6BDE8";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.font="bold 22px Comfortaa";
ctx.strokeText("C",129,82);
}
//Funcion que colorea C
function coloreaC(){
ctx.beginPath();
ctx.save();
ctx.scale(1,2);
var radio=28;
ctx.arc(140,37,radio,0,2*Math.PI);
ctx.restore();
ctx.lineWidth=0.5;
ctx.strokeStyle ="#C78D36";
ctx.fillStyle="#FFB344";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.font="bold 22px Comfortaa";
ctx.strokeText("C",129,82);
  
}
//dibuja el cirulo a 
function circuloA(){
  var canvas = document.getElementById("ven");
  var ctx = canvas.getContext("2d");
 
  ctx.beginPath();
  ctx.save();
  var radio=60;
  ctx.strokeStyle="#FFFAC1";
  ctx.fillStyle="#FFFAC1";
  ctx.lineWidth=1;
  ctx.arc(117,73,radio,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();

ctx.beginPath();
ctx.font="bold 22px Comfortaa";
ctx.strokeText("A",19,82);
}
//Funcion que colorea A
function coloreaA(){
  ctx.beginPath();
  ctx.save();
  var radio=60;
  ctx.strokeStyle="#C78D36";
  ctx.fillStyle="#FFB344";
  ctx.lineWidth=1;
  ctx.arc(117,73,radio,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
ctx.font="bold 22px Comfortaa";
ctx.strokeText("A",19,82);
}
//Dibuja circulo b
function circuloB(){
  var canvas = document.getElementById("ven");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.save();
  var  radio=60;
  ctx.strokeStyle="#FED9CA";
  ctx.fillStyle="#FED9CA";
  ctx.lineWidth=1;
  ctx.arc(172,73,radio,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();

ctx.beginPath();
ctx.font="bold 22px Comfortaa";
ctx.strokeText("B",259,82);

}
//Funcion que coloreaB
function coloreaB(){
  ctx.beginPath();
  ctx.save();
  var  radio=60;
  ctx.strokeStyle="#C78D36";
  ctx.fillStyle="#FFB344";
  ctx.lineWidth=1;
  ctx.arc(172,73,radio,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
ctx.font="bold 22px Comfortaa";
ctx.strokeText("B",259,82);

}

//Colorea el canvas
function coloreaU(){
ctx.beginPath();
ctx.fillStyle = "#FFB344";
ctx.fillRect (0,0 ,540, 330);
ctx.stroke();

ctx.font="bold 22px Comfortaa";
ctx.strokeText("U",10,30);

}

/**
 * Funcion que da inicio a la tercera seccion de cierre
 */
function cierre_3(){

  document.getElementById("inicio_0").style.display='none';
  document.getElementById("motivacion_3").style.display='none';
  document.getElementById("desarrollo_1").style.display='none';
  document.getElementById("desarrollo_2").style.display='none';
  document.getElementById("principal_0").style.display='none';
  document.getElementById("inicio_1").style.display='none';
  document.getElementById("inicio_3").style.display='none';
  document.getElementById("cierre_01").style.display='none';
  document.getElementById("inicio_2").style.display='none';
  document.getElementById("cierre_01").style.display='none';
  document.getElementById("cierre_02").style.display='none';

  document.getElementById("cierre_03").style.display='block';
  //var indice=0;
  columnas();
  /*
  document.getElementById("v2").addEventListener("click",function(evt){
    indice++;
    if(indice==1){
      cierreFilas();
    }if(indice ==2){
      cierreFilas2();
    }

  });*/

}
/**
 * Funcion auxiliar a cirre_3 que muestras las imagenes
 */

function columnas(){

  document.getElementById("A2").innerHTML="A";
  document.getElementById("BE").innerHTML="B";
  document.getElementById("C").innerHTML="C";
  document.getElementById("D").innerHTML="D";
  document.getElementById("E").innerHTML="E";

  document.getElementById("leA").src="imgC/1D.png";
  document.getElementById("leB").src="imgC/1I.png";
  document.getElementById("leA2").src="imgC/2D.png";
  document.getElementById("leA3").src="imgC/3D.png";
  document.getElementById("leA4").src="imgC/4D.png";
  document.getElementById("leA5").src="imgC/5D.png";
  document.getElementById("leB2").src="imgC/2I.png";
  document.getElementById("leB3").src="imgC/3I.png";
  document.getElementById("leB4").src="imgC/6i.png";
  document.getElementById("leB5").src="imgC/5I.png";

  document.getElementById("v1").style.display="none";

  document.getElementById("v2").style.display="block";
  var v2 = document.getElementById("v2");
  v2.style.position="absolute";
  v2.style.left="397px";
  v2.style.top="359px";

  var malas=0;
  var buenas=0;
  var texto= document.getElementById("error");
  texto.textContent="Erroneas: " + buenas;
  let respuestas=[
    document.getElementById("r1").value,
    document.getElementById("r2").value,
    document.getElementById("r3").value,
    document.getElementById("r4").value,
    document.getElementById("r5").value,
  ];
  let soluciones =["C","E","D","B","A"];
  
 document.getElementById("v2").addEventListener("click",cierreFilas);
  document.getElementById("verifica").addEventListener("click",function(evt){
    for(var i=0;i<=4;i++){
        if(respuestas[i].toUpperCase() == soluciones[i]){
          ++buenas;
      }else{
        ++malas;
      }
    }
    
  texto.innerText="Erroneas: " + malas;
  for(var j=0; j<=4;j++){
    respuestas[j]="";
    respuestas[j].value="R";
  }
  buenas=0;
  malas=0;
  
  });

}

/**
 * Funcio que dibuja la segunda "pagina de las columnas"
 */
function cierreFilas(){

  document.getElementById("v1").addEventListener("click",columnas);
  document.getElementById("A2").innerHTML="F";
  document.getElementById("BE").innerHTML="G";
  document.getElementById("C").innerHTML="H";
  document.getElementById("D").innerHTML="I";
  document.getElementById("E").innerHTML="J";

  document.getElementById("leA").src="imgC/6D.png";
  document.getElementById("leB").src="imgC/4I.png";
  document.getElementById("leA2").src="imgC/7D.png";
  document.getElementById("leA3").src="imgC/8D.png";
  document.getElementById("leA4").src="imgC/9D.png";
  document.getElementById("leA5").src="imgC/10D.png";
  document.getElementById("leB2").src="imgC/7I.png";
  document.getElementById("leB3").src="imgC/8I.png";
  document.getElementById("leB4").src="imgC/9I.png";
  document.getElementById("leB5").src="imgC/10I.png";


  document.getElementById("r3").style.display="block";
  document.getElementById("r4").style.display="block";
  document.getElementById("r5").style.display="block";
  document.getElementById("v1").style.display="block";
  document.getElementById("v2").style.display="none";
 /* var v2= document.getElementById("v2");
  v2.style.position="absolute";
  v2.style.left="428px";
  v2.style.top="350px";*/

  var v1= document.getElementById("v1");
  v1.style.position="absolute";
  v1.style.left="384px";
  v1.style.top="350px";

  var malas=0;
  var buenas=0;
 
  var texto= document.getElementById("error");
  texto.textContent="Erroneas: " + buenas;
  let respuestas=[
    document.getElementById("r1").value,
    document.getElementById("r2").value,
    document.getElementById("r3").value,
    document.getElementById("r4").value,
    document.getElementById("r5").value,
  ];
  let soluciones =["F","H","G","I","J"];

 //document.getElementById("v2").addEventListener("click",cierreFilas2);

  document.getElementById("verifica").addEventListener("click",function(evt){
    for(var i=0;i<=4;i++){
        if(respuestas[i].toUpperCase() == soluciones[i]){
          ++buenas;
      }else{
        ++malas;
      }
    }
    
  texto.innerText="Erroneas: " + malas;
  for(var j=0; j<=4;j++){
    respuestas[j]="";
  }
  buenas=0;
  malas=0;
  
  });
  

}

/**
 * Funcion que dibuja la ultima seccion de comlumnas
 */
function cierreFilas2(){
  document.getElementById("A2").innerHTML="K";
  document.getElementById("BE").innerHTML="L";

  document.getElementById("leA").src="imgC/11D.png";
  document.getElementById("leB").src="imgC/11I.png";
  document.getElementById("leA2").src="imgC/12D.png";
  document.getElementById("leB2").src="imgC/12I.png";

  document.getElementById("C").innerHTML="";
  document.getElementById("D").innerHTML="";
  document.getElementById("E").innerHTML="";

  document.getElementById("leA3").src="";
  document.getElementById("leA4").src="";
  document.getElementById("leA5").src=""; 
  document.getElementById("leB3").src="";
  document.getElementById("leB4").src="";
  document.getElementById("leB5").src="";

  document.getElementById("r3").style.display="none";
  document.getElementById("r4").style.display="none";
  document.getElementById("r5").style.display="none";
 
  document.getElementById("v2").style.display="none";
  document.getElementById("v1").style.display="block";
  var v1= document.getElementById("v1");
  v1.style.position="absolute";
  v1.style.left="397px";
  v1.style.top="310px";

  var malas=0;
  var buenas=0;
  var texto= document.getElementById("error");
  let respuestas=[
    document.getElementById("r1").value,
    document.getElementById("r2").value,
  ]
  let soluciones =["L","K"];

 document.getElementById("v1").addEventListener("click",cierreFilas);
  document.getElementById("verifica").addEventListener("click",function(evt){
    for(var i=0;i<=1;i++){
        if(respuestas[i].toUpperCase() == soluciones[i]){
          ++buenas;
      }else{
        ++malas;
      }
    }
    
  texto.innerText="Erroneas: " + malas;
  for(var j=0; j<=1;j++){
    respuestas[j]="";
  }
  buenas=0;
  malas=0;
  
  });


}





















