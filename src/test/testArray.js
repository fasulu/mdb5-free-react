basket = ['banana',
            ['apple',
                ['orange'],
            'blueberry']
        ]
console.table(basket[0]);        // banana
console.table(basket[0,1]);      // apple, orange, blueberry
console.table(basket[0,1][1]);   // orange
console.table(basket[0,1][1,2]); // blueberry