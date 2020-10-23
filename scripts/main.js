// Import and invoke the ticket booth component function
import {TicketBooth} from './TicketBooth.js'
import {RideTicketHolders} from './rides/RideTicketHolders.js'
import {foodTicketHolders} from './food/FoodTicketHolder.js'
import {gameTicketHolders} from './games/GameTicketHolders.js'
import {sideshowTicketHolders} from './sideshows/sideshowTicketHolder.js'
import { FullPackageTicketHolders } from './FullPackage/FullPackageTicketHolder.js'

const eventHub = document.querySelector("#state-fair")

TicketBooth()
RideTicketHolders()
foodTicketHolders()
gameTicketHolders()
sideshowTicketHolders()
FullPackageTicketHolders()