
export class Receta {
  constructor( public label: string ) {}
}

export const loadRecetas = async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8`);
  const { recipe } = (await response.json()) as { recipe: any };
  const recetas: Array<Receta> = [];
  recetas.push(new Receta(recipe.label));
  console.log(recipe.label);
  
  return recetas;
};

//https://developer.edamam.com/admin/applications/1409623323119?service_id=2555417725632

//https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8

//https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8