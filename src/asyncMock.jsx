const products =[
    {
      autor: "Jorge Luis Borges",
      titulo: "Aleph",
      precio: 900,
      imagen: "AlephBorges.jpg",
      category: 'Ficcion',
      stock: 25,
      id: "1",
    },
    {
      autor: "Gabriel García Marquez",
      titulo: "Cien años de Soledad",
      precio: 4500,
      imagen: "CienSoledadMarquez.jpg",
      category: 'Ficcion',
      stock: 22,      
      id: "2",
    },
    {
      autor: "Isabel Allende",
      titulo: "Paula",
      precio: 2800,
      imagen: "PaulaAllende.jpg",
      category: 'Novelas',
      stock: 21,      
      id: "3",
    },
    {
      autor: "Jorge Luis Borges",
      titulo: "Ficciones",
      precio: 1400,
      imagen: "FiccionesBorges.jpg",
      category: 'Ficcion',
      stock: 20,      
      id: "4",
    },
    {
      autor: "Mario Benedetti",
      titulo: "Andamios",
      precio: 2200,
      imagen: "AndamiosBenedetti.jpg",
      category: 'Novelas',
      stock: 32,      
      id: "5",
    },
    {
      autor: "Mario Vargas Llosa",
      titulo: "La ciudad y los perros",
      precio: 2000,
      imagen: "CiudadPerrosVargasLlosa.jpg",
      category: 'Ficcion',
      stock: 29,      
      id: "6",
    },
    {
      autor: "Ronnie Wolff",
      titulo: "Elige tu propia aventura",
      precio: 3400,
      imagen: "libroNuevo.jpg",
      category: 'Infantiles',
      stock: 15,      
      id: "7",
    },
    {
      autor: "Felix Blanco",
      titulo: "Aprender Vue js",
      precio: 5300,
      imagen: "libroNuevo.jpg",
      category: 'Ficcion',
      stock: 20,      
      id: "8",
    },
    {
      autor: "Neal Veum",
      titulo: "Aprender jugando",
      precio: 2300,
      imagen: "libroNuevo.jpg",
      category: 'Infantiles',
      stock: 24,      
      id: "9",
    },  
]

    // fetch("https://649e5806245f077f3e9c4bc1.mockapi.io/libros")
    // .then((res) => res.json())
    // .then((libros) => {
    //   this.libros = libros;
    //   this.loading = false;
    // });

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)        
    })
}

export const getProductById =(productId) => {
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))      
    }, 500)
  })
}

export const getProductsByCategory =(categoryId) => {
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))      
    }, 500)
  })
}