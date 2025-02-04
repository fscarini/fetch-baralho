document.getElementById('tirar-carta').addEventListener('click', ()=>{
    tirarUmaCartaDoBaralho()
})

let deckId = null;

async function criarBaralho() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const response = await fetch(url)
    const data = await response.json()
    deckId = data.deck_id;
    return data
}

async function tirarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const response = await fetch(url)
    return await response.json()
}

async function criarBaralhoTirandoUmaCarta() {
    const baralho = await criarBaralho()
    const carta = await tirarUmaCarta(baralho.deck_id)
    document.getElementById('carta').src = carta.cards[0].image
}

async function tirarUmaCartaDoBaralho() {
    if(!deckId){
        console.error("O baralho ainda não foi criado")
        return;
    }

    const carta = await tirarUmaCarta(deckId)
    if (carta.cards.length > 0) {
        document.getElementById('carta').src = carta.cards[0].image;
    } else {
        alert("Acabaram as cartas no baralho.");
    }
}

criarBaralhoTirandoUmaCarta()



