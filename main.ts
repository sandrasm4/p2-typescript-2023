import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadRecetas } from "./recetas.js";


const recetas = await loadRecetas();
debugger
const html = render(recetas);
await writeFile('index.html', html);

await writeFile(recetas[0].label+'.html', html);



