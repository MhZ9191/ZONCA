import { useState } from "react";
import "../assets/css/product.css";
import { products, types } from "../assets/data/Data";
import CardProduct from "../components/CardProduct";

export default function ProductPage() {
  const [filter, setFilter] = useState(products);
  const [filterColor, setFilterColor] = useState("all");

  const handleFilter = (el) => {
    const current = el.target.textContent.toLowerCase();
    setFilterColor(current);
    const resetArr = [...products];
    if (current.toLowerCase() === "all") {
      setFilter(resetArr);
    } else {
      setFilter(resetArr.filter((el) => el.type === current));
    }
  };

  return (
    <>
      <main>
        <section className="product-section">
          <div className="product-top-div">
            {/* <h1>PRODUCTS</h1> */}
            <div className="product-types">
              {types.map((el) => {
                return (
                  <span
                    className={filterColor === el ? "active-color" : ""}
                    name={el}
                    onClick={(e) => handleFilter(e)}
                  >
                    {el.toUpperCase()}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="product-div">
            {filter.map((el) => {
              return <CardProduct key={el.name} el={el}></CardProduct>;
            })}
          </div>
        </section>
      </main>
    </>
  );
}
