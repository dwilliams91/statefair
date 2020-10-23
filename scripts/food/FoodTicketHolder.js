import { counter } from "../TicketBooth.js"

const eventHub=document.querySelector("#state-fair")
const contentTarget=document.querySelector(".food")

export const foodTicketHolders=()=>{
    eventHub.addEventListener("foodTicketPurchased", customEvent=> {
        let foodTicketToDisplay=""

        foodTicketToDisplay+=`<div class="person eater"></div>`
        contentTarget.innerHTML+=foodTicketToDisplay
    })

}


















