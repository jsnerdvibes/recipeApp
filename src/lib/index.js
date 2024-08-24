// place files you want to import through the `$lib` alias in this folder.

export async function RecipeData(){
    try {
        
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await res.json();
        let recipeData = data.categories;

        console.log(recipeData)
        return recipeData;

    } catch (error) {
        console.log("Error",error)
    }
}