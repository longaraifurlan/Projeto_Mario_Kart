const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1
}

async function playRaceEngine(character1, character2) {
    
}

(async function main() {
    console.log(`🚦 A corrida entre ${player1.NOME} e ${player2.NOME} irá começar...🚦\n`);
    await sleep(2000)
    console.log("🔴")
    await sleep(1000)
    console.log("🟡")
    await sleep(1000)
    console.log("🟢")
    await sleep(1000)
    console.log("🏎  Foi dada a largada 🏎")

    await playRaceEngine(player1,player2);
})()

