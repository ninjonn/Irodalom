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

const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorhoz
row1Cell1.innerHTML = array[1].field1; // Az első cella szövegének beállítása az első sor 'field1' értékére
row1.appendChild(row1Cell1); // A cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella létrehozása az első sorhoz
row1Cell2.innerHTML = array[1].field2; // A második cella szövegének beállítása az első sor 'field2' értékére
row1.appendChild(row1Cell2); // A cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorhoz
row1Cell3.innerHTML = array[1].field3; // A harmadik cella szövegének beállítása az első sor 'field3' értékére
row1.appendChild(row1Cell3); // A cella hozzáadása az első sorhoz

const row1Cell4 = document.createElement('td'); // Negyedeik cella létrehozása az első sorhoz
row1Cell4.innerHTML = array[1].field4; // A negyedik cella szövegének beállítása az első sor 'field4' értékére
row1.appendChild(row1Cell4); // A cella hozzáadása az első sorhoz

const row2 = document.createElement('tr'); // Második sor létrehozása
tableBody.appendChild(row2); // A második sor hozzáadása a törzshöz

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorhoz
row2Cell1.innerHTML = array[2].field1; // Az első cella szövegének beállítása a második sor 'field1' értékére
row2.appendChild(row2Cell1); // A cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorhoz
row2Cell2.innerHTML = array[2].field2; // A második cella szövegének beállítása a második sor 'field2' értékére
row2.appendChild(row2Cell2); // A cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorhoz
row2Cell3.innerHTML = array[2].field3; // A harmadik cella szövegének beállítása a második sor 'field3' értékére
row2Cell3.colSpan = 2; // A cella két oszlopot foglal el
row2.appendChild(row2Cell3); // A cella hozzáadása a második sorhoz

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sor hozzáadása a törzshöz

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorhoz
row3Cell1.innerHTML = array[3].field1; // Az első cella szövegének beállítása a harmadik sor 'field1' értékére
row3.appendChild(row3Cell1); // A cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorhoz
row3Cell2.innerHTML = array[3].field2; // A második cella szövegének beállítása a harmadik sor 'field2' értékére
row3.appendChild(row3Cell2); // A cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorhoz
row3Cell3.innerHTML = array[3].field3; // A harmadik cella szövegének beállítása a harmadik sor 'field3' értékére
row3.appendChild(row3Cell3); // A cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorhoz
row3Cell4.innerHTML = array[3].field4; // A negyedik cella szövegének beállítása a harmadik sor 'field4' értékére
row3.appendChild(row3Cell4); // A cella hozzáadása a harmadik sorhoz

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sor hozzáadása a törzshöz

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorhoz
row4Cell1.innerHTML = array[4].field1; // Az első cella szövegének beállítása a negyedik sor 'field1' értékére
row4.appendChild(row4Cell1); // A cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorhoz
row4Cell2.innerHTML = array[3].field2; // A második cella szövegének beállítása a negyedik sor 'field2' értékére
row4.appendChild(row4Cell2); // A cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorhoz
row4Cell3.innerHTML = array[3].field3; // A harmadik cella szövegének beállítása a negyedik sor 'field3' értékére
row4.appendChild(row4Cell3); // A cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorhoz
row4Cell4.innerHTML = array[3].field4; // A negyedik cella szövegének beállítása a negyedik sor 'field4' értékére
row4.appendChild(row4Cell4); // A cella hozzáadása a negyedik sorhoz