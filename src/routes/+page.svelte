<script>
    import { onMount } from "svelte";

   let recipeData = [];

   onMount( async ()=>{
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await res.json();
        recipeData = data.categories;
        console.log(recipeData)
        return recipeData;

    } catch (error) {
        console.log("error",error);
    }
   })

</script>

<div class="h-screen bg-pink-200 flex flex-col items-center justify-top pr-4 pl-4">
<h1 class="mt-6 text-3xl font-serif">
    (Click on recipes for description)
</h1>

<div class="flex justify-center items-center flex-wrap bg-red-300 h-5/6">
    {#each recipeData as category}
    <div class="w-40 m-2 text-center border-2 rounded-2xl h-1/3 border-white bg-pink-300 ">
      <a href={`/recipeDetail/${category.idCategory}`}>  <img src={`${category.strCategoryThumb}`} alt="">
        <h3 class="text-xl mt-6"> {category.strCategory}</h3>
    </a>
    </div>
    {/each}
</div>

</div>
