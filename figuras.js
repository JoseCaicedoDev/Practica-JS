console.log("hola G")
//Calcúlo del Cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log(`Lado del cuadrado miden: ${ladoCuadrado} cm`)
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El Perimetro es: ${perimetroCuadrado} cm`)
const areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log(`El Área es: ${areaCuadrado} cm2`)
console.groupEnd()

//Calcúlo del Cuadro con Funciones
const perimetroCuadrado1 = (lado)=> lado * 4;
console.log(`El Perimetro es: ${perimetroCuadrado1(10)} cm`)
const areaCuadrado1 = (lado) => Math.pow(lado, 2);
console.log(`El Área es: ${areaCuadrado1(10)} cm2`)
//Calcúlo del Triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Lado del Triángulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`)
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El Perimetro es: ${perimetroTriangulo} cm`)
const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log(`El Área es: ${areaTriangulo} cm2`)
console.groupEnd()

//calculo de html
function calculatePerimetro(){
  const value = document.getElementById("inputCuadrado").value

  alert(perimetroCuadrado1(value))
}

function AlturaTriangulo2(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
  if(ladoTriangulo1 === ladoTriangulo2 && ladoTriangulo1 !=baseTriangulo){
    const alturaTriangulo3 = Math.sqrt(ladoTriangulo1**2 - (baseTriangulo**2/4))
    console.log(`Altura triangulo Isoceles: ${alturaTriangulo3} `)
  }
}

AlturaTriangulo2(5,5,4)