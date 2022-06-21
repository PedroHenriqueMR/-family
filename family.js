//Declarando arrays
var familia = [
    {id: 1, nome:"Pedro", idade: 22},
    {id: 2, nome:"Cleusa", idade: 47},
    {id: 3, nome:"Leandro", idade: 20},
    {id: 4, nome:"Daniel", idade: 25},
    {id: 5, nome:"Duck", idade: 1},
    {id: 6, nome:"Bernardo", idade: 7},
    {id: 7, nome:"Amanda", idade: 4}
];


//Quantas declarações tem dentro da arrays
var quantasPnaFamilia = familia.length;

var totalIdade = 0;

//Soma das idades
for (let i = 0; i < familia.length; i++){
    totalIdade += familia[i].idade;
};

//Media das idades
var mediadeIdade = totalIdade / quantasPnaFamilia;

console.log(`Somos uma família formada por ${quantasPnaFamilia} pessoas, tendo uma media de idade de ${mediadeIdade} anos.`);

//Imprimindo uma apresentação de cada pessoa
for (let e = 0;e < quantasPnaFamilia; e++ ){
    console.log(`Olá, meu nome é ${familia[e].nome}, tenho ${familia[e].idade} anos.`);
};