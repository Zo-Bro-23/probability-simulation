const blackJackStrategy = require('blackjack-strategy');
const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

    function createDeck()
    {
        deck = new Array();
        for (var i = 0 ; i < values.length; i++)
        {
            for(var x = 0; x < suits.length; x++)
            {
                var weight = parseInt(values[i]);
                if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                    weight = 10;
                if (values[i] == "A")
                    weight = 'A';
                var card = { Value: values[i], Suit: suits[x], Weight: weight };
                deck.push(card);
            }
        }
    }

    function shuffle()
    {
        // for 1000 turns
        // switch the values of two random cards
        for (var i = 0; i < 1000; i++)
        {
            var location1 = Math.floor((Math.random() * deck.length));
            var location2 = Math.floor((Math.random() * deck.length));
            var tmp = deck[location1];

            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    }

    var players = new Array();
    function createPlayers(num)
    {
        players = new Array();
        for(var i = 1; i <= num; i++)
        {
            var hand = new Array();
            var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
            players.push(player);
        }
    }

function play(){
    let numberOfPlayers
    rl.question('How many players are playing?\n number(5): ', answer => {
        if(isNaN(answer)){
            numberOfPlayers = 5
        }else {
            numberOfPlayers = answer
        }

        createDeck()
        shuffle()
        createPlayers(numberOfPlayers)

        for(i=0; i<numberOfPlayers; i++){
            let randomCard = deck.pop()
            if(randomCard.Weight != 'A'){
                players[i].Points += randomCard.Weight
            }
            players[i].Hand.push(randomCard)
            let randomCard = deck.pop()
            if(randomCard.Weight != 'A'){
                players[i].Points += randomCard.Weight
            }
            players[i].Hand.push(randomCard)
    }



    })
}