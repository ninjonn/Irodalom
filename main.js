const array = [{ // Az első objektum a táblázat fejlécének adatait tartalmazza
    field1: 'Szerző neve', // Az első fejléc cella szövegét állítja be
    field2: 'Korszak', // A második fejléc cella szövegét állítja be
    field3: 'Szerelmek' // A harmadik fejléc cella szövegét állítja
},
{ // Az első sor objektuma
    field1: 'Balassi Bálint', // Az első cella szövegét állítja be az első sorban
    field2: 'reformáció', // A második cella szövegét állítja be az első sorban
    field3: 'Losonczy Anna', // A harmadik cella szövegét állítja be az első sorban
    field4: 'Dobó Krisztina' // A negyedik cella szövegét állítja be az első sorban
},
{ // A második sor objektuma
    field1: 'Csokonay Vitéz Mihály', // Az első cella szövegét állítja be a második sorban
    field2: 'felvilágosodás', // A második cella szövegét állítja be a második sorban
    field3: 'Vajda Juliána', // A harmadik cella szövegét állítja be a második sorban
},
{ // A harmadik sor objektuma
    field1: 'Petőfi Sándor', // Az első cella szövegét állítja be a harmadik sorban
    field2: 'magyar romantika', // A második cella szövegét állítja be a harmadik sorban
    field3: 'Mednyánszky Berta', // A harmadik cella szövegét állítja be a harmadik sorban
    field4: 'Szendrey Júlia' // A negyedik cella szövegét állítja be a harmadik sorban
},
{ // A negyedik sor objektuma
    field1: 'Ady Endre', // Az első cella szövegét állítja be a negyedik sorban
    field2: '20. század', // A második cella szövegét állítja be a negyedik sorban
    field3: 'Léda', // A harmadik cella szövegét állítja be a negyedik sorban
    field4: 'Csinszka' // A negyedik cella szövegét állítja be a negyedik sorban
}];

const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása


function generateHeader(headerData){ // Definiálom a generateHeader függvényt
    tableHeader.innerHTML = ""; // Törlöm az előző fejlécet

    const headerRow = document.createElement('tr'); // Táblázat fejlécsor létrehozása
    
    for(const i in headerData){
        const headerCell = document.createElement('th'); // Létrehoz egy új fejléc cellát
        headerCell.innerHTML = headerData[i]; // Beállítja a cella tartalmát az aktuális elem nevére
        if(i === 'field3'){
            headerCell.colSpan = 2; // A cella két oszlopot foglal el
        }
        headerRow.appendChild(headerCell); // A cella hozzáadása a fejlécsorhoz
    }
    tableHeader.appendChild(headerRow); // A fejlécsor hozzáadása a fejlécbe
}
table.appendChild(tableHeader); // A fejléc hozzáadása a táblázathoz

function generateTable(data) { // Definiálom a generateTable függvényt
    table.innerHTML = ''; // Törlöm az előző táblázatot
    table.appendChild(tableHeader); // Újra hozzáadom a fejlécet

    const tableBody = document.createElement('tbody'); // Táblázat törzs elem létrehozása
    table.appendChild(tableBody); // A törzs hozzáadása a táblázathoz

    for(let i = 1 ; i < data.length; i++) {
        const currentElement = data[i]; // Az aktuális sor objektumát elmenti a `currentElement` változóba

        const row = document.createElement('tr'); // Létrehoz egy új táblázatsort
        tableBody.appendChild(row); // Hozzáadja az új sort a táblázat törzséhez

        const rowField1 = document.createElement('td'); // Létrehoz egy új cellát az aktuális sor "field1" adatának tárolására
        rowField1.innerHTML = currentElement.field1; // Beállítja a cella tartalmát az aktuális objektum "field1" mezőjére
        row.appendChild(rowField1); // Hozzáadja a cellát az aktuális táblázatsorhoz

        const rowField2 = document.createElement('td'); // Létrehoz egy új cellát az aktuális sor "field2" adatának tárolására
        rowField2.innerHTML = currentElement.field2; // Beállítja a cella tartalmát az aktuális objektum "field2" mezőjére
        row.appendChild(rowField2); // Hozzáadja a cellát az aktuális táblázatsorhoz

        const rowField3 = document.createElement('td'); // Létrehoz egy új cellát az aktuális sor "field3" adatának tárolására


        if (!currentElement.field4) { // Ellenőrzi, hogy az aktuális objektumban van-e "field4"
            rowField3.innerHTML = (currentElement.field3 === "") ? "-" : currentElement.field3; // Ha az első szerelem mező üres, akkor "-" lesz a megjelenített érték, egyébként az első szerelem értéke
            rowField3.colSpan = 2; // Ha nincs "field4" mező, akkor két oszlopot foglal el
            row.appendChild(rowField3); // Hozzáadja a cellát az aktuális táblázatsorhoz
        } else { // Ha van "field4", külön cellát készítünk hozzá
            rowField3.innerHTML = (currentElement.field3 === "") ? "-" : currentElement.field3; // Ha az első szerelem mező üres, akkor "-" lesz a megjelenített érték, egyébként az első szerelem értéke
            row.appendChild(rowField3);

            const rowField4 = document.createElement('td'); // Létrehoz egy új cellát az aktuális sor "field4" adatának tárolására
            rowField4.innerHTML = (currentElement.field4 === "") ? "-" : currentElement.field4; // Ha a második szerelem mező üres, akkor "-" lesz a megjelenített érték, egyébként a második szerelem értéke
            row.appendChild(rowField4); // Hozzáadja a cellát az aktuális táblázatsorhoz
        }
    }
}
generateHeader(array[0]); // A generált fejlécnek generálásának meghívása
generateTable(array); // A generált táblázat generálásának meghívása

const form = document.getElementById('form'); // Megkeresi az `form` azonosítójú HTML elemet

const szerzoNeveError = document.getElementById('error-kolto-nev'); // HTML elem lekérése, amely a szerző nevéhez tartozó hibaüzenetet jeleníti meg
const korszakError = document.getElementById('error-korszak'); // HTML elem lekérése, amely a korszakhoz tartozó hibaüzenetet jeleníti meg

function validateField(inputElement, errorElement) { // Függvény, amely egy bemeneti mezőt és egy hibaüzenet elemet vár, hogy validálja a bemeneti mezőt
    let valid = true; // A valid változó alapértelmezett értéke igaz, amely azt jelzi, hogy a mező helyes

    if (inputElement.value === "") {  // Ha a bemeneti mező értéke üres
        errorElement.style.display = "block"; // A hibaüzenet megjelenítése láthatóvá válik
        valid = false; // Az érték nem valid, így false-ra állítjuk
    } else {
        errorElement.style.display = "none"; // Ha a mezőben van érték, elrejtjük a hibaüzenetet
    }
    return valid; // Visszaadja, hogy a mező valid-e
}

function complextValidation(checkboxElement, szerelem1Element, szerelem2Element) {
    let valid = true; // A valid változó alapértelmezett értéke igaz, amely azt jelzi, hogy a mezők valid-ek

    // Ha a jelölőnégyzet be van jelölve, akkor mindkét szerelem mező kitöltése kötelező
    if (checkboxElement.checked) {
        if (szerelem1Element.value === "") { // Ellenőrizzük az első szerelem mezőt
            const error1 = document.getElementById('error-szerelem1');
            error1.style.display = "block"; // Megjelenítjük a hibaüzenetet
            valid = false; // Érvénytelen, mert az első szerelem mező üres
        } else {
            document.getElementById('error-szerelem1').style.display = "none"; // Elrejtjük a hibaüzenetet
        }
        
        if (szerelem2Element.value === "") { // Ellenőrizzük a második szerelem mezőt
            const error2 = document.getElementById('error-szerelem2');
            error2.style.display = "block"; // Megjelenítjük a hibaüzenetet
            valid = false; // Érvénytelen, mert a második szerelem mező üres
        } else {
            document.getElementById('error-szerelem2').style.display = "none"; // Elrejtjük a hibaüzenetet
        }
    } else {
        // Ha a jelölőnégyzet nincs bejelölve, elrejtjük a szerelem mezők esetleges hibaüzeneteit
        document.getElementById('error-szerelem1').style.display = "none";
        document.getElementById('error-szerelem2').style.display = "none";
    }
    return valid; // Visszaadjuk az eredményt
}

form.addEventListener('submit', function (e) { // Az űrlap submit eseményére feliratkozunk egy eseménykezelővel
    e.preventDefault(); // A form submit eseménye elkerülésének megelőzése

    // Lekéri a HTML-ben lévő elemeket az azonosítóik alapján:
    const szerzoNeve = document.getElementById('kolto_nev')
    const korszak = document.getElementById('korszak')
    const szerelem1 = document.getElementById('szerelem1')
    const szerelem2 = document.getElementById('szerelem2')
    const checkbox = document.getElementById('masodik')

    let valid = true // Létrehozunk egy `valid` változót, amely azt jelzi, hogy az űrlap megfelelően van-e kitöltve

    if (!validateField(szerzoNeve, szerzoNeveError)) {
        valid = false; // Ha hiba van a szerző neve mezőben, akkor az űrlapot érvénytelennek jelöljük
    }

    if (!validateField(korszak, korszakError)) {
        valid = false; // Ha hiba van a korszak mezőben, akkor az űrlapot érvénytelennek jelöljük
    }

    if(!complextValidation(checkbox,szerelem1,szerelem2)){
        valid = false; // Ha hiba van a második szerelem mezőkben, akkor az űrlapot érvénytelennek jelöljük
    }

    if (!valid) {
        return; // Ha a form nem valid, nem kell tovább folyamatosan továbbítani
    }

    // Az input elemek aktuális értékeinek kiolvasása:
    const szerzoNeveValue = szerzoNeve.value
    const korszakValue = korszak.value
    const szerelem1Value = szerelem1.value
    const szerelem2Value = szerelem2.value
    const checkboxChecked = checkbox.checked

    // Inicializáljuk a változókat, amelyek a táblázatban megjelenítendő szerelem értékeket fogják tartalmazni:
    let field3 = "";
    let field4 = undefined;

    // Ha nincs bejelölve a checkbox, csak az első szerelem kerül a táblázatba, különben mindkét szerelem értékét hozzáadjuk
    if (!checkboxChecked) {
        field3 = (szerelem1Value === "") ? "-" : szerelem1Value; // Ha az első szerelem mező üres, akkor "-" lesz a megjelenített érték, egyébként az első szerelem értéke
        // field4 marad undefined, így a generateTable() függvény összevonja a cellákat
    } else {  // Ha be van jelölve, akkor mindkét szerelem értékét beállítjuk:
        field3 = (szerelem1Value === "") ? "-" : szerelem1Value;
        field4 = (szerelem2Value === "") ? "-" : szerelem2Value;
    }

    const newElement = { // Létrehozunk egy új objektumot, amely tartalmazza az új táblázatsor adatait
        field1: szerzoNeveValue,
        field2: korszakValue,
        field3: field3,
        field4: field4
    }

    array.push(newElement); // Az új objektum hozzáadása a táblázat adatait tartalmazó tömbhöz
    table.innerHTML = ''; // Törli a táblázat tartalmát
    table.appendChild(tableHeader);  // Újra hozzáadja a fejlécet a táblázathoz
    generateTable(array); // Meghívja a függvényt, amely újra létrehozza a táblázat törzsét a módosított array alapján

    // Az űrlap input mezőinek és a checkbox visszaállítása alapértelmezett értékre:
    szerzoNeve.value = "";
    korszak.value = "";
    szerelem1.value = "";
    szerelem2.value = "";
    checkbox.checked = false;
})
