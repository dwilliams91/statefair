// Import and invoke the ticket booth component function
import {TicketBooth} from './TicketBooth.js'
import {RideTicketHolders} from './rides/RideTicketHolders.js'
const eventHub = document.querySelector("#state-fair")

TicketBooth()
RideTicketHolders()
eventHub.addEventListener("rideTicketPurchased", event =>{

})
