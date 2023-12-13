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


//
function handleRating(){
    //Update the hidden input value
    document.getElementById("rating").value = rating;

    //Update the display star
    for (let i = 1; i <= 5; i++) {
        const star = document.querySelector(`.yotpoStar .yotpo_star .raiting-star:nth-child(${i})`);
        if (i <= rating) {
            star.classList.add('yotpo-icon-filled-star');
            star.classList.remove('yotpo-icon-empty-star');
        } else {
            star.classList.remove('yotpo-icon-filled-star');
            star.classList.add('yotpo-icon-empty-star');
        }
    }
}