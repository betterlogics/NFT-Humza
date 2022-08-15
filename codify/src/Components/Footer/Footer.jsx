import React from "react";
import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="Footer text-center text-lg-start text-white ">
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="d-flex align-items-center justify-content-center mb-4 ">
                <img src="images/logo1.png" className="m-0" height="70" alt="" />
              </div>
              <ul className="list-unstyled d-flex flex-row justify-content-center gap-3">
                <li className=" mb-2">
                  <a className="linksi px-1 pb-1">
                    <TiSocialFacebook />
                  </a>
                </li>
                <li className="mb-2">
                  <a className="linksi px-1 pb-1">
                    <TiSocialTwitter />
                  </a>
                </li>
                <li className="mb-2">
                  <a className="linksi px-1 pb-1">
                    <TiSocialInstagram />
                  </a>
                </li>
                <li className=" mb-2">
                  <a className="linksi px-1 pb-1">
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h1 className="head2 featurette-heading mb-3 text-light ps-1">
                Quick links
              </h1>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a className="links" href="#">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a className="links" href="#">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="links" href="#">
                    Benefits
                  </a>
                </li>
                <li className="mb-2">
                  <a className="links" href="#">
                    Collect
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h1 className="head2 featurette-heading mb-3 text-light ps-1">
                Marketplace
              </h1>

              <ul className="list-unstyled">
                <ul className="list-unstyled ">
                  <li className="mb-2">
                    <a className="links" href="roadmap.html">
                      Roadmap
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="links" href="Mint.html">
                      Mint
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="links" href="privacy.html">
                      Privacy and Policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="links" href="terms.html">
                      Terms&Conditions
                    </a>
                  </li>
                </ul>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h1 className="head2 featurette-heading mb-3 text-light ps-1">
                AboutUs
              </h1>
              <p className="fs-5 lead ">
                Metaverse is a wide new world with endless possibilities and new
                experiences, and our WHE Club is the key to unlocking this
                world.
              </p>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
      )
       }
      
      export default Footer