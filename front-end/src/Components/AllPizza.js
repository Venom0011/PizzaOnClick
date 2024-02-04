import React from "react";
import pizza1 from "../assests/images/product_3.1.png";
import "../style/AllPizza.css";
function AllPizza() {
  return (
    <>
      <div className="container">

      <div className="col-lg-12 md-12">
            <h2 className="text-center mb-5">Hot Pizza</h2>
          </div>
        <div className="row row-cols-1 row-cols-md-3">
          
          
          <div className="col mb-4">
            < div className="card ">
            
                <img src={pizza1} className="card-img mx-auto d-block" alt="..." />
    
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="price">₹110 </span>
                <button className="add_to_cart">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card ">
              <img src={pizza1} className="card-img mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
              <span className="price">₹110 </span>
                <button className="add_to_cart ">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card ">
              <img src={pizza1} className="card-img mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
              <span className="price">₹110 </span>
                <button className="add_to_cart">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card ">
              <img src={pizza1} className="card-img mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
              <span className="price">₹110 </span>
                <button className="add_to_cart">Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="view-more"> View more <span><i class="ri-arrow-right-line"></i></span> </button>
        </div>

      </div>
    </>
  );
}

export default AllPizza;
