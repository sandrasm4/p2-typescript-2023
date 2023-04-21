
export class Receta {
  constructor( 
    public label: string, 
    public image: string,
    public dietLabels: string[],
    public yieldV: string, 
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
  ){}
  public details = new RecetaDetails()   
}

export class RecetaDetails {
  constructor( 
    //public yieldV: string, 
    /*,
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
    public digest: Digest[],*/
  ){};
  public dietLabels = [];
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

export const loadRecetas = async () => {
  //Asian food
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8&cuisineType=Asian&imageSize=REGULAR`);
  const { hits } = (await response.json()) as { hits: any[] };
  console.log(hits)
  const recetas = hits.map( hit => new Receta(hit.recipe.label, hit.recipe.image, 
    hit.recipe.dietLabels,
    hit.recipe.yield,
    hit.recipe.healthLabels,
    hit.recipe.cautions,
    hit.recipe.ingredientLines,
    hit.recipe.ingredients,
    hit.recipe.calories,
    hit.recipe.totalWeight,
    hit.recipe.totalTime,
    hit.recipe.cuisineType,
    hit.recipe.mealType,
    hit.recipe.dishType,
    hit.recipe.digest,
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



//https://developer.edamam.com/admin/applications/1409623323119?service_id=2555417725632

//https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8

//https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8