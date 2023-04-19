import { Receta } from "./recetas.ts";

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
    .receta {
      font-family: sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: .4rem;
      border-bottom: 1px solid #ddd;
    }
  </style>
</head>`;

const renderRecetas = (recetas: Array<Receta>) => {
  let html = "";
  for (const receta of recetas) {
    html += `<div class="receta">
      <div class="name">
        <div class="name">${receta.label}</div>
        <img src="${receta.image}" />

      </div>
    </div>`;
  }
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
