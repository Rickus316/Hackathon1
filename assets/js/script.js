window.onload = function () {
  document.getElementById("searchInput").focus(); // Focus on the search input field
};

document.getElementById("search-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission
  searchRecipes();
});

document
  .getElementById("searchInput")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      searchRecipes();
    }
  });

async function searchRecipes() {
  const searchInput = document.getElementById("searchInput").value.trim(); // Get search text
  if (!searchInput) return; // Stop if input is empty

  showLoadingIndicator(); // Show loading indicator

  try {
    console.log(`Searching for recipes with: ${searchInput}`);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    const data = await response.json();
    console.log("API response data:", data);
    hideLoadingIndicator(); // Hide loading indicator
    displayRecipes(data.meals);
    clearSearchInput(); // Clear the search input
  } catch (error) {
    console.error("Error fetching recipes:", error);
    hideLoadingIndicator(); // Hide loading indicator
    displayErrorMessage("Failed to fetch recipes. Please try again later.");
  }
}

function displayRecipes(recipes) {
  const container = document.getElementById("recipe-container");
  container.innerHTML = ""; // Clear previous results

  if (!recipes) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipes.forEach((recipe) => {
    let recipeCard = `
            <div class="recipe-card" onclick="showRecipeDetails(${JSON.stringify(recipe).replace(/"/g, '&quot;')})">
                <h3>${recipe.strMeal}</h3>
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                <p>${recipe.strInstructions.substring(0, 100)}...</p>
            </div>
        `;
    container.innerHTML += recipeCard;
  });
}

// Function to fetch a random recipe
async function fetchRandomMeal() {
  const recipeContainer = document.getElementById("recipe-container"); // Target the container

  try {
    // Fetch a random meal
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();

    if (data.meals) {
      const meal = data.meals[0];

      // Build HTML for the random recipe
      let ingredientsList = "";
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredientsList += `<li>${meal[`strIngredient${i}`]} - ${
            meal[`strMeasure${i}`]
          }</li>`;
        }
      }

      const html = `
      <div class="meal-details">
        <h2>${meal.strMeal}</h2>
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="content">
          <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>${ingredientsList}</ul>
          </div>
          <div class="instructions">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
          </div>
        </div>
        <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
      </div>
              `;
  
        recipeContainer.innerHTML = html; // Insert the random meal into the container
      } else {
        recipeContainer.innerHTML = "<p>No random meal found.</p>";
      }
    } catch (error) {
      console.error("Error fetching random meal:", error);
      recipeContainer.innerHTML =
        "<p>Something went wrong. Please try again.</p>";
    }
  }
  
  // Event listener for random recipe button
  document
    .getElementById("random-search-btn")
    .addEventListener("click", fetchRandomMeal);
  function clearSearchInput() {
    document.getElementById("searchInput").value = "";
  }
  
  function showLoadingIndicator() {
    const container = document.getElementById("recipe-container");
    container.innerHTML = "<p>Loading...</p>";
  }
  
  function hideLoadingIndicator() {
    const container = document.getElementById("recipe-container");
    container.innerHTML = "";
  }
  
  function displayErrorMessage(message) {
    const container = document.getElementById("recipe-container");
    container.innerHTML = `<p>${message}</p>`;
  }    

function clearSearchInput() {
  document.getElementById("searchInput").value = "";
}

function showLoadingIndicator() {
  const container = document.getElementById("recipe-container");
  container.innerHTML = "<p>Loading...</p>";
}

function hideLoadingIndicator() {
  const container = document.getElementById("recipe-container");
  container.innerHTML = "";
}

function displayErrorMessage(message) {
  const container = document.getElementById("recipe-container");
  container.innerHTML = `<p>${message}</p>`;
}

function showRecipeDetails(recipe) {
  console.log("Recipe details:", recipe); // Log the recipe details

  const modal = document.getElementById("recipeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalIngredients = document.getElementById("modalIngredients");
  const modalInstructions = document.getElementById("modalInstructions");

  modalTitle.textContent = recipe.strMeal;
  modalImage.src = recipe.strMealThumb;
  modalImage.alt = recipe.strMeal;
  modalInstructions.textContent = recipe.strInstructions;

  modalIngredients.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      const li = document.createElement("li");
      li.textContent = `${ingredient} - ${measure}`;
      modalIngredients.appendChild(li);
    }
  }
  modal.style.display = "block";

  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
