import { Receta, RecetaDetails } from "./recetas.js";
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
  <div class=titulo>Recetas del Mundo</div>
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
  <div id="Specifications" class="tabcontent">
    <p class="titulo">Diet Labels:</p>
    <table><tr>`
    for(let label of detail.dietLabels){
      html+= `<td><img src="${dietLabel[label]}"/></td>`
    }
    html+=`</tr></table>
    <p class="titulo">Health Labels:</p>`
    for(let label of detail.healthLabels){
      html+= `<p>${label}</p>`
    }
    html+=`
    <p>cautions:</p>
    <p>${detail.cautions}</p>
    <table><tr><td class="titulo">Calories</td><td class="titulo">Meal Type</td><td class="titulo">Dish Type</td></tr>
    <tr><td><img src="https://cdn-icons-png.flaticon.com/512/2316/2316951.png"/></td>
    <td><img src="https://cdn-icons-png.flaticon.com/512/3073/3073843.png"/></td>
    <td><img src="https://image.similarpng.com/very-thumbnail/2020/12/Vegetable-salad-icon-illustration.png"/></td></tr>
    <tr><td>${detail.calories}</td><td>${detail.mealType}</td><td>${detail.dishType}</td></tr>
    </table>
    <p>Cuisine Type:${detail.cuisineType}</p>`
    for(let d of detail.digest){
      html+= `<p>${d.label}:${d.total}${d.units}</p>`
    }  
  html+=`</div>`
  return html;
}

const renderIngredients = (detail: RecetaDetails) => {
  let html = "";
  html += `
  <div id="Ingredients" class="tabcontent">
  <table>
    <th>Image</th>
    <th>Food</th>
    <th>Text</th>
    <th>Food Category</th>
    <th>Quantity</th>
    <th>Weight</th>`
    for(let ingredient of detail.ingredients){
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
  <div id="How" class="tabcontent">
    <p>Yield:${detail.yieldV}</p>

    <p>Total Time: ${detail.totalTime}</p>

    <p>Instructions:</p>`
    if(detail.instructions){
      for(let inst of detail.instructions){
        html += `<p>${inst}</p>`
      }
    }
    html+=`</div>`
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
    <button class="tablinks" onclick="openTab(event, 'Specifications')">Specifications</button>
    <button class="tablinks" onclick="openTab(event, 'Ingredients')">Ingredients</button>
    <button class="tablinks" onclick="openTab(event, 'How')">How to cook it!</button>
  </div>
    ${renderSpecifications(receta.details)}
    ${renderIngredients(receta.details)}
    ${renderHow(receta.details)}
    ${renderScript()}
  </body>
</html>`;
};





