const cowsay = require("cowsay")

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

console.log(cowsay.think({
    text : "I don't like this mooodule",
    e: "- :",
    T : "L"
}))

function get_cows(error, cow_names) {
    if (error) {
        console.log(error)
    }
    else if (cow_names) {
        console.log(`Number of cows available: ${cow_names.length}`);
    }
}

cowsay.list(get_cows);
