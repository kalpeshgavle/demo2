function searchingByName() {
    const searchName = document.getElementById("searchName").value
    tableData.innerHTML = ""
    const searchData = countryData.filter((value) => {
        return (value.name.common.toLowerCase().includes(searchName))

    })
    if (searchData.length <= 0) {
        document.getElementById("errorMessage").innerHTML = "No data found...."
        document.getElementById("results").innerHTML = `${searchData.length} results found...`

    } else {
        document.getElementById("errorMessage").innerHTML = ""
        document.getElementById("results").innerHTML = `${searchData.length} results found...`
        if (searchData.length == 250) {
            document.getElementById("results").innerHTML = ``

        }
    }

    // console.log(searchData)
    for (let i = 0; i < searchData.length; i++) {
        const row = document.createElement("tr")
        row.innerHTML = `
         <td>${i + 1}</td>
        <td>${searchData[i].name.common}</td> 
        <td>${searchData[i].name.official}</td>
        <td>${searchData[i].capital}</td>
        <td>${searchData[i].region}</td>
        <td>${searchData[i].area}</td>
        <td>${searchData[i].population}</td>
        <td>${searchData[i].flag}</td>
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
