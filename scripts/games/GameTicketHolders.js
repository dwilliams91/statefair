const eventHub=document.querySelector("#state-fair")
const contentTarget=document.querySelector(".games")

export const gameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {

        let gameTicketToDisplay = ""

        gameTicketToDisplay+=`<div class="person player"></div>`
        console.log(gameTicketToDisplay)
        contentTarget.innerHTML += gameTicketToDisplay
    })
}