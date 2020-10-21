const eventHub=document.querySelector("#state-fair")
const contentTarget=document.querySelector(".games")

export const gameTicketHolders = () => {
    let gameTicketToDisplay = ""
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        console.log("The function is being invoked")

        gameTicketToDisplay+=`<div class="person player"></div>`
        contentTarget.innerHTML = gameTicketToDisplay
    })
}