

const products = [
    {
        id: '1',
        name: 'Azucena Sucronense',
        price: 10,
        category: 'Azucena',
        img :'https://1.bp.blogspot.com/-A-qmPFmMUiQ/Ub5GbItQJnI/AAAAAAAACEI/56vPIsLFgVw/s1600/mp_lilium_asia_u_2013_02.jpg',
        stock: 11,
        Description: 'Descripcion del Iphone 14'
    },

    {
        id: '2',
        name: 'Lirio Noble',
        price: 8,
        category: 'Realeza',
        img:'https://www.bourguignonfloristas.es/media/wysiwyg/lirio-blanco-rosa.jpg',
        stock: 23,
        Description: 'Descripcion del Iphone 13'
    }
    
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
    }, 500)
   })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductByCategory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
    }, 500)
   })
}