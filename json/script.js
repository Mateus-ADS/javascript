const objs = [
    {
        nome:"Matheus",
        Idade: 30,
        esta_Trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa:'Empresa X'
        },
        hobbies:["Programar","Correr","Ler"]
    },
    {
        nome:"João",
        Idade: 25,
        esta_Trabalhando: false,
        detalhes_profissao: {
            "profissao":null,
            "empresa": null,
        },
        hobbies:['Jogar','Ler']
    }
]

// conveter objeto para json
const jsonData = JSON.stringify(objs)
console.log(jsonData)


// conveter json para objeto

const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})

