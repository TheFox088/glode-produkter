//Include script to fetch and display data
fetch("data.json")
.then(response => response.json())
.then(data => {
    //Access data and update HTML elements
    document.getElementById("name").textContent += data.name;
    document.getElementById("Specifications").textContent += data.Specifications;
    document.getElementById("description").textContent += data.description;
    document.getElementById("price").textContent += data.price;
    document.getElementById("in_stock").textContent += data.in_stock;

})
.catch(error =>console.error("Error featching data", error));