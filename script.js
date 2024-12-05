// scripts.js
document.getElementById("generate-recipe").addEventListener("click", generateRecipe);

function generateRecipe() {
    // Get selected ingredients
    let selectedIngredients = [];
    let checkboxes = document.querySelectorAll("#ingredients-list input[type='checkbox']:checked");

    checkboxes.forEach(checkbox => {
        selectedIngredients.push(checkbox.value);
    });

    if (selectedIngredients.length === 0) {
        alert("Please select at least one ingredient!");
        return;
    }

    // Generate a simple recipe based on selected ingredients
    let recipe = createRecipe(selectedIngredients);

    // Display the recipe
    document.getElementById("recipe-details").innerHTML = recipe.description;
    document.getElementById("recipe-nutrition").innerHTML = recipe.nutrition;
    document.getElementById("recipe-image").src = recipe.image;

    // Show recipe result section
    document.getElementById("recipe-result").style.display = "block";
}

function createRecipe(ingredients) {
    // Example static recipes
    const recipes = {
        "Spinach": {
                        description: [
                                       " Spinach Salad with Avocado and Cucumber", "Prepare the Salad:",
                                        "1. Place the spinach leaves in a large salad bowl.",
                                        "2. Add the avocado slices, cucumber slices, and red onion.", "Make the Dressing:",
                                        "3. In a small bowl, whisk together the olive oil, lemon juice, honey or maple syrup, and Dijon mustard until well combined.",
                                        "4. Season with salt and pepper to taste.", "Assemble the Salad:",
                                        "5. Drizzle the dressing over the salad ingredients.",
                                        "6. Toss gently to combine, making sure all the ingredients are evenly coated with the dressing.", "Add Toppings:",
                                        "7. Sprinkle the crumbled feta cheese (if using) and toasted nuts or seeds over the top of the salad.", "Serve:",
                                        "8. Serve immediately and enjoy your fresh and healthy Spinach Salad with Avocado and Cucumber!",
                                       ], 
            
             nutrition: "Calories: 250 | Protein: 5g | Carbs: 20g | Fat: 20g",
            image: "https://th.bing.com/th/id/OIP.K1GuQPic1j_S4O28uFpWhQHaNJ?rs=1&pid=ImgDetMain",
        },
        "Kale": {
                     description:[
                                        "Kale Smoothie with Avocado",
                                         "1. Wash and chop kale.",
                                         "2. Peel and pit avocado.",
                                         "3. Add kale, avocado, and banana to blender.",
                                         "4. Pour in almond milk.",
                                         "5. Add Greek yogurt.",
                                         "6. Blend until smooth.",
                                         "7. Add honey if desired.",
                                         "8. Serve immediately. Enjoy!",
                                  ],            
            nutrition: "Calories: 150 | Protein: 3g | Carbs: 18g | Fat: 10g",
            image: "https://www.thelittleepicurean.com/wp-content/uploads/2015/02/avocado-kale-smoothie.jpg"
        },
        "Tomatoes": {
                        description:[
                                            "Tomato and Cucumber Salad",
                                            "1. Wash tomatoes and cucumber.",
                                            "2. Slice tomatoes.",
                                            "3. Slice cucumber.",
                                            "4. Combine in a bowl.",
                                            "5. Add chopped red onion.",
                                            "6. Drizzle olive oil.",
                                            "7. Add lemon juice.",
                                            "8. Sprinkle salt.",
                                            "9. Toss gently.",
                                            "10. Serve fresh.",
                                    ],
            nutrition: "Calories: 120 | Protein: 4g | Carbs: 15g | Fat: 6g",
            image: "https://bing.com/th?id=OSK.f129c86746d2dd8e2d476ccf7cee9e2d"
        }
    };

    // Combine ingredients and return a recipe
    let recipe = { description: "", nutrition: "", image: "" };
    ingredients.forEach(ingredient => {
        if (recipes[ingredient]) {
            recipe = recipes[ingredient];  // For simplicity, just take the last matching recipe
        }
    });

    return recipe;
}
