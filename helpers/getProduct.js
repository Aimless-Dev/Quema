export const getProduct = async ( id ) => {
    let url = 'https://muebleria-saldana-api.herokuapp.com/v1/products/' + id

    const res           = await fetch( url )
    
    const { data }      = await res.json()

    const dataProduct = {
        id:                     data.id,
        name:                   data.name,
        description:            data.description,
        category_name:          data.category_name,
        sub_category_name:      data.sub_category_name,
        price:                  data.price,
        old_price:              data.old_price,
        quantity:               data.quantity,
        images:                 data.images,
        images_item:            data.images_item
    }

    return {
        dataProduct
    }
}