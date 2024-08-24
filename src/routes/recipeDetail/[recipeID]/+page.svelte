
<script>
    import {page} from '$app/stores'
    import {RecipeData} from '$lib/index.js'
    
    const {recipeID} = $page.params
    
    let recData=[]
    let finalData={};
    let type = '';
    let description= '';
    let image = '';

    async function load(param){
         recData = await RecipeData()
         finalData = await recData[param-1]
         type =  finalData.strCategory
         description =  finalData.strCategoryDescription
         image =  finalData.strCategoryThumb

        return finalData
    }

    load(recipeID)

    

</script>

    <div class="h-screen bg-pink-200 flex flex-col items-center justify-top pr-4 pl-4">

<h1 class="mt-6 text-3xl font-serif">Recipe Detail</h1>

<div class="flex flex-col items-center border-2 rounded-2xl border-white mt-12 bg-pink-300 w-auto h-auto pb-4">
    <img src=   {`${image}`} alt="" class="h-auto w-auto mt-4" >
    <h1 class="font-serif text-2xl">Type : {type}</h1>
    <p class="w-4/5 mt-4 text-center text-l text-balance"><span class="font-bold">Description :</span> {description}</p>

</div>

</div>
