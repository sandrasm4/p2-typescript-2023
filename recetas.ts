
export class Receta {
  constructor( 
    public label: string, 
    public image: string,
  ) {}
}

export const loadRecetas = async () => {
  //Asian food
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8&cuisineType=Asian&imageSize=REGULAR`);
  const { hits } = (await response.json()) as { hits: any[] };
  const recetas = hits.map( hit => new Receta(hit.recipe.label, hit.recipe.image) );
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