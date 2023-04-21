import { writeFile } from "fs/promises";
import { renderReceta, renderIndex } from "./render.js";
import { Receta, loadRecetas } from "./recetas.js";
import { dir } from "console";


const recetas = await loadRecetas();
debugger
const html = renderIndex(recetas);
await writeFile('index.html', html);
console.log("sandra")

//for ( const r of recetas){
    const html1 = renderReceta(recetas[0]);
    await writeFile("recetas/"+recetas[0].label+'.html', html1);
//}





