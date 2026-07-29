// ============================================
// PARTE A - Array de valores simples
// ============================================

// 1. Declarar el array "categorias"
let categorias = ["Blues", "Pop", "House", "Country"];

// 2. Mostrar array completo y cantidad de elementos
console.log("--- PARTE A ---");
console.log(categorias);
console.log("Cantidad de categorías: " + categorias.length);

// 3. Mostrar primer y último elemento
console.log("Primera categoría: " + categorias[0]);
console.log("Última categoría: " + categorias[categorias.length - 1]);

// 4. Incorporar categoría adicional con .push()
categorias.push("Gospel");
console.log("Cantidad de categorías: " + categorias.length);

// 5. Eliminar último elemento con .pop()
let categoriaEliminada = categorias.pop();
console.log("Categoría eliminada: " + categoriaEliminada);


// ============================================
// PARTE B - Objeto: ficha de datos
// ============================================

// 6. Declarar el objeto "usuario"
let usuario = {
    nombre: "Adrián",
    edad: 33,
    ciudad: "Posadas",
    temaFavorito: "Jolene de Dolly Parton"
};

// 7. Mostrar frase con notación de punto
console.log("--- PARTE B ---");
console.log("Hola, soy " + usuario.nombre + 
            ", tengo " + usuario.edad + " años, " +
            "vivo en " + usuario.ciudad + 
            " y mi tema favorito es " + usuario.temaFavorito + ".");

// 8. Modificar una propiedad y mostrarla actualizada
usuario.edad = 34;
console.log("Edad actualizada: " + usuario.edad);

// 9. Agregar propiedad nueva y mostrar objeto completo
usuario.email = "adrian@email.com";
console.log(usuario);


// ============================================
// PARTE C - Array de objetos
// ============================================

// 10. Declarar el array "catalogo"
let catalogo = [
    { titulo: "Matrix", categoria: "acción", puntaje: 9, visto: true },
    { titulo: "Superbad", categoria: "comedia", puntaje: 8, visto: true },
    { titulo: "El Padrino", categoria: "drama", puntaje: 10, visto: false },
    { titulo: "Toy Story", categoria: "animación", puntaje: 9, visto: true }
];

// 11. Mostrar título del primer elemento y puntaje del tercero
console.log("--- PARTE C ---");
console.log("Título del primer elemento: " + catalogo[0].titulo);
console.log("Puntaje del tercer elemento: " + catalogo[2].puntaje);

// 12. Línea descriptiva del segundo elemento
let segundo = catalogo[1];
let estado = segundo.visto ? "visto" : "pendiente";
console.log(segundo.titulo + " — " + segundo.categoria + " — " + segundo.puntaje + "/10 — " + estado);

// 13. Modificar puntaje de un elemento
catalogo[0].puntaje = 10;
console.log("Puntaje actualizado de " + catalogo[0].titulo + ": " + catalogo[0].puntaje);

// 14. Incorporar quinto elemento con .push()
catalogo.push({ titulo: "Inception", categoria: "ciencia ficción", puntaje: 9, visto: true });
console.log("Cantidad total de elementos: " + catalogo.length);


// ============================================
// PARTE D - Destructuring
// ============================================

console.log("--- PARTE D ---");

// 15. Destructuring de objeto sobre el primer elemento del catálogo
let { titulo, categoria, puntaje, visto } = catalogo[0];
let estadoD = visto ? "visto" : "pendiente";
console.log(titulo + " — " + categoria + " — " + puntaje + "/10 — " + estadoD);

// 16. Destructuring de objeto sobre "usuario"
let { nombre, ciudad } = usuario;
console.log("Nombre: " + nombre);
console.log("Ciudad: " + ciudad);

// 17. Destructuring de array sobre "catalogo"
let [primero, segundoElemento] = catalogo;
console.log("Título del primero: " + primero.titulo);
console.log("Título del segundo: " + segundoElemento.titulo);
