/*1. Crie uma função que receba o nome de um aluno e suas três notas, calcule 
a média e informe se ele está aprovado (média maior ou igual a 7) ou 
reprovado. A mensagem deverá ser personalizada com o nome do aluno.*/ 

function fnMedia(nome, nota1, nota2, nota3){
let media = nota1 + nota2 + nota3 / 3

if (media >= 7){
console.log("Aluno(a) " + nome  + " aprovado!")
} else {
console.log("Aluno(a) " + nome + " reprovado!")
}
}


//2. Crie uma função que receba dois números e exiba a diferença entre eles. 

function fnDiferenca(a, b){
    let diferenca = a - b
      console.log("A diferença é: " + diferenca);
}

/*3. Crie uma função que receba um número e exiba sua tabuada de 
multiplicação, utilizando um laço de repetição, do 1 ao 10.*/

function fnTabuada(numero){
for (let i = 1; i <= 10; i++){
console.log(numero + "X" + i + "=" + numero * i);
}
}

/*4. Crie uma função que receba a idade de uma pessoa e classifique sua faixa 
etária de acordo com as seguintes regras: menor que 12 anos: criança; de 
12 até 17 anos: adolescente; de 18 até 59 anos: adulto; 60 anos ou mais: 
idoso. Ao final, exiba a classificação correspondente.*/ 

function faixaEtaria(idade) {
  if (idade < 12){
    console.log("Criança");
  } else if (idade <+ 17){
    console.log("Adolescente");
  } else if (idade <= 59){
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
}

/*5. Crie uma função que receba a largura e a altura de um retângulo, calcule sua 
área e exiba o resultado. (Para calcular a área de um retângulo, utilize a 
fórmula Área = base × altura), O resultado deve ser expresso em unidades de 
área, como centímetros quadrados (cm²)*/

function areaRetangulo(largura, altura){
  let area = largura + altura;
  console.log("Área = " + area + "cm²")
}

/*6. Crie uma função que receba um número e realize uma contagem regressiva 
até chegar a zero, utilizando um laço de repetição.*/

function contagemRegressiva(numero){
  for (let i = numero; i >= 0; i--){
    console.log(i);
  }
}

/*7. Crie uma função que receba o salário de um funcionário e aplique um 
aumento de acordo com as seguintes regras: salários menores que R$ 1.000 
recebem 20% de aumento, entre R$ 1.000 e R$ 2.000 recebem 15% e acima 
de R$ 2.000 recebem 10%. Ao final, exiba o novo salário.*/

function aumentoSalario(salario){
  let novoSalario;
  if (salario < 1000){
    novoSalario = salario * 1.20;
  } else if (salario <= 2000){
    novoSalario = salario * 1.15;
  } else {
    novoSalario = salario * 1.10;
  }
  console.log("Novo salário: R$ " + novoSalario);
}

/*8. Crie uma função que receba um número e verifique se ele é par ou ímpar. Ao 
final, exiba uma mensagem informando o resultado.*/

function parOuImpar(numero){
  if (numero % 2 === 0){
    console.log(numero + " é par");
  } else {
    console.log(numero + "é impar");
  }
}

/*9. Crie uma função que receba uma temperatura em Celsius e converta para 
Fahrenheit. A função também deverá receber uma informação opcional para 
definir se deseja realizar a conversão inversa, de Fahrenheit para Celsius. 
Caso essa informação não seja fornecida, deverá realizar a conversão 
padrão de Celsius para Fahrenheit.*/

function converterTemperatura(temperatura, tipoTemperatura){
if (tipoTemperatura == "C"){
  let formula = (temperatura - 32) * 5/9;
  return formula + "°F";
  } else {
     formula = temperatura * 9/5 + 32;
  return formula + "°C";
  }
}
  

/*10. Crie uma função que receba três números representando os lados de 
um triângulo e verifique se ele é equilátero, isósceles ou escaleno.*/

function tipoTriangulo (a, b, c){
  if (a === b && b === c){
    return "Equilátero";
  } else if (a === b || a === c || b === c){
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}
console.log(tipoTriangulo(3, 3, 3)); // Equilátero
console.log(tipoTriangulo(3, 3, 5)); // Isósceles
console.log(tipoTriangulo(3, 4, 5)); // Escaleno

/*11. Crie uma função que receba um número inteiro positivo e calcule a 
soma de todos os números de 1 até o número informado, utilizando um laço 
de repetição. Exemplo: se o número informado for 5, deverá calcular 1 + 2 + 
3 + 4 + 5 e exibir 15.*/ 

function somaAteN(n){
  let soma = 0;
  for (let i = 1; i <= n; i++){
    soma += i; 
  }
  return soma;
}
console.log(somaAteN(5));

/*12. Crie uma função que receba o valor de um produto e o percentual de 
desconto. O percentual de desconto deverá ser opcional, considerando 10% 
caso não seja informado. Ao final, exiba o valor do desconto e o preço final 
do produto.*/

function calcularDesconto(valor, percentual = 10){
const desconto = valor * (percentual /100);
const precoFinal = valor - desconto;
console.log("Valor do desconto: R$" + desconto);
console.log("Preço final: R$" + precoFinal);
}
calcularDesconto(200)

/*13.Crie uma função que receba a altura, a idade e a informação se a 
pessoa possui algum problema cardíaco. Para entrar no brinquedo, a pessoa 
precisa ter altura maior ou igual a 1,50 m e idade maior ou igual a 12 anos. 
Caso possua algum problema cardíaco, não poderá utilizar o brinquedo, 
independentemente das demais condições.*/

function podeEntrar(altura, idade, temProblemaCardiaco){
  console.log(!temProblemaCardiaco && altura >= 1.50 && idade >= 12)
}

/*14. Crie uma função que receba a distância percorrida por um veículo e a 
quantidade de combustível consumida. A função deverá calcular e exibir o 
consumo médio em quilômetros por litro. (a soma é Km/Litros)*/ 

function calcularConsumo(distancia, combustivel){
  const consumo = distancia / combustivel;
  console.log("Consumo médio: " + consumo + "km/l");
}
calcularConsumo(300, 25);

/*15. Crie uma função que receba um número e exiba todos os números 
pares entre 1 e o número informado, utilizando um laço de repetição.*/

function exibirPares(numero){
  for (let i = 1; i <= numero; i++){
    if (i % 2 === 0){
      console.log(i);
    }
  }
}
exibirPares(10)

/*16. Crie uma função que receba o valor total de uma conta de restaurante 
e a quantidade de pessoas que irão dividir o pagamento. A quantidade de 
pessoas deverá ser opcional, considerando 2 pessoas caso não seja 
informada. Ao final, exiba quanto cada pessoa deverá pagar.*/

function dividirConta(valorTotal, pessoas = 2){
  const valorPorPessoa = valorTotal / pessoas;
  console.log("Cada pessoa deve pagar: R$ " + valorPorPessoa);
}
dividirConta(150, 4);

/*17. Crie uma função que receba uma nota de 0 a 10 e classifique o 
desempenho do aluno de acordo com as seguintes regras: nota maior ou 
igual a 9: excelente; nota maior ou igual a 7 e menor que 9: bom; nota maior 
ou igual a 5 e menor que 7: regular; nota menor que 5: insuficiente. Ao final, 
exiba a classificação correspondente.*/ 

function classificarNota(nota){
  if (nota >= 9) {
    return "Excelente";
  } else if (nota >= 7) {
    return "Bom";
  } else if (nota >= 5){
    return "Regular";
  } else {
    return "Insuficiente";
  }
}
let nota = 8 
console.log(classificarNota(nota));

//18. Crie uma função que receba um número e exiba o seu quadrado.

function quadrado(numero){
  console.log(numero * numero);
}
quadrado(5);


