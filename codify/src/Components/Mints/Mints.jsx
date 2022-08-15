import React from 'react'
import "./Mints.css"

function Mints() {
  return (
    <div>
         <section class="mintsect">
      <div class="container-fluid">
      <h1 class="featurette-heading p-4">Mint</h1>
        <div class="row featurette">
          <div class="col-md-6 order-md-2">
            <div class="quantity">
              <div class="inputf">
                <input  type="text" id="calbox" value="1" />
              </div>
              <div class="top_div_here d-flex flex-column">
                <div class="btn-area1 mt-5 d-flex flex-row justify-content-center gap-3">
                  <button class="btn3 btn-box "><span class="">Mint With BNB</span></button>
                  <p class="fs-4 ">Price : 0 BNB</p>
                  
                </div>
                <div class="btn-area1 mt-5 d-flex flex-row justify-content-center gap-3">
                  <button class="btn3 btn-box">Mint With WHE</button>
                  <p class="fs-4">Price : 0 WHE</p>
                </div>
                <div class="btn2-area1 mt-5 d-flex flex-row justify-content-center gap-3">
                  <button class="btn3 btn-box">Mint With Busd</button>
                  <p class="fs-4">Price : 0 BUSD</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 order-md-1">
            <div class="imgcontainer">
            <img src="images/bgremove.png" width="300" height="auto" alt="" />
              
            {/* <img src="images/Lion(2).png" width="55%" height="85%"  alt="??" /> */}
              {/* <img src="./images/Lion.png" alt="Wait for Internet"width="55%" height="85%" /> */}
            </div>
          </div>
        </div>
      </div>
      <div class="para1 row">
        <h4 class="hed mt-4">CRYPTOCURRENCIES</h4>
        <h1 class="featurette-heading1 fs-1 mt-1 text-light mb-5">Top Cryptocurrencies</h1>
      </div>

      <div class="container row d-inline-flex justify-content-center gap-3  mt-3  mb-5 me-5">
                <div class="banner1 d-flex col-lg-4 col-md-8">
                    <div class="d-flex justify-content-center align-items-center">

                  
                    <img src="images/logo1.png" width="100" height="auto" alt="" />

                    </div>
                    <div class="d-flex justify-content-center flex-column ps-5">
                        <h3 class=" fs-5 text-center">Binance Coin</h3>
                        <h2 class="fs-5 text-center">USD 268.002 </h2>
                    </div>
                </div>
                <div class="banner2 d-flex col-lg-4 col-md-8 py-3 ">
                    <div class="d-flex justify-content-center align-items-center">

                        <img src="images/bnb.png" width="100" height="auto" alt=""/>
                    

                    </div>
                    <div class="d-flex justify-content-center align-items-center flex-column ps-5">
                        <h3 class=" fs-5 text-center">WHE</h3>
                        <h2 class=" fs-5 text-center">USD 0.0002 </h2>
                    </div>

                </div>
            </div>
           </section>

    </div>
  )
}

export default Mints