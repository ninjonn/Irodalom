const headerObj = { // A header objektum, amely a táblázat oszlopait reprezentálja
    field1:'Szerző neve', // headerobj field1 tulajdonságának megadjuk az értéket
    field2:'Korszak', // headerobj field3 tulajdonságának megadjuk az értéket
    field3:'Szerelmek' // headerobj field2 tulajdonságának megadjuk az értéket
};
const row1Obj = { // Az első sor objektuma
    field1:'Balassi Bálint', // row1Obj field1 tulajdonságának megadjuk az értéket
    field2:'reformáció', // row1Obj field2 tulajdonságának megadjuk az értéket
    field3:'Losonczy Anna', // row1Obj field3 tulajdonságának megadjuk az értéket
    field4:'Dobó Krisztina' // row1Obj field4 tulajdonságának megadjuk az értéket
};
const row2Obj = { // A második sor objektuma
    field1:'Csokonay Vitéz Mihály', // row2Obj field1 tulajdonságának megadjuk az értéket
    field2:'felvilágosodás', // row2Obj field2 tulajdonságának megadjuk az értéket
    field3:'Vajda Juliána', // row2Obj field3 tulajdonságának megadjuk az értéket
};
const row3Obj = { // A harmadik sor objektuma
    field1:'Petőfi Sándor', // row3Obj field1 tulajdonságának megadjuk az értéket
    field2:'magyar romantika', // row3Obj field2 tulajdonságának megadjuk az értéket
    field3:'Mednyánszky Berta', // row3Obj field3 tulajdonságának megadjuk az értéket
    field4:'Szendrey Júlia' // row3Obj field4 tulajdonságának megadjuk az értéket
};
const row4Obj = { // A negyedik sor objektuma
    field1:'Ady Endre', // row4Obj field1 tulajdonságának megadjuk az értéket
    field2:'20. század', // row4Obj field2 tulajdonságának megadjuk az értéket
    field3:'Léda', // row4Obj field3 tulajdonságának megadjuk az értéket
    field4:'Csinszka' // row4Obj field4 tulajdonságának megadjuk az értéket
};

const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
const headerRow = document.createElement('tr'); // Táblázat fejlécsor létrehozása
table.appendChild(tableHeader); // A fejléc hozzáadása a táblázathoz
tableHeader.appendChild(headerRow); // A fejlécsoró hozzáadása a fejlécbe

const headerCell1 = document.createElement('th'); // Fejléc cella létrehozása
headerCell1.innerHTML = headerObj.field1; // A cella tartalmát beállítjuk a headerObj.field1 értékével
headerRow.appendChild(headerCell1); // A cella hozzáadása a fejlécsorhoz

const headerCell2 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell2.innerHTML = headerObj.field2; // A cella tartalmát beállítjuk a headerObj.field2 értékével
headerRow.appendChild(headerCell2); // A cella hozzáadása a fejlécsorhoz

const headerCell3 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell3.innerHTML = headerObj.field3; // A cella tartalmát beállítjuk a headerObj.field3 értékével
headerCell3.colSpan = 2; // A cella két oszlopot foglal el
headerRow.appendChild(headerCell3); // A cella hozzáadása a fejlécsorhoz

const tableBody = document.createElement('tbody'); // Táblázat törzs elem létrehozása
table.appendChild(tableBody); // A törzs hozzáadása a táblázathoz

const row1 = document.createElement('tr'); // Táblázat első sorának létrehozása
tableBody.appendChild(row1); // Az első sor hozzáadása a törzshöz

const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorhoz
row1Cell1.innerHTML = row1Obj.field1; // A cella tartalmát beállítjuk a row1Obj.field1 értékével
row1.appendChild(row1Cell1); // A cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella létrehozása az első sorhoz
row1Cell2.innerHTML = row1Obj.field2; // A cella tartalmát beállítjuk a row1Obj.field2 értékével
row1.appendChild(row1Cell2); // A cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorhoz
row1Cell3.innerHTML = row1Obj.field3; // A cella tartalmát beállítjuk a row1Obj.field3 értékével
row1.appendChild(row1Cell3); // A cella hozzáadása az első sorhoz

const row1Cell4 = document.createElement('td'); // Negyedeik cella létrehozása az első sorhoz
row1Cell4.innerHTML = row1Obj.field4; // A cella tartalmát beállítjuk a row1Obj.field4 értékével
row1.appendChild(row1Cell4); // A cella hozzáadása az első sorhoz

const row2 = document.createElement('tr'); // Második sor létrehozása
tableBody.appendChild(row2); // A második sor hozzáadása a törzshöz

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorhoz
row2Cell1.innerHTML = row2Obj.field1; // A cella tartalmát beállítjuk a row2Obj.field1 értékével
row2.appendChild(row2Cell1); // A cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorhoz
row2Cell2.innerHTML = row2Obj.field2; // A cella tartalmát beállítjuk a row2Obj.field2 értékével
row2.appendChild(row2Cell2); // A cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorhoz
row2Cell3.innerHTML = row2Obj.field3; // A cella tartalmát beállítjuk a row2Obj.field3 értékével
row2Cell3.colSpan = 2; // A cella két oszlopot foglal el
row2.appendChild(row2Cell3); // A cella hozzáadása a második sorhoz

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sor hozzáadása a törzshöz

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorhoz
row3Cell1.innerHTML = row3Obj.field1; // A cella tartalmát beállítjuk a row3Obj.field1 értékével
row3.appendChild(row3Cell1); // A cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorhoz
row3Cell2.innerHTML = row3Obj.field2; // A cella tartalmát beállítjuk a row3Obj.field2 értékével
row3.appendChild(row3Cell2); // A cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorhoz
row3Cell3.innerHTML = row3Obj.field3; // A cella tartalmát beállítjuk a row3Obj.field3 értékével
row3.appendChild(row3Cell3); // A cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorhoz
row3Cell4.innerHTML = row3Obj.field4; // A cella tartalmát beállítjuk a row3Obj.field4 értékével
row3.appendChild(row3Cell4); // A cella hozzáadása a harmadik sorhoz

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sor hozzáadása a törzshöz

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorhoz
row4Cell1.innerHTML = row4Obj.field1; // A cella tartalmát beállítjuk a row4Obj.field1 értékével
row4.appendChild(row4Cell1); // A cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorhoz
row4Cell2.innerHTML = row4Obj.field2; // A cella tartalmát beállítjuk a row4Obj.field2 értékével
row4.appendChild(row4Cell2); // A cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorhoz
row4Cell3.innerHTML = row4Obj.field3; // A cella tartalmát beállítjuk a row4Obj.field3 értékével
row4.appendChild(row4Cell3); // A cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorhoz
row4Cell4.innerHTML = row4Obj.field4; // A cella tartalmát beállítjuk a row4Obj.field4 értékével
row4.appendChild(row4Cell4); // A cella hozzáadása a negyedik sorhoz