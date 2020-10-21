const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
import {useTickets} from './TicketDataProvider.js'

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
