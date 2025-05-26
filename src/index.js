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

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random <= 0.33:
            result = "RETA"
            break;
        case random <= 0.66:
            result = "CURVA"
            break;
        default:
            result = "COMBATE"
            break;
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou o dado de ${block} ${diceResult}`)
        
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++){
        console.log(`🏁      Rodada ${round}      🏁`)

        // Sorteio tipo de disputa
        let block = await getRandomBlock()
        console.log(`Disputa: ${block}`)
    }
    // Roll Dice
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    // habillity test
    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === "RETA") {
        totalTestSkill1 = diceResult1 + character1.VELOCIDADE
        totalTestSkill2 = diceResult2 + character2.VELOCIDADE

        await logRollResult(character1, "velocidade", diceResult1, character1.VELOCIDADE)
        await logRollResult(character2, "velocidade", diceResult2, character2.VELOCIDADE)

    }
    if (block === "CURVA") {
        totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
        totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

        await logRollResult(character1, "monobrabilidade", diceResult1, character1.MANOBRABILIDADE)
        await logRollResult(character2, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)
    }
    if (block === "COMBATE") {
        let powerResult1 = diceResult1 + character1.PODER
        let powerResult2 = diceResult2 + character2.PODER
    }
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

