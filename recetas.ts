
export class Receta {
  constructor( 
    public label: string, 
    public image: string,
    public details: RecetaDetails,
  ){}   
}

export class RecetaDetails {
  constructor( 
    public yieldV: string, 
    public dietLabels: string[],
    public healthLabels: string[],
    public cautions: string[],
    public instructions: string[],
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
    instructions: hit.recipe.instructions,
    ingredients: hit.recipe.ingredients.map((ingredient: Ingredient) => new Ingredient(
      ingredient.quantity, ingredient.measure, ingredient.food,
      ingredient.weight, ingredient.foodCategory, ingredient.image)),
    calories: hit.recipe.calories,
    totalWeight: hit.recipe.totalWeight,
    totalTime: hit.recipe.totalTime,
    cuisineType: hit.recipe.cuisineType,
    mealType: hit.recipe.mealType,
    dishType: hit.recipe.dishType,
    digest: hit.recipe.digest.map((d: Digest) => new Digest(d.label, d.total, d.units))
  }
 
 /* */ 
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