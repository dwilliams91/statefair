const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    let rideTicketToDisplay=""
    eventHub.addEventListener("rideTicketPurchased", customEvent => {

        rideTicketToDisplay+=`<div class="person rider"></div>`
        console.log(rideTicketToDisplay)
        contentTarget.innerHTML=rideTicketToDisplay
    })
}

