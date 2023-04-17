


function sumar (a,b){


    return a+b;
}

//Exportatla como un modulo
module.exports=sumar;

function doblar(n){
    return n*2;
}

function arreglar(){
    /*
      //Arreglo: Listado de datos (variables, objetos, funciones)

      let compras = ["pan", "carne", "cuchillas", "queso"];

      //Para referime a un elemento uso la posicion relativo al primer elemento
  
      console.log(compras[0]);
      compras[2]="Cuchillas de afeitar";
      console.log(compras);

      */
    //Crear un arreglo que contenga el doble 
    //[4,8,10,12,14]
      let miArreglo = [2,4,5,6,7];
      /*
      console.log(miArreglo);
      miArreglo.push("Tolima");
      console.log(miArreglo);
      miArreglo.push("Real Cartagena", "Junio");
      console.log(miArreglo);
      miArreglo.pop();
      console.log(miArreglo);
      miArreglo.shift();
      console.log(miArreglo);
      miArreglo.splice(1,1);
      console.log(miArreglo);
      */
     //Recorrer un arreglo
    /*
     let i=0;
     while(i<miArreglo.length){
        console.log(miArreglo[i]);
        i++
     }
    */
    /*
     for(const equipo of miArreglo){
        console.log(equipo);
     }
    */   
   /*
     let a =[];
     for(const n of miArreglo){
        console.log(n*2);
        a.push(n*2);
     }
     console.log(a);
     */

     let a = miArreglo.map(doblar);
     console.log(a);
}

arreglar();