// Get All Variables
const inputMeal = document.getElementById('input-meal')
const searchBtn = document.getElementById('search-btn')
const mealContainer = document.getElementById('meal-container')

const searchMeal = () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=fish'
    fetch(url)
    .then(res => res.json())
    .then(data => printFood(data.meals))
}

const printFood = data => {

    data.forEach(foodItem => {
        console.log(foodItem) 
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        mealContainer.appendChild(div)
    });

}