let lista = []
let opcao = 's'

while(opcao == 's')
{
    let nome = prompt("Digite o nome do participante: ")
    let idade = prompt("Digite a idade dele: ")
    if(idade > 18){
        if(lista.length < 100){
            console.log("Cadrastro permitido")
            lista.push(nome)
        }
        else{
            console.log("Erro lista cheia")
        }
    }
    else{
        console.log("Erro participante menor que 18 anos")
    }
opcao = prompt("Castratar outro participante? (sim ou não)")
}

console.log (lista)
