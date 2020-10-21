const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
import {useTickets} from './TicketDataProvider.js'

// create an event li
eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
            ticketBought: "Ticket"
        }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})
eventHub.addEventListener("click", event => {
    if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
            ticketBought: "Ticket"
        }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", event=>{
if (event.target.id==="gameTicket"){
    console.log(event)
    const gameEvent=new CustomEvent("gameTicketPurchased",{
        detail:{
            ticketBought:"Ticket"
        }
    })
    eventHub.dispatchEvent(gameEvent)

}


})



export const TicketBooth = () => {
    let createButtonsHTML=" "
    let buttonClasses=useTickets()
    for (const button of buttonClasses){
        createButtonsHTML+=buttonHTMLCreator(button)
    }
    contentTarget.innerHTML = createButtonsHTML
}
const buttonHTMLCreator=(buttonObj)=>{
    return `<div class="${buttonObj.div_class}">
    <button id="${buttonObj.id}">${buttonObj.text}</button>
</div>`
}
