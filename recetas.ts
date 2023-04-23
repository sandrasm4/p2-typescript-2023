
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
  ) ); 
   
  return recetas;
};