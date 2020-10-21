


const TicketClassCollection=[
    {div_class:"ticketBooth",
    id:"rideTicket",
    text: "Ride Ticket"
},
{div_class:"foodBooth",
    id:"foodTicket",
    text: "Food Ticket"
},
{div_class:"gameBooth",
    id:"gameTicket",
    text: "Game Ticket"
},
{div_class:"sideshowBooth",
    id:"sideshowTicket",
    text: "Sideshow Ticket"
},
]
export const useTickets = () => {
    return TicketClassCollection.slice()
}