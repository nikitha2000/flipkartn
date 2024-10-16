const button = document.querySelector('.login-text');
const hoverContent = document.querySelector('.search-dropdown');

button.addEventListener('mouseenter', () => {
    hoverContent.style.visibility = 'visible';
    hoverContent.style.opacity = '1';
});

button.addEventListener('mouseleave', () => {
   hoverContent.style.visibility = 'hidden';
   hoverContent.style.opacity = '0';
});


// ----------------------------------------------------------------more----------------------------------------------------------
const morearr = document.querySelector('.more-container');
const moreContent = document.querySelector('.more-dropdown');
const arrup = document.querySelector('.arrow-down');

morearr.addEventListener('mouseenter', () => {
    arrup.classList.add ('active');
    moreContent.style.visibility = 'visible';
    moreContent.style.opacity = '1';

});

morearr.addEventListener('mouseleave', () => {
   arrup.classList.remove('active');
   moreContent.style.visibility = 'hidden';
   moreContent.style.opacity = '0';
});
// ------------------------------------------------------------------------header2 dropdown---------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    fetch('header2.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(categoriesData => {
            const categories = document.querySelectorAll('.desk-list1');
            const dropdown = document.querySelector('.dropdown-h2');

            categories.forEach(category => {
                const svg = category.querySelector('.arrow-down');

                category.addEventListener('mouseenter', () => {
                    const categoryName = category.textContent.trim().toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '_');


                    if (categoriesData[categoryName]) {
                        const accessoriesTitle = categoriesData[categoryName].mobile_accessories.title;
                        const accessoriesItems = categoriesData[categoryName].mobile_accessories.items;

                        dropdown.innerHTML = `
                            <div class="dropdown-part1">
                                <a href="#" class="mobiles mbold">${categoriesData[categoryName].title}</a>
                                ${categoriesData[categoryName].mobiles.map(item => `<a href="#" class="mobiles">${item}</a>`).join('')}
                            </div>
                            <div class="dropdown-part2">
                                <a href="#" class="mobiles mbold">${accessoriesTitle}</a>
                                ${accessoriesItems.map(item => `<a href="#" class="mobiles">${item}</a>`).join('')}
                            </div>
                        `;

                        dropdown.style.visibility = 'visible';
                        dropdown.style.opacity = '1';
                        svg.classList.add('active');
                    }
                });

                category.addEventListener('mouseleave', () => {
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.opacity = '0';
                    svg.classList.remove('active');
                });
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
// ------------------------------------------------------------------------------section4 dropdown-------------------------------------------------------------------------------------------------

let containers = document.querySelectorAll('.section4-container, .section6-container, .section7-container, .section8-container, .section9-container, .section10-container, .section11-container, .section12-container, .section13-container, .section14-container, .section15-container, .section16-container, .section17-container, .section18-container, .section19-container, .section20-container, .section21-container, .section22-container, .section23-container');

containers.forEach(container => {

let dropdown = container.querySelector('.dropdown');
let svgg = container.querySelector('.arrow-down');

container.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    
    if (dropdown.style.display === 'block') {
        svgg.classList.add('active');
    } else {
        svgg.classList.remove('active');
    }
   });

});

// -----------------------------------------------------------------------------------------------------------sectionrepeation-------------------
fetch('options.json')
  .then(response => {
     if(!response.ok)  {
        throw new Error('Network response was not ok');
     }
     return response.json();
  })
  .then(data => {
    const strgContainer = document.getElementById('dropdown-strg-container');
    let strgInnerHTML = ``;

    data.storage.forEach(option => {
    strgInnerHTML += `
        <div class="strg-text" title="${option.title}">
            <div class="strg-content">
                    <label class="strg-text-label">
                        <input type="checkbox" class="strg-bx" readonly>
                        <div class="square"></div>
                         <div class="strg-txt">${option.title}</div>
                 </label>
            </div>
        </div>
    `
  });
  strgContainer.innerHTML = strgInnerHTML;

  const batteryContainer = document.getElementById('dropdown-batt-container');
  let battInnerHTML = ``;

  data.battery.forEach(option => {
       battInnerHTML +=  `
               <div class="strg-text" title="${option.title}">
            <div class="strg-content">
                    <label class="strg-text-label">
                        <input type="checkbox" class="strg-bx" readonly>
                        <div class="square"></div>
                         <div class="strg-txt">${option.title}</div>
                 </label>
            </div>
        </div>
       `
  });
  batteryContainer.innerHTML = battInnerHTML;

  const screenContainer = document.getElementById('dropdown-screen-container');
  let screenInnerHTML = ``;

  data.screen.forEach(option => {
       screenInnerHTML +=  `
               <div class="strg-text" title="${option.title}">
            <div class="strg-content">
                    <label class="strg-text-label">
                        <input type="checkbox" class="strg-bx" readonly>
                        <div class="square"></div>
                         <div class="strg-txt">${option.title}</div>
                 </label>
            </div>
        </div>
       `
  });
  screenContainer.innerHTML = screenInnerHTML;

  const cameraContainer = document.getElementById('dropdown-camera-container');
  let cameraInnerHTML = ``;

  data.camera.forEach(option => {
       cameraInnerHTML +=  `
               <div class="strg-text" title="${option.title}">
            <div class="strg-content">
                    <label class="strg-text-label">
                        <input type="checkbox" class="strg-bx" readonly>
                        <div class="square"></div>
                         <div class="strg-txt">${option.title}</div>
                 </label>
            </div>
        </div>
       `
  });
  cameraContainer.innerHTML = cameraInnerHTML;
  
  const secondContainer = document.getElementById('dropdown-second-container');
 let secondInnerHTML = ``;

 data.second.forEach(option => {
    secondInnerHTML += `
       <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
 })

 secondContainer.innerHTML = secondInnerHTML;

 const processorContainer = document.getElementById('dropdown-processor-container');
 let processorInnerHTML = ``;

 data.processor.forEach(option => {
  processorInnerHTML += `
       <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
  `
 })
 processorContainer.innerHTML = processorInnerHTML;

 const specialityContainer = document.getElementById('dropdown-speciality-container');
 let specialityInnerHTML = ``;

 data.speciality.forEach(option => {
    specialityInnerHTML += `
        <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
  })
  specialityContainer.innerHTML = specialityInnerHTML;

  const resolutionContainer = document.getElementById('dropdown-resolution-container');
  let resolutionInnerHTML = ``;

  data.resolution.forEach(option => {
    resolutionInnerHTML += `
       <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
  })
  resolutionContainer.innerHTML = resolutionInnerHTML;

  const operatingContainer = document.getElementById('dropdown-operating-container');
  let operatingInnerHTML = ``;

  data.operating.forEach(option => {
    operatingInnerHTML += `
      <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
  });
  operatingContainer.innerHTML = operatingInnerHTML;

  const networkContainer = document.getElementById('dropdown-network-container');
  let networkInnerHTML = ``;

  data.network.forEach(option => {
    networkInnerHTML += `
      <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
});
networkContainer.innerHTML = networkInnerHTML;

const simContainer = document.getElementById('dropdown-sim-container');
let simInnerHTML = ``;

data.sim.forEach(option => {
    simInnerHTML += `
       <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
});
simContainer.innerHTML = simInnerHTML;
  
const offerContainer = document.getElementById('dropdown-offer-container');
let offerInnerHTML = ``;

data.offer.forEach(option => {
    offerInnerHTML += `
       <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
});
offerContainer.innerHTML = offerInnerHTML;

const featuresContainer = document.getElementById('dropdown-features-container');
let featuresInnerHTML = ``;

data.features.forEach(option => {
    featuresInnerHTML += `
       <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
});
featuresContainer.innerHTML = featuresInnerHTML;

const typeContainer = document.getElementById('dropdown-type-container');
let typeInnerHTML = ``;

data.type.forEach(option => {
    typeInnerHTML += `
       <div class="strg-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx" readonly>
                 <div class="square"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
});
typeContainer.innerHTML = typeInnerHTML;

const discountContainer = document.getElementById('dropdown-discount-container');
let discountInnerHTML = ``;

data.discount.forEach(option => {
    discountInnerHTML += `
       <div class="strg-text disc-text" title="${option.title}">
          <div class="strg-content">
             <label class="strg-text-label">
                  <input type="checkbox" class="strg-bx  discount-bx" readonly>
                 <div class="squares"></div>
                 <div class="strg-txt">${option.title}</div>
             </label>
          </div>
       </div>
    `
});
discountContainer.innerHTML = discountInnerHTML;

})

// ===========================================================================================================.nav-list turning blue===========================================

const navItems = document.querySelectorAll('.nav-list');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('blue'));

        item.classList.add('blue');
    });
});

// ==================================================================================================mobile-details section repeat=============================================




// async function fetchProducts() {
//    try {
//        const response = await fetch('mobile.json'); 
//        const products = await response.json();
       
//        const productContainer = document.getElementById('product-repeat-container');
       
//        products.forEach(product => {
//            const productHTML = `
//                <div class="topsection2-section2">
//                    <div class="topsc22-container">
//                        <div class="topsc22-content">
//                           <div class="topsc22-padding">
//                              <div class="mobile-img-section">
//                                  <div class="mobile-img">
//                                    <div>
//                                       <div class="mimg">
//                                          <img src="${product.image}" alt="">
//                                       </div>
//                                    </div>
//                                  </div>
//                                  <div class="compare">
//                                     <div class="compare-section">
//                                         <span class="compare-box">
//                                              <label class="cmpr-l">
//                                                  <input type="checkbox" class="cmpr-ck">
//                                                  <div class="square"></div>
//                                               </label>
//                                           </span>
//                                         <label class="compare-label">
//                                            <span>Add to Compare</span>
//                                         </label>
//                                     </div>
//                                  </div>
//                                  <div class="heart">
//                                     <div class="heart-section">
//                                        <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16">
//                                            <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
//                                        </svg>
//                                     </div>
//                                  </div>
//                              </div>
//                              <div class="details-section">
//                                <div class="details-section-container">
//                                    <div class="details-section-left">
//                                        <div class="mobile-name">${product.name}</div>
//                                        <div class="rating">
//                                            <span class="stars-container">
//                                                <div class="stars">
//                                                    ${product.rating}
//                                                    <img src="/assets/stars.svg" alt="">
//                                                </div>
//                                            </span>
//                                            <span class="star-writing">
//                                                <span>${product.ratingsCount}</span>
//                                            </span>
//                                        </div>
//                                        <div class="about">
//                                            <ul class="about-ul">
//                                                ${product.specs.map(spec => `<li class="about-li">${spec}</li>`).join('')}
//                                            </ul>
//                                        </div>
//                                    </div>
//                                    <div class="details-section-right">
//                                        <div class="mobile-price-section">
//                                            <div class="price-content">
//                                                <div class="new-price">${product.newPrice}</div>
//                                                <div class="old-price">${product.oldPrice}</div>
//                                                <div class="percentage-off">
//                                                    <span>${product.discount}</span>
//                                                </div>
//                                            </div>
//                                            <div class="delivery-content">
//                                                <div>
//                                                    <div class="delivery-text">${product.delivery}</div>
//                                                </div>
//                                            </div>
//                                        </div>
//                                        <div class="fassured-2">
//                                            <img src="/assets/fassured.png" alt="">
//                                        </div>
//                                        <div class="save-extra-container">
//                                            <div class="save-extra-content">
//                                               <div class="save-extra">Save extra with combo offers</div>
//                                            </div>
//                                        </div>
//                                        <div class="upto-cont">
//                                           <div class="save-extra-content">
//                                                <div class="upto-text">${product.exchangeOffer}</div>
//                                            </div>
//                                        </div>
//                                    </div>
//                                </div>
//                              </div>
//                           </div>
//                        </div>
//                    </div>
//                </div>
//            `;

          
//            productContainer.innerHTML += productHTML;
//        });
//    } catch (error) {
//        console.error('Error fetching products:', error);
//    }
// }


// fetchProducts();

// ================================================================================================================================================================

let products = [];
let currentPage = 1;
const itemsPerPage = 15;
let filteredProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch('mobile.json'); // Adjust the path as necessary
        products = await response.json();
        filteredProducts = products;
        renderProducts(currentPage, filteredProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function renderProducts(page, productsToRender)  {
    const productContainer = document.getElementById('product-repeat-container');
    const header2 = document.querySelector('.top2-header');
    productContainer.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = productsToRender.slice(start, end);

    paginatedProducts.forEach(product => {
        const productHTML = `
            <div class="topsection2-section2">
                <div class="topsc22-container">
                    <div class="topsc22-content">
                        <div class="topsc22-padding">
                            <div class="mobile-img-section">
                                <div class="mobile-img">
                                    <div>
                                        <div class="mimg">
                                            <img src="${product.image}" alt="${product.name}">
                                        </div>
                                    </div>
                                </div>
                                <div class="compare">
                                    <div class="compare-section">
                                        <span class="compare-box">
                                            <label class="cmpr-l">
                                                <input type="checkbox" class="cmpr-ck">
                                                <div class="square"></div>
                                            </label>
                                        </span>
                                        <label class="compare-label">
                                            <span>Add to Compare</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="heart">
                                    <div class="heart-section">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16">
                                            <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="details-section">
                                <div class="details-section-container">
                                    <div class="details-section-left">
                                        <div class="mobile-name">${product.name}</div>
                                        <div class="rating">
                                            <span class="stars-container">
                                                <div class="stars">
                                                    ${product.rating}
                                                    <img src="/assets/stars.svg" alt="">
                                                </div>
                                            </span>
                                            <span class="star-writing">
                                                <span>${product.ratingsCount}</span>
                                            </span>
                                        </div>
                                        <div class="about">
                                            <ul class="about-ul">
                                                ${product.specs.map(spec => `<li class="about-li">${spec}</li>`).join('')}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="details-section-right">
                                        <div class="mobile-price-section">
                                            <div class="price-content">
                                                <div class="new-price">${product.newPrice}</div>
                                                <div class="old-price">${product.oldPrice}</div>
                                                <div class="percentage-off">
                                                    <span>${product.discount}</span>
                                                </div>
                                            </div>
                                            <div class="delivery-content">
                                                <div>
                                                    <div class="delivery-text">${product.delivery}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fassured-2">
                                            <img src="/assets/fassured.png" alt="">
                                        </div>
                                        <div class="save-extra-container">
                                            <div class="save-extra-content">
                                                <div class="save-extra">Save extra with combo offers</div>
                                            </div>
                                        </div>
                                        <div class="upto-cont">
                                            <div class="save-extra-content">
                                                <div class="upto-text">${product.exchangeOffer}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
    updateHeader(start, end, productsToRender.length);
    updatePaginationLinks(page);
}

function updateHeader(start, end, totalResults){
   const header = document.querySelector('.top2-header');
   header.innerHTML = `Showing ${start + 1} – ${Math.min(end, totalResults)} of ${totalResults} results for "mobile"`;
}

function updatePaginationLinks(page) {
    const links = document.querySelectorAll('.num-nav .number-a');
    links.forEach(link => {
        link.classList.remove('rblue');
    });
    links[page - 1].classList.add('rblue');
}

function changePage(page) {
    currentPage = page;
    renderProducts(currentPage, filteredProducts);
    document.getElementById('current-page').textContent = currentPage;
}

// Initial fetch and render
fetchProducts();

// --------------------------------------------------------------------------------------------------filter based on the name -----------------------------------------------------------------------------------------------

let selectedBrands = [];
let selectedRAMs = [];
let selectedDiscount = [];
let selectedRatings = [];

document.addEventListener('DOMContentLoaded', () => {
    
  
   
    const squares = document.querySelectorAll('.squares');
    const minPriceSelect = document.getElementById('minPriceSelect');
    const maxPriceSelect = document.getElementById('maxPriceSelect');
    const ramCheckboxes = document.querySelectorAll('.gb4txt');
    const ratingCheckboxes = document.querySelectorAll('.scheckbox');
    const sortByOptions = document.querySelectorAll('.nav-list');
   
   
    


    maxPriceSelect.value = 'max'; 

    sortByOptions.forEach(option => {
        option.addEventListener('click', function() {
            sortByOptions.forEach(opt => opt.classList.remove('blue'));

            this.classList.add('blue');

            const sortBy = this.innerText;
            filterProducts(sortBy)
        })
    })


    function filterProducts(sortBy = null) {
        
        const minValue = parseInt(minPriceSelect.value) || 0;
        let maxValue;

        if (maxPriceSelect.value === '₹30000+') {
            maxValue = 30000;
        } else {
            maxValue = parseInt(maxPriceSelect.value) || Infinity;
        }
       
            filteredProducts = products.filter(product => {
            const productPrice = parseInt(product.newPrice.replace(/[^0-9]/g, ''));
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(selectedBrand => product.name.toLowerCase().includes(selectedBrand.toLowerCase()));
            const matchesPrice = productPrice >= minValue && productPrice <= maxValue;
            const ramSpec = product.specs.find(spec => spec.includes('RAM'));

            // if (!ramSpec) {
            //     return false; // Exclude products without RAM
            // }
        
        
             //checkRAM
            const productRamValue = ramSpec ? parseInt (ramSpec.split(' ')[0]) : 0;

            const matchesRAM = selectedRAMs.length === 0 || selectedRAMs.some(ram => {
                if (ram === "1GB and Below") {
                    return productRamValue <= 1;
                } else if (ram === "6 GB and Above") {
                    return productRamValue >= 6;
                } else if (ram === "8 GB and Above") {
                    return productRamValue >= 8;
                } else if (ram === "Less than 512MB") {
                    return productRamValue < 0.5; 
                } else {
                    return productRamValue === parseInt(ram);
                }
            });

            //check ratings{
                const productRating = parseFloat(product.rating) || 0;
                const matchesRating = selectedRatings.length === 0 || selectedRatings.some(rating => {
                    // Directly compare the product rating against the selected rating thresholds
                    if (rating.trim() === "4★ & above") {
                        return productRating >= 4;
                    } else if (rating.trim() === "3★ & above") {
                        return productRating >= 3;
                    }
                    return false; // Default case if no match
                });

            return matchesBrand && matchesPrice && matchesRAM && matchesRating;
        });

        if(sortBy === "Price -- Low to High"){
            filteredProducts.sort((a,b) => {
                const priceA = parseInt(a.newPrice.replace(/[^0-9]/g, ''));
                const priceB = parseInt(b.newPrice.replace(/[^0-9]/g, ''));
                return priceA - priceB;
            })
        }else if(sortBy === "price -- High to low") {
            filteredProducts.sort((a,b) => {
                const priceA = parseInt(a.newPrice.replace(/[^0-9]/g, ''));
                const priceB = parseInt(b.newPrice.replace(/[^0-9]/g, ''));
                return priceB - priceA;
            });
        }
       
        currentPage = 1; // Reset to first page
        renderProducts(currentPage, filteredProducts);


        console.log(`Filtered Products Count: ${filteredProducts.length}`);

       
        if (filteredProducts.length > 0) {
            renderProducts(currentPage, filteredProducts);
            document.getElementById('no-phones-available').style.display = 'none';
           
        } else {
            renderProducts(currentPage, products);
            document.getElementById('product-repeat-container').innerHTML = ''; // Clear product container
            document.getElementById('no-phones-available').style.display = 'flex';

        }

    }

    
    ramCheckboxes.forEach(checkbox => {
        const ramSquare = checkbox.nextElementSibling; 

        checkbox.addEventListener('click', function() {
            const ramValue = this.closest('.gb4-text').getAttribute('title');

            if (selectedRAMs.includes(ramValue)) {
               
                ramSquare.classList.remove('active'); 
                checkbox.checked = false; 
                selectedRAMs = selectedRAMs.filter(r => r !== ramValue); 
            } else {
                
                ramSquare.classList.add('active'); 
                checkbox.checked = true; 
                selectedRAMs.push(ramValue); 
            }
            
          
            currentPage = 1;
            filterProducts();
        });
    });

    

    squares.forEach(square => {
        square.addEventListener('click', function() {
            const checkbox = this.previousElementSibling; 
            const brand = this.closest('.brand-list').getAttribute('title');

            console.log("Selected Brands after click:", selectedBrands);

            

            if (selectedBrands.includes(brand)) {
              
                square.classList.remove('active'); 
                checkbox.checked = false; 
                selectedBrands = selectedBrands.filter(b => b !== brand); 
            } else {
                
                square.classList.add('active'); 
                checkbox.checked = true; 
                selectedBrands.push(brand); 
            }

           
            currentPage = 1;
            filterProducts();

            
        });
    });

    const ratingSquares =document.querySelectorAll('.rsquare');
    ratingSquares.forEach(square => {
        square.addEventListener('click', function() {
            const checkbox = this.previousElementSibling; // Get the checkbox
            const dropdownText = this.closest('.dropdown-text');
            const ratingText = dropdownText ? dropdownText.querySelector('.strtext').innerText : null; // Get the rating text
    
            if (ratingText) {
                console.log("Selected Rating after click:", ratingText);
    
               
                if (selectedRatings.includes(ratingText)) {
                    square.classList.remove('active'); 
                    checkbox.checked = false;
                    selectedRatings = selectedRatings.filter(r => r !== ratingText); 
                } else {
                    square.classList.add('active'); 
                    checkbox.checked = true; 
                    selectedRatings.push(ratingText); 
                }
    
                currentPage = 1; 
                filterProducts(); 
            }
        });
    });

    minPriceSelect.addEventListener('change', filterProducts);
    maxPriceSelect.addEventListener('change', filterProducts);
});


//--------------------------------------------------------------------------------------------------------------------------------------
//===========================================================================================================================================================

async function fetchAndRenderProducts() {
    try {
        const response = await fetch('mobile.json'); 
        const productsData = await response.json();
        renderProductList(productsData);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function renderProductList(products) {
    const productContainer = document.getElementById('product-repeat-mob');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productHTML = `
            <div class="mobrepeat-container">
                <div>
                    <div class="mob1">
                        <div class="mob1-container">
                            <div style="display: flex; flex-direction: column;">
                                <div class="mob-repeat-content">
                                    <div class="mob1-img">
                                        <div class="mob-img-container">
                                            <img src="${product.image}" alt="${product.name}">
                                        </div>
                                    </div>
                                    <div class="mob1-info">
                                        <div class="mob1-name"><span>${product.name}</span></div>
                                        <div class="mob1-stars">
                                            <div class="star-review">
                                                <div class="star-review-container">
                                                    <div class="mstar">${product.rating}<img src="/assets/stars.svg" alt="Rating stars"></div>
                                                    <div class="review"><span>(${product.mrating})</span></div>
                                                </div>
                                            </div>
                                            <div class="mfassured">
                                                <img src="/assets/mfass.webp" alt="">
                                            </div>
                                        </div>
                                        <div class="off-price">
                                            <div class="off-price-container">
                                                <div class="off-price-content">
                                                    <div class="discount"><span>${product.discount}</span></div>
                                                </div>
                                            </div>
                                            <div class="mold-price"><span>${product.oldPrice}</span></div>
                                            <div class="mnew-price"><span>${product.newPrice}</span></div>
                                        </div>
                                        <div class="msave-extra"><span>Save extra with combo offers</span></div>
                                        <div class="mup-to"><div class="mup-to-text">${product.exchangeOffer}</div></div>
                                         <div class="delivery">
                                                <span>${product.delivery}</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="mheart">
                                    <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#fff" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="varient">View all Variants</div>
                </div>
            </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}


fetchAndRenderProducts();
