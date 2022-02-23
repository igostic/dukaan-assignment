import React from "react";
import PrivacyPolicy from "../icons/PrivacyPolicy.svg";
import TermsAndConditions from "../icons/TermsAndConditions.svg";
import domainNameGen from "../icons/domainNameGen.svg";
import InvGenIcon from "../icons/InvoiceGen.svg";

const ProductCards = () => {
  return (
    <div className="bk-white">
      <div className="container">
        <div className="py80 slogan-mobile">
          <h2 className="section-header all-product">
            Try our other free products
          </h2>
          <div className="all-products">
            <div className="row">
              <div className="col-md-4 col-xs-12 product-item">
                <img
                  src={PrivacyPolicy}
                  alt="Privacy Policy Generator"
                  className="mb16"
                />
                <h4 className="mb4">Privacy Policy Generator</h4>
                <p>Generate free Privacy Policy statements for your website.</p>
              </div>
              <div className="col-md-4 col-xs-12 product-item">
                <img
                  src={TermsAndConditions}
                  alt="Terms and Conditions Generator"
                  className="mb16"
                />
                <h4 className="mb4">Terms and Conditions Generator</h4>
                <p>
                  Generate free Terms and Conditions statements for your
                  website.
                </p>
              </div>
              <div className="col-md-4 col-xs-12 product-item">
                <img
                  src={domainNameGen}
                  alt="Domain Name Generator"
                  className="mb16"
                />
                <h4 className="mb4">Domain Name Generator</h4>
                <p>
                  Stock your store with 100s of products and start selling to
                  customers in minutes, without the hassle of inventory or
                  packaging.
                </p>
              </div>
              <div className="col-md-4 col-xs-12 product-item">
                <img
                  src={InvGenIcon}
                  alt="Invoice Generator"
                  className="mb16"
                />
                <h4 className="mb4">Invoice Generator</h4>
                <p>
                  Stock your store with 100s of products and start selling to
                  customers in minutes, without the hassle of inventory or
                  packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
