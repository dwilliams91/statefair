const eventHub=document.querySelector("#state-fair")
const contentTarget=document.querySelector(".food")

export const foodTicketHolders=()=>{
    let foodTicketToDisplay=""
    eventHub.addEventListener("foodTicketPurchased", customEvent=> {
        foodTicketToDisplay+=`<div class="person eater"></div>`
        contentTarget.innerHTML=foodTicketToDisplay
    })

}


















