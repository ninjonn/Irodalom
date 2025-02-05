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
const headerRow = document.createElement('tr'); // Táblázat fejlécsor létrehozása
table.appendChild(tableHeader); // A fejléc hozzáadása a táblázathoz
tableHeader.appendChild(headerRow); // A fejlécsoró hozzáadása a fejlécbe

const headerCell1 = document.createElement('th'); // Fejléc cella létrehozása
headerCell1.innerHTML = array[0].field1; // Az első fejléc cella szövegének beállítása az első objektum 'field1' értékére
headerRow.appendChild(headerCell1); // A cella hozzáadása a fejlécsorhoz

const headerCell2 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell2.innerHTML = array[0].field2; // A második fejléc cella szövegének beállítása az első objektum 'field2' értékére
headerRow.appendChild(headerCell2); // A cella hozzáadása a fejlécsorhoz

const headerCell3 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell3.innerHTML = array[0].field3; // A harmadik fejléc cella szövegének beállítása az első objektum 'field3' értékére
headerCell3.colSpan = 2; // A cella két oszlopot foglal el
headerRow.appendChild(headerCell3); // A cella hozzáadása a fejlécsorhoz

const tableBody = document.createElement('tbody'); // Táblázat törzs elem létrehozása
table.appendChild(tableBody); // A törzs hozzáadása a táblázathoz

const row1 = document.createElement('tr'); // Táblázat első sorának létrehozása
tableBody.appendChild(row1); // Az első sor hozzáadása a törzshöz

for(let i = 1; i < array.length; i++) { // Végigiterál az `array` elemein az első elem kihagyásával
    const currentElement = array[i]; // Az aktuális sor objektumát elmenti a `currentElement` változóba

    const row = document.createElement('tr'); // Létrehoz egy új táblázatsort
    tableBody.appendChild(row); // Hozzáadja az új sort a táblázat törzséhez

    const rowField1 = document.createElement('td'); // Létrehoz egy új cellát az aktuális sor "field1" adatának tárolására
    rowField1.innerHTML = currentElement.field1; // Beállítja a cella tartalmát az aktuális objektum "field1" mezőjére
    row.appendChild(rowField1); // Hozzáadja a cellát az aktuális táblázatsorhoz

    const rowField2 = document.createElement('td'); // Létrehoz egy új cellát az aktuális sor "field2" adatának tárolására
    rowField2.innerHTML = currentElement.field2; // Beállítja a cella tartalmát az aktuális objektum "field2" mezőjére
    row.appendChild(rowField2); // Hozzáadja a cellát az aktuális táblázatsorhoz

    const rowField3 = document.createElement('td'); // Létrehoz egy új cellát az aktuális sor "field3" adatának tárolására
    rowField3.innerHTML = currentElement.field3; // Beállítja a cella tartalmát az aktuális objektum "field3" mezőjére
    row.appendChild(rowField3); // Hozzáadja a cellát az aktuális táblázatsorhoz

    const rowField4 = document.createElement('td'); // Létrehoz egy új cellát az aktuális sor "field4" adatának tárolására
    rowField4.innerHTML = currentElement.field4; // Beállítja a cella tartalmát az aktuális objektum "field4" mezőjére
    row.appendChild(rowField4); // Hozzáadja a cellát az aktuális táblázatsorhoz
}