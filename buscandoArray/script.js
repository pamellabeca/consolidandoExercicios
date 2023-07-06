//Exemplo proposto na descrição do vídeo
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function numCategoriasELivros(booksByCategory) {
    let numCategoria = booksByCategory.length
    console.log("Número de Categoria: " + numCategoria)
    console.log("")

    for (let i = 0; i < booksByCategory.length; i++) {
      let categoria = booksByCategory[i].category
      let numLivros = booksByCategory[i].books.length
  
      console.log("Categoria: " + categoria)
      console.log("Número de livros: " + numLivros)
      console.log("")
    }
}  

function numAutores(booksByCategory){
    let autores = []
    for (let i = 0; i < booksByCategory.length; i++) {
        let livros = booksByCategory[i].books

        for (let j = 0; j < livros.length; j++) {
            let autor = livros[j].author

            if (!autores.includes(autor)) {
                autores.push(autor);
            }
        }
    }
    let numeroAutores = autores.length
    console.log("Número de autores: " + numeroAutores)
    console.log("")
}

function livrosPorAutor(booksByCategory, nomeAutor) {
    console.log("Livros do autor: " + nomeAutor)
    for (let i = 0; i < booksByCategory.length; i++) {
        let livros = booksByCategory[i].books;

        for (let j = 0; j < livros.length; j++) {
            let autor = livros[j].author;

            if (autor === nomeAutor) {
                console.log(" # " + livros[j].title);
            }
        }
    }
    console.log("")
}

function rodarPrograma(){
    numCategoriasELivros(booksByCategory)
    numAutores(booksByCategory)
    livrosPorAutor(booksByCategory, 'Augusto Cury')
    livrosPorAutor(booksByCategory, 'Stephen R. Covey')
    livrosPorAutor(booksByCategory, 'T. Harv Eker')
}

rodarPrograma()