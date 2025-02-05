const headerField1 = 'Szerző neve'; // Az első oszlop fejlécének szövegét beletesszük egy változóba
const headerField2 = 'Korszak'; // A második oszlop fejlécének szövegét beletesszük egy változóba
const headerField3 = 'Szerelmek'; // A harmadik oszlop fejlécének szövegét beletesszük egy változóba

const Row1Field1 = 'Balassi Bálint'; // Az első sor első cellájának szövegét beletesszük egy változóba
const Row1Field2 = 'reformáció'; // Az első sor második cellájának szövegét beletesszük egy változóba
const Row1Field3 = 'Losonczy Anna'; // Az első sor harmadik cellájának szövegét beletesszük egy változóba
const Row1Field4 = 'Dobó Krisztina'; // Az első sor negyedik cellájának szövegét beletesszük egy változóba

const Row2Field1 = 'Csokonay Vitéz Mihály'; // A második sor első cellájának szövegét beletesszük egy változóba
const Row2Field2 = 'felvilágosodás'; // A második sor második cellájának szövegét beletesszük egy változóba
const Row2Field3 = 'Vajda Juliána'; // A második sor harmadik cellájának szövegét beletesszük egy változóba

const Row3Field1 = 'Petőfi Sándor'; // A harmadik sor első cellájának szövegét beletesszük egy változóba
const Row3Field2 = 'magyar romantika'; // A harmadik sor második cellájának szövegét beletesszük egy változóba
const Row3Field3 = 'Mednyánszky Berta'; // A harmadik sor harmadik cellájának szövegét beletesszük egy változóba
const Row3Field4 = 'Szendrey Júlia'; // A harmadik sor negyedeik cellájának szövegét beletesszük egy változóba

const Row4Field1 = 'Ady Endre'; // A negyedik sor első cellájának szövegét beletesszük egy változóba
const Row4Field2 = '20. század'; // A negyedik sor második cellájának szövegét beletesszük egy változóba
const Row4Field3 = 'Léda'; // A negyedik sor harmadik cellájának szövegét beletesszük egy változóba
const Row4Field4 = 'Csinszka'; // A negyedik sor negyedik cellájának szövegét beletesszük egy változóba

const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
const headerRow = document.createElement('tr'); // Táblázat fejlécsor létrehozása
table.appendChild(tableHeader); // A fejléc hozzáadása a táblázathoz
tableHeader.appendChild(headerRow); // A fejlécsoró hozzáadása a fejlécbe

const headerCell1 = document.createElement('th'); // Fejléc cella létrehozása
headerCell1.innerHTML = headerField1; // A cella tartalmát beállítjuk az első oszlop fejlécének szövegére a hozzá tartozó változó értékének segítségével
headerRow.appendChild(headerCell1); // A cella hozzáadása a fejlécsorhoz

const headerCell2 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell2.innerHTML = headerField2; // A cella tartalmát beállítjuk a második oszlop fejlécének szövegére a hozzá tartozó változó értékének segítségével
headerRow.appendChild(headerCell2); // A cella hozzáadása a fejlécsorhoz

const headerCell3 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell3.innerHTML = headerField3; // A cella tartalmát beállítjuk a harmadik oszlop fejlécének szövegére a hozzá tartozó változó értékének segítségével
headerCell3.colSpan = 2; // A cella két oszlopot foglal el
headerRow.appendChild(headerCell3); // A cella hozzáadása a fejlécsorhoz

const tableBody = document.createElement('tbody'); // Táblázat törzs elem létrehozása
table.appendChild(tableBody); // A törzs hozzáadása a táblázathoz

const row1 = document.createElement('tr'); // Táblázat első sorának létrehozása
tableBody.appendChild(row1); // Az első sor hozzáadása a törzshöz

const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorhoz
row1Cell1.innerHTML = Row1Field1; // A cella tartalmát beállítjuk az első sor első oszlopának szövegére a hozzá tartozó változó értékének segítségével
row1.appendChild(row1Cell1); // A cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella létrehozása az első sorhoz
row1Cell2.innerHTML = Row1Field2; // A cella tartalmát beállítjuk az első sor második oszlopának szövegére a hozzá tartozó változó értékének segítségével
row1.appendChild(row1Cell2); // A cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorhoz
row1Cell3.innerHTML = Row1Field3; // A cella tartalmát beállítjuk az első sor harmadik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row1.appendChild(row1Cell3); // A cella hozzáadása az első sorhoz

const row1Cell4 = document.createElement('td'); // Negyedeik cella létrehozása az első sorhoz
row1Cell4.innerHTML = Row1Field4; // A cella tartalmát beállítjuk az első sor negyedik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row1.appendChild(row1Cell4); // A cella hozzáadása az első sorhoz

const row2 = document.createElement('tr'); // Második sor létrehozása
tableBody.appendChild(row2); // A második sor hozzáadása a törzshöz

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorhoz
row2Cell1.innerHTML = Row2Field1; // A cella tartalmát beállítjuk a második sor első oszlopának szövegére a hozzá tartozó változó értékének segítségével
row2.appendChild(row2Cell1); // A cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorhoz
row2Cell2.innerHTML = Row2Field2; // A cella tartalmát beállítjuk a második sor második oszlopának szövegére a hozzá tartozó változó értékének segítségével
row2.appendChild(row2Cell2); // A cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorhoz
row2Cell3.innerHTML = Row2Field3; // A cella tartalmát beállítjuk a második sor harmadik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row2Cell3.colSpan = 2; // A cella két oszlopot foglal el
row2.appendChild(row2Cell3); // A cella hozzáadása a második sorhoz

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sor hozzáadása a törzshöz

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorhoz
row3Cell1.innerHTML = Row3Field1; // A cella tartalmát beállítjuk a harmadik sor első oszlopának szövegére a hozzá tartozó változó értékének segítségével
row3.appendChild(row3Cell1); // A cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorhoz
row3Cell2.innerHTML = Row3Field2; // A cella tartalmát beállítjuk a harmadik sor második oszlopának szövegére a hozzá tartozó változó értékének segítségévela
row3.appendChild(row3Cell2); // A cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorhoz
row3Cell3.innerHTML = Row3Field3; // A cella tartalmát beállítjuk a harmadik sor harmadik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row3.appendChild(row3Cell3); // A cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorhoz
row3Cell4.innerHTML = Row3Field4; // A cella tartalmát beállítjuk a harmadik sor negyedik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row3.appendChild(row3Cell4); // A cella hozzáadása a harmadik sorhoz

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sor hozzáadása a törzshöz

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorhoz
row4Cell1.innerHTML = Row4Field1; // A cella tartalmát beállítjuk a negyedik sor első oszlopának szövegére a hozzá tartozó változó értékének segítségével
row4.appendChild(row4Cell1); // A cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorhoz
row4Cell2.innerHTML = Row4Field2; // A cella tartalmát beállítjuk a negyedik sor második oszlopának szövegére a hozzá tartozó változó értékének segítségével
row4.appendChild(row4Cell2); // A cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorhoz
row4Cell3.innerHTML = Row4Field3; // A cella tartalmát beállítjuk a negyedik sor harmadik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row4.appendChild(row4Cell3); // A cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorhoz
row4Cell4.innerHTML = Row4Field4; // A cella tartalmát beállítjuk a negyedik sor negyedik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row4.appendChild(row4Cell4); // A cella hozzáadása a negyedik sorhoz