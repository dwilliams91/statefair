const eventHub=document.querySelector("#state-fair")
const contentTarget=document.querySelector(".sideshow")

export const sideshowTicketHolders=()=>{
    let sideshowTicketToDisplay=""
    eventHub.addEventListener("sideshowTicketPurchased", customEvent=> {
        sideshowTicketToDisplay+=`<div class="person eater"></div>`
        contentTarget.innerHTML=sideshowTicketToDisplay
    })

}


