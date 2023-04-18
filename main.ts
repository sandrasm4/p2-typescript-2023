import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadRecetas } from "./recetas.js";


const recetas = await loadRecetas();
debugger
const html = render(recetas);
await writeFile('recetas.html', html);

