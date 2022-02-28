// Get All Variables
const inputMeal = document.getElementById("input-meal");
const searchBtn = document.getElementById("search-btn");
const mealContainer = document.getElementById("meal-container");

const searchMeal = () => {
  const inputValue = inputMeal.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => printFood(data.meals));
  inputMeal.value = "";
};

const printFood = (data) => {
  if (!data) {
    mealContainer.innerHTML = `<h2 class="my-3 text-center">No result Found</h2>`;
  } else {
    mealContainer.textContent = "";
    data?.forEach((foodItem) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${foodItem.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${foodItem.strMeal}</h3>
                <h5>Category: ${foodItem.strCategory}</h5>
                <h5>Origin: ${foodItem.strArea}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
      mealContainer.appendChild(div);
    });
  }
};
