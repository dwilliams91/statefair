const eventHub=document.querySelector("#state-fair")
const contentTarget=document.querySelector(".sideshow")

export const sideshowTicketHolders=()=>{
    eventHub.addEventListener("sideshowTicketPurchased", customEvent=> {
        let sideshowTicketToDisplay=""

        sideshowTicketToDisplay+=`<div class="person gawker"></div>`
        contentTarget.innerHTML+=sideshowTicketToDisplay
    })

}


