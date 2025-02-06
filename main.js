

const formElement = generateForm(); // Meghívjuk a generateForm függvényt és az eredményt elmentjük a formElement változóba


const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása


table.appendChild(tableHeader); // A fejléc hozzáadása a táblázathoz



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

generateHeader(array[0],tableHeader); // A generált fejlécnek generálásának meghívása
generateTable(array,table); // A generált táblázat generálásának meghívása


const szerzoNeveError = document.getElementById('error-kolto_nev'); // HTML elem lekérése, amely a szerző nevéhez tartozó hibaüzenetet jeleníti meg
const korszakError = document.getElementById('error-korszak'); // HTML elem lekérése, amely a korszakhoz tartozó hibaüzenetet jeleníti meg


formElement.addEventListener('submit', function (e) { // Az űrlap submit eseményére feliratkozunk egy eseménykezelővel
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
    generateTable(array,table); // Meghívja a függvényt, amely újra létrehozza a táblázat törzsét a módosított array alapján

    // Az űrlap input mezőinek és a checkbox visszaállítása alapértelmezett értékre:
    szerzoNeve.value = "";
    korszak.value = "";
    szerelem1.value = "";
    szerelem2.value = "";
    checkbox.checked = false;
})
