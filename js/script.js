var club = {
    // Object properties
    name: 'Folk Room Club',
    tickets: 500,
    sold: 455,
    ticketsTypes: ['VIP', 'seating', 'Early bird', 'standing'],
    checkAvailablity: function() {
        return this.tickets - this.sold;
    }
};

var elName = document.getElementById('clubName');
elName.textContent = club.name;

var eltickets = document.getElementById('tickets');
eltickets.textContent = club.checkAvailablity();

// Define a constructor function template for hotels
function Club(name, tickets, sold) {
    // Object properties
    this.name = name;
    this.tickets = tickets;
    this.sold = sold;
    this.checkAvailablity = function() {
        return this.tickets - this.sold;
    };
}

// Define to instances of the hotel and their arguments
var concert1 = new Club('Jhonny Cash Cover', 450, 425);
var concert2 = new Club('Iron and Wine', 450, 400);

var details1 = concert1.name + ' tickets: ';
    details1 += concert1.checkAvailablity();
var elconcert1 = document.getElementById('concert1');
elconcert1.textContent = details1;

var details2 = concert2.name + ' tickets: ';
    details2 += concert2.checkAvailablity();
var elconcert2 = document.getElementById('concert2');
elconcert2.textContent = details2;
