let countryData = JSON.parse(localStorage.getItem("countryData"))
// console.log(countryData)
const tableData = document.getElementById("tableData")
if (countryData == null) {
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("countryData", JSON.stringify(data))
        });
}

function displayData() {

    for (let i = 0; i < countryData.length; i++) {
        const row = document.createElement("tr")
        row.innerHTML = `
     <td>${i + 1}</td>
    <td>${countryData[i].name.common}</td> 
    <td>${countryData[i].name.official}</td>
    <td>${countryData[i].capital}</td>
    <td>${countryData[i].region}</td>
    <td>${countryData[i].area}</td>
    <td>${countryData[i].population}</td>
    <td>${countryData[i].flag}</td>
   `
        tableData.appendChild(row)

        if (countryData[i].area >= 0 && countryData[i].area <= 10000) {
            row.classList = "table-secondary"
        }
        if (countryData[i].area >= 10001 && countryData[i].area <= 50000) {
            row.classList = "table-warning"
        }
        if (countryData[i].area >= 50001 && countryData[i].area <= 100000) {
            row.classList = "table-success"
        }
        if (countryData[i].area >= 100001) {
            row.classList = "table-danger"
        }

        // 0-10,000 then gray. 10,001-50,000 then yellow. 50,001-1,00,000 then green. 1,00,000+ then red.
    }
}
