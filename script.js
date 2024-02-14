/*
    SETUP
 1. References to different useful things
 2. State
*/

const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/brittany-dugger/events'

let events = []

const eventsContainer = document.getElementById('events')

//  FETCH CALLS

async function getEvents(){
  try{
    const response = await fetch(`${BASE_URL}`)
    const json = await response.json()

    return json.data 


  } catch(err){
    console.error(err)
  }


}




/*
  EVENT LISTENERS (click submit etc.)
*/





/*
  RENDER FUNCTIONS

  renderRecipes() - what we call when GET/POST/PUT/DELETE 
      runs to re-render to the DOM
*/

function renderEvensts(){
  const htmlEvents =events.map(element => {
    let div = document.createElement('div')
    div.className = 'card'
    div.innerHTML =  `<h3>${element.id}</h3>
                      <img src=${element.imageUrl} />
                      <h3>${element.name}<h3/>
                      <p>${element.description}</p>`
    return div
  })
  eventsContainer.replaceChildren(...htmlEvents)
}