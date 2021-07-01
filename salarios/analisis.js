//helper o utils
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
//Calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (lista.length % 2 === 0) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    return (mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]));
  } else {
    return (personaMitad = lista[mitad]);
  }
}
//Mediana General
const salariosCol = colombia.map((persona) => persona.salary);

const salariosColSorted = salariosCol.sort((salA, salB) => salA - salB);

const medianaGeneral = medianaSalarios(salariosColSorted);
//Mediana del top 10%
const spliceStart=salariosColSorted.length*0.90;
const spliceCount=salariosColSorted.length-spliceStart;
const salariosColTop10=salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
  medianaGeneral,
  medianaTop10Col,
});
