// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");
function alturaTriangulo(lado1, lado2, base){
  if (lado1===lado2){
    return Math.sqrt((lado1*lado1)-((base/2)*(base/2)));
  }else{
    return "No es un triangulo Isoceles";
  }
}
function perimetroTriangulo(lado1, lado2, base) {
//   lado1=parseInt(lado1);
//   lado2=parseInt(lado2);
//   base=parseInt(base);
  return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}
// console.log("El perí­metro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del cí­rculo
console.group("Cí­rculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del cí­rculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Aquí­ interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro + "cm");
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area + "cm2");
}

//Resolver triangulo
function calcularAlturaTriangulo(){
  const inputLado1 = document.getElementById("TrianguloLado1");
  const lado1 = inputLado1.value;
  const inputLado2 = document.getElementById("TrianguloLado2");
  const lado2 = inputLado2.value;
  const inputBase = document.getElementById("TrianguloBase");
  const base = inputBase.value;
  const altura = alturaTriangulo(lado1, lado2, base);
  alert(altura);
}
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("TrianguloLado1");
  const lado1 = inputLado1.value;
  const inputLado2 = document.getElementById("TrianguloLado2");
  const lado2 = inputLado2.value;
  const inputBase = document.getElementById("TrianguloBase");
  const base = inputBase.value;
  const inputAltura = document.getElementById("TrianguloAltura");
  const altura = inputAltura.value;
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro + "cm");
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("TrianguloBase");
  const base = inputBase.value;
  const inputAltura = document.getElementById("TrianguloAltura");
  const altura = inputAltura.value;
  const area = areaTriangulo(base, altura);
  alert(area + "cm");
}

function calcularPerimetroCirculo(){
  const inputRadio=document.getElementById("radio");
  const radio=inputRadio.value;
  const perimetro = perimetroCirculo(radio);
  alert(perimetro + "cm");
}
function calcularAreaCirculo(){
  const inputRadio=document.getElementById("radio");
  const radio=inputRadio.value;
  const area = areaCirculo(radio);
  alert(area + "cm2");
}