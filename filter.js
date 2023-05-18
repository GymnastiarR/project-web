function filterProducts() {
  // Get the selected filter values
  const filters = Array.from( document.querySelectorAll( 'input[type="checkbox"]:checked' ) ).map( checkbox => checkbox.value );

  if ( !filters[ 0 ] ) {
    rendering( products );
    return;
  }

  const selectedProduct = products.filter( ( product ) => {
    if ( filters.includes( product.kategori ) ) {
      return product;
    }
  } );

  rendering( selectedProduct );
}

const filterForm = document.getElementById( 'filterForm' );
filterForm.addEventListener( 'submit', event => {
  event.preventDefault();
  filterProducts();
} );

function rendering( products ) {
  const container = document.querySelector( '.pro-container' );
  container.innerHTML = '';

  products.forEach( ( product ) => {
    const divProduct = document.createElement( 'div' );
    divProduct.classList.add( 'pro' );
    divProduct.setAttribute( 'data-categories', `${product.kategori}` );
    const data = `
  <img src="${product.img}" alt="" />
  <div class="des">
    <span>${product.merek}</span>
    <h5>${product.name}</h5>
    <div class="star">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <h4>Rp 7.000.000</h4>
  </div>
  <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
  `;
    divProduct.innerHTML = data;
    container.appendChild( divProduct );
  } );
}

const products = [
  {
    name: 'EVGA Geforce-GTX-1080-11GB',
    merek: 'nvidia',
    img: 'img/EVGA Geforce-GTX-1080-11GB.jpg',
    kategori: 'VGA'
  },
  {
    name: 'EVGA Geforce-GTX-1080-11GB',
    merek: 'nvidia',
    img: 'img/EVGA Geforce-GTX-1080-11GB.jpg',
    kategori: 'Processor'
  },
];

rendering( products );
