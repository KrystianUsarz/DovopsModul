const fs = require('fs'); // importieren von fs ermöglicht Zugriff auf Dateisysthem um Dateien zu lesen und bearbeiten

const data = fs.readFileSync('data.json', 'utf8');

const persons = JSON.parse(data);

const calculateAverageAgeByInitial = (persons) => {
    const initials = {};

    persons.forEach(person => {
        const initial = person.name.charAt(0).toUpperCase(); //Auswählen des Anfangsbuchstaben, to upper case, damit es egal ist wie es eingegeben ist.

        if (!initials[initial]) { // beim ersten mal neuer eintrag, sonst total age addieren
            initials[initial] = { totalAge: 0, count: 0 }; 
        }
        initials[initial].totalAge += person.age;
        initials[initial].count += 1;
    });

    const result = [];
    for (const initial in initials) { // ausrechnen des durchschnittsalter (alle alter für einen Anfangbuchstaben geteilt durch anzahl einträge)
        const averageAge = (initials[initial].totalAge / initials[initial].count).toFixed(1);
        result.push(`${initial}: ${averageAge} Jahre`); // den Anfangsbuchstaben mit durchschnittsalter ins array speichern
    }

    return result;
};

console.log(calculateAverageAgeByInitial(persons));