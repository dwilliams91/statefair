import { counter } from './TicketBooth.js'
const eventHub = document.querySelector("#state-fair")

const contentTarget=document.querySelector(".totalTickets")

export const TotalTicketCounter=()=>{
    eventHub.addEventListener("totalTicket", customEvent => {

        let TotalTicketCounter=`Total tickets purchased: ${counter}`
         
        contentTarget.innerHTML=TotalTicketCounter
    
    })
}
