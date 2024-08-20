let vida = 100;
let inventario = {
    empatia: 0,
    alegria: 0,
    tristeza: 0,
    compaixão: 0,
    coragem: 0
}
let checkpoint = null
 
 
function salvarCheckpoint() {
    checkpoint = {
        vida: vida,
        inventario: {...inventario}
    };
    alert("Checkpoint salvo!")
}
 
function restaurarCheckpoint() {
    if (checkpoint) {
        vida = checkpoint.vida;
        inventario = {...checkpoint.inventario}
        alert("Jogo restaurado a partir do checkpoint.")
    } else {
        alert("Nenhum checkpoint salvo.")
    }
}
 
function mostrarEstado() {
    alert(`Vida: ${vida}\nInventário: ${JSON.stringify(inventario, null, 2)}`)
}
 
 
function explorar() {
    let local = prompt("Para onde você quer ir? (infância, treinamento, competição, olimpiadas)")
    switch(local) {
        case "infância":
            alert("Você está na infância de Dorsa. Seu pai lhe mostra o badminton.")
            vida += 10
            inventario.alegria += 1
            break
        case "treinamento":
            alert("Você está nos treinos de Dorsa. Treinamentos duros, mas recompensadores.")
            vida += 20
            inventario.coragem += 1
            break
        case "competição":
            alert("Você está em uma competição. Hora de provar seu valor!")
            let resultado = Math.random() > 0.5 ? "vitória" : "derrota"
            if (resultado === "vitória") {
                alert("Você venceu!")
                vida += 30
                inventario.alegria += 1
            } else {
                alert("Você perdeu...")
                vida -= 20
                inventario.tristeza += 1
            }
            break
        case "olimpiadas":
            alert("Você está nas Olimpíadas de Paris 2024. O ápice da sua jornada!")
            vida = 100
            inventario.alegria += 3
            inventario.compaixão += 2
            break
        default:
            alert("Local desconhecido.")
    }
    mostrarEstado()
}
 
function interagir() {
    let comQuem = prompt("Com quem você quer interagir? (treinador, amigo, adversário)")
    alert(`Você está interagindo com ${comQuem}.`)
    switch(comQuem) {
        case "treinador":
            alert("O treinador dá dicas valiosas para melhorar seu desempenho.")
            vida += 10
            inventario.coragem += 1
            break
        case "amigo":
            alert("Seu amigo lhe dá apoio emocional.")
            vida += 5
            inventario.empatia += 1
            break
        case "adversário":
            alert("Um adversário desafia você para uma partida.")
            let resultado = Math.random() > 0.5 ? "vitória" : "derrota"
            if (resultado === "vitória") {
                alert("Você venceu o adversário!")
                vida += 20
                inventario.alegria += 1
            } else {
                alert("Você perdeu para o adversário.")
                vida -= 10
                inventario.tristeza += 1
            }
            break
        default:
            alert("Pessoa desconhecida.")
    }
    mostrarEstado()
}
 
function enfrentarDesafio() {
    let desafio = prompt("Qual desafio você quer enfrentar? (treinoIntenso, pressaoMidia, lesao)")
    alert(`Você está enfrentando o desafio: ${desafio}.`)
    switch(desafio) {
        case "treinoIntenso":
            alert("Um treino intenso que testará seus limites.")
            vida -= 10
            inventario.coragem += 2
            break
        case "pressaoMidia":
            alert("A pressão da mídia é intensa. Você precisa manter a calma.")
            vida -= 15
            inventario.compaixão += 1
            break
        case "lesao":
            alert("Uma lesão ameaça sua carreira.")
            vida -= 30
            inventario.coragem += 1
            inventario.tristeza += 2
            break
        default:
            alert("Desafio desconhecido.")
    }
    mostrarEstado()
}
 
 
function iniciarJogo() {
    alert("Bem-vindo à jornada de Dorsa Yvarivafa!")
    mostrarEstado()
    salvarCheckpoint()
 
    while (vida > 0) {
        let acao = prompt("O que você quer fazer? (explorar, interagir, enfrentarDesafio, salvar, restaurar, sair)")
        switch (acao) {
            case "explorar":
                explorar()
                break
            case "interagir":
                interagir()
                break
            case "enfrentarDesafio":
                enfrentarDesafio()
                break
            case "salvar":
                salvarCheckpoint()
                break
            case "restaurar":
                restaurarCheckpoint()
                break
            case "sair":
                alert("Obrigado por jogar!")
                return
            default:
                alert("Ação desconhecida.")
        }
    }
 
    alert("Você perdeu toda sua vida. Fim de jogo.")
}
 
 
iniciarJogo()
 
 
