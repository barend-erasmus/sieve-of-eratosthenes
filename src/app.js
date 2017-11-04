const limit = 30;

const sieve = [];

// First generate a list from 2 to 30
for (let i = 0; i <= limit; i ++) {
    sieve[i] = true;
}

// Cross out every 2nd number in the list after 2 by counting up from 2 in increments of 2
for (let i = 4; i <= limit; i = i + 2) {
    sieve[i] = false;
}

// Cross out every 3rd number in the list after 3 by counting up from 3 in increments of 3
for (let i = 6; i <= limit; i = i + 3) {
    sieve[i] = false;
}

// Cross out every 5th number in the list after 5 by counting up from 5 in increments of 5
for (let i = 10; i <= limit; i = i + 5) {
    sieve[i] = false;
}

console.log(sieve.map((x, index) => {
    return x? index : -1;
}).filter((x) => x > 1));