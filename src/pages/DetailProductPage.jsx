import { useParams } from "react-router";
import "../assets/css/detailProduct.css";
import { useEffect } from "react";
import { useState } from "react";
import { products } from "../assets/data/Data";

export default function DetailProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(products.find((el) => el.slug === slug));
  }, []);

  return (
    <>
      <main>
        <section className="detail-section">
          <div className="detail-div">
            <div className="detail-info-div">
              <div>
                <h1>{product && product.name.toUpperCase()}</h1>
              </div>
              <div className="detail-description">
                {product &&
                  product.description.map((el, i) => {
                    return <p key={i}>{el.toUpperCase()}</p>;
                  })}
              </div>
              <div>
                {product &&
                  product.production.map((el, i) => {
                    return <p key={i}>{el}</p>;
                  })}
              </div>
              {product && <div>{product?.extra}</div>}
              <div>
                {product &&
                  product.handcrafted.map((el, i) => {
                    return <p key={i}>{el}</p>;
                  })}
              </div>
              <div>
                {product && (
                  <span>
                    cm H:{product.height} W:{product.width} D:{product.depth}
                  </span>
                )}
              </div>
            </div>
            {/* IMMAGINI */}
            {product &&
              product.imgs.map((el, i) => {
                return (
                  <div key={i} className="detail-img-div">
                    <img
                      src={`${import.meta.env.BASE_URL}${el}`}
                      alt={"image-" + el}
                    />
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
