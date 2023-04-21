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
    background-color: rgb(55, 57, 59);
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
    color:#ddd;
    font-size: 20%;
    
    text-align: center;
    border-collapse: collapse;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  td {
    border-left: 1px solid;
    padding-top: 2%;
    height: 33%;
    width: 33%;
  }

  td:first-child {
    border-left: transparent;
  }

  tr{
    border-bottom: 1px solid;
  }

  tr:last-child {
    border-bottom: transparent;
  }


  td:hover{
    background-color: #dddddd27;
    cursor: pointer;
  }

  img{
    padding: 5%;
    border-radius: 10%;
    height: 70%;
    width: 70%;
  }

  .titulo{
    color: antiquewhite;
    font-size: 40px;
    margin: 5%;
    text-align: center;
  }
  </style>
</head>`;

const renderRecetas = (recetas: Array<Receta>) => {
  let cont = 0;
  let html = "";
  html += `
  <link rel="stylesheet" href="styleReceta.css"/>
  <div class=titulo>Recetas del Mundo</div>
  <table>
    <tr>`;
  for (const receta of recetas) {
    cont++;
    html +=`<a href="recetas/${receta.label}.html"><td>
            <div>${receta.label}</div>
            <img src="${receta.image}"/>
            </td></a>`;
    if(cont == columnNum){
      html +=`</tr><tr>`;
      cont = 0;
    }     
  };
    
  html +=`</tr></table>`;
  return html;
}

const renderDetalles = (receta: Receta) => {
  let html = "";
  debugger;
  html += `<div class="receta">
  <div class="tab">
    <button class="tablinks" [openclick]="openIngredients(event,'London')">Ingredients</button>
    <button class="tablinks" [openclick]="openIngredients(event,'Man')">nfj</button>
    <button class="tablinks" [openclick]="openIngredients(event,'BCN')">lkn</button>
  </div>
  <div id="London" class="tabcontent">
    <p>label:<\p>
    <p>${receta.label}<\p>
    <p>image:<\p>
    <img her=${receta.image}\>
    <img src="${receta.image}" alt="${receta.label}"\>
    <p>Diet Labels:<\p>
    <p>${receta.dietLabels}<\p>
    <p>yield:<\p>
    <p>${receta.yieldV}<\p>
  </div>
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



