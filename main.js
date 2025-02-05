const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
const headerRow = document.createElement('tr'); // Táblázat fejlécsor létrehozása
table.appendChild(tableHeader); // A fejléc hozzáadása a táblázathoz
tableHeader.appendChild(headerRow); // A fejlécsoró hozzáadása a fejlécbe

const headerCell1 = document.createElement('th'); // Fejléc cella létrehozása
headerCell1.innerHTML = 'Szerző neve'; // A cella tartalmának beállítása
headerRow.appendChild(headerCell1); // A cella hozzáadása a fejlécsorhoz

const headerCell2 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell2.innerHTML = 'Korszak'; // A cella tartalmának beállítása
headerRow.appendChild(headerCell2); // A cella hozzáadása a fejlécsorhoz

const headerCell3 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell3.innerHTML = 'Szerelmek'; // A cella tartalmának beállítása
headerCell3.colSpan = 2; // A cella két oszlopot foglal el
headerRow.appendChild(headerCell3); // A cella hozzáadása a fejlécsorhoz

const tableBody = document.createElement('tbody'); // Táblázat törzs elem létrehozása
table.appendChild(tableBody); // A törzs hozzáadása a táblázathoz

const row1 = document.createElement('tr'); // Táblázat első sorának létrehozása
tableBody.appendChild(row1); // Az első sor hozzáadása a törzshöz

const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorhoz
row1Cell1.innerHTML = 'Balassi Bálint'; // A cella tartalmának beállítása
row1.appendChild(row1Cell1); // A cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella létrehozása az első sorhoz
row1Cell2.innerHTML = 'reformáció'; // A cella tartalmának beállítása
row1.appendChild(row1Cell2); // A cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorhoz
row1Cell3.innerHTML = 'Losonczy Anna'; // A cella tartalmának beállítása
row1.appendChild(row1Cell3); // A cella hozzáadása az első sorhoz

const row1Cell4 = document.createElement('td'); // Negyedeik cella létrehozása az első sorhoz
row1Cell4.innerHTML = 'Dobó Krisztina'; // A cella tartalmának beállítása
row1.appendChild(row1Cell4); // A cella hozzáadása az első sorhoz

const row2 = document.createElement('tr'); // Második sor létrehozása
tableBody.appendChild(row2); // A második sor hozzáadása a törzshöz

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorhoz
row2Cell1.innerHTML = 'Csokonai Vitéz Mihály'; // A cella tartalmának beállítása
row2.appendChild(row2Cell1); // A cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorhoz
row2Cell2.innerHTML = 'felvilágosodás'; // A cella tartalmának beállítása
row2.appendChild(row2Cell2); // A cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorhoz
row2Cell3.innerHTML = 'Vajda Juliána'; // A cella tartalmának beállítása
row2Cell3.colSpan = 2; // A cella két oszlopot foglal el
row2.appendChild(row2Cell3); // A cella hozzáadása a második sorhoz

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sor hozzáadása a törzshöz

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorhoz
row3Cell1.innerHTML = 'Petőfi Sándor'; // A cella tartalmának beállítása
row3.appendChild(row3Cell1); // A cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorhoz
row3Cell2.innerHTML = 'magyar romantika'; // A cella tartalmának beállítása
row3.appendChild(row3Cell2); // A cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorhoz
row3Cell3.innerHTML = 'Mednyánszky Berta'; // A cella tartalmának beállítása
row3.appendChild(row3Cell3); // A cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorhoz
row3Cell4.innerHTML = 'Szendrey Júlia'; // A cella tartalmának beállítása
row3.appendChild(row3Cell4); // A cella hozzáadása a harmadik sorhoz

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sor hozzáadása a törzshöz

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorhoz
row4Cell1.innerHTML = 'Ady Endre'; // A cella tartalmának beállítása
row4.appendChild(row4Cell1); // A cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorhoz
row4Cell2.innerHTML = '20. század'; // A cella tartalmának beállítása
row4.appendChild(row4Cell2); // A cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorhoz
row4Cell3.innerHTML = '	Léda'; // A cella tartalmának beállítása
row4.appendChild(row4Cell3); // A cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorhoz
row4Cell4.innerHTML = 'Csinszka'; // A cella tartalmának beállítása
row4.appendChild(row4Cell4); // A cella hozzáadása a negyedik sorhoz