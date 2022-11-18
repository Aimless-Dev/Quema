export const getSubCategories = async ( catId ) => {
    const url           = 'https://muebleria-saldana-api.herokuapp.com/v1/sub_category?category_id=' + catId
    
    const res           = await fetch( url )
    
    const { data }      = await res.json()

    const subCategories    = data.map( (sub) => ({
        id      : sub.id,
        name    : sub.name
    }))

    return {
        subCategories
    }
}