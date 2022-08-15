import React from "react";
import "./Second.css";
function Second() {
  return (
    <div>
      <div class="Paragraph">
        <div class="row featurette ps-lg-5">
          <div class="col-md-7">
            <h1 class="display-2 ps-3">
              Welcome To <span class="fonth">WHE NFT</span>
            </h1>
            <p class="ms-lg-5 ms-md-0 para1">
              An exclusive private-members club by Swap. Swap NFTs in a
              decentralized environment, with an escrow mechanism facilitating
              swaps between users. On WHE NFT, every swap is resolved to the
              full satisfaction of participants.
            </p>
            <p class="ms-lg-5 ms-md-0 para1">
              A private and unique collection of 10000 NFT, which act as a
              membership for the WHE Club. WHE is next-generation decentralized
              NFT platform for all types of marketplaces catering to the growing
              world of digital artists, creators, and collectors. WHE NFT wants
              to be the first truly community-run marketplace and believes that
              the diversity will make it an eccent ric and truly one-of-a-kind
              project in the world
            </p>
          </div>
          <div class="col d-flex justify-content-center my-5">
            <section class="three-d-container">
              <input
                type="radio"
                checked
                class="three-d-bullet a"
                name="three-d"
              />
              <input type="radio" class="three-d-bullet b" name="three-d" />
              <input type="radio" class="three-d-bullet c" name="three-d" />
              <input type="radio" class="three-d-bullet d" name="three-d" />
              <input type="radio" class="three-d-bullet e" name="three-d" />
              <input type="radio" class="three-d-bullet f" name="three-d" />
              <div class="three-d-cube">
                <figure class="three-d-item">
                  <img src="images\lion.png" alt="" />
                </figure>
                <figure class="three-d-item">
                  <img src="images\lion1.png" alt="" />
                </figure>
                <figure class="three-d-item">
                  <img src="images\lion2.png" alt="" />
                </figure>
                <figure class="three-d-item">
                  <img src="images\lion3.png" alt="" />
                </figure>
                <figure class="three-d-item">
                  <img src="images\lion.png" alt="" />
                </figure>
                <figure class="three-d-item">
                  <img src="images\lion2.png" alt="" />
                </figure>
                <figure class="three-d-item">
                  <img src="images\lion1.png" alt="" />
                </figure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
