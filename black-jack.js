function simulate(multiplicative_bid_factor, draw_card_when, simulation_count, initial_balance){
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]
    let points = 0
    let computer_current_points = 0
    let sum = 0
    let total_bid = 0
    let computer_points = []
    let lost = false
    let players = 4
    const computer_behaviour = {multiplicative_bid_factor: [10, 50, 100, 2], draw_card_when: [2, 10, 15, 5], current_balance: [200, 400, 500, 10000]}
    let current_balance = initial_balance
    for(i=0; i<simulation_count; i++){
        points = 0
        computer_points = []
        points += cards[Math.floor(Math.random() * cards.length)]
        points += cards[Math.floor(Math.random() * cards.length)]
        while(points <= draw_card_when){
            points += cards[Math.floor(Math.random() * cards.length)]
        }
        if(points > 21){
            continue
        }

        current_balance = current_balance - (multiplicative_bid_factor * Math.cos((21 - points) / 19 * 90 * (Math.PI / 180)))
        if(current_balance < 0){
            console.log('You went broke!')
            break
        }

        total_bid += multiplicative_bid_factor * Math.cos((21 - points) / 19 * 90 * (Math.PI / 180))

        for(v=0; v<players; v++){
            computer_current_points = 0
            computer_current_points += cards[Math.floor(Math.random() * cards.length)]
            computer_current_points += cards[Math.floor(Math.random() * cards.length)]
            while(computer_current_points <= computer_behaviour.draw_card_when[v]){
                computer_current_points += cards[Math.floor(Math.random() * cards.length)]
            }
            if(computer_current_points > 21){
                computer_points.push(0)
            }

            computer_behaviour.current_balance[v] = computer_behaviour.current_balance[v] - (computer_behaviour.current_balance[v] * Math.cos((21 - computer_current_points) / 19 * 90 * (Math.PI / 180)))
            if(current_balance < 0){
                console.log('Computer went broke!')
                players = players - 1
                break
            }
            total_bid += computer_behaviour.multiplicative_bid_factor[v] * Math.cos((21 - computer_current_points) / 19 * 90 * (Math.PI / 180))
            computer_points.push(computer_current_points)
        }

        for(key in computer_points){
            if(computer_points[key] > points){
                lost = true
                break
            }
        }
        if(!lost){
            sum += 1
            current_balance += total_bid
        }else {
            lost = false
        }
    }
    return [current_balance, sum]
}

console.log(simulate(500, 7, 5, 10000))
