
/**
 * TODO la api da el analisis nutricional de cada ingrediente.
 * Se podría ampliar el ejercicio haciendo que se pueda ver 
 * el analisis de cada uno de los ingredientes de las recetas
 **/


/*export class NuticionIngredient {
  constructor( 
  ) {}
}

export const loadRecetas = async () => {
  
  const text = "https://api.edamam.com/api/nutrition-data?app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8&nutrition-type=cooking&ingr=";
  // concatenar el ingredient text con % en vez de espacios
  const ingrediente = "1%20cup%20dried%20egg%20noodles";

  const response = await fetch(text + ingrediente)
    
  const { results } = (await response.json()) as { results: any[] };
  
  return results;
};

//https://developer.edamam.com/admin/applications/1409623323119?service_id=2555417725632

//https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8

//https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=2cfefb75&app_key=23d5542412e25bdd995694ef919bbbb8*/