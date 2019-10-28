let nombre= prompt("Digame su nombre");
let edad= prompt("Decime tu edad");
let trabajo= prompt("Dime tu profesion");

edad = parseInt(edad);

let info= "usted se llama "+nombre+" tu edad es "+edad+" Su ocupacion es "+trabajo;

alert(info);

/*..*/

let yourYear= prompt("Socorro, necesito saber la edad de tu nacimiento");

yourYear= parseInt(yourYear);

let ed1= 2019 - yourYear;
let ed2= 2018 - yourYear;

let laData = "Si ya cumpliste años tenes "+ed1+" Si aun no cumpliste, felicidades te falta poco para dejar de tener "+ed2;

alert(laData);

/*..*/

const pi= 3.14;

let radio= prompt("inserte el radio para calcular");

radio = parseFloat(radio);

let diam = radio*2;
let area = pi*(radio*radio);

let dialo= "El diametro de tu circulo es "+diam+" El area de tu circulo es "+area;

alert(dialo);

/*..*/

let color= prompt("Coloca un color");

if (color=="amarillo"){
      alert("Buen gusto :)"); 
 } else if  (color=="azul"){
    alert("Gusto decente :)"); 
} else if (color=="verde"){
    alert("Coloooooooor esperanza"); 
} else if (color=="rojo"){
    alert("just no :("); 
} else if (color=="violeta"){
    alert("muy bonito"); 
} else if (color=="blanco"){
    alert("pureza uwu~~"); 
}  else if (color=="negro"){
    alert("lindo color"); 
} else {
    alert("no es de los que pense pero hey lindo color :)");
}

/*..*/

let pelo= prompt("Hola, bienvenido a la peluqueria Mengana&Fulanito. ¿Qué largo de pelo tenes?");
pelo= pelo.toLowerCase();
if (pelo=="largo"){
    alert("Te recomiendo un corte, va a ser un cambio interesante");
} else if (pelo=="medio"){
    alert("Te recomiendo cortarte las puntas, estan muy florecidas :(");
} else if (pelo=="corto"){
    alert ("Rapaloooooooo");
} else {
    alert ("Podemos darte una peluca que brilla en la oscuridad :D!!!!");
}

/*..*/
let pelo= prompt("Hola, bienvenido a la peluqueria Mengana&Fulanito. ¿Qué largo de pelo tenes?");
pelo= pelo.toLowerCase();

let barba = confirm("¿tenes barba?");

if (pelo=="largo"&&barba){
    alert("Te recomiendo un corte, va a ser un cambio interesante. Y te peino la barba");
} else if (pelo=="medio"&&barba){
    alert("Te recomiendo cortarte las puntas, estan muy florecidas :(  Y te peino la barba");
} else if (pelo=="corto"&&barba){
    alert ("Rapaloooooooo  Y te peino la barba");
} else if (pelo=="largo"){
    alert("Te recomiendo un corte, va a ser un cambio interesante");
} else if (pelo=="medio"){
    alert("Te recomiendo cortarte las puntas, estan muy florecidas :(");
} else if (pelo=="corto"){
    alert ("Rapaloooooooo");
} else if(barba){
    alert("puedo hacerte trenzas en la barba");
} else {
    alert ("Podemos darte una peluca que brilla en la oscuridad :D!!!!");
}

/*..*/

let horario=prompt("¿què hora es? (Formato 24)");

if (horario>=6&&horario<14){
    alert("Buenos dìas :D!!!!!");
} else if (horario>=14&&horario<=19){
    alert("Buenas tardes :)!");
 } else if(horario<=24) {
     alert("Buenas noches -_- zzzz");
 }

 /*-*/

 let horario=prompt("¿què hora es? (Formato 24)");

 if (horario>=6&&horario<14){
     alert("Buenos dìas :D!!!!!");
 } else if (horario>=14&&horario<19){
     alert("Buenas tardes :)!");
 } else if ( (horario >=19&&horario<24) || (horario>=0&&horario<6)){
      alert("Buenas noches -_- zzzz");   
 }
/**/
 let horario=prompt("¿què hora es? (Formato 24)");

 if  (horario>=14&&horario<19){
     hora =" tardes :)!";
 } else if ( (horario >=19&&horario<24) || (horario>=0&&horario<6)){
      hora = " noches -_- zzzz";   
 }

 alert(`Buenas ${hora}`);


/*_*/

let i=10

while(i>=1){
    alert(i);
    i--
}

let i=10

while(i>=1){
    console.log(i);
    i--
}

/*1 al 20 par e impar*/

for (let i=1;i<=20;i++){
 if (i % 2 == 1)
  console.log (`${i} es impar`);
  else {console.log(`${i} es par`)}
}

/*1 al 20 par e impar*/


for (let i=1;i<=20;i++){
    let pa;

    if (i % 2 == 0){
        pa="par"
    } else {
        pa="impar"
    }

    console.log(`${i} es ${pa}`);
}

/*template*/


    let asking;
    while (asking!="lluvioso"){  asking = prompt("Dime la contraseña. Pista pistita: el dìa de hoy");}

    alert(`Felicidades, descubriste que el dìa esta ${asking} y te olvidaste el paraguas pero vendemos piloto`);

/*----*/

/* let listaClaves= [
    "manzanas",
    "peras",
    "naranjas",
    "rucula",
    "jengibre",
 ]   

 let decime= prompt("Bienvenido a la verduleria Habemus Papa ¿qué necesitas?")

for(i=0;i>=0;i++){
if (decime==listaClaves[i]){
  alert("a");
  i=-1
} else if (i=5){
    i=-1
    decime= prompt("Bienvenido a la verduleria Habemus Papa ¿qué necesitas?")
}
} */

 let listaClaves= [
    "manzanas",
    "peras",
    "naranjas",
    "rucula",
    "jengibre",
 ]  
 let boo=true;
 let decime;


while (boo){
    
decime=prompt("Bienvenido a la verduleria Habemus Papa ¿qué necesitas?");

for(let i=0;i<5;i++){
    if (decime==listaClaves[i]){
        boo=false;
        alert("correcto");
    } 
}
} 

/*enlistas derecho y reverso*/


let miListaNombres=[]

for(let i=0;i<5;i++){
    miListaNombres[i]=prompt("Hola, ¿me otorgas un nombre humano?")
}

for(let i=0;i<5;i++){
  console.log(miListaNombres[i]);
}
for(let i=4;i>=0;i--){
  console.log(miListaNombres[i]);
}

/*......*/

/*switch*/
let elMes = prompt("Completa con un número del 1 al 12");
elMes= parseInt(elMes);

switch (elMes) {
    case 1:
        alert("Enero");
        break;
    case 2:
        alert("Febrero");
        break;
    case 3:
        alert("Marzo");
        break;
    case 4:
        alert("Abril");
        break;
    case 5:
        alert("Mayo");
        break;
    case 6:
        alert("Junio");
        break;
    case 7:
        alert("Julio");
        break;
    case 8:
        alert("Agosto");
        break;
    case 9:
        alert("Septiembre");
        break;
    case 10:
        alert("Octubre");
        break;
    case 11:
       alert("Noviembre");
       break;
    case 12:
       alert("Diciembre");
       break;
    default:
        alert("Error, no se siguio consigna");
}


/*if*/
let elMes = prompt("Completa con un número del 1 al 12");
elMes= parseInt(elMes);

if (elMes==1) {
    alert("Enero");
} else if  (elMes==2) {
    alert("Febrero");
} else if  (elMes==3) {
    alert("Marzo");
} else if (elMes==4) {
    alert("Abril");
} else if (elMes==5) {
    alert("Mayo");
} else if  (elMes==6) {
    alert("Junio");
} else if (elMes==7) {
    alert("Julio")
} else if (elMes==8){
    alert("Agosto")
} else if(elMes==9){
    alert("Septiembre")
} else if (elMes==10) {
    alert("Octubre");
} else if  (elMes==11) {
    alert("Noviembre");
} else if (elMes==12) {
    alert("Diciembre");
} else {
    alert("segui la consigna >:(");
}

/*bonus track*/

let listaMeses=["Cero","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let elMes = prompt("Completa con un número del 1 al 12");
elMes= parseInt(elMes);

alert(listaMeses[elMes]);

/* throw try catch */

let diaDeSemana = prompt("Pon un dìa de la semana");

diaDeSemana = diaDeSemana.toLowerCase();

try{
switch(diaDeSemana){
    case "lunes":
        alert(2);
        break;
    case "martes":
        alert(3);
        break;
    case "miércoles":
        alert(4); 
        break;
    case "jueves":
        alert(5);
        break;
    case "viernes":
        alert(6);
        break;
    case "sábado":
        alert(7); 
        break; 
    case "domingo":
        alert(1);
        break;  
    default:
        throw "AAAAAAA";                        
}
} catch (err){
    console.warn("Un error se ha producido, porfavor reintenta colocar lo solicitado")
}

/* funciones */

const saludo= () =>{
let nombre= prompt("Dime un nombre");

alert(`Hola ${nombre} :D!!!`);

};

saludo();

/* * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert. */

 const vcuadrado= ()=>{
    let valcuad= prompt("dime un número para elevar al cuadrado")
    
    alert(Math.pow(valcuad, 2));
 }

 vcuadrado();
 
 /* */

 let estoEsUnArray= [];

const llenar= () =>{
  let elPushito = prompt("Agregame una palabra al array :) que sea bonita")  
 estoEsUnArray.push(elPushito);
}

const elFinal= () =>{
   
    alert(estoEsUnArray[estoEsUnArray.length-1]);
  }

const pasameLaRepe= () =>{
    for(let i=0;i<estoEsUnArray.length;i++){
        console.log(estoEsUnArray[i]);
      }
}

/**/


const recibeNumero= (elNumero) => {

    elNumero= elNumero.toString(); 
    elNumero = elNumero.split("");
    elNumero=elNumero.reverse();
    elNumero= elNumero.join("");
   elNumero= parseInt(elNumero);
    console.log(elNumero);

}
/* ALTERNATIVA:
let deletrear = (numero) => {
    numero=numero.toString();
    console.log(numero.split('').reverse().join(''));
}
deletrear(12345); */


/* agrupar alfabeticamente */
const elABC = (laPalabra) => {
  laPalabra = laPalabra.toLowerCase()  
                       .split("")  
                       .sort()
                       .join("");
  console.log(laPalabra);
}


 /***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de 
 * cada palabra en mayúsculas.
 *  
 ***********************************************/

const primeraLetra = (fraseImportante) => {
 fraseImportante= fraseImportante.toLowerCase()
                                 .split(" ");
      for (let i=0; i<fraseImportante.length;i++){
        fraseImportante[i] =  fraseImportante[i].charAt(0).toUpperCase() + fraseImportante[i].substring(1);      
      }
 fraseImportante = fraseImportante.join(" ");                                   
 console.log(fraseImportante);
}

//4
/***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la palabra mas larga de la misma
 *  
 ***********************************************/

 const laMasLarga = (acaFrase) => {
  acaFrase = acaFrase.split(" ");
  let otraVar = "";  

  for(let i=0; i<acaFrase.length; i++){
       if (acaFrase[i].length>=otraVar.length){
           otraVar = acaFrase[i];
       } 
    }

    console.log(otraVar);
 }

 /*ejemplo map*/
 const arr = ["hola", "mundo"];
const arr2 = arr.map((item)=>{
    if(item == "hola"){
        return 101;
    }else {
        return 200;
    }
});
let arr4 = [];
for (let i = 0; i < arr.length; i++){
    if(arr[i] == "hola"){
        arr4.push( 101);
    }else {
        arr4.push(200);
    }
}


// 1
/***********************************************
 * 
 * Hacer una función que reciba una frase y devuelva
 * el número de vocales que tiene la misma.
 *  
 ***********************************************/

  
 const lasVocales = (laQuote) => {
    laQuote = laQuote.toLowerCase();
    laQuote = laQuote.split("");
    let conteo = 0;

    for(let i=0;i<laQuote.length;i++){

         switch(laQuote[i]){
         case"a":
            conteo++;
            break;
         case "e":
           conteo++;
           break;
         case "i":
            conteo++;
            break;
         case "o":
            conteo++;
            break;
         case "u":
            conteo++;
            break;
         
        }
       
       }
    return conteo;   
 }

 /**/

 const countVowels =(sentence) =>{
    sentence = sentence.toLowerCase();
    let vowels= "aeiou";
    let vcount= 0;
    for(let i = 0; i < sentence.length ; i++)
    {
        if (vowels.indexOf(sentence[i]) !== -1)
        {
            vcount++;
        }
    }
    return vcount;
 }

 /* 
 // 2
 ***********************************************
 * 
 * Hacer una función que tome, primero, una frase
 * y luego pida un caracter para remover de la 
 * frase ingresada.
 * Observaciones: validar que el caracter ingresado
 * sea solo uno. Si es más de uno tirar un error.
 *  
 ***********************************************/

const quitameEsto = (unaFrase) => {
   
let terminator = prompt("Dame un caracter para quitar de la frase :D");
 
if(terminator.length>1){
    throw "ERROR: solo se permite un caracter, reintentar función";
}

unaFrase = unaFrase.split("");

for (let i=0;i<unaFrase.length;i++){
    if (unaFrase[i]==terminator){
        unaFrase.splice(i,1);
        i--
    }
}

unaFrase = unaFrase.join("");
return unaFrase;
}

/*otra forma rocio*/
const mifunction = (frase) =>{
    let askCharacter= prompt ("decime un caracter de la frase ingresada");
    if(askCharacter.length>1){
        throw "Error! se permita sólo un caracter" ;
    }
    let newFrase= "";
    let letra = "";
    for (i=0; i<frase.length; i++){
        letra = frase[i];
        if(letra!=askCharacter){
            newFrase = newFrase + frase[i];
        }
    }
    return newFrase;
 }
 mifunction("hola como estas");

 /*paula forma*/
 const censura = (frase) => {
    let censurador = prompt ("que tenes ganas de censurar hoy?");
    if(censurador.length > 1){
        throw "NO ESCRIBAS DE MAS" ;
    }
    frase= frase.split(censurador).join("");
     
    return frase;
 }
 censura ("blablñablña");


 /***********************************************
 * 
 * 1. Hacer una función que guarde una lista
 *    de listas de datos de personas. Deberia
 *    guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 
 * Observaciones: Google. Mucho google.
 * 
 ************************************************/

 let listGlobal = [];

 const listPersonas = () =>{
 let nombre = prompt("Introduce nombre completo");
 let edad = prompt("Introduce tu edad");
 let correo = prompt("Introduce tu email");
  
 } 

