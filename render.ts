import { Receta, RecetaDetails } from "./recetas.js";
const columnNum = 3;

type tplotOptions = {
  [key: string]: string
}

let dietLabel: tplotOptions = {
  "Balanced" : "https://static.vecteezy.com/system/resources/previews/010/353/826/original/sign-of-balanced-diet-symbol-is-isolated-on-a-white-background-icon-color-editable-free-vector.jpg",
  "High-Fiber": "https://t4.ftcdn.net/jpg/04/88/62/43/360_F_488624308_Yf3N1OV08NkRqNTWYiFKzy2wpbSKxQU8.jpg",
  "High-Protein": "https://t4.ftcdn.net/jpg/04/88/62/45/360_F_488624501_Ap8J2e7iN5SJ784U8xUlll1cdGoknspA.jpg",
  "Low-Carb": "https://t4.ftcdn.net/jpg/04/99/21/27/360_F_499212783_3QxYBncmuKBX5H9baJDNruVXupUMJLOd.jpg",
  "Low-Fat": "https://cdn-icons-png.flaticon.com/512/4852/4852255.png",
  "Low-Sodium": "https://t3.ftcdn.net/jpg/04/88/62/44/360_F_488624447_AxMFnl8rLsHbicUjU4ibLJwOxnqZ0VS0.jpg",
};



let healthLabels : tplotOptions = {
  "Alcohol-Cocktail":"",
  "Alcohol-Free":"https://static.vecteezy.com/system/resources/previews/000/343/618/non_2x/alcohol-free-icon-vector.jpg",
  "Celery-Free":"",
  "Crustcean-Free":"",
  "Dairy-Free":"",
  "DASH":"",
  "Egg-Free":"",
  "Fish-Free":"",
  "FODMAP-Free":"",
  "Gluten-Free":"",
  "Immuno-Supportive":"",
  "Keto-Friendly":"",
  "Kidney-Friendly":"",
  "Kosher	kosher":"",
  "Low Potassium":"",
  "Low Sugar":"",
  "Lupine-Free":"",
  "Mediterranean":"",
  "Mollusk-Free":"",
  "Mustard-Free":"",
  "No oil added":"",
  "Paleo":"",
  "Peanut-Free":"",
  "Pescatarian":"",
  "Pork-Free":"",
  "Red-Meat-Free":"",
  "Sesame-Free":"",
  "Shellfish-Free":"",
  "Soy-Free":"",
  "Sugar-Conscious":"",
  "Sulfite-Free":"",
  "Tree-Nut-Free":"",
  "Vegan":"",
  "Vegetarian":"",
  "Wheat-Free":"",
}

const head = (label: string, style: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${label}</title>
  <link rel="stylesheet" href="${style}.css"/>
</head>`;

const renderRecetas = (recetas: Array<Receta>) => {
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
    
  html +=`</tr></table>`;
  return html;
}

const renderDetalles = (detail: RecetaDetails) => {
  let html = "";
  html += `
  <div id="Specifications" class="tabcontent">
    <p class="titulo">Diet Labels:</p>
    <table><tr>`
    for(let label of detail.dietLabels){
      html+= `<td><img src="${dietLabel[label]}"/></td>`
    }
    html+=`</tr></table>
    <p class="titulo">Health Labels:</p>
    <table><tr>`
    for(let label of detail.healthLabels){
      html+= `<td><img src="${healthLabels[label]}"/></td>`
    }
    html+=`</tr></table>

    <p>cautions:</p>
    <p>${detail.cautions}</p>
    <table><tr><td class="titulo">Calories</td><td class="titulo">Meal Type</td><td class="titulo">Dish Type</td></tr>
    <tr><td><img src="https://cdn-icons-png.flaticon.com/512/2316/2316951.png"/></td>
    <td><img src="https://cdn-icons-png.flaticon.com/512/3073/3073843.png"/></td>
    <td><img src="https://image.similarpng.com/very-thumbnail/2020/12/Vegetable-salad-icon-illustration.png"/></td></tr>
    <tr><td>${detail.calories}</td><td>${detail.mealType}</td><td>${detail.dishType}</td></tr>
    </table>
  </div>
  <div id="Ingredients" class="tabcontent">
  



  </div>
  <div id="How" class="tabcontent">
  


  </div>
`;
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

/*
<p class="titulo">yield:</p>
    <p >${detail.yieldV}</p>

  <p>totalTime:</p>
  <p>${detail.totalTime}</p>
  <p>cuisineType:</p>
  <p>${detail.cuisineType}</p>
   
  <p>ingredientLines:</p>
  <p>${detail.ingredientLines}</p>
  <p>ingredients:</p>
  <p>${detail.ingredients}</p>
*/


export const renderIndex = (recetas: Array<Receta>) => {
  return `
<html>
  ${head("Recetas List", "index")}
  <body>
    ${renderRecetas(recetas)}
  </body>
</html>`;
};

export const renderIndexStyle = () => {
  return `
    body {
      margin: 0;
      padding: 0;
      background-color: rgb(55, 57, 59);
      color:#ddd;
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
  `;
};

export const renderReceta = (receta: Receta) => {
  return `
<html>
  ${head("Recetas List", "receta")}
  <body>
  <div class="tab">
    <button class="tablinks" onclick="openTab(event, 'Specifications')">Specifications</button>
    <button class="tablinks" onclick="openTab(event, 'Ingredients')">Ingredients</button>
    <button class="tablinks" onclick="openTab(event, 'How')">How to cook it!</button>
  </div>
    ${renderDetalles(receta.details)}
    ${renderScript()}
  </body>
</html>`;
};





