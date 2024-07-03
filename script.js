// Data arrays
const races = [
    "Averlander", "Hochlander", "Middenlander", "Nordlander", "Talabechlander",
    "Ostermarker", "Ostlander", "Reiklander", "Stirlander", "Wissenlander",
    "Sylvanian", "Strigany", "Brettonnian Noble", "L'Anguille", "Aquitaine",
    "Artois", "Bastonne", "Bordeleaux", "Brionne", "Carcassinne",
    "Couronne", "Gisoreux", "Lyonesse", "Montfort", "Moussilon",
    "Pavarron", "Quenelles", "Gospodar", "Ungol", "Tilean",
    "Estellian", "Border Princes", "Norsca", "Wastelander", "Araby",
    "Albion", "Cathay", "Ind", "Nippon", "Sartosa",
    "Halfling Moot", "Halfling Empire", "Gnome (Empire Only)", "Ogre", "Dwarf",
    "Empire Dwarf", "Norscan Dwarf", "High Elf", "Wood Elf", "Human"
];

const careers = [
    "Advisor", "Agitator", "Apothecary", "Archer", "Artillerist",
    "Artist", "Badger Rider", "Bailiff", "Bawd", "Beadle",
    "Beggar", "Boatman", "Bounty Hunter", "Camp Follower", "Cartograph",
    "Cavalryman", "Charlatan", "Coachman", "Duellist", "Engineer",
    "Entertainer", "Envoy", "Fence", "Fieldwarden", "Flaggelant",
    "Ghost Strider", "Graverobber", "Greatsword", "Guard", "Halberdier",
    "Handgunner", "Hedge Witch", "Herbalist", "Huffer", "Hunter",
    "Investigator", "Karak Ranger", "Knight", "Lawyer", "Light Cavalry",
    "Master Vigilant", "Merchant", "Messenger", "Miner", "Mundane Alchemist",
    "Mystic", "Noble", "Nun", "Outlaw", "Pedlar",
    "Physician", "Pikeman", "Pit Fighter", "Priest", "Protagonist",
    "Racketeer", "Rat Catcher", "Riverwarden", "Riverwoman", "Road Warden",
    "Scholar", "Scout", "Scryer", "Seaman", "Servant",
    "Siege Specialist", "Slayer", "Smuggler", "Soldier", "Spy",
    "Stevedore", "Thief", "Townsman", "Villager", "Warden",
    "Warrior Priest", "Watchman", "Witch", "Witch Hunter", "Wizard",
    "Wrecker", "DING DING - 100xp bonus og genrul"
];

// Function to get random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to roll 2d10
function roll2d10() {
    return Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 10) + 1;
}

// Generate characteristics with race adjustments
function generateCharacteristics(race) {
    const baseCharacteristics = {
        WS: roll2d10() + 20,
        BS: roll2d10() + 20,
        S: roll2d10() + 20,
        T: roll2d10() + 20,
        I: roll2d10() + 20,
        Ag: roll2d10() + 20,
        Dex: roll2d10() + 20,
        Int: roll2d10() + 20,
        WP: roll2d10() + 20,
        Fel: roll2d10() + 20
    };

    switch (race) {
        case "Dwarf":
            baseCharacteristics.T += 10;
            baseCharacteristics.WP += 10;
            baseCharacteristics.Dex -= 10;
            baseCharacteristics.Ag -= 10;
            break;
        case "High Elf":
        case "Wood Elf":
            baseCharacteristics.Dex += 10;
            baseCharacteristics.Int += 10;
            baseCharacteristics.T -= 10;
            baseCharacteristics.Fel -= 10;
            break;
        case "Halfling":
            baseCharacteristics.BS += 10;
            baseCharacteristics.Ag += 10;
            baseCharacteristics.S -= 10;
            baseCharacteristics.WP -= 10;
            break;
        // Add other race adjustments as needed
        default:
            break;
    }

    return baseCharacteristics;
}

// Generate a random character
function generateCharacter() {
    const race = getRandomElement(races);
    const career = getRandomElement(careers);
    const characteristics = generateCharacteristics(race);
    
    return {
        race,
        career,
        characteristics
    };
}

// Display the character details
function displayCharacter(character) {
    const characterDetails = document.getElementById('characterDetails');
    characterDetails.innerHTML = `
        <p><strong>Race:</strong> ${character.race}</p>
        <p><strong>Career:</strong> ${character.career}</p>
        <p><strong>Characteristics:</strong></p>
        <ul>
            <li>WS: ${character.characteristics.WS}</li>
            <li>BS: ${character.characteristics.BS}</li>
            <li>S: ${character.characteristics.S}</li>
            <li>T: ${character.characteristics.T}</li>
            <li>I: ${character.characteristics.I}</li>
            <li>Ag: ${character.characteristics.Ag}</li>
            <li>Dex: ${character.characteristics.Dex}</li>
            <li>Int: ${character.characteristics.Int}</li>
            <li>WP: ${character.characteristics.WP}</li>
            <li>Fel: ${character.characteristics.Fel}</li>
        </ul>
        <button id="nextStep">Next</button>
    `;

    document.getElementById('nextStep').addEventListener('click', generateNextStep);
}

// Function for the next step (add more steps as needed)
function generateNextStep() {
    const characterDetails = document.getElementById('characterDetails');
    characterDetails.innerHTML += `
        <p>Next steps will be added here...</p>
        <button onclick="reRoll()">Re-roll</button>
    `;
}

// Re-roll the character
function reRoll() {
    const character = generateCharacter();
    displayCharacter(character);
}

// Event listener for the generate character button
document.getElementById('generateCharacter').addEventListener('click', reRoll);
