import { Link } from "react-router";

export default function CardProduct({ el }) {
  return (
    <div className="product-card">
      <Link to={"/products/" + el.slug}>
        <img src={el.image} alt={el.name} />
        <div>
          <div>{el.name.toUpperCase()}</div>
          <div>{el.design}</div>
        </div>
      </Link>
    </div>
  );
}
