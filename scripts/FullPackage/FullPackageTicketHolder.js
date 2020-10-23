// get all the content targets
// define a function
// put the event listener in that function
// define empty html
// create those divs
const eventHub = document.querySelector("#state-fair")

const contentTargetRides = document.querySelector(".rides")
const contentTargetGames = document.querySelector(".games")
const contentTargetFood = document.querySelector(".food")
const contentTargetSideshow = document.querySelector(".sideshow")

export const FullPackageTicketHolders = () => {

    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        let sideshowTicketToDisplay = ""
        let rideTicketToDisplay = ""
        let gameTicketToDisplay = ""
        let foodTicketToDisplay = ""
        sideshowTicketToDisplay += `<div class="person bigSpender"></div>`
        rideTicketToDisplay += `<div class="person bigSpender"></div>`
        gameTicketToDisplay += `<div class="person bigSpender"></div>`
        foodTicketToDisplay += `<div class="person bigSpender"></div>`
        contentTargetRides.innerHTML += rideTicketToDisplay
        contentTargetGames.innerHTML += gameTicketToDisplay

        contentTargetFood.innerHTML += foodTicketToDisplay

        contentTargetSideshow.innerHTML += sideshowTicketToDisplay


    })

}




