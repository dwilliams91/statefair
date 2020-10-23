const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        let rideTicketToDisplay=""

        rideTicketToDisplay+=`<div class="person rider"></div>`
        console.log(rideTicketToDisplay)
        contentTarget.innerHTML+=rideTicketToDisplay
    })
}

