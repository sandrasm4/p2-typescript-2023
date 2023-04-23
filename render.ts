import { Digest, Ingredient, Receta, RecetaDetails } from "./recetas.js";
const columnNum = 3;

type tplotOptions = {
  [key: string]: string;
}

let dietLabel: tplotOptions = {
  "Balanced" : "https://static.vecteezy.com/system/resources/previews/010/353/826/original/sign-of-balanced-diet-symbol-is-isolated-on-a-white-background-icon-color-editable-free-vector.jpg",
  "High-Fiber": "https://t4.ftcdn.net/jpg/04/88/62/43/360_F_488624308_Yf3N1OV08NkRqNTWYiFKzy2wpbSKxQU8.jpg",
  "High-Protein": "https://t4.ftcdn.net/jpg/04/88/62/45/360_F_488624501_Ap8J2e7iN5SJ784U8xUlll1cdGoknspA.jpg",
  "Low-Carb": "https://t4.ftcdn.net/jpg/04/99/21/27/360_F_499212783_3QxYBncmuKBX5H9baJDNruVXupUMJLOd.jpg",
  "Low-Fat": "https://cdn-icons-png.flaticon.com/512/4852/4852255.png",
  "Low-Sodium": "https://t3.ftcdn.net/jpg/04/88/62/44/360_F_488624447_AxMFnl8rLsHbicUjU4ibLJwOxnqZ0VS0.jpg",
};


const head = (label: string, style: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${label}</title>
  <link rel="stylesheet" href="${style}.css"/>
</head>`;

const renderRecipes = (recetas: Array<Receta>) => {
  let cont = 0;
  let html = "";
  html += `
  <div class=titulo>World Recipes</div>
  <table>
    <tr>`;
  for (const receta of recetas) {
    cont++;
    html +=`<td>
            <div>${receta.label}</div>
            <a href="recetas/${receta.label}.html">
            <img src="${receta.image}"/>
            </a></td>`;
    if(cont == columnNum){
      html +=`</tr><tr>`;
      cont = 0;
    }     
  };
    
  return html +`</tr></table>`;
}

const renderSpecifications = (detail: RecetaDetails) => {
  let html = "";
  html += `
  <div id="specifications" class="tabcontent">
    <p class="titulo">Cuisine Type: ${detail.cuisineType}</p>
    <p class="titulo">Diet Labels:</p>
    <div id="diet">`
    for(let label of detail.dietLabels){
      html+= `<img id="diet" src="${dietLabel[label]}"/>`
    }
    html+=`</div>
    <p class="titulo">Health Labels:</p><p>`
    for(let label of detail.healthLabels){
      html+= `${label}, `
    }
    if(detail.cautions.length!=0){
      html+=`</p>
      <p class="titulo">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/warning-icon.png"/></td>
      Cautions:
      </p>
      <p>${detail.cautions}</p>`
    }else{
      html+=`</p>`
    }
    html+=`<table><tr><td class="titulo">Calories</td><td class="titulo">Meal Type</td><td class="titulo">Dish Type</td></tr>
    <tr><td><img src="https://cdn-icons-png.flaticon.com/512/2316/2316951.png"/></td>
    <td><img src="https://cdn-icons-png.flaticon.com/512/3073/3073843.png"/></td>
    <td><img src="https://img.freepik.com/vector-premium/ensalada-cayendo-tazon_202271-2216.jpg?w=2000"/></td></tr>
    <tr><td>${detail.calories}</td><td>${detail.mealType}</td><td>${detail.dishType}</td></tr>
    </table>
  </div>`
  return html;
}

const renderIngredients = (ingredients: Ingredient[]) => {
  let html = "";
  html += `
  <div id="ingredients" class="tabcontent">
  <table>
    <th>Image</th>
    <th>Food</th>
    <th>Food Category</th>
    <th>Quantity</th>
    <th>Weight</th>`
    for(let ingredient of ingredients){
      html+= `<tr><td><img src="${ingredient.image}"/></td>
              <td>${ingredient.food}</td>
              <td>${ingredient.foodCategory}</td>
              <td>${ingredient.quantity + " " + ingredient.measure}</td>
              <td>${ingredient.weight}</td></tr>`
    }
    html+=`</table></div>`;
  return html;
}
const renderHow = (detail: RecetaDetails) => {
  let html = "";
  html += `
  <div id="how" class="tabcontent">
    <table>
      <td><img src="https://static.thenounproject.com/png/4502200-200.png"/></td>
      <td><p>Yield: ${detail.yieldV} </p>
      <p>Total Time: ${detail.totalTime} </p></td>
    </table>
    <p>Instructions:</p><ol>`
    if(detail.instructions){
      for(let inst of detail.instructions){
        html += `<li>${inst}</li>`
      }
    }else{
      html += `<li>The API doesn't have this information yet.</li>
      <li>Put all the ingredients together and mix them.
      <img src="https://cdn-icons-png.flaticon.com/512/5622/5622660.png"/></li>`
    }
    html+=`</ol></div>`
    return html;
  }

  const renderNutrients = (digest: Digest[]) => {
    let html = "";
    html += `
    <div id="nutrients" class="tabcontent">
      <table>`
      for(let d of digest){
        html+= `<tr>
          <td>${d.label}</td>
          <td>${d.total}`
        if(d.units){
          html+=d.units
        }
        html+= `  </td>
        </tr>`
      } 
      html+=`</table></div>`
      return html;
  }

  const renderScript = () => {
    return `<script>
      function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
      }
  </script>`;
}


export const renderIndex = (recetas: Array<Receta>) => {
  return `
<html>
  ${head("Recetas List", "index")}
  <body>
    ${renderRecipes(recetas)}
  </body>
</html>`;
};


export const renderRecipe = (receta: Receta) => {
  return `
<html>
  ${head("Recetas List", "receta")}
  <body>
  <div class="tab">
    <button class="tablinks" onclick="openTab(event, 'specifications')">Specifications</button>
    <button class="tablinks" onclick="openTab(event, 'ingredients')">Ingredients</button>
    <button class="tablinks" onclick="openTab(event, 'how')">How to cook it!</button>
    <button class="tablinks" onclick="openTab(event, 'nutrients')">Nurtitional values</button>
  </div>
    ${renderSpecifications(receta.details)}
    ${renderIngredients(receta.details.ingredients)}
    ${renderHow(receta.details)}
    ${renderNutrients(receta.details.digest)}
    ${renderScript()}
  </body>
</html>`;
};





