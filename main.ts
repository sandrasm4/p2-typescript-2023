import { writeFile } from "fs/promises";
import { renderReceta, renderIndex, renderIndexStyle } from "./render.js";
import { Receta, loadRecetas } from "./recetas.js";



const recetasAsian = await loadRecetas("Asian");
const recetasIndian = await loadRecetas("Indian");
const recetasMexican = await loadRecetas("Mexican");
const recetasMediterranean = await loadRecetas("Mediterranean");

const recetas = recetasAsian.concat(recetasIndian, recetasMexican, recetasMediterranean);

const html = renderIndex(recetas);
await writeFile('index.html', html);
const css = renderIndexStyle();
await writeFile('index.css', css);
console.log("sandra")

for ( const r of recetas){
    const html1 = renderReceta(r);
    await writeFile("recetas/"+r.label+'.html', html1);
    
}





