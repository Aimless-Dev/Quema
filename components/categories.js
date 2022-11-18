import { getCategories } from "../helpers/getCategories.js"
import { getSubCategories } from "../helpers/getSubCategories.js"
const ul = document.getElementById('categories')

window.addEventListener('DOMContentLoaded', async (e) => {
    const { categories } = await getCategories()
    categories.map(async (cate) => {
        const li        = document.createElement('li')
        const ulSub     = document.createElement('ul')
        li.className    = 'menu-parent'
        li.textContent  = cate.name
        ulSub.className = 'sub-menu'
        
        const { subCategories } = await getSubCategories(cate.id)
        subCategories.map((sub) => {
            const liSub = document.createElement('li')
            const aSub  = document.createElement('a')   
            aSub.href = '/products.html?sub_category_id=' + sub.id
            aSub.text = sub.name
            liSub.appendChild(aSub)
            ulSub.appendChild(liSub)
        })

        li.appendChild(ulSub)
        ul.appendChild(li)
    })
})