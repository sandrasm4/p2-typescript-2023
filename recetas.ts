
export class Receta {
  constructor( 
    public label: string, 
    public image: string,
    public details: {
        yieldV: string, 
        dietLabels: string[],
        healthLabels: string[],
        cautions: string[],
        ingredientLines: string[],
        ingredients:{
          text: string,
          quantity: number,
          measure: string,
          food: string,
          weight: number,
          foodCategory: string,
          image: string
        }[],
        calories: number,
        totalWeight: number,
        totalTime: number,
        cuisineType: string[],
        mealType: string[],
        dishType: string[],
        digest: Digest[],
    }
  ){}   
}


export class RecetaDetails {
  constructor( 
    public yieldV: string, 
    public dietLabels: string[],
    public healthLabels: string[],
    public cautions: string[],
    public ingredientLines: string[],
    public ingredients:Ingredient[],
    public calories: number,
    public totalWeight: number,
    public totalTime: number,
    public cuisineType: string[],
    public mealType: string[],
    public dishType: string[],
    public digest: Digest[],
  ){};
}

export class Ingredient {
  constructor( 
    public text: string,
    public quantity: number,
    public measure: string,
    public food: string,
    public weight: number,
    public foodCategory: string,
    public image: string
  ){};
}

export class Digest {
  constructor( 
    public label: string,
    public total: number,
    public units: string
  ){};
}

export const loadRecetas = async (origen: string) => {
  //Asian food
  const response = await fetch("https://api.edamam.com/api/recipes/v2?type=any&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8&cuisineType="+origen+"&imageSize=REGULAR");
  const { hits } = (await response.json()) as { hits: any[] };
  
  const recetas = hits.map( hit => new Receta(hit.recipe.label, hit.recipe.image,
  { 
    yieldV: hit.recipe.yield,
    dietLabels: hit.recipe.dietLabels,
    healthLabels: hit.recipe.healthLabels,
    cautions: hit.recipe.cautions,
    ingredientLines: hit.recipe.ingredientLines,
    ingredients: hit.recipe.ingredients,
    calories: hit.recipe.calories,
    totalWeight: hit.recipe.totalWeight,
    totalTime: hit.recipe.totalTime,
    cuisineType: hit.recipe.cuisineType,
    mealType: hit.recipe.mealType,
    dishType: hit.recipe.dishType,
    digest: hit.recipe.digest,
  }
 
 /* ingredients: hit.recipe.ingredients.map(ingredient => new Ingredient(
    ingredient.text, ingredient.quantity, ingredient.measure, ingredient.food,
    ingredient.weight, ingredient.foodCategory, ingredient.image)),
   */ 
  ) ); 
  
  
   /** 
  //Indian food
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8&cuisineType=Indian&imageSize=REGULAR`);

  //Mexican food
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8&cuisineType=Mexican&imageSize=REGULAR`);
  
  //Mediterranean food
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8&cuisineType=Mediterranean&imageSize=REGULAR`);
*/  
 
  return recetas;
};

//const buttonToBeClicked = document.getElementById("example-button");



//https://developer.edamam.com/admin/applications/1409623323119?service_id=2555417725632

//https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8

//https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8