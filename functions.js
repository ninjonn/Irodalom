/**
 * Létrehoz egy űrlapot a megadott mezőkkel 
 * @returns {HTMLFormElement} A létrehozott űrlap HTML eleme
 */
function generateForm(){ // Függvény definiálása, amely létrehoz egy űrlapot
    const form = document.createElement('form'); // Létrehozunk egy form elemet
    form.id = 'form'; // Beállítjuk az űrlap ID-ját form-ra
    form.action = '#'; // Beállítjuk az űrlap action attribútumát

    const fields = [ // Létrehozunk egy tömböt, amely az űrlap mezőit tartalmazza objektumokként
        {label: 'Költő neve:', type: 'text', id: 'kolto_nev'},
        {label: 'Korszak:', type: 'text', id: 'korszak'},
        {label: 'Szerelme:', type: 'text', id: 'szerelem1'},    
        {label: 'Volt másik szerelme?', type: 'checkbox', id: 'masodik', checked: false},
        {label: 'Szerelme:', type: 'text', id: 'szerelem2'}
    ]

    for(let i = 0;i<fields.length;i++){ // Végigiterálunk a fields tömb elemein
        const field = fields[i]; // Az aktuális mező objektumának lekérése
        const div = document.createElement('div'); // Létrehozunk egy div elemet, amelybe a mező elemeit fogjuk helyezni

        const label = document.createElement('label'); // Létrehozunk egy label elemet
        label.htmlFor = field.id; // Beállítjuk a label for attribútumát az aktuális mező id-jára
        label.innerText = field.label; // Beállítjuk a label szövegét az aktuális mező címkéjére
        div.appendChild(label); // Hozzáadjuk a label elemet a div-hez

        div.appendChild(document.createElement('br')); // Beszúrunk egy sortörést a div-be

        const input = document.createElement('input'); // Létrehozunk egy input elemet
        input.type = field.type // Beállítjuk az input típusát
        input.id = field.id; // Beállítjuk az input id-ját
        input.name = field.id; // Beállítjuk az input name attribútumát is ugyanarra, mint az id
        if(field.type === 'checkbox' && field.checked !== undefined){ // Ha az aktuális mező checkbox típusú és a checked tulajdonság meg van adva
            input.checked = field.checked; // Beállítjuk, hogy a checkbox alapértelmezett értéke be legyen-e jelölve
        }
        div.appendChild(input); // Hozzáadjuk az input elemet a div-hez

        const errorDiv = document.createElement('div') // Létrehozunk egy új div elemet a hibaüzenetek számára
        errorDiv.className = 'error-message'; // Beállítjuk az errorDiv osztályát, hogy a CSS-ben stílusolhassuk
        errorDiv.id = "error-" + field.id; // Az errorDiv id-jét az aktuális mező id-je alapján állítjuk be
        div.appendChild(errorDiv); // Hozzáadjuk a hibaüzenet div-et a mező div-jéhez

        div.appendChild(document.createElement('br')); // Beszúrunk egy sortörést a div-be
        div.appendChild(document.createElement('br')); // Beszúrunk egy sortörést a div-be

        form.appendChild(div); // Hozzáadjuk az összerakott div-et az űrlaphoz
    }
    
    const submit = document.createElement('button'); // Létrehozunk egy button elemet a submit gombhoz
    submit.type ='submit'; // Beállítjuk a button típusát submit-ra
    submit.innerText = 'Hozzáadás'; // Beállítjuk a button szövegét
    form.appendChild(submit); // Hozzáadjuk a submit gombot az űrlaphoz

    document.body.appendChild(form); // Hozzáadjuk az űrlapot a dokumentum body részéhez
    return form; // Visszatérünk a létrehozott űrlap elemmel
}

/**
 * Generálja a táblázat fejlécét a megadott adat alapján
 * @param {Object} headerData Objektum, amely a fejléc cellák tartalmát tartalmazza 
 */
function generateHeader(headerData){ // Definiálom a generateHeader függvényt
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

/**
 * Generálja a táblázat törzsét a megadott adatok alapján
 * @param {Array<Object>} data  A táblázat sorainak adatait tartalmazó tömb
 * @param {HTMLElement} table A táblázat HTML eleme, amelybe renderelünk
 */
function generateTable(data,table) { // Definiálom a generateTable függvényt
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

/**
 * Validál egy adott input mezőt, és megjeleníti a hibaüzenetet, ha üres
 * @param {HTMLInputElement} inputElement  Az ellenőrizendő input elem
 * @param {HTMLElement} errorElement  Az elem, ahol a hibaüzenet megjelenik
 * @returns {boolean} true 
 */
function validateField(inputElement, errorElement) { // Függvény, amely egy bemeneti mezőt és egy hibaüzenet elemet vár, hogy validálja a bemeneti mezőt
    let valid = true; // A valid változó alapértelmezett értéke igaz, amely azt jelzi, hogy a mező helyes

    if (inputElement.value === "") {  // Ha a bemeneti mező értéke üres
        errorElement.innerText = "Hiba: Ezt a mezőt kötelező kitölteni!"
        errorElement.style.display = "block"; // Megjelenítjük a hibaüzenetet
        valid = false; // Érvénytelen, mert a mező üres
    } else {
        errorElement.style.display = "none";
        }
    return valid; // Visszaadja, hogy a mező valid-e
}

/**
 * Komplex validációt végez két szerelem input mezőn, ha a checkbox be van jelölve
 * @param {HTMLInputElement} checkboxElement  A checkbox elem
 * @param {HTMLInputElement} szerelem1Element  Az első szerelem input elem 
 * @param {HTMLInputElement} szerelem2Element  A második szerelem input elem
 * @returns {boolean}
 */
function complextValidation(checkboxElement, szerelem1Element, szerelem2Element) {
    let valid = true; // A valid változó alapértelmezett értéke igaz, amely azt jelzi, hogy a mezők valid-ek

    // Ha a jelölőnégyzet be van jelölve, akkor mindkét szerelem mező kitöltése kötelező
    if (checkboxElement.checked) {
        const error1 = document.getElementById('error-szerelem1');
        const error2 = document.getElementById('error-szerelem2');
        if (szerelem1Element.value === "") { // Ellenőrizzük az első szerelem mezőt
            error1.innerText = "Hiba: Ezt a mezőt kötelező kitölteni!"; // Megjelenítjük a hibaüzenetet
            error1.style.display = "block"; // Megjelenítjük a hibaüzenetet
            valid = false; // Érvénytelen, mert az első szerelem mező üres
        } else {
            error1.style.display = "none"; // Elrejtjük a hibaüzenetet
        }
        
        if (szerelem2Element.value === "") { // Ellenőrizzük a második szerelem mezőt
            error2.innerText = "Hiba: Ezt a mezőt kötelező kitölteni!"; // Megjelenítjük a hibaüzenetet
            error2.style.display = "block"; // Megjelenítjük a hibaüzenetet
            valid = false; // Érvénytelen, mert a második szerelem mező üres
        } else {
            error2.style.display = "none"; // Elrejtjük a hibaüzenetet
        }
    } else {
        // Ha a jelölőnégyzet nincs bejelölve, elrejtjük a szerelem mezők esetleges hibaüzeneteit
        document.getElementById('error-szerelem1').style.display = "none";
        document.getElementById('error-szerelem2').style.display = "none";
    }
    return valid; // Visszaadjuk az eredményt
}