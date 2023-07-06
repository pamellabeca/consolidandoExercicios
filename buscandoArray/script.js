function contarCategoriasLivros(booksByCategory) {
    let numcategoria = booksByCategory.length
    console.log("Número de Categoria: " + numcategoria)
    console.log("")

    for (let i = 0; i < booksByCategory.length; i++) {
      let categoria = booksByCategory[i].category
      let numBooks = booksByCategory[i].books.length
  
      console.log("Categoria: " + categoria)
      console.log("Número de livros: " + numBooks)
      console.log("")
    }
}  



contarCategoriasLivros(booksByCategory)
