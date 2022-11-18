export const getProducts = async ( catId = null, subId = null ) => {
    let url = 'https://muebleria-saldana-api.herokuapp.com/v1/products'

    if (catId && !subId)url = 'https://muebleria-saldana-api.herokuapp.com/v1/products?category_id=' + catId
    if (!catId && subId)url = 'https://muebleria-saldana-api.herokuapp.com/v1/products?sub_category_id=' + subId
    
    const res           = await fetch( url )
    
    const { data }      = await res.json()

    const products    = data.map( (product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        oldPrice: product.old_price,
        images: product.images_item
    }))

    return {
        products
    }
}