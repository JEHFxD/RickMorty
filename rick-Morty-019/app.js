
const characterSearch = document.getElementById('character-search')
const url = 'https://rickandmortyapi.com/api/character/'
const cardsContainer = document.getElementById('cards')

const makeCharacters = (myCharacter) =>{
    const container = document.createElement('div')
    container.classList.add('card')
    

    const imgCharacter = document.createElement('img')
    imgCharacter.src= myCharacter.image
    imgCharacter.alt= myCharacter.name

    const nameCharacter= document.createElement('h2')
    nameCharacter.textContent = myCharacter.name
    
    container.appendChild(imgCharacter)
    container.appendChild(nameCharacter)
    cardsContainer.appendChild(container)

    document.getElementById('cards').appendChild(container)

}

const render = (characters)=>{
    cardsContainer.innerHTML =""
    characters.forEach(character=> makeCharacters(character))
        console.log(character)
}

const getCharacter = async() =>{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    data.results.forEach(character => makeCharacters(character))

}

const searchCharacter = async() =>{
    const response = await fetch(url+"?name="+characterSearch.value)
    const data = await response.json()
    render(data.results)
}

window.addEventListener('DOMContentLoaded',getCharacter)
characterSearch.addEventListener('keyup', searchCharacter)