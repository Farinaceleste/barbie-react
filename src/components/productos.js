const products = [
    {
        id: "barbie1",
        titulo: "Barbie Pelicula",
        imagen: "https://i.ibb.co/2P8WN32/barbie-pelicula-1.jpg",
        categoria: "barbie",
        precio: 50,
        count: 0,
        stock: 3,
        descripcion: "Esta muñeca coleccionable imita el aspecto de Margot Robbie interpretando a Barbie en la película de Barbie™ con un conjunto azul a cuadros combinado a la perfección."
    },
    {
        id: "barbie2",
        titulo: "Barbie Flex",
        imagen: "https://i.ibb.co/sKTRwd6/barbie-flexible-2.jpg",
        categoria: "barbie",
        precio: 48,
        count: 0,
        stock: 1,
        descripcion: "¡Barbie siempre anda de aquí para allá y ahora puede moverse más que nunca! Con las muñecas Barbie Movimientos sin límites podrás hacer lo que quieras."

    },
    {
        id: "barbie3",
        titulo: "Barbie Pool",
        imagen: "https://i.ibb.co/z70vRmg/pileta-3.png",
        categoria: "barbie",
        precio: 78,
        count: 0,
        stock: 2, 
        descripcion: "Disfruta de la diversión en verano con Barbie y su piscina. Es fácil de llenar y vaciar para montar una fiesta junto a la piscina al instante."
    },
    {
        id: "barbie4",
        titulo: "Barbie Pediatra",
        imagen: "https://i.ibb.co/GJT4VGk/pediatra-4.jpg",
        categoria: "barbie",
        precio: 65,
        count: 0,
        stock: 0, 
        descripcion: "¡Explora un mundo lleno de diversión en el cuidado de los bebés con el conjunto de juego de Barbie Pediatra! "
    },
    {
        id: "barbie5",
        titulo: "Barbie Western",
        imagen: "https://i.ibb.co/pdcmVCr/pelicula-5.jpg",
        categoria: "barbie",
        precio: 52,
        count: 0,
        stock: 8, 
        descripcion: "Esta muñeca Barbie® de coleccionista acapara todas las miradas con su look totalmente rosa inspirado en el traje del lejano Oeste que lleva Barbie en la película de Barbie™."
    },
    {
        id: "barbie6",
        titulo: "Barbie Película",
        imagen: "https://i.ibb.co/CWvgfzf/rollers-6.jpg",
        categoria: "barbie",
        precio: 50,
        count: 0,
        stock: 3, 
        descripcion: "Esta muñeca coleccionable Barbie acapara todas las miradas con su conjunto de patinadora totalmente inspirado en la película de Barbie."
    },
    {
        id: "barbie7",
        titulo: "Ken Playero",
        imagen: "https://i.ibb.co/dMbgD90/playero-7.jpg",
        categoria: "ken",
        precio: 86,
        count: 0,
        stock: 5, 
        descripcion: "Este muñeco de Ken® es un homenaje a la película de Barbie™, lo que lo convierte en el regalo perfecto para fans y coleccionistas."
    },
    {
        id: "barbie8",
        titulo: "Barbie Food Truck",
        imagen: "https://i.ibb.co/DRm7zDx/food-track-8.jpg",
        categoria: "barbie",
        precio: 110,
        count: 0,
        stock: 8, 
        descripcion: "Las muñecas Barbie Skipper y Chelsea están cocinando divertidos platos en su restaurante sobre ruedas con los que despertar la imaginación de las niñas. "

    },
    {
        id: "barbie9",
        titulo: "Ken Surf",
        imagen: "https://i.ibb.co/q9Yb7Mq/ken-surf-9.jpg",
        categoria: "ken",
        precio: 65,
        count: 0,
        stock: 7, 
        descripcion: "Estos muñecos surferos de Barbie y Ken están listos para disfrutar de un día de agua salada y sol en Malibú con sus coloridas tablas de surf."

    },
    {
        id: "barbie10",
        titulo: "Ken Vaquero",
        imagen: "https://i.ibb.co/55sZsYQ/ken-vaquero-10.jpg",
        categoria: "ken",
        precio: 66,
        count: 0,
        stock: 4, 
        descripcion: "Este muñeco Ken coleccionable acapara todas las miradas con su conjunto de vaquero inspirado en el estilo de Ken en la película de Barbie."
    },
    {
        id: "barbie11",
        titulo: "Barbie Fotógrafa",
        imagen: "https://i.ibb.co/RT5wQXg/fotografa-11.jpg",
        categoria: "barbie",
        precio: 88,
        count: 0,
        stock: 10, 
        descripcion: "Explora un mundo de diversión fotográfica con la Barbie fotógrafa."
    },
    {
        id: "barbie12",
        titulo: "Ken Fashionista",
        imagen: "https://i.ibb.co/kDtD1D4/ken-12.jpg",
        categoria: "ken",
        precio: 40,
        count: 0,
        stock: 3, 
        descripcion: "Barbie y Ken Fashionistas celebran la diversidad y ofrecen infinitas posibilidades para imaginar historias y descubrir el mundo de la moda."

    },
    {
        id: "barbie13",
        titulo: "Barbie Científica",
        imagen: "https://i.ibb.co/12hBRCr/cientifica-13.jpg",
        categoria: "barbie",
        precio: 70,
        count: 0,
        stock: 4, 
        descripcion: "¡Explora un mundo lleno de diversión y ciencia con la muñeca Barbie científica!"
    },
    {
        id: "barbie14",
        titulo: "Barbie Movie",
        imagen: "https://i.ibb.co/CMqFg9z/pelicula-14.jpg",
        categoria: "barbie",
        precio: 60,
        count: 0,
        stock: 6, 
        descripcion: "Esta muñeca coleccionable es idéntica a Margot Robbie interpretando a Barbie en la película de Barbie con un conjunto totalmente rosa de la cabeza a los pies."
    },
    {
        id: "barbie15",
        titulo: "Ken Fútbol",
        imagen: "https://i.ibb.co/3CX2d7S/futbol-15.jpg",
        categoria: "ken",
        precio: 75,
        count: 0,
        stock: 7, 
        descripcion: "Prepárate para jugar a uno de los deportes favoritos de las niñas con los muñecos Barbie y Ken Futbolista. "
    },
    {
        id: "barbie16",
        titulo: "Ken Movie",
        imagen: "https://i.ibb.co/T8f32ZX/pelicula-16.jpg",
        categoria: "ken",
        precio: 50,
        count: 0,
        stock: 6, 
        descripcion: "Este muñeco de Ken® para coleccionistas lleva un conjunto completamente vaquero que acaparará todas las miradas. Ken® lleva el chaleco desabrochado y sus bóxers icónicos asoman un poco por fuera del pantalón para capturar el estilo inconfundible de Ken en la película."
    },
    {
        id: "barbie17",
        titulo: "Ken Rock",
        imagen: "https://i.ibb.co/ckKh0Xr/rockero-17.jpg",
        categoria: "ken",
        precio: 100,
        count: 0,
        stock: 5, 
        descripcion: "Este muñeco Ken coleccionable llama la atención con su llamativo conjunto inspirado en el estilo de Ken rockero rebelde en la película de Barbie. "

    },
    {
        id: "barbie18",
        titulo: "Barbie Deluxe",
        imagen: "https://i.ibb.co/TWFD1wm/deluxe-18.jpg",
        categoria: "barbie",
        precio: 250,
        stock: 3, 
        descripcion: "Inspirada en la Barbie presidenta de la película de Barbie, esta muñeca coleccionable brilla con luz propia al lucir un precioso vestido que rinde homenaje a su cargo."
    },
    {
        id: "barbie19",
        titulo: "Barbie Día de Spa",
        imagen: "https://i.ibb.co/WnMRSvm/spa-19.jpg",
        categoria: "barbie",
        precio: 150,
        count: 0,
        stock: 2, 
        descripcion: "El conjunto de juego Día de spa y mascarilla facial de Barbie rinde homenaje a una de sus formas favoritas de recargar energía: la mascarilla facial."
    },
    {
        id: "barbie20",
        titulo: "Barbie Gimnasta",
        imagen: "https://i.ibb.co/3RyzCBs/gimnasta-20.jpg",
        categoria: "barbie",
        precio: 120,
        count: 0,
        stock: 5, 
        descripcion: "¡Explora todo un mundo de diversión deportiva con el conjunto de juego de Barbie Gimnasta! "
    }

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
    
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.categoria === productCategory))
        })
    })
}

