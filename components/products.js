import { getProducts } from "../helpers/getProducts.js"
import { getProduct } from "../helpers/getProduct.js"

const container = document.getElementById('container')

window.addEventListener('DOMContentLoaded', async (e) => {
    let subCategoryId = location.href.split('?')
    subCategoryId = subCategoryId[1].split('=')
    subCategoryId = subCategoryId[1]
    const { products } = await getProducts(null, subCategoryId)

    container.innerHTML = products.map( ( item ) => {
        let modal = `
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                </div>
            </div>
        </div>
        `
        return `
        <div class="col-2" >
            <div class="card" style="width: 30rem;">
            <img src="${ item.images[0].url }" class="card-img-top" id="img">
                <div class="card-body">
                    <h2 class="card-title">${ item.name }</h2>
                    <h4 class="card-text">$${ item.price }</h4>
                    <a href="${ item.id }" class="ver" data-bs-toggle="modal" data-bs-target="#productModal">Ver producto</a>
                    ${ modal }
                </div>
            </div>
		</div>
        `
    })

})