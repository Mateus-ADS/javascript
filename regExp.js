// g - global (encontra todas as ocorrências)
// i - insensitive (case sensitive)
// () grupos
// | ou
const texto = `
João trouxe  flores para sua amada namorada em 10 de janeiro de 1970 Maria era o nome dela.

Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente. maria hoje sua esposa. ainda faz aquele café com pão de queiro nas trades de domingo. Também né! Sendo a boa mineira que é, nunca esquece  seu famoso pão de queiro.
Não canso de ouvir a Maria:
"Joooooooooãooooo, o café ta prontinho aqui. Veeeem"!;
`

const regExp1 = /João|maria/gi;
const found = regExp1.exec(texto)

console.log(texto.match(regExp1))
console.log(texto.replace(/(João|Maria)/gi,function (input) {
    return ' ############ ' + input.toUpperCase() + ' ###########';
}))