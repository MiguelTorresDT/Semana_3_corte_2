/*Considerando que un rectángulo varía de un cuadrado sólo 
porque la altura no es igual a la base, diseñe la clase 
Cl_rectangulo que herede de Cl_cuadrado, y luego haga un, 
programa que determine el área y el perímetro de un rectángulo 
(área= base * altura, perímetro= 2*base + 2*altura)
*/

import rectangulo from "./Cl_rectangulo.js";

let re1 = new rectangulo(4, 2),
    re2 = new rectangulo(3, 5);
      
         
let salida = document.getElementById("salida");

 salida.innerHTML = `
 <br>Base del rectángulo: ${re1.base}
 <br>Altura: ${re1.altura}
 <br>Área resultante: ${re1.area()}
 <br>Perímetro: ${re1.perimetro()}
 <br>
 <br>
 <br>Base del rectángulo: ${re2.base}
 <br>Altura: ${re2.altura}
 <br>Área resultante: ${re2.area()}
 <br>Perímetro: ${re2.perimetro()}`
    
