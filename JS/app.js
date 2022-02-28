// Get All Variables
const inputMeal = document.getElementById("input-meal");
const searchBtn = document.getElementById("search-btn");
const mealContainer = document.getElementById("meal-container");

const searchMeal = () => {
  const inputValue = inputMeal.value;
  if (inputValue.length == "") {
    mealContainer.innerHTML = `
    <h1 class="text-center my-4 text-info"> Please write something.</h1>
    `;
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => printFood(data.meals));
    inputMeal.value = "";
  }
};

const printFood = (data) => {
  
  if (!data) {
    mealContainer.innerHTML = `<h1 class="text-center my-4 text-info"> No, result found</h1>`;
  } else {
    mealContainer.innerHTML = "";
    data?.forEach((foodItem) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${foodItem.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${foodItem.strMeal}</h3>
                <h5>Category: ${foodItem.strCategory}</h5>
                <h5>Origin: ${foodItem.strArea}</h5>
                <button  onclick="seeDetails(${foodItem.idMeal})" class="btn btn-primary">See Details</button>
            </div>
        </div>
        `;
      mealContainer.appendChild(div);
    });
  }
};


const seeDetails = foodID => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`)
  .then(alAmin => alAmin.json())
  .then(data => printDetails(data.meals[0]))
}

const printDetails = singleItem => {
  console.log(singleItem)
  mealContainer.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${singleItem.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
      <h3 class="card-title">${singleItem.strMeal}</h3>
      <h5>Category: ${singleItem.strCategory}</h5>
      <h5>Origin: ${singleItem.strArea}</h5>
      <p>${singleItem.strInstructions.slice(0, 150)}</p>
      <a href="${singleItem.strYoutube}"  class="btn btn-primary">Watch Tutorial</a>
  </div>
</div>
  `
}