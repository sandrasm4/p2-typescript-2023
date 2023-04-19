import { Receta } from "./recetas.ts";

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
  html += `<div class="receta">
  <table>
    <tr>`;
  for (const receta of recetas) {
    cont++;
    html +=`<th>
            <div class="name">${receta.label} onclick="show(receta)"</div>
            <a href="index/${receta.label}">
            <img src="${receta.image}" /><\a>
            </th>`;
    if(cont == columnNum){
      html +=`</tr><tr>`;
      cont = 0;
    }     
  };
    
  html +=`</tr></table></div>`;
  return html;
}

export const render = (recetas: Array<Receta>) => {
  return `
<html>
  ${head("Recetas List")}
  <body>
    ${renderRecetas(recetas)}
  </body>
</html>`;
};

