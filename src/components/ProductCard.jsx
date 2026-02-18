function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h4>{product.title}</h4>

      <p className="price">₹{product.price}</p>
      <p className="offer">{product.offer}</p>

      <div className="card-buttons">
        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>

        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
