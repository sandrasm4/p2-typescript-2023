import { Receta, RecetaDetails } from "./recetas.ts";

const columnNum = 3;
const head = (label: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${label}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .name {
      font-family: sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: .4rem;
      border-bottom: 1px solid #ddd;
    }
    table{
      width: 100%;
    }
  </style>
</head>`;

const renderRecetas = (recetas: Array<Receta>) => {
  let cont = 0;
  let html = "";
  html += `
  <link rel="stylesheet" href="styleReceta.css"/>
  <div class="receta">
  <table>
    <tr>`;
  for (const receta of recetas) {
    cont++;
    html +=`<th>
            <div class="name">${receta.label} onclick="show(receta)"</div>
            <a href="recetas/${receta.label}.html">
            <img src="${receta.image}"/></a>
            </th>`;
    if(cont == columnNum){
      html +=`</tr><tr>`;
      cont = 0;
    }     
  };
    
  html +=`</tr></table></div>`;
  return html;
}

const renderDetalles = (receta: Receta) => {
  let cont = 0;
  let html = "";
  html += `<div class="receta">
  <p>label:<\p>
  <p>${receta.label}<\p>
  <p>image:<\p>
  <img her=${receta.image}\>
  <img src="${receta.image}" alt="${receta.label}"\>
  <p>Diet Labels:<\p>
  <p>${receta.dietLabels}<\p>
  <p>yieldV:<\p>
  <p>${receta.yieldV}<\p>
  <p>healthLabels:<\p>
  <p>${receta.healthLabels}<\p>
  <p>cautions:<\p>
  <p>${receta.cautions}<\p>
  <p>ingredientLines:<\p>
  <p>${receta.ingredientLines}<\p>
  <p>ingredients:<\p>
  <p>${receta.ingredients}<\p>
  <p>calories:<\p>
  <p>${receta.calories}<\p>
  <p>totalWeight:<\p>
  <p>${receta.totalWeight}<\p>
  <p>totalTime:<\p>
  <p>${receta.totalTime}<\p>
  <p>cuisineType:<\p>
  <p>${receta.cuisineType}<\p>
  <p>mealType:<\p>
  <p>${receta.mealType}<\p>
  <p>dishType:<\p>
  <p>${receta.dishType}<\p>
   
    
  </tr></table></div>`;
  return html;
}

export const renderIndex = (recetas: Array<Receta>) => {
  return `
<html>
  ${head("Recetas List")}
  <body>
    ${renderRecetas(recetas)}
  </body>
</html>`;
};

export const renderReceta = (receta: Receta) => {
  return `
<html>
  ${head("Recetas List")}
  <body>
    ${renderDetalles(receta)}
  </body>
</html>`;
};



