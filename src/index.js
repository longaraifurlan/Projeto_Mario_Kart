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

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock() {
    const random = Math.random()

    if (random <= 0.33) return "RETA"
    if (random <= 0.66) return "CURVA"
    return "COMBATE"
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou o dado de ${block}: 🎲 ${diceResult} + ✨ ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🏁      Rodada ${round}      🏁`)

        const block = await getRandomBlock()
        console.log(`Disputa: ${block}`)

        const diceResult1 = await rollDice()
        const diceResult2 = await rollDice()

        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE)

        } else if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)

        } else if (block === "COMBATE") {
            totalTestSkill1 = diceResult1 + character1.PODER
            totalTestSkill2 = diceResult2 + character2.PODER

            console.log(`${character1.NOME} em combate com ${character2.NOME}! 🥊`)

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER)
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER)

            if (totalTestSkill1 > totalTestSkill2 && character2.PONTOS > 0) {
                console.log(`${character1.NOME} vence o COMBATE! ${character2.NOME} perdeu 1 ponto 🐢`)
                character2.PONTOS--
            } else if (totalTestSkill2 > totalTestSkill1 && character1.PONTOS > 0) {
                console.log(`${character2.NOME} vence o COMBATE! ${character1.NOME} perdeu 1 ponto 🐢`)
                character1.PONTOS--
            } else if (totalTestSkill1 === totalTestSkill2) {
                console.log("Confronto empatado! Nenhum ponto foi perdido ⚖️")
            }
        }

        // Verificando o vencedor da rodada (exceto empate ou apenas combate)
        if (block !== "COMBATE") {
            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`${character1.NOME} recebe 1️⃣  ponto`)
                character1.PONTOS++
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`${character2.NOME} recebe 1️⃣  ponto`)
                character2.PONTOS++
            } else {
                console.log("Rodada empatada! Nenhum ponto atribuído")
            }
        }

        console.log("---------------------------------------------------------")
        await sleep(2000)
    }
}

async function declareWinner(character1, character2) {
    console.log("\n📊 Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`\n${character1.NOME} venceu a corrida! 🏆`)
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n${character2.NOME} venceu a corrida! 🏆`)
    } else {
        console.log("A corrida terminou em empate 🤝")
    }
}

(async function main() {
    console.log(`🚦 A corrida entre ${player1.NOME} e ${player2.NOME} irá começar...🚦\n`)
    await sleep(2000)
    console.log("🔴 🔴 🔴")
    await sleep(1000)
    console.log("🟡 🟡 🟡")
    await sleep(1000)
    console.log("🟢 🟢 🟢")
    await sleep(1000)
    console.log("🏎  Foi dada a largada! 🏎")
    await sleep(1500)

    await playRaceEngine(player1, player2)
    await sleep(1500)

    await declareWinner(player1, player2)
})()
