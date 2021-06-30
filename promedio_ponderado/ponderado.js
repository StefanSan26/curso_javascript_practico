const lista=[{
    materia:"English",
    nota:15,
    valor:3,
    },
    {
    materia:"Matematicas",
    nota:17,
    valor:5,
    },
    {
    materia:"Fisica",
    nota:18,
    valor:4,}
];

const notasValor=lista.map(function (listaObjeto) {
    return listaObjeto.nota * listaObjeto.valor;
});

const notasValorTotal=notasValor.reduce(function(sum=0,value){return sum+value;});

const valor= lista.map(function (listaObjeto) {
    return listaObjeto.valor;
});

const valorTotal=valor.reduce(function(sum=0,value){return sum+value;});

const ponderado=notasValorTotal/valorTotal;
