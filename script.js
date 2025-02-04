async function criarBaralho(){
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const response = await fetch(url)
    return await response.json()
}

async function tirarUmaCarta(deck_id){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const response = await fetch(url)
    return await response.json()
}

async function tirarUmaCartaDoBaralho(){
    const baralho = await criarBaralho()
    const carta = await tirarUmaCarta(baralho.deck_id)
    return await console.log(carta)
}

tirarUmaCartaDoBaralho()



