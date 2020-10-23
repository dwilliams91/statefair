const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
import {useTickets} from './TicketDataProvider.js'

// creating the total counter
export let counter=0
// 
eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket") {
        counter ++
        console.log(counter)
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
        counter ++
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
    counter ++

    const gameEvent=new CustomEvent("gameTicketPurchased",{
        detail:{
            ticketBought:"Ticket"
        }
    })
    eventHub.dispatchEvent(gameEvent)

}
})
eventHub.addEventListener("click", event=>{
    if (event.target.id==="sideshowTicket"){
        counter ++

        const sideShowEvent=new CustomEvent("sideshowTicketPurchased",{
            detail:{
                ticketBought:"Ticket"
            }
        })
        eventHub.dispatchEvent(sideShowEvent)
    
    }
    })

    eventHub.addEventListener("click", event=>{
        if (event.target.id==="fullPackageTicket"){
            counter ++

            const fullPackageEvent=new CustomEvent("fullPackageTicketPurchased",{
                detail:{
                    ticketBought:"Ticket"
                }
            })
            eventHub.dispatchEvent(fullPackageEvent)
        
        }
        })

       eventHub.addEventListener("click",Event=>{
           const totalTicketEvent=new CustomEvent("totalTicket",{
            detail:{
                ticketBought:"Ticket"
            }
           })
           eventHub.dispatchEvent(totalTicketEvent)
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
