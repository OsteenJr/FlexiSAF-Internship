const clubs = ["Arsenal", "Barcelona", "Chelsea", "Liverpool", "PSG", "Real Madrid", "Wolves"];

//Array.from
function arrayFromDemo() {
    const result = Array.from("Dortmund");
    document.getElementById('arrayFromOutput').innerText = JSON.stringify(result);
}

//Array.find
function arrayFindDemo() {
    const found = clubs.find(club => club.length > 5);
    document.getElementById('arrayFindOutput').innerText = found || "None found";
}

//Array.findIndex
function arrayFindIndexDemo() {
    const index = clubs.findIndex(club => club === "Chelsea");
    document.getElementById('arrayFindIndexOutput').innerText = index !== -1 ? index : "Not found"
}

//Array.entries
function arrayEntriesDemo() {
    const entries = clubs.entries();
    let output = "";
    for (let [index, value] of entries) {
        output += `[${index}, "${value}"]`;
    }
    document.getElementById('arrayEntriesOutput').innerText = output || "Empty";
}

//Array.keys
function arrayKeyDemo() {
    const keys = clubs.keys();
    let output = "";
    for (let key of keys) {
        output += `${key}`;
    }
    document.getElementById('arrayKeyOutput').innerText = output || "Empty";
}

//Array.map
function arrayMapDemo() {
    const upper = clubs.map(club => club.toUpperCase());
    document.getElementById('arrayMapOutput').innerText = JSON.stringify(upper);
}

//Array.filter
function arrayFilterDemo() {
    const aClubs = clubs.filter(club => club.startsWith("A"));
    document.getElementById('arrayFilterOutput').innerText = JSON.stringify(aClubs);
}

//Array.reduce
function arrayReduceDemo() {
    const totalLength = clubs.reduce((sum, club) => sum + clubs.length, 0);
    document.getElementById('arrayReduceOutput').innerText = `Total: ${totalLength}`;
}

//Array.forEach
function arrayForEachDemo() {
    let output = "";
    clubs.forEach(club => output += `${club}`);
    document.getElementById('arrayForEachOutput').innerText = output;
}

//Array.some
function arraySomeDemo() {
    const hasC = clubs.some(club => club.startsWith("C"));
    document.getElementById('arraySomeOutput').innerText = hasC ? "Yes" : "No";
}