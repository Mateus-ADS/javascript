// (a,b) => {
//     return a + b;
// }
// (a,b) => a + b

 let a = 5;
 let b = 10;

let c = (num1,num2) => num1 + num2
console.log(c(5,8));

let d = (x,y) => {
    let op
    if (x >= 5) {
        op = x * y;
    } else {
        op = x / y;
    }
    return op
}

console.log(d(a,b))

let frase = 'O mateus é um dev iniciante'

// function com um argumento
let fraseArray = frase => frase.split(' ')
console.log(fraseArray(frase))

//function sem argumento 

let semArg = () => console.log('Não tenho argumentos')
semArg()

// caso de uso

  let roupa = [
    {produto:'Camisa', preco: 25, cor : 'Amarela'},
    {produto:'Calça', preco: 80, cor : 'Azul'},
    {produto:'Jaqueta', preco: 100, cor : 'Preto'},
    {produto:'Camiseta', preco: 15, cor : 'Rosa'},
    {produto:'Calção', preco: 20, cor : 'Azul'},
];

let precoMaiorQue50 = roupa.filter((roupa) => {
    return roupa.preco >= 50
});

// setTimeout(() => {
//     console.log('Deu tempo')
// }, 150)

//Não utiliza arrow function

let pessoa = {
    nome : 'Mateus',
    sayName: function() {
        console.log(this.nome)
    }
}
pessoa.sayName();

let btn = document.getElementById('btn')
console.log(btn)

btn.addEventListener('click', () => {
    this.classList.toggle('classe')
})