const fs = require('fs'); // importieren von fs ermöglicht Zugriff auf Dateisysthem um Dateien zu lesen und bearbeiten

// Lese das JSON-File ein
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Fehler beim Lesen der Datei:', err);
        return;
    }

    // Parsen des JSON-Inhalts
    const persons = JSON.parse(data);

    // Funktion zur Berechnung des Durchschnittsalters pro Anfangsbuchstaben
    const averageAgeByInitial = (persons) => {
        const initials = {};

        persons.forEach(person => {
            const initial = person.name.charAt(0).toUpperCase();
            if (!initials[initial]) {
                initials[initial] = { totalAge: 0, count: 0 };
            }
            initials[initial].totalAge += person.age;
            initials[initial].count += 1;
        });

        const result = [];
        for (const initial in initials) {
            const averageAge = (initials[initial].totalAge / initials[initial].count).toFixed(1);
            result.push(`${initial}: ${averageAge} Jahre`);
        }

        return result;
    };

    // Ausgabe des Ergebnisses
    console.log(averageAgeByInitial(persons));
});