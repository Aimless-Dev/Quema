export const getCategories = async () => {
    const url           = 'https://muebleria-saldana-api.herokuapp.com/v1/categories'
    
    const res           = await fetch( url )
    
    const { data }      = await res.json()

    const categories    = data.map( (category) => ({
        id      : category.id,
        name    : category.name
    }))

    return {
        categories
    }
}