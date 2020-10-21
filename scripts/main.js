// Import and invoke the ticket booth component function
import {TicketBooth} from './TicketBooth.js'
import {RideTicketHolders} from './rides/RideTicketHolders.js'
import {foodTicketHolders} from './food/FoodTicketHolder.js'
import {gameTicketHolders} from './games/GameTicketHolders.js'
const eventHub = document.querySelector("#state-fair")

TicketBooth()
RideTicketHolders()
foodTicketHolders()
gameTicketHolders()
