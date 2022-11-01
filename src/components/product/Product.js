import React from "react";
import "./Product.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import gown from "../../assets/gown1.jpg";

const Product = () => {
  return (
    <>
      <header className="--bg-dark">
        <nav className="container">
          <h2 className="--text-md --text-light --py2">
            Djole <span>Shop</span>
            <AiOutlineShoppingCart color="orangered" size={30} />
          </h2>
        </nav>
      </header>
      <section>
        <div className="container product --flex-start --flex-dir-column">
          <div className="product-image --text-center --card --mr">
            <img src={gown} alt="dress" />
          </div>
          <div className="product-desc">
            <h3 className="--text-md --color-danger">Sleek Wedding Gown</h3>
            <p className="--fw-bold">$95 USD</p>
            <p className="--text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              laboriosam voluptatem distinctio recusandae illum voluptate in?
              Blanditiis reprehenderit nihil debitis sapiente nesciunt dolore
              nostrum aut soluta quasi minima, fugiat expedita. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec id ultricies
              massa. Pellentesque habitant morbi tristique senectus et netus et

              
            </p>
            <form>
                <div className="--form-control --flex-start my2">
                    <label>Color</label>
                    <select>
                        <option>Choose an option</option>
                        <option>White</option>
                        <option>Milk</option>
                        <option>Sky blue</option>
                    </select>
                </div>

                <div className="--form-control --flex-start my2">
                    <label>Size</label>
                    <select>
                        <option>Choose an option</option>
                        <option>24</option>
                        <option>26</option>
                        <option>28</option>
                    </select>
                </div>

                <div className="--form-control --flex-start my2">
                    <label>Quantity</label>
                    <select>
                        <option>Choose an option</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <button className="--btn --btn-primary --btn-block">
                    Add To Cart
                </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
