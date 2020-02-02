
fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => {
        return response.json();
    }).then((myJson) => {
        alterJSON(myJson);
    });

var modJSON = {};

function alterJSON(originalJson) {
    for (const [key] in originalJson) {
        var tempJSON = originalJson[key];
        if (originalJson[key].hasOwnProperty("alpha3Code")) {
            var element = originalJson[key].alpha3Code;
            modJSON[element] = tempJSON;
        }
    }
    console.log(modJSON);
}
