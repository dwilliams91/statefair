// Import and invoke the ticket booth component function
import {TicketBooth} from './TicketBooth.js'
import {RideTicketHolders} from './rides/RideTicketHolders.js'
import {foodTicketHolders} from './food/FoodTicketHolder.js'
const eventHub = document.querySelector("#state-fair")

TicketBooth()
RideTicketHolders()
foodTicketHolders()
eventHub.addEventListener("foodTicketPurchased", event =>{

})
eventHub.addEventListener("rideTicketPurchased", event =>{

})
