import React from 'react'
import './NextNav.css'
import "./DropDown.css"
const NextNav = () => {
  return (
    <div className='MainNextNav' style={{background:"#504F51"}} >
     <ul className='nav NextNavul' >
       <li  className='NextNavBackChange'>Sale</li>
       <li className='firstDrop'>New In 
          <div className='UnsderFirstDrop'>
               <div className='DeropText'>
                    <div >
                        <div className='dropHead'>NEW PRODUCTS</div>
                           <div className='productList'>
                              <div>View all</div>
                              <div>Clothing</div>
                              <div>Shoes</div>
                              <div>Accessories</div>
                              <div>Face + Body</div>
                              <div>Topman</div>
                              <div>Back in stock</div>
                              <div>Outlet</div>
                              <div>Trending now</div>
                           </div>
                        
                    </div>
                    <div className='EmptyDiv'> </div>

                    <div>
                         
                         <div className='DropImg'>
                               <div className='imgCardDrop'>
                                  <div>
                                  <img  className='DrapThreeImg' src="https://images.asos-media.com/products/asos-design-borg-puffer-jacket-in-sage-green/202454416-1-lightgreen?$n_320w$&wid=317&fit=constrain" alt="" />
                                  </div>
                                  <div className='dropCardName'>
                                    ASOS EXCLUSIVES
                                  </div>
                               </div>

                               <div className='imgCardDrop'>
                                  <div>
                                  <img  className='DrapThreeImg' src="https://images.asos-media.com/products/asos-design-oversized-hoodie-in-black-faux-fur/202755987-1-black?$n_320w$&wid=317&fit=constrain" alt="" />
                                  </div>
                                  <div className='dropCardName'>
                                    TRENDING CLOTH
                                  </div>
                               </div>

                                 <div className='imgCardDrop'>
                                  <div>
                                  <img  className='DrapThreeImg' src="https://images.asos-media.com/products/asos-dark-future-oversized-hoodie-in-polar-fleece-with-large-back-print-in-black/202507231-1-black?$n_320w$&wid=317&fit=constrain" alt="" />
                                  </div>
                                  <div className='dropCardName'>
                                  SELLING FAST
                                  </div>
                               </div>
                         </div>
                    </div>
               </div>
          </div>
       </li>

       <li className='SECDropLi'>Brands
           <div className='secDropDown'>
                 <div className='flexDropDown'>
                 <div className='secDropDownone'>
                      <div className='dropHead'>TOP BRANDS</div>
                       <div className='secDropDownoneDetails'>
                          <div>
                               <div className='AtoZ'>A-Z of brands</div>
                               <div>ASOS DESIGN</div>
                               <div>ASOS 4505</div>
                               <div>adidas</div>
                               <div>Bershka</div>
                               <div>Calvin Klein</div>
                               <div>COLLUSION</div>
                               <div>Designer Brands</div>
                               <div>Fred Perry</div>
                               <div>Jack & Jone</div>
                          </div>
                          <div>
                                <div>Levi's</div>
                                <div>New Look</div>
                                <div>Nike</div>
                                <div>Polo Ralph Lauren</div>
                                <div>Reclaimed Vintage</div>
                                <div>River Island</div>
                                <div>The North Face</div>
                                <div>Topman</div>
                                <div>Vans</div>
                          </div>
                       </div>
                 </div>

                 <div className='linehr'></div>

                 <div className='secDropDownTwo'>
                      <div className='secDropDownTwocard'>
                          <div className='imgCardDropsecond'>
                              <div><img className='DropSecimg' src="https://images.asos-media.com/navigation/mw_asosbrandsblackfriday_3wl_1777489?&$n_320w$" alt="" /></div>
                              <div className='dropCardNamesec'>ASOS BRANDS</div>
                          </div>
                          <div className='imgCardDropsecond'>
                              <div><img className='DropSecimg' src="https://images.asos-media.com/navigation/mw_gbl_brands_collusion_flo_112489228_3WL?&$n_320w$" alt="" /></div>
                              <div className='dropCardNamesec'>COLLUSION</div>
                          </div>
                         
                      </div>

                              
                      <div className='linehrsec'></div>

                      <div  className='secDropDownTwocard'>
                               <div className='imgCardDropsecond'>
                                  <div><img className='DropSecimg' src="https://images.asos-media.com/navigation/mw_brands_designerbrands_3wl_113480853?&$n_320w$" alt="" /></div>
                                  <div className='dropCardNamesec'>DESIGNER BRANDS</div>
                              </div>
                              <div className='imgCardDropsecond'>
                                  <div><img className='DropSecimg' src="https://images.asos-media.com/navigation/mw_gbl_brands_plussizebrands_3WL_1815102?&$n_320w$" alt="" /></div>
                                  <div className='dropCardNamesec'>PLUS SIZE BRANDS</div>
                              </div>
                      </div>
                 </div>
                 </div>
           </div>
       </li>
       <li>Clothing</li>
       <li>Dresses</li>
       <li>Shoes</li>
       <li>Sportswear</li>
       <li>Accessories</li>
       <li>Summer</li>
       <li>Trending Now</li>
       <li>Top shop</li>
       <li>Face + Beuty</li>
       <li className='NextNavBackChange'>Outlet</li>
       <li>Marketplace</li>
       <li>Marketplace</li>
     </ul>
    </div>
  )
}

export default NextNav