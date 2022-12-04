// Getting data from api using async and await function
async function data() {
    let cafe;
    let place;

    let cafeUrl = "https://mocki.io/v1/40c290e7-27a2-4df8-82eb-c6a82cc0a7d4";
    let cafeRes1 = await fetch(cafeUrl);
    let cafeRes2 = await cafeRes1.json();
    cafe = cafeRes2;

    let placeUrl = "https://mocki.io/v1/c9a4750f-75c5-4604-984a-f843050e09ab";
    let placeRes1 = await fetch(placeUrl);
    let placeRes2 = await placeRes1.json();
    place = placeRes2;

    return [cafe, place]
}

// Resolving the promise and adding data to the table
const promise = data();
const result = promise.then((data) => {

    const [cafe, place] = data;
    var table = document.getElementById("myTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    for (var i = 0; i < place.length; i++) {
        tbody.innerHTML += `
            <tr>
                <td class="column1">${i + 1}</td>
                <td class="column2">${cafe[i].name}</td>
                <td class="column3">${place[i].street_no}  ${place[i].locality}</td>
                <td class="column4">${place[i].postal_code}</td>
                <td class="column5">${place[i].lat}</td>
                <td class="column6">${place[i].long}</td>
            </tr>`
    }
})

//Search function (Case Sensitive)
function tableSearch() {

    // Initialization of variables
    var input = document.getElementById("myInput");
    var filter = input.value;
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");

    // Loop for searching the words in table and display the result
    for (var i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            textValue = td.textContent || td.innerText;
            console.log(textValue, filter)
            if (textValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}