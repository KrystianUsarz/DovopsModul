const express = require('express');
const cowsay = require('cowsay');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const cowSayText = cowsay.say({
        text: "I'm a moooodule",
        e: "oO",
        T: "U "
    });

    const cowThinkText = cowsay.think({
        text: "I don't like this mooodule",
        e: "- :",
        T: "L"
    });

    function get_cows(error, cow_names) {
        if (error) {
            console.log(error);
        } else if (cow_names) {
            console.log(`Number of cows available: ${cow_names.length}`);
        }
    }

    cowsay.list(get_cows);

    res.send(`
        <pre>${cowSayText}</pre>
        <pre>${cowThinkText}</pre>
    `);
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});