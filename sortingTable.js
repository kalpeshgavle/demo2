// const tglButton = document.querySelector("#sortButton")
// tglButton.addEventListener('toggle', sortingTable())
let isSort = "ascending";



function sortingTable() {
    const searchName = document.getElementById("searchName").value
    tableData.innerHTML = ""
    if (isSort === "ascending") {
        // console.log(countryData)
        countryData.sort((a, b) => {
            return a.population - b.population
        })
        isSort = "descending"
    } else if (isSort === "descending") {
        countryData.sort((a, b) => {
            return b.population - a.population
        })
        isSort = "orignal"
    } else if (isSort === "orignal") {
        countryData = JSON.parse(localStorage.getItem("countryData"))
        isSort = "ascending"
    }
    // isSort = 1

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
    }

}

// tglButton.ontoggle = sortingTable()